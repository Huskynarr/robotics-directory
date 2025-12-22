#!/usr/bin/env python3
import csv
import os
import os.path
from pathlib import Path

def read_csv(file_path):
    """Read a CSV file and return its contents as a list of dictionaries"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            return list(reader)
    except FileNotFoundError:
        return []

def write_csv(file_path, data, fieldnames):
    """Write data to a CSV file"""
    with open(file_path, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(data)

def merge_robots(robots_from_main, existing_robots, key_fields=('manufacturer', 'model')):
    """Merge robots from main data.csv with existing category CSV files
    
    Prioritizes data from main file, but keeps existing robots not in main file.
    """
    # Create a lookup dictionary of existing robots
    existing_lookup = {}
    for robot in existing_robots:
        # Create a unique key using manufacturer and model
        key = tuple(robot.get(field, '').lower() for field in key_fields)
        existing_lookup[key] = robot
    
    # Start with robots from main file
    merged = list(robots_from_main)
    merged_keys = set(tuple(robot.get(field, '').lower() for field in key_fields) 
                      for robot in robots_from_main)
    
    # Add existing robots that are not in the main file
    for robot in existing_robots:
        key = tuple(robot.get(field, '').lower() for field in key_fields)
        if key not in merged_keys:
            merged.append(robot)
    
    # Check image existence for all robots
    for robot in merged:
        if not robot.get('image'):
            continue
            
        # Get the image path from the robot data
        image_path = robot['image']
        
        # Normalize path separators to forward slashes
        image_path = image_path.replace('\\', '/')
        
        # If the path contains 'images/', extract the relative path
        if 'images/' in image_path.lower():
            # Extract the relative path from images/
            rel_path = image_path[image_path.lower().find('images/') + 7:]
        else:
            rel_path = image_path.lstrip('/')
        
        # Build the full path to check (using pathlib for cross-platform compatibility)
        full_path = Path('images') / rel_path
        
        # Check if the image exists (case-insensitive)
        if full_path.exists():
            # Keep the original path if the image exists
            robot['image'] = str(Path('images') / rel_path).replace('\\', '/')
        else:
            # Try to find a matching file (case-insensitive)
            parent_dir = full_path.parent
            if parent_dir.exists():
                # Get all files in the directory
                try:
                    files = [f.name for f in parent_dir.iterdir() if f.is_file()]
                    # Look for a matching filename (case-insensitive)
                    filename = full_path.name.lower()
                    matching_files = [f for f in files if f.lower() == filename]
                    
                    if matching_files:
                        # Found a matching file with different case
                        robot['image'] = str(Path('images') / rel_path.parent / matching_files[0]).replace('\\', '/')
                        print(f"Found matching file with different case: {robot['image']}")
                    else:
                        # No match found, use fallback
                        print(f"Image not found: {full_path}, using fallback image")
                        robot['image'] = 'images/image-not-found.webp'
                except Exception as e:
                    print(f"Error checking files in {parent_dir}: {e}")
                    robot['image'] = 'images/image-not-found.webp'
            else:
                # Directory doesn't exist, use fallback
                print(f"Directory not found: {parent_dir}, using fallback image")
                robot['image'] = 'images/image-not-found.webp'
    
    return merged

def main():
    print("Generating category-specific CSV files...")
    
    # Create the data directory if it doesn't exist
    if not os.path.exists('data'):
        os.makedirs('data')
    
    # Read the main data.csv file
    main_robots = read_csv('data.csv')
    
    # Group robots by category
    robots_by_category = {}
    for robot in main_robots:
        category = robot['category']
        if category not in robots_by_category:
            robots_by_category[category] = []
        robots_by_category[category].append(robot)
    
    # Get all possible fieldnames from data.csv
    all_fieldnames = set()
    for robot in main_robots:
        all_fieldnames.update(robot.keys())
    
    # Create or update a CSV file for each category
    for category, category_robots in robots_by_category.items():
        output_file = f'data/{category}.csv'
        
        # Read existing category file if it exists
        existing_robots = read_csv(output_file)
        
        # Update fieldnames to include any from existing files
        for robot in existing_robots:
            all_fieldnames.update(robot.keys())
        
        # Merge robots from main data with existing category data
        merged_robots = merge_robots(category_robots, existing_robots)
        
        # Ensure all robots have all fields (with empty values if needed)
        for robot in merged_robots:
            for field in all_fieldnames:
                if field not in robot:
                    robot[field] = ''
        
        # Write the merged data
        write_csv(output_file, merged_robots, list(all_fieldnames))
        print(f"Generated {output_file} with {len(merged_robots)} robots")
    
    print("All category CSV files have been generated successfully!")

if __name__ == "__main__":
    main() 

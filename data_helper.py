#!/usr/bin/env python3
"""
Helper script for managing robot data in the Robotics Directory.
This script helps identify missing information and provides a framework for data enrichment.
"""

import csv
import sys
from collections import defaultdict

def read_csv(file_path):
    """Read a CSV file and return its contents as a list of dictionaries"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            return list(reader)
    except FileNotFoundError:
        print(f"Error: File {file_path} not found")
        return []

def analyze_data_completeness(robots):
    """Analyze the completeness of robot data"""
    important_fields = [
        'manufacturer', 'model', 'price', 'weight', 'batteryLife',
        'website', 'image', 'video'
    ]
    
    stats = {
        'total': len(robots),
        'missing_video': 0,
        'missing_image': 0,
        'placeholder_image': 0,
        'missing_weight': 0,
        'missing_battery': 0,
        'missing_website': 0,
        'missing_price': 0,
    }
    
    robots_needing_attention = []
    
    for robot in robots:
        needs_attention = False
        missing_fields = []
        
        # Check video
        if not robot.get('video') or robot['video'].strip() == '':
            stats['missing_video'] += 1
            missing_fields.append('video')
            needs_attention = True
        
        # Check image
        image = robot.get('image', '')
        if not image or image.strip() == '':
            stats['missing_image'] += 1
            missing_fields.append('image')
            needs_attention = True
        elif 'image-not-found' in image or 'placeholder' in image:
            stats['placeholder_image'] += 1
            missing_fields.append('real_image')
            needs_attention = True
        
        # Check other important fields
        if not robot.get('weight') or robot['weight'].strip() == '':
            stats['missing_weight'] += 1
            missing_fields.append('weight')
        
        if not robot.get('batteryLife') or robot['batteryLife'].strip() == '':
            stats['missing_battery'] += 1
            missing_fields.append('batteryLife')
        
        if not robot.get('website') or robot['website'].strip() == '' or robot['website'] == 'N/A':
            stats['missing_website'] += 1
            missing_fields.append('website')
        
        if not robot.get('price') or robot['price'].strip() == '':
            stats['missing_price'] += 1
            missing_fields.append('price')
            needs_attention = True
        
        if needs_attention:
            robots_needing_attention.append({
                'manufacturer': robot.get('manufacturer', ''),
                'model': robot.get('model', ''),
                'category': robot.get('category', ''),
                'missing_fields': missing_fields
            })
    
    return stats, robots_needing_attention

def print_statistics(stats):
    """Print data completeness statistics"""
    print("\n" + "="*60)
    print("ROBOT DATA COMPLETENESS REPORT")
    print("="*60)
    print(f"\nTotal Robots: {stats['total']}")
    print(f"\nMissing/Incomplete Data:")
    print(f"  - Videos: {stats['missing_video']} ({stats['missing_video']/stats['total']*100:.1f}%)")
    print(f"  - Images (missing): {stats['missing_image']} ({stats['missing_image']/stats['total']*100:.1f}%)")
    print(f"  - Images (placeholder): {stats['placeholder_image']} ({stats['placeholder_image']/stats['total']*100:.1f}%)")
    print(f"  - Weight: {stats['missing_weight']} ({stats['missing_weight']/stats['total']*100:.1f}%)")
    print(f"  - Battery Life: {stats['missing_battery']} ({stats['missing_battery']/stats['total']*100:.1f}%)")
    print(f"  - Website: {stats['missing_website']} ({stats['missing_website']/stats['total']*100:.1f}%)")
    print(f"  - Price: {stats['missing_price']} ({stats['missing_price']/stats['total']*100:.1f}%)")
    print("="*60)

def print_robots_needing_attention(robots, limit=20):
    """Print robots that need attention"""
    print(f"\n\nROBOTS NEEDING ATTENTION (showing first {limit}):")
    print("="*60)
    
    for i, robot in enumerate(robots[:limit], 1):
        print(f"\n{i}. {robot['manufacturer']} - {robot['model']} ({robot['category']})")
        print(f"   Missing: {', '.join(robot['missing_fields'])}")
    
    if len(robots) > limit:
        print(f"\n... and {len(robots) - limit} more robots")

def generate_data_entry_template():
    """Generate a template for adding new robots"""
    template = """
# Robot Data Entry Template
# Copy this template and fill in the information for each new robot

manufacturer,model,category,price,weight,batteryLife,hands,website,image,ipRating,maxRuntime,payload,speed,terrain,purpose,size,features,ageGroup,interactionType,learningFocus,connectivity,video
ExampleCorp,Robot X1,humanoid,50000 USD,45 kg,4 hours,Articulated hands,https://example.com,images/humanoid/robotx1.jpg,,,,,,,,,,,,,https://youtu.be/VIDEOID

# Categories: humanoid, robodog, table, entertainment, educational, household, vacuum
# Required fields: manufacturer, model, category, price, website
# Important fields: image, video, weight, batteryLife
# Category-specific fields:
#   - humanoid: hands
#   - robodog: ipRating, maxRuntime, payload, speed, terrain
#   - table/household/entertainment/educational/vacuum: features, purpose, connectivity, ageGroup
"""
    
    with open('robot_data_template.txt', 'w', encoding='utf-8') as f:
        f.write(template)
    
    print("\n\n✅ Robot data entry template created: robot_data_template.txt")

def suggest_data_sources():
    """Suggest sources for finding robot information"""
    print("\n\n" + "="*60)
    print("SUGGESTED DATA SOURCES FOR ROBOT INFORMATION")
    print("="*60)
    print("""
1. Manufacturer Websites:
   - Official product pages usually have complete specifications
   - Look for press releases and product announcements

2. YouTube Videos:
   - Search: "[Robot Name] official"
   - Search: "[Robot Name] demo"
   - Search: "[Manufacturer] [Robot Name] reveal"

3. Robot Databases:
   - robotics.org
   - IEEE Spectrum Robotics
   - TechCrunch Robotics

4. Product Reviews:
   - Tech review websites
   - YouTube review channels
   - Reddit r/robotics

5. Images:
   - Manufacturer press kits (often high quality)
   - Product pages
   - Official YouTube video thumbnails
   - Google Images (ensure proper licensing)

IMPORTANT: Always verify information accuracy and respect copyright/licensing.
""")

def main():
    print("Robot Data Helper Tool")
    print("="*60)
    
    # Read the main data file
    robots = read_csv('data.csv')
    
    if not robots:
        print("No data found. Please ensure data.csv exists.")
        return
    
    # Analyze data completeness
    stats, robots_needing_attention = analyze_data_completeness(robots)
    
    # Print statistics
    print_statistics(stats)
    
    # Print robots needing attention
    print_robots_needing_attention(robots_needing_attention, limit=30)
    
    # Generate template
    generate_data_entry_template()
    
    # Suggest data sources
    suggest_data_sources()
    
    print("\n" + "="*60)
    print("NEXT STEPS:")
    print("="*60)
    print("""
1. Review the robots listed above and prioritize which to update
2. Use the suggested data sources to find missing information
3. Use robot_data_template.txt as a guide for adding new robots
4. Update data.csv with the new information
5. Run: python generate_category_csvs.py
6. Test the website locally before committing changes

For questions or assistance, refer to ROBOT_DATA_MAINTENANCE.md
""")

if __name__ == "__main__":
    main()

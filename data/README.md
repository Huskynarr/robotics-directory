# Robot Data CSV Files

This directory contains CSV files with robot data organized by category. These files are used by the Robotics Directory website to display information about various robots.

## File Structure

Each CSV file follows this naming pattern: `[category].csv`, where `[category]` is one of:

- `humanoid.csv` - Humanoid robots
- `robodog.csv` - Robot dogs
- `table.csv` - Table robots
- `entertainment.csv` - Entertainment robots
- `educational.csv` - Educational robots
- `household.csv` - Household robots
- `vacuum.csv` - Vacuum robots

## CSV Format

Each CSV file contains the following common fields:

- `manufacturer` - The robot manufacturer
- `model` - The robot model name
- `price` - Price information
- `weight` - Weight information
- `batteryLife` - Battery life information
- `website` - URL to the official website
- `image` - Path to the robot's image

Depending on the category, additional fields may be present.

## How to Add New Robots

1. To add a new robot, add a new row to the appropriate category CSV file.
2. Ensure all required fields are filled with accurate information.
3. If adding an image, place it in the corresponding `images/[category]/` directory.

## Automatic Generation

These CSV files are maintained using the `generate_category_csvs.py` script, which reads from the main `data.csv` file and merges with existing data in the category-specific CSV files.

## Note for GitHub Pages

These files are used by the website for GitHub Pages. Modifications to these files will be reflected on the website after deployment. 
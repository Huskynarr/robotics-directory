# Robot Data Maintenance Guide

This guide explains how to maintain the robot data for the Robotics Directory website.

## Directory Structure

- `data/` - Contains CSV files for each robot category
- `images/` - Contains robot images organized by category
- `data.csv` - Main data file with all robots

## How It Works

The website uses category-specific CSV files from the `data/` directory to display robot information. These files are:

- `data/humanoid.csv`
- `data/robodog.csv`
- `data/table.csv`
- `data/entertainment.csv`
- `data/educational.csv`
- `data/household.csv`
- `data/vacuum.csv`

## Updating Robot Data

### Option 1: Edit Category CSV Files Directly

You can directly edit the CSV files in the `data/` directory to update robot information or add new robots.

### Option 2: Update Main Data File and Generate Category Files

1. Edit the main `data.csv` file to add or update robot information
2. Run the Python script to update category-specific CSV files:

```
python generate_category_csvs.py
```

This script will:
- Read data from `data.csv`
- Merge it with existing data in category CSV files
- Update all category CSV files while preserving robots not in the main file

### Update SEO Index

After updating `data.csv`, regenerate the on-page robot index and JSON-LD:

```
python generate_seo_index.py
```

## Robot Image Guidelines

1. Place robot images in the appropriate category subfolder:
   - `images/humanoid/`
   - `images/robodog/`
   - `images/table/`
   - `images/entertainment/`
   - `images/educational/`
   - `images/household/`
   - `images/vacuum/`

2. Name the images consistently (e.g., `modelname.jpg`)

3. Reference the image path in the CSV file (e.g., `images/category/modelname.jpg`)

## GitHub Pages Deployment

After updating the robot data:

1. Commit your changes to the repository
2. Push to GitHub
3. GitHub Actions will automatically deploy the updated website to GitHub Pages

The website will load the category CSV files directly from the `data/` directory.

## Troubleshooting

If robots are not appearing on the website:

1. Check that the CSV files have the correct format
2. Verify that image paths are correct
3. Ensure the robot has all required fields (manufacturer, model, etc.)
4. Check browser console for JavaScript errors 

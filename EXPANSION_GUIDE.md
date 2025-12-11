# Robot Database Expansion Guide

This guide helps expand the Robotics Directory with new robots and complete missing information.

## Current Status

**Note**: Run `python3 data_helper.py` to get the current status. The numbers below are from the initial analysis:

- **Total Robots**: 103 (as of initial analysis)
- **Missing Videos**: 55 (53.4%)
- **Placeholder Images**: 67 (65%)
- **Target**: ~200 robots (approximately double the current count)

## Quick Start

1. Run the data helper script to see what needs attention:
   ```bash
   python3 data_helper.py
   ```

2. This will generate:
   - A completeness report
   - List of robots needing attention
   - A data entry template (`robot_data_template.txt`)

## Adding New Robots

### Step 1: Research Robot Categories

Focus on these categories to maintain balance:
- Humanoid robots (30-40 entries)
- Robot dogs/quadrupeds (15-20 entries)
- Household robots (20-25 entries)
- Vacuum robots (15-20 entries)
- Educational robots (10-15 entries)
- Entertainment robots (10-15 entries)
- Table/companion robots (5-10 entries)

### Step 2: Find Robot Information

**Recommended Sources:**

1. **Manufacturer Websites**
   - Look for product catalogs
   - Check "Products" or "Solutions" pages
   - Review press releases

2. **Industry Databases**
   - [IEEE Spectrum Robotics](https://robots.ieee.org/)
   - [Robotics Business Review](https://www.roboticsbusinessreview.com/)
   - [The Robot Report](https://www.therobotreport.com/)

3. **Trade Shows & Events**
   - CES announcements
   - ICRA (International Conference on Robotics and Automation)
   - RoboBusiness
   - IROS (Intelligent Robots and Systems)

4. **YouTube Channels**
   - Manufacturer channels
   - Tech review channels (Marques Brownlee, Linus Tech Tips, etc.)
   - Robotics news channels

### Step 3: Collect Required Information

**Required Fields:**
- `manufacturer` - Company name
- `model` - Robot model name
- `category` - One of: humanoid, robodog, table, entertainment, educational, household, vacuum
- `price` - Price with currency (e.g., "50000 USD", "On request", "Not disclosed")
- `website` - Official product or manufacturer website

**Highly Recommended:**
- `video` - YouTube URL (any format: watch?v=, youtu.be/, or video ID)
- `image` - Path to robot image (e.g., `images/category/robotname.jpg`)
- `weight` - Weight with unit (e.g., "45 kg")
- `batteryLife` - Battery life (e.g., "4 hours", "2-3 hours")

**Category-Specific Fields:**

**Humanoid:**
- `hands` - Description of hands/manipulators

**Robodog:**
- `ipRating` - IP rating (e.g., "IP54", "IP67")
- `maxRuntime` - Max runtime (e.g., "90 min")
- `payload` - Payload capacity (e.g., "14 kg")
- `speed` - Maximum speed (e.g., "1.6 m/s")
- `terrain` - Terrain capabilities

**Table/Household/Entertainment/Educational/Vacuum:**
- `features` - Key features
- `purpose` - Primary purpose
- `connectivity` - Connectivity options (e.g., "Wi-Fi", "Bluetooth")
- `ageGroup` - Target age group (for educational/entertainment)

### Step 4: Add Data to CSV

1. Open `data.csv` in a text editor or spreadsheet program
2. Add a new row with the robot information
3. Ensure all commas are properly escaped
4. Save the file

**Example Entry:**
```csv
humanoid,Acme Robotics,RoboHelper Pro,75000 USD,50 kg,5 hours,Articulated fingers,https://acmerobotics.com/robohelper,images/humanoid/robohelper.jpg,,,,,,,,,,,,,https://youtu.be/abc123
```

### Step 5: Add Robot Images

1. Find or download a high-quality image of the robot:
   - Manufacturer press kits (best quality)
   - Official product pages
   - YouTube video thumbnails
   - **Always respect copyright and licensing**

2. Save images in the appropriate category folder:
   - `images/humanoid/`
   - `images/robodog/`
   - `images/table/`
   - `images/entertainment/`
   - `images/educational/`
   - `images/household/`
   - `images/vacuum/`

3. Use descriptive filenames: `manufacturer-model.jpg` or `model.jpg`

4. Recommended image specifications:
   - Format: JPG or PNG
   - Size: 800x600 pixels minimum
   - Quality: Medium to high (not too large)

### Step 6: Update Category Files

After adding new entries to `data.csv`, run:

```bash
python3 generate_category_csvs.py
```

This will update all category-specific CSV files.

### Step 7: Test Locally

1. Start a local web server:
   ```bash
   python3 -m http.server 8000
   ```

2. Open http://localhost:8000 in your browser

3. Verify:
   - New robots appear in the correct category
   - Images load correctly
   - Videos embed properly in the modal
   - All information displays correctly

### Step 8: Commit and Push

```bash
git add data.csv data/ images/
git commit -m "Add [number] new robots to [categories]"
git push
```

## Completing Missing Information

### Finding Videos for Existing Robots

1. Run `python3 data_helper.py` to see which robots need videos

2. Search YouTube:
   - `[Manufacturer] [Model] official`
   - `[Manufacturer] [Model] demo`
   - `[Manufacturer] [Model] reveal`
   - `[Model] robot`

3. Prefer official videos, product demos, or high-quality reviews

4. Copy the YouTube URL (any format works)

5. Add to the `video` column in `data.csv`

### Finding Images for Robots with Placeholders

1. Check manufacturer websites for official images

2. Look for press kits (often available on "Press" or "Media" pages)

3. YouTube video thumbnails can work in a pinch

4. Save to appropriate folder and update `data.csv`

## Tips for Efficient Data Entry

1. **Batch Processing**: Collect information for multiple robots before entering data

2. **Use Spreadsheet Software**: Excel, Google Sheets, or LibreOffice Calc make editing easier

3. **Validate URLs**: Ensure all URLs work before adding them

4. **Consistent Formatting**:
   - Prices: Include currency (e.g., "5000 USD", "3000 EUR")
   - Weights: Include unit (e.g., "25 kg", "10 lbs")
   - Battery Life: Use hours (e.g., "4 hours", "2-3 hours")

5. **Quality over Quantity**: Better to have 50 well-researched entries than 100 incomplete ones

## Suggested Robots to Add

### Humanoid Robots
- Xiaomi CyberOne Gen 2
- LimX Dynamics P1
- Samsung Bot Handy
- Engineered Arts RoboThespian
- SoftBank Robotics Pepper
- Various research humanoids from universities

### Robot Dogs
- Sony aibo (newer models)
- Tombot Jennie
- Various military/industrial quadrupeds
- Research platforms

### Household Robots
- More vacuum models from major brands
- Window cleaning robots
- Lawn mowing robots
- Pool cleaning robots
- Gutter cleaning robots

### Educational Robots
- VEX Robotics products
- FIRST Robotics kits
- Arduino-based robots
- Raspberry Pi robots
- Various STEM education robots

### Entertainment Robots
- More toy robots from major brands
- Pet companion robots
- Interactive storytelling robots

## Need Help?

- Check existing entries in `data.csv` for formatting examples
- Review `ROBOT_DATA_MAINTENANCE.md` for general maintenance info
- Run `python3 data_helper.py` to identify what needs attention

## Important Notes

- **Copyright**: Only use images you have permission to use
- **Accuracy**: Verify all information from reliable sources
- **Updates**: Robot specifications may change; keep data current
- **Sources**: When possible, use official manufacturer information

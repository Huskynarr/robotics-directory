# Robotics Directory - GitHub Pages Setup

This guide explains how to set up the Robotics Directory as an interactive website with GitHub Pages.

## Overview

The Robotics Directory has been transformed from a simple README table to a fully interactive website. The website offers:

- Categorized view of humanoids and robot dogs
- Search function for quickly finding robots
- Filters by manufacturer and price
- Detailed view with all specifications
- Responsive design for all devices

## GitHub Pages Setup

1. **Open Repository Settings**
   - Go to your repository on GitHub
   - Click on "Settings" (gear icon)

2. **Enable GitHub Pages**
   - Scroll down to the "GitHub Pages" section
   - Select "main" as the branch under "Source"
   - Click on "Save"

3. **Access the Website**
   - After activation, you'll see a URL (e.g., https://huskynarr.github.io/robotics-directory/)
   - Publication may take a few minutes

## Adding Images

To complete the website with images:

1. Upload images of the robots to the appropriate directories:
   - Humanoid robots: `/images/humanoid/`
   - Robot dogs: `/images/robodog/`

2. Name the images according to the robot model, as specified in the `data.js` file:
   - Example: `ameca.jpg`, `spot.jpg`, etc.

3. Replace the placeholder image (`placeholder.svg`) with a generic robot image

## Customization and Extension

### Adding New Robots

To add new robots to the database:

1. Open the file `js/data.js`
2. Add a new entry to the appropriate array (humanoid or robodog)
3. Make sure all required fields are present
4. Upload an image for the new robot

### Customizing the Design

The design can be customized via the CSS file:

1. Open the file `css/style.css`
2. Adjust the color variables in the `:root` selector
3. Change fonts, spacing, and other style elements as needed

## Local Development

To develop the website locally:

1. Clone the repository to your computer
2. Open the `index.html` file in a browser
3. For a better development environment, you can use a local server:
   - With Python: `python -m http.server`
   - With Node.js: `npx serve`

## Troubleshooting

If images are not displayed:
- Check if the filenames in `data.js` match the actual image files
- Make sure the images are in the correct directory
- Check the file paths (note case sensitivity)

## Contributing

Contributions to improve the website are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

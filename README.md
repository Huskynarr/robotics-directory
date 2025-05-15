# Robotics Directory

A comprehensive, interactive collection of robots with filtering, comparison functionality, and more.

## About this Repository

Welcome to the Robotics Directory! This repository provides an extensive collection of robots, categorized into various types such as humanoids, robot dogs, household robots, and more. Here you'll find information, images, and technical details about a variety of innovative robots.

The website is available live at [robodirectory.huskynarr.de](https://robodirectory.huskynarr.de/).

![Screenshot of the Robotics Directory](images/screenshot.jpg)

## Table of Contents

- [Robotics Directory](#robotics-directory)
  - [About this Repository](#about-this-repository)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Robot Categories](#robot-categories)
    - [Humanoid Robots](#humanoid-robots)
    - [Robot Dogs](#robot-dogs)
    - [Additional Categories](#additional-categories)
  - [Installation and Setup](#installation-and-setup)
    - [Local Development](#local-development)
    - [Deployment on GitHub Pages](#deployment-on-github-pages)
  - [Data Structure](#data-structure)
  - [Updating Data](#updating-data)
  - [Using the Website](#using-the-website)
    - [Searching and Filtering Robots](#searching-and-filtering-robots)
    - [Detail View](#detail-view)
    - [Saving Favorites](#saving-favorites)
    - [Comparing Robots](#comparing-robots)
    - [Dark Mode](#dark-mode)
    - [Sharing Function](#sharing-function)
  - [Contributions](#contributions)
  - [License](#license)
  - [Contact](#contact)

## Features

The Robotics Directory offers the following main features:

- **Categorized view** of different robot types
- **Advanced search function** with multiple filter options:
  - Category
  - Manufacturer
  - Price
  - Weight
  - Battery life
  - Features
  - Purpose
- **Detailed view** with comprehensive specifications for each robot
- **Comparison function** for direct comparison of multiple robots
- **Favorites feature** to save interesting robots
- **Dark Mode** for comfortable viewing at night
- **Sharing function** via social media and link
- **Responsive design** for optimal use on all devices

## Robot Categories

### Humanoid Robots

In this category, you'll find robots designed to resemble humans and function similarly. These robots are used in various fields such as industry, healthcare, and entertainment.

### Robot Dogs

Robot dogs are fascinating examples of technological innovation. They can be used for tasks such as surveillance, assistance, and research.

### Additional Categories

- **Table Robots**: Robots designed to be placed on tables for interaction and entertainment
- **Entertainment Robots**: Robots primarily used for entertainment purposes
- **Educational Robots**: Robots used in educational settings
- **Household Robots**: Robots for various household tasks
- **Vacuum Robots**: Specialized robots for automatic cleaning

## Installation and Setup

### Local Development

To set up the repository locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Huskynarr/robotics-directory.git
   cd robotics-directory
   ```

2. Start a local web server. You can use Python's built-in server:
   ```bash
   # Python 3
   python -m http.server
   
   # Python 2
   python -m SimpleHTTPServer
   ```
   
   Alternatively, you can use other local servers such as [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code.

3. Open the website in your browser at `http://localhost:8000`

### Deployment on GitHub Pages

1. Fork the repository on GitHub
2. Go to the repository settings
3. Navigate to the "Pages" section
4. Select the branch `main` or `master` as the source
5. Save the settings and wait for your page to be deployed

## Data Structure

The robot data is stored in CSV files in the `data/` directory:

- `data/humanoid.csv` - Humanoid robots
- `data/robodog.csv` - Robot dogs 
- `data/table.csv` - Table robots
- `data/entertainment.csv` - Entertainment robots
- `data/educational.csv` - Educational robots
- `data/household.csv` - Household robots
- `data/vacuum.csv` - Vacuum robots

The main file `data.csv` contains a summary of all robots and is used as a source for generating the category-specific CSV files.

## Updating Data

The repository contains a Python script `generate_category_csvs.py` that generates the category-specific CSV files from the main file `data.csv`:

1. Update the data in `data.csv`
2. Run the Python script:
   ```bash
   python generate_category_csvs.py
   ```
3. The script updates the CSV files in the `data/` directory while considering existing entries

Detailed instructions can be found in the `ROBOT_DATA_MAINTENANCE.md` file.

## Using the Website

### Searching and Filtering Robots

- Use the search bar to search for robot names or manufacturers
- Use the dropdown filters to filter by category, manufacturer, or price
- Click on "Advanced Filters" to use additional filters such as weight, battery life, etc.
- Sort the results by various criteria such as name, manufacturer, or price

### Detail View

- Click on a robot card to display detailed information
- In the detail view, you'll find:
  - Image of the robot
  - General specifications
  - Category-specific properties
  - Link to the official website

### Saving Favorites

- Click on the heart icon on a robot card to add the robot to your favorites
- Click on the "Favorites" button in the navigation bar to display all your saved favorites
- The favorites are stored in your browser's local storage and will persist even after reloading the page

### Comparing Robots

- Activate the "Compare" checkbox on a robot card to select the robot for comparison
- Choose at least two robots to compare them
- Click on the "Compare" button in the navigation bar or use the automatically displayed comparison view
- In the comparison, the properties of the selected robots are presented in a clear table

### Dark Mode

- Click on the switch with the moon icon in the navigation bar to toggle between light and dark design
- The setting is saved and maintained for your next visit

### Sharing Function

- In the detail view of a robot, you'll find a "Share" button
- Choose one of the sharing options: Twitter, Facebook, WhatsApp, Email, or copy link
- Share your discoveries with friends and colleagues

## Contributions

We welcome contributions from the community! Please read our contribution guidelines in the `CONTRIBUTING.md` file before submitting changes.

<a href="https://github.com/Huskynarr/robotics-directory/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Huskynarr/robotics-directory" />
</a>

Created with [contrib.rocks](https://contrib.rocks).

## License

This project is licensed under the MIT License. For more information, see the `LICENSE` file.

## Contact

For feedback and inquiries, please contact us via [@Huskynarr](https://x.com/Huskynarr) on X (formerly Twitter).

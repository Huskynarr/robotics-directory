/**
 * CSV Loader for Robotics Directory
 * Loads robot data from category-specific CSV files
 */

// Categories and their corresponding CSV files
const ROBOT_CATEGORIES = [
    { id: 'humanoid', file: 'data/humanoid.csv' },
    { id: 'robodog', file: 'data/robodog.csv' },
    { id: 'table', file: 'data/table.csv' },
    { id: 'entertainment', file: 'data/entertainment.csv' },
    { id: 'educational', file: 'data/educational.csv' },
    { id: 'household', file: 'data/household.csv' },
    { id: 'vacuum', file: 'data/vacuum.csv' }
];

/**
 * Load CSV data for a specific category
 * @param {string} categoryFile - Path to the CSV file
 * @param {string} categoryId - Category identifier
 * @returns {Promise<Array>} - Array of robot objects for the category
 */
async function loadCategoryCSV(categoryFile, categoryId) {
    try {
        const response = await fetch(categoryFile);
        if (!response.ok) {
            throw new Error(`Failed to load ${categoryFile}: ${response.status} ${response.statusText}`);
        }
        const csvText = await response.text();
        const robots = parseCSV(csvText);
        
        // Add category to each robot
        robots.forEach(robot => {
            robot.category = categoryId;
        });
        
        return robots;
    } catch (error) {
        console.error(`Error loading ${categoryFile}:`, error);
        return [];
    }
}

/**
 * Parse CSV text into an array of objects
 * @param {string} csvText - CSV content as text
 * @returns {Array} - Array of objects representing the CSV rows
 */
function parseCSV(csvText) {
    // Split the CSV text into lines
    const lines = csvText.split('\n');
    if (lines.length < 2) return [];
    
    // Extract headers from the first line
    const headers = lines[0].split(',').map(header => header.trim());
    
    // Process each data row
    return lines.slice(1)
        .filter(line => line.trim() !== '') // Skip empty lines
        .map(line => {
            const values = parseCSVLine(line);
            const robot = {};
            
            // Map values to headers
            headers.forEach((header, index) => {
                if (index < values.length) {
                    robot[header] = values[index];
                }
            });
            
            return robot;
        });
}

/**
 * Parse a CSV line, handling quoted values with commas
 * @param {string} line - A single line from the CSV
 * @returns {Array} - Array of values from the line
 */
function parseCSVLine(line) {
    const values = [];
    let currentValue = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            values.push(currentValue.trim());
            currentValue = '';
        } else {
            currentValue += char;
        }
    }
    
    // Add the last value
    values.push(currentValue.trim());
    
    // Clean up quotes from values
    return values.map(value => {
        if (value.startsWith('"') && value.endsWith('"')) {
            return value.substring(1, value.length - 1);
        }
        return value;
    });
}

/**
 * Load all robot data from all category CSV files
 * @returns {Promise<Object>} - Object containing all robots and categorized robots
 */
async function loadAllRobotData() {
    try {
        // Load all categories in parallel
        const categoryPromises = ROBOT_CATEGORIES.map(category => 
            loadCategoryCSV(category.file, category.id)
        );
        
        const categoriesData = await Promise.all(categoryPromises);
        
        // Create a map of category ID to robots
        const robotsByCategory = {};
        ROBOT_CATEGORIES.forEach((category, index) => {
            robotsByCategory[category.id] = categoriesData[index];
        });
        
        // Combine all robots into a single array
        const allRobots = categoriesData.flat();
        
        return {
            allRobots,
            robotsByCategory
        };
    } catch (error) {
        console.error("Error loading CSV data:", error);
        return null;
    }
}

/**
 * Get unique manufacturers from robot data
 * @param {Array} robots - Array of robot objects
 * @returns {Array} - Array of unique manufacturer names
 */
function getUniqueManufacturers(robots) {
    const manufacturers = robots.map(robot => robot.manufacturer);
    return [...new Set(manufacturers)].sort();
}

/**
 * Initialize robots data for the application
 * @returns {Promise<Object>} - Object containing all robot data and metadata
 */
async function initializeRobotsData() {
    try {
        const robotsData = await loadAllRobotData();
        if (!robotsData) {
            throw new Error("Failed to load robot data");
        }
        
        const manufacturers = getUniqueManufacturers(robotsData.allRobots);
        
        return {
            allRobots: robotsData.allRobots,
            robotsByCategory: robotsData.robotsByCategory,
            manufacturers: manufacturers
        };
    } catch (error) {
        console.error("Error initializing robots data:", error);
        return null;
    }
}

// Export functions for use in other scripts
window.loadCSVData = loadAllRobotData;
window.initializeRobotsData = initializeRobotsData;

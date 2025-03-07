/**
 * Main JavaScript for Robotics Directory
 * Handles UI interactions, filtering, and displaying robot data
 */

document.addEventListener('DOMContentLoaded', async function() {
    // Load robot data from CSV files
    const robotsData = await initializeRobotsData();
    if (!robotsData) {
        console.error('Failed to load robot data');
        return;
    }

    const allRobots = robotsData.allRobots;
    const robotsByCategory = robotsData.robotsByCategory;
    const manufacturers = robotsData.manufacturers;

    // DOM elements
    const robotsGrid = document.getElementById('robotsGrid');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const manufacturerFilter = document.getElementById('manufacturerFilter');
    const priceFilter = document.getElementById('priceFilter');
    const resetFiltersButton = document.getElementById('resetFilters');
    const noResults = document.getElementById('noResults');
    const categoryLinks = document.querySelectorAll('nav a');
    const robotDetails = document.getElementById('robotDetails');
    const closeDetailsButton = document.getElementById('closeDetails');

    // Current filter state
    let currentCategory = 'all';
    let currentManufacturer = '';
    let currentPrice = '';
    let currentSearch = '';

    // Populate manufacturer filter
    populateManufacturerFilter(manufacturers);

    // Initial display of robots
    displayRobots(allRobots);

    // Event listeners
    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    manufacturerFilter.addEventListener('change', applyFilters);
    priceFilter.addEventListener('change', applyFilters);
    resetFiltersButton.addEventListener('click', resetFilters);

    // Category navigation
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active class
            categoryLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Update current category and apply filters
            currentCategory = this.getAttribute('data-category');
            applyFilters();
        });
    });

    // Close details panel
    closeDetailsButton.addEventListener('click', function() {
        robotDetails.classList.remove('active');
    });

    /**
     * Display robots in the grid
     * @param {Array} robots - Array of robot objects to display
     */
    function displayRobots(robots) {
        robotsGrid.innerHTML = '';
        
        if (robots.length === 0) {
            noResults.classList.remove('hidden');
            return;
        }
        
        noResults.classList.add('hidden');
        
        robots.forEach(robot => {
            const robotCard = createRobotCard(robot);
            robotsGrid.appendChild(robotCard);
        });
    }

    /**
     * Create a robot card element
     * @param {Object} robot - Robot data object
     * @returns {HTMLElement} - Robot card element
     */
    function createRobotCard(robot) {
        const card = document.createElement('div');
        card.className = 'robot-card';
        card.setAttribute('data-category', robot.category);
        
        // Default image path if not specified
        const imagePath = robot.image || 'images/placeholder.jpg';
        
        card.innerHTML = `
            <div class="robot-image">
                <img src="${imagePath}" alt="${robot.model} by ${robot.manufacturer}">
            </div>
            <div class="robot-info">
                <h3>${robot.model}</h3>
                <p class="manufacturer">${robot.manufacturer}</p>
                <p class="price">${robot.price}</p>
            </div>
        `;
        
        card.addEventListener('click', () => showRobotDetails(robot));
        
        return card;
    }

    /**
     * Show detailed information about a robot
     * @param {Object} robot - Robot data object
     */
    function showRobotDetails(robot) {
        // Set basic details
        document.getElementById('detailsTitle').textContent = robot.model;
        document.getElementById('detailsManufacturer').textContent = robot.manufacturer;
        
        // Set image
        const imagePath = robot.image || 'images/placeholder.jpg';
        document.getElementById('detailsImage').src = imagePath;
        document.getElementById('detailsImage').alt = `${robot.model} by ${robot.manufacturer}`;
        
        // Set website link
        const websiteLink = document.getElementById('detailsWebsite');
        if (robot.website && robot.website !== 'N/A') {
            websiteLink.href = robot.website;
            websiteLink.classList.remove('hidden');
        } else {
            websiteLink.classList.add('hidden');
        }
        
        // Build specifications table
        const specsTable = document.getElementById('detailsSpecs');
        specsTable.innerHTML = '';
        
        // Add common specifications
        addSpecRow(specsTable, 'Price', robot.price);
        addSpecRow(specsTable, 'Weight', robot.weight);
        addSpecRow(specsTable, 'Battery Life', robot.batteryLife);
        
        // Add category-specific specifications
        switch (robot.category) {
            case 'humanoid':
                addSpecRow(specsTable, 'Hands', robot.hands);
                break;
            case 'robodog':
                addSpecRow(specsTable, 'Sensors', robot.sensors);
                break;
            case 'table':
            case 'household':
            case 'entertainment':
            case 'educational':
            case 'vacuum':
                addSpecRow(specsTable, 'Features', robot.features);
                break;
        }
        
        // Show the details panel
        robotDetails.classList.add('active');
    }

    /**
     * Add a row to the specifications table
     * @param {HTMLElement} table - Table element
     * @param {string} label - Specification label
     * @param {string} value - Specification value
     */
    function addSpecRow(table, label, value) {
        if (!value || value === 'N/A') return;
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${label}</td>
            <td>${value}</td>
        `;
        table.appendChild(row);
    }

    /**
     * Populate the manufacturer filter dropdown
     * @param {Array} manufacturers - Array of manufacturer names
     */
    function populateManufacturerFilter(manufacturers) {
        manufacturers.forEach(manufacturer => {
            const option = document.createElement('option');
            option.value = manufacturer;
            option.textContent = manufacturer;
            manufacturerFilter.appendChild(option);
        });
    }

    /**
     * Handle search button click
     */
    function handleSearch() {
        currentSearch = searchInput.value.trim().toLowerCase();
        applyFilters();
    }

    /**
     * Apply all current filters to the robot data
     */
    function applyFilters() {
        // Get filter values
        currentManufacturer = manufacturerFilter.value;
        currentPrice = priceFilter.value;
        
        // Start with all robots or category-specific robots
        let filteredRobots = currentCategory === 'all' ? allRobots : robotsByCategory[currentCategory] || [];
        
        // Apply manufacturer filter
        if (currentManufacturer) {
            filteredRobots = filteredRobots.filter(robot => robot.manufacturer === currentManufacturer);
        }
        
        // Apply price filter
        if (currentPrice) {
            filteredRobots = filteredRobots.filter(robot => {
                const price = robot.price.toLowerCase();
                
                if (currentPrice === 'low') {
                    return price.includes('under') || (price.includes('$') && parseInt(price.replace(/[^0-9]/g, '')) < 5000);
                } else if (currentPrice === 'medium') {
                    const priceNum = parseInt(price.replace(/[^0-9]/g, ''));
                    return price.includes('$') && priceNum >= 5000 && priceNum <= 50000;
                } else if (currentPrice === 'high') {
                    return price.includes('over') || (price.includes('$') && parseInt(price.replace(/[^0-9]/g, '')) > 50000);
                } else if (currentPrice === 'request') {
                    return price.includes('request') || price.includes('not') || price.includes('n/a');
                }
                return true;
            });
        }
        
        // Apply search filter
        if (currentSearch) {
            filteredRobots = filteredRobots.filter(robot => {
                return robot.model.toLowerCase().includes(currentSearch) || 
                       robot.manufacturer.toLowerCase().includes(currentSearch);
            });
        }
        
        // Display filtered robots
        displayRobots(filteredRobots);
    }

    /**
     * Reset all filters to default values
     */
    function resetFilters() {
        searchInput.value = '';
        manufacturerFilter.value = '';
        priceFilter.value = '';
        
        // Reset filter state
        currentSearch = '';
        currentManufacturer = '';
        currentPrice = '';
        
        // Re-apply filters (will use the reset values)
        applyFilters();
    }
});

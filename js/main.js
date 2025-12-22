/**
 * Main JavaScript for Robotics Directory
 * Handles UI interactions, filtering, and displaying robot data
 */

// Configuration constants
const EXCLUDED_SPEC_FIELDS = ['manufacturer', 'model', 'category', 'image', 'website', 'video'];

// Global variables for Features.js
window.robotsDataLoaded = false;
window.allRobots = [];

document.addEventListener('DOMContentLoaded', async function() {
    const t = window.i18n && typeof window.i18n.t === 'function'
        ? window.i18n.t
        : (key, fallback) => fallback || key;

    // Load robot data from CSV files
    const robotsData = await initializeRobotsData();
    if (!robotsData) {
        console.error('Failed to load robot data');
        return;
    }

    // Set global variables for features.js
    window.allRobots = robotsData.allRobots;
    window.robotsDataLoaded = true;

    const allRobots = robotsData.allRobots;
    const robotsByCategory = robotsData.robotsByCategory;
    const manufacturers = robotsData.manufacturers;

    // DOM elements
    const robotsGrid = document.getElementById('robotsGrid');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const manufacturerFilter = document.getElementById('manufacturerFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const sortFilter = document.getElementById('sortFilter');
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
    let currentSort = '';

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

    manufacturerFilter.addEventListener('change', function() {
        currentManufacturer = this.value;
        applyFilters(); 
    });
    categoryFilter.addEventListener('change', function() {
        currentCategory = this.value;
        categoryLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-category') === currentCategory || (currentCategory === '' && link.getAttribute('data-category') === 'all'));
        });
        applyFilters();
    });
    priceFilter.addEventListener('change', function() {
        currentPrice = this.value;
        applyFilters();
    });
    sortFilter.addEventListener('change', function() {
        currentSort = this.value;
        applyFilters();
    });
    resetFiltersButton.addEventListener('click', resetFilters);

    // Category navigation
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active class
            categoryLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Update current category and category filter
            currentCategory = this.getAttribute('data-category');
            categoryFilter.value = currentCategory === 'all' ? '' : currentCategory;
            
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
            // Using the window.createRobotCard function which may be overridden by features.js
            const robotCard = window.createRobotCard(robot);
            robotsGrid.appendChild(robotCard);
        });
    }

    /**
     * Create a robot card element
     * @param {Object} robot - Robot data object
     * @returns {HTMLElement} - Robot card element
     */
    window.createRobotCard = function(robot) {
        const card = document.createElement('div');
        card.className = 'robot-card';
        card.setAttribute('data-category', robot.category);
        
        // Default image path
        const imagePath = resolveImagePath(robot.image);
        
        card.innerHTML = `
            <div class="robot-image">
                <img src="${imagePath}" alt="${robot.model} by ${robot.manufacturer}" onerror="this.src='images/image-not-found.webp';">
            </div>
            <div class="robot-info">
                <h3>${robot.model}</h3>
                <p class="manufacturer">${robot.manufacturer}</p>
                <p class="price">${robot.price}</p>
            </div>
        `;
        
        card.addEventListener('click', () => showRobotDetails(robot));
        
        return card;
    };

    /**
     * Show detailed information about a robot
     * @param {Object} robot - Robot data object
     */
    window.showRobotDetails = function(robot) {
        window.currentRobotDetails = robot;
        // Set basic details
        document.getElementById('detailsTitle').textContent = robot.model;
        document.getElementById('detailsManufacturer').textContent = robot.manufacturer;
        
        // Set image with error handling
        const imagePath = resolveImagePath(robot.image);
        const detailsImage = document.getElementById('detailsImage');
        detailsImage.src = imagePath;
        detailsImage.alt = `${robot.model} by ${robot.manufacturer}`;
        detailsImage.onerror = function() {
            this.src = 'images/image-not-found.webp';
        };
        
        // Set website link
        const websiteLink = document.getElementById('detailsWebsite');
        if (robot.website && robot.website !== 'N/A') {
            websiteLink.href = robot.website;
            websiteLink.classList.remove('hidden');
        } else {
            websiteLink.classList.add('hidden');
        }
        
        // Handle video embedding
        const videoContainer = document.getElementById('robotVideoContainer');
        const videoEmbed = document.getElementById('detailsVideo');
        if (robot.video && robot.video.trim() !== '') {
            // Extract YouTube video ID and create embed
            const videoId = extractYouTubeId(robot.video);
            if (videoId) {
                // Create iframe using DOM methods for security
                const iframe = document.createElement('iframe');
                iframe.src = `https://www.youtube.com/embed/${videoId}`;
                iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                iframe.allowFullscreen = true;
                iframe.title = 'Robot demonstration video';
                
                // Clear and append iframe
                videoEmbed.innerHTML = '';
                videoEmbed.appendChild(iframe);
                videoContainer.classList.add('active');
            } else {
                videoContainer.classList.remove('active');
            }
        } else {
            videoContainer.classList.remove('active');
        }
        
        // Build specifications table
        const specsTable = document.getElementById('detailsSpecs');
        specsTable.innerHTML = '';
        
        // Add common specifications
        addSpecRow(specsTable, t('spec.price', 'Price'), robot.price);
        addSpecRow(specsTable, t('spec.weight', 'Weight'), robot.weight);
        addSpecRow(specsTable, t('spec.batteryLife', 'Battery Life'), robot.batteryLife);
        
        // Add category-specific specifications
        switch (robot.category) {
            case 'humanoid':
                addSpecRow(specsTable, t('spec.hands', 'Hands'), robot.hands);
                break;
            case 'robodog':
                addSpecRow(specsTable, t('spec.ipRating', 'IP Rating'), robot.ipRating);
                addSpecRow(specsTable, t('spec.maxRuntime', 'Max Runtime'), robot.maxRuntime);
                addSpecRow(specsTable, t('spec.payload', 'Payload'), robot.payload);
                addSpecRow(specsTable, t('spec.speed', 'Speed'), robot.speed);
                addSpecRow(specsTable, t('spec.terrain', 'Terrain'), robot.terrain);
                break;
            case 'table':
            case 'household':
            case 'entertainment':
            case 'educational':
            case 'vacuum':
                addSpecRow(specsTable, t('spec.features', 'Features'), robot.features);
                addSpecRow(specsTable, t('spec.purpose', 'Purpose'), robot.purpose);
                addSpecRow(specsTable, t('spec.connectivity', 'Connectivity'), robot.connectivity);
                addSpecRow(specsTable, t('spec.ageGroup', 'Age Group'), robot.ageGroup);
                break;
        }
        
        // Display all available specifications that are not empty
        Object.keys(robot).forEach(key => {
            // Skip excluded fields and empty values
            const extendedExcludedFields = [...EXCLUDED_SPEC_FIELDS, 'hands', 'features', 'ipRating', 
                'maxRuntime', 'payload', 'speed', 'terrain', 'purpose', 'connectivity', 'ageGroup'];
            if (extendedExcludedFields.includes(key) || !robot[key]) {
                return;
            }
            
            // Format the key for display
            const label = key.replace(/([A-Z])/g, ' $1')
                            .replace(/^./, str => str.toUpperCase())
                            .replace(/Specs_/g, '');
            
            addSpecRow(specsTable, label, robot[key]);
        });
        
        // Show the details panel
        robotDetails.classList.add('active');
        
        // Dispatch event for features.js
        document.dispatchEvent(new CustomEvent('robotDetailsOpened', { detail: { robot } }));
    };

    document.addEventListener('languageChanged', function() {
        if (window.currentRobotDetails && robotDetails.classList.contains('active')) {
            window.showRobotDetails(window.currentRobotDetails);
        }
    });

    /**
     * Extract YouTube video ID from various URL formats
     * @param {string} url - YouTube URL
     * @returns {string|null} - Video ID or null if not found
     */
    function extractYouTubeId(url) {
        if (!url) return null;
        
        // YouTube video IDs are always 11 characters long
        const YOUTUBE_VIDEO_ID_LENGTH = 11;
        
        // Regular expressions to match different YouTube URL formats
        const patterns = [
            /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([^&\?\/]+)/,
            new RegExp(`^([a-zA-Z0-9_-]{${YOUTUBE_VIDEO_ID_LENGTH}})$`) // Direct video ID
        ];
        
        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match && match[1]) {
                // Validate that the extracted ID is exactly 11 characters
                const videoId = match[1];
                if (videoId.length === YOUTUBE_VIDEO_ID_LENGTH && /^[a-zA-Z0-9_-]+$/.test(videoId)) {
                    return videoId;
                }
            }
        }
        
        return null;
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
     * Resolve image paths from CSV data (supports absolute URLs and paths with/without images/ prefix)
     * @param {string} imageValue
     * @returns {string}
     */
    function resolveImagePath(imageValue) {
        if (!imageValue) return 'images/placeholder.svg';
        const trimmed = imageValue.trim();
        if (trimmed === '') return 'images/placeholder.svg';
        if (/^(https?:)?\/\//.test(trimmed) || trimmed.startsWith('data:')) return trimmed;
        if (trimmed.startsWith('images/')) return trimmed;
        return `images/${trimmed}`;
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
     * Apply all current filters and re-display robots
     */
    function applyFilters() {
        currentSearch = searchInput.value.toLowerCase();
        currentManufacturer = manufacturerFilter.value;
        currentCategory = categoryFilter.value;
        currentPrice = priceFilter.value;
        currentSort = sortFilter.value; 

        let filteredRobots = [...allRobots];

        // Search filter
        if (currentSearch) {
            filteredRobots = filteredRobots.filter(robot =>
                robot.model.toLowerCase().includes(currentSearch) ||
                robot.manufacturer.toLowerCase().includes(currentSearch) ||
                (robot.keywords && robot.keywords.toLowerCase().includes(currentSearch))
            );
        }

        // Category filter
        if (currentCategory && currentCategory !== 'all') {
            filteredRobots = filteredRobots.filter(robot => robot.category === currentCategory);
        }

        // Manufacturer filter
        if (currentManufacturer) {
            filteredRobots = filteredRobots.filter(robot => robot.manufacturer === currentManufacturer);
        }

        // Price filter
        if (currentPrice) {
            filteredRobots = filteredRobots.filter(robot => {
                const price = parseFloat(robot.price.replace(/[^\d.-]/g, ''));
                if (isNaN(price)) return currentPrice === 'request'; // Handle "On Request"

                switch (currentPrice) {
                    case 'low': return price < 5000;
                    case 'medium': return price >= 5000 && price <= 50000;
                    case 'high': return price > 50000;
                    default: return true;
                }
            });
        }

        // Advanced Filters from features.js
        if (window.applyAdvancedFilters && typeof window.applyAdvancedFilters === 'function' &&
            window.getAdditionalFilters && typeof window.getAdditionalFilters === 'function') {
            const additionalFilters = window.getAdditionalFilters();
            if (additionalFilters) {
                filteredRobots = window.applyAdvancedFilters(filteredRobots, additionalFilters);
            }
        }
        
        // Sorting
        if (currentSort) {
            filteredRobots.sort((a, b) => {
                let valA, valB;
                switch (currentSort) {
                    case 'name':
                        valA = a.model.toLowerCase();
                        valB = b.model.toLowerCase();
                        break;
                    case 'manufacturer':
                        valA = a.manufacturer.toLowerCase();
                        valB = b.manufacturer.toLowerCase();
                        break;
                    case 'price':
                        valA = getPriceValue(a.price);
                        valB = getPriceValue(b.price);
                        break;
                    case 'weight':
                        valA = parseFloat(a.weight) || Infinity;
                        valB = parseFloat(b.weight) || Infinity;
                        break;
                    case 'batteryLife':
                        valA = parseFloat(a.batteryLife) || 0;
                        valB = parseFloat(b.batteryLife) || 0;
                        break;
                    default:
                        return 0;
                }

                if (valA < valB) return -1;
                if (valA > valB) return 1;
                return 0;
            });
        }

        displayRobots(filteredRobots);
    }

    /**
     * Reset all filters to default values
     */
    function resetFilters() {
        searchInput.value = '';
        manufacturerFilter.value = '';
        categoryFilter.value = '';
        priceFilter.value = '';
        sortFilter.value = '';

        currentCategory = 'all';
        currentManufacturer = '';
        currentPrice = '';
        currentSearch = '';
        currentSort = '';

        // Reset active class on category links
        categoryLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-category') === 'all');
        });
        
        // If advanced filters are handled by features.js, its reset logic should handle their UI and re-application of filters
        // The reset button in features.js already calls applyFilters() from main.js after resetting its own state.

        applyFilters(); // Re-apply filters which will now be empty
    }

    /**
     * Format the key for display
     */
    function formatKey(key) {
        // ... existing code ...
    }

    /**
     * Extract numbers from prices for numeric sorting
     */
    function getPriceValue(price) {
        // ... existing code ...
    }
});

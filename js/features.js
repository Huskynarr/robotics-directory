/**
 * Features.js - Advanced Functions for the Robotics Directory
 * Contains code for: Dark Mode, Favorites, Comparison, Advanced Filters, and Share Function
 */

// --- Utility Functions (globally available within this script) ---
function _createRobotId(robot) {
    if (!robot || !robot.manufacturer || !robot.model) {
        console.error('Invalid robot object for ID creation:', robot);
        return 'unknown-robot';
    }
    return `${robot.manufacturer.toLowerCase()}-${robot.model.toLowerCase().replace(/\s+/g, '-')}`;
}

function _saveToLocalStorage(key, data) {
    try {
        if (typeof data === 'boolean') {
            localStorage.setItem(key, data.toString());
        } else {
            localStorage.setItem(key, JSON.stringify(data));
        }
        // console.log('Saved to localStorage:', key, data);
    } catch (e) {
        console.error('Failed to save to localStorage:', e);
    }
}

function _loadFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        if (data === 'true') return true;
        if (data === 'false') return false;
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error('Failed to load from localStorage:', e);
        return null;
    }
}

// --- Global State Variables (initialized early) ---
let SCRIPT_FAVORITES = _loadFromLocalStorage('robotFavorites') || [];
let SCRIPT_COMPARE_ROBOT_IDS = _loadFromLocalStorage('compareRobots') || [];
let SCRIPT_COMPARE_ROBOTS = []; // Actual robot objects, populated after main data loads
let SCRIPT_CURRENT_ROBOT = null; // For share and details context

// --- Core createRobotCard (defined early, depends on global functions that will be attached to window) ---
function _createRobotCardForWindow(robot) {
    const t = window.i18n && typeof window.i18n.t === 'function'
        ? window.i18n.t
        : (key, fallback) => fallback || key;
    const card = document.createElement('div');
    card.className = 'robot-card';
    card.setAttribute('data-category', robot.category);

    const imagePath = robot.image || 'images/placeholder.svg';
    const robotId = window.createRobotId(robot); // Uses a function that will be on window
    const isFav = SCRIPT_FAVORITES.includes(robotId);
    const isCompare = SCRIPT_COMPARE_ROBOT_IDS.includes(robotId);

    card.innerHTML = `
        <div class="favorite-button ${isFav ? 'active' : ''}">
            <i class="fas fa-heart"></i>
        </div>
        <div class="compare-checkbox">
            <input type="checkbox" id="compare-${robotId}" class="compare-check" ${isCompare ? 'checked' : ''}>
            <label for="compare-${robotId}">${t('compare.label', 'Compare')}</label>
        </div>
        <div class="robot-image">
            <img src="${imagePath}" alt="${robot.model} by ${robot.manufacturer}">
        </div>
        <div class="robot-info">
            <h3>${robot.model}</h3>
            <p class="manufacturer">${robot.manufacturer}</p>
            <p class="price">${robot.price}</p>
        </div>
    `;

    const favButton = card.querySelector('.favorite-button');
    favButton.addEventListener('click', function(e) {
        e.stopPropagation();
        if (window.toggleFavorite) window.toggleFavorite(robot);
    });

    const compareCheck = card.querySelector('.compare-check');
    compareCheck.addEventListener('change', function(e) {
        e.stopPropagation();
        if (this.checked) {
            if (window.addToCompare) window.addToCompare(robot);
        } else {
            if (window.removeFromCompare) window.removeFromCompare(robot);
        }
    });

    card.addEventListener('click', () => {
        if (window.showRobotDetails) window.showRobotDetails(robot);
    });

    return card;
}


// --- Feature Specific Functions (defined before DOMContentLoaded) ---

// Favorites
function _updateFavoritesDisplay() {
    const favoritesGrid = document.getElementById('favoritesGrid');
    const noFavorites = document.getElementById('noFavorites');
    if (!favoritesGrid || !noFavorites) return;

    favoritesGrid.innerHTML = '';
    if (SCRIPT_FAVORITES.length === 0) {
        noFavorites.style.display = 'block';
        return;
    }
    noFavorites.style.display = 'none';

    const favoriteRobots = window.allRobots.filter(robot =>
        SCRIPT_FAVORITES.includes(window.createRobotId(robot))
    );

    favoriteRobots.forEach(robot => {
        const card = window.createRobotCard(robot); // Uses the global version
        favoritesGrid.appendChild(card);
    });
}

function _updateRobotCardsState() { // Renamed to avoid conflict if main.js has one
    const cards = document.querySelectorAll('#robotsGrid .robot-card'); // Be more specific
    cards.forEach(card => {
        const manufacturerElement = card.querySelector('.manufacturer');
        const modelElement = card.querySelector('h3');
        if (!manufacturerElement || !modelElement) return;

        const manufacturer = manufacturerElement.textContent;
        const model = modelElement.textContent;
        const robotId = window.createRobotId({ manufacturer, model }); // Reconstruct minimal robot for ID

        const favButton = card.querySelector('.favorite-button');
        if (favButton) {
            if (SCRIPT_FAVORITES.includes(robotId)) {
                favButton.classList.add('active');
            } else {
                favButton.classList.remove('active');
            }
        }

        const compareCheck = card.querySelector('.compare-check');
        if (compareCheck) {
            compareCheck.checked = SCRIPT_COMPARE_ROBOT_IDS.includes(robotId);
        }
    });
}

function _toggleFavorite(robot) {
    const robotId = window.createRobotId(robot);
    const index = SCRIPT_FAVORITES.indexOf(robotId);
    if (index === -1) {
        SCRIPT_FAVORITES.push(robotId);
    } else {
        SCRIPT_FAVORITES.splice(index, 1);
    }
    _saveToLocalStorage('robotFavorites', SCRIPT_FAVORITES);
    if (window.updateFavoritesDisplay) window.updateFavoritesDisplay();
    if (window.updateRobotCardsState) window.updateRobotCardsState();
}

// Compare
function _saveCompareRobotIds() {
    _saveToLocalStorage('compareRobots', SCRIPT_COMPARE_ROBOT_IDS);
}

function _populateCompareRobots() {
    if (window.allRobots && window.allRobots.length > 0) {
        SCRIPT_COMPARE_ROBOTS = window.allRobots.filter(robot =>
            SCRIPT_COMPARE_ROBOT_IDS.includes(window.createRobotId(robot))
        );
    } else {
        SCRIPT_COMPARE_ROBOTS = [];
    }
}


function _updateCompareView() {
    const compareContainer = document.getElementById('compareContainer');
    if (!compareContainer) return;
    compareContainer.innerHTML = '';

     _populateCompareRobots(); // Ensure SCRIPT_COMPARE_ROBOTS is up-to-date

    SCRIPT_COMPARE_ROBOTS.forEach(robot => {
        const robotId = window.createRobotId(robot);
        const compareItem = document.createElement('div');
        compareItem.className = 'compare-item';
        const imagePath = robot.image || 'images/placeholder.svg';
        compareItem.innerHTML = `
            <button class="compare-remove" data-id="${robotId}">×</button>
            <img src="${imagePath}" alt="${robot.model}">
            <h4>${robot.model}</h4>
            <p>${robot.manufacturer}</p>
        `;
        compareContainer.appendChild(compareItem);
        compareItem.querySelector('.compare-remove').addEventListener('click', function() {
            if (window.removeFromCompare) window.removeFromCompare(robot);
        });
    });
    if (window.updateCompareTable) window.updateCompareTable();
    if (window.updateRobotCardsState) window.updateRobotCardsState();
}

function _addToCompare(robot) {
    const robotId = window.createRobotId(robot);
    if (!SCRIPT_COMPARE_ROBOT_IDS.includes(robotId)) {
        SCRIPT_COMPARE_ROBOT_IDS.push(robotId);
        _saveCompareRobotIds();
        _populateCompareRobots(); // Update the SCRIPT_COMPARE_ROBOTS array
        if (window.updateCompareView) window.updateCompareView();

        const compareSection = document.getElementById('compareSection');
        if (compareSection && SCRIPT_COMPARE_ROBOT_IDS.length > 0) { // Show if at least one
            compareSection.classList.add('active');
        }
    }
}

function _removeFromCompare(robot) {
    const robotId = window.createRobotId(robot);
    SCRIPT_COMPARE_ROBOT_IDS = SCRIPT_COMPARE_ROBOT_IDS.filter(id => id !== robotId);
    _saveCompareRobotIds();
    _populateCompareRobots(); // Update the SCRIPT_COMPARE_ROBOTS array
    if (window.updateCompareView) window.updateCompareView();
}

function _updateCompareTable() {
    const compareTableEl = document.getElementById('compareTable');
    if (!compareTableEl) return;
    compareTableEl.innerHTML = '';

    _populateCompareRobots();


    if (SCRIPT_COMPARE_ROBOTS.length < 2) {
        const t = window.i18n && typeof window.i18n.t === 'function'
            ? window.i18n.t
            : (key, fallback) => fallback || key;
        compareTableEl.innerHTML = `<p>${t('compare.minimum', 'Add at least two robots to compare them.')}</p>`;
        return;
    }

    const table = document.createElement('table');
    table.className = 'compare-table-render'; // New class to avoid conflict if any css targets .compare-table directly
    const headerRow = document.createElement('tr');
    const t = window.i18n && typeof window.i18n.t === 'function'
        ? window.i18n.t
        : (key, fallback) => fallback || key;
    headerRow.innerHTML = `<th>${t('compare.specification', 'Specification')}</th>`;
    SCRIPT_COMPARE_ROBOTS.forEach(robot => {
        headerRow.innerHTML += `<th>${robot.model}</th>`;
    });
    table.appendChild(headerRow);

    const specs = [
        { key: 'manufacturer', labelKey: 'spec.manufacturer', labelFallback: 'Manufacturer' },
        { key: 'price', labelKey: 'spec.price', labelFallback: 'Price' },
        { key: 'weight', labelKey: 'spec.weight', labelFallback: 'Weight' },
        { key: 'batteryLife', labelKey: 'spec.batteryLife', labelFallback: 'Battery Life' },
        { key: 'features', labelKey: 'spec.features', labelFallback: 'Features' },
        { key: 'hands', labelKey: 'spec.hands', labelFallback: 'Hands' },
        { key: 'sensors', labelKey: 'spec.sensors', labelFallback: 'Sensors' },
        { key: 'purpose', labelKey: 'spec.purpose', labelFallback: 'Purpose' },
        { key: 'connectivity', labelKey: 'spec.connectivity', labelFallback: 'Connectivity' },
        { key: 'maxRuntime', labelKey: 'spec.maxRuntime', labelFallback: 'Max Runtime' },
        { key: 'speed', labelKey: 'spec.speed', labelFallback: 'Speed' },
        { key: 'terrain', labelKey: 'spec.terrain', labelFallback: 'Terrain' }
    ];

    specs.forEach(spec => {
        const hasSpec = SCRIPT_COMPARE_ROBOTS.some(robot => robot[spec.key] && robot[spec.key] !== '');
        if (!hasSpec) return;
        const row = document.createElement('tr');
        row.innerHTML = `<td>${t(spec.labelKey, spec.labelFallback)}</td>`;
        SCRIPT_COMPARE_ROBOTS.forEach(robot => {
            row.innerHTML += `<td>${robot[spec.key] || '-'}</td>`;
        });
        table.appendChild(row);
    });
    compareTableEl.appendChild(table);
}

// Advanced Filters (called by main.js)
function _applyAdvancedFilters(robots, additionalFilters) {
    let filteredRobots = [...robots];
    if (additionalFilters.weight) {
        filteredRobots = filteredRobots.filter(robot => {
            const weightText = (robot.weight || '').toLowerCase();
            const weightMatch = weightText.match(/(\d+(\.\d+)?)/);
            if (!weightMatch) return false;
            const weight = parseFloat(weightMatch[0]);
            switch (additionalFilters.weight) {
                case 'light': return weight < 10;
                case 'medium': return weight >= 10 && weight <= 50;
                case 'heavy': return weight > 50;
                default: return true;
            }
        });
    }
    if (additionalFilters.battery) {
        filteredRobots = filteredRobots.filter(robot => {
            const batteryText = (robot.batteryLife || '').toLowerCase();
            const batteryMatch = batteryText.match(/(\d+(\.\d+)?)/);
            if (!batteryMatch) return false;
            const hours = parseFloat(batteryMatch[0]);
            switch (additionalFilters.battery) {
                case 'short': return hours < 2;
                case 'medium': return hours >= 2 && hours <= 5;
                case 'long': return hours > 5;
                default: return true;
            }
        });
    }
    if (additionalFilters.features) {
        filteredRobots = filteredRobots.filter(robot => {
            const features = (robot.features || '').toLowerCase();
            switch (additionalFilters.features) {
                case 'autonomous': return features.includes('autonom') || features.includes('navigat');
                case 'voice': return features.includes('voice') || features.includes('speech');
                case 'ai': return features.includes('ai') || features.includes('intelligen') || features.includes('smart');
                case 'app': return features.includes('app') || features.includes('remote') || features.includes('control');
                default: return true;
            }
        });
    }
    if (additionalFilters.purpose) {
        filteredRobots = filteredRobots.filter(robot => {
            const purpose = (robot.purpose || '').toLowerCase();
            switch (additionalFilters.purpose) {
                case 'home': return purpose.includes('home') || purpose.includes('house');
                case 'industry': return purpose.includes('industr') || purpose.includes('commercial');
                case 'education': return purpose.includes('educat') || purpose.includes('learn');
                case 'entertainment': return purpose.includes('entertain') || purpose.includes('fun');
                case 'research': return purpose.includes('research') || purpose.includes('development');
                default: return true;
            }
        });
    }
    return filteredRobots;
}

// Share
function _generateShareUrl(robot) {
    const baseUrl = window.location.origin + window.location.pathname;
    const robotId = window.createRobotId(robot);
    return `${baseUrl}?robot=${encodeURIComponent(robotId)}`;
}

function _shareRobot(shareType) {
    if (!SCRIPT_CURRENT_ROBOT) return;
    const robotName = SCRIPT_CURRENT_ROBOT.model;
    const manufacturer = SCRIPT_CURRENT_ROBOT.manufacturer;
    const text = `Check out the ${robotName} by ${manufacturer} on Robotics Directory!`;
    const url = window.generateShareUrl(SCRIPT_CURRENT_ROBOT); // global
    let shareUrl = '';
    switch (shareType) {
        case 'twitter': shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`; break;
        case 'facebook': shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`; break;
        case 'whatsapp': shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`; break;
        case 'email': shareUrl = `mailto:?subject=${encodeURIComponent('Check out this robot!')}&body=${encodeURIComponent(text + '\n\n' + url)}`; break;
        case 'link':
            navigator.clipboard.writeText(url)
                .then(() => alert(window.i18n?.t('share.linkCopied', 'Link copied to clipboard!') || 'Link copied to clipboard!'))
                .catch(() => alert(window.i18n?.t('share.linkFailed', 'Failed to copy link.') || 'Failed to copy link.'));
            return;
    }
    if (shareUrl) window.open(shareUrl, '_blank');
    const shareOptions = document.getElementById('shareOptions');
    if (shareOptions) shareOptions.classList.remove('active');
}


// --- DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', async function() {
    // Assign core functions to window object so main.js can use them
    window.createRobotId = _createRobotId;
    window.createRobotCard = _createRobotCardForWindow;
    window.toggleFavorite = _toggleFavorite;
    window.updateFavoritesDisplay = _updateFavoritesDisplay;
    window.updateRobotCardsState = _updateRobotCardsState;
    window.addToCompare = _addToCompare;
    window.removeFromCompare = _removeFromCompare;
    window.updateCompareView = _updateCompareView;
    window.updateCompareTable = _updateCompareTable;
    window.applyAdvancedFilters = _applyAdvancedFilters; // For main.js
    window.generateShareUrl = _generateShareUrl;
    window.shareRobot = _shareRobot;
    // window.showRobotDetails is expected to be in main.js

    // Wait until the main robot data and allRobots are loaded by main.js or csv-loader.js
    while (!window.robotsDataLoaded || !window.allRobots) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }
     _populateCompareRobots(); // Now that allRobots is available

    // DOM Elements
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const favoritesToggle = document.getElementById('favoritesToggle');
    const favoritesSection = document.getElementById('favoritesSection');
    const clearFavorites = document.getElementById('clearFavorites');
    const compareToggle = document.getElementById('compareToggle');
    const compareSection = document.getElementById('compareSection');
    const closeCompare = document.getElementById('closeCompare');
    const clearCompare = document.getElementById('clearCompare');
    const filterToggle = document.querySelector('.filter-toggle');
    const advancedFiltersContainer = document.querySelector('.advanced-filters'); // Renamed for clarity
    const weightFilter = document.getElementById('weightFilter');
    const batteryFilter = document.getElementById('batteryFilter');
    const featuresFilterInput = document.getElementById('featuresFilter'); // Renamed for clarity
    const purposeFilterInput = document.getElementById('purposeFilter'); // Renamed for clarity
    const shareButton = document.getElementById('shareButton');
    const shareOptions = document.getElementById('shareOptions');
    const detailsAddCompare = document.getElementById('detailsAddCompare');


    // --- Initializations ---
    function initDarkMode() {
        const darkModeEnabled = _loadFromLocalStorage('darkMode') === true;
        if (darkModeEnabled) {
            document.body.classList.add('dark-mode');
            if (darkModeToggle) darkModeToggle.checked = true;
            if (darkModeIcon) darkModeIcon.innerHTML = '<i class="fas fa-sun"></i>';
        }
        function _toggleDarkModeState() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            if (darkModeIcon) darkModeIcon.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            if (darkModeToggle) darkModeToggle.checked = isDark;
            _saveToLocalStorage('darkMode', isDark);
        }
        if (darkModeToggle) {
            darkModeToggle.addEventListener('change', _toggleDarkModeState);

            // Make the visual slider part of the switch clickable as well
            const slider = darkModeToggle.parentElement.querySelector('.slider');
            if (slider) {
                slider.style.cursor = 'pointer'; // Add pointer cursor to indicate clickability
                slider.addEventListener('click', function(e) {
                    e.preventDefault(); // Prevent any default span behavior
                    darkModeToggle.click(); // Simulate a click on the checkbox
                });
            }
        }
        const label = document.querySelector('label[for="darkModeToggle"]');
        if (label) {
            label.style.cursor = 'pointer';
            // The click on label already triggers change on checkbox, no need for extra listener unless specific
        }
    }

    function initFavorites() {
        if (favoritesToggle) {
            favoritesToggle.addEventListener('click', function() {
                if (favoritesSection) favoritesSection.classList.toggle('active');
                if (window.updateFavoritesDisplay) window.updateFavoritesDisplay();
            });
        }
        if (clearFavorites) {
            clearFavorites.addEventListener('click', function() {
                SCRIPT_FAVORITES = [];
                _saveToLocalStorage('robotFavorites', SCRIPT_FAVORITES);
                if (window.updateFavoritesDisplay) window.updateFavoritesDisplay();
                if (window.updateRobotCardsState) window.updateRobotCardsState();
            });
        }
        if (window.updateFavoritesDisplay) window.updateFavoritesDisplay(); // Initial display
        if (window.updateRobotCardsState) window.updateRobotCardsState(); // Initial card states
    }

    function initCompare() {
        if (compareToggle) {
            compareToggle.addEventListener('click', function() {
                if (compareSection) compareSection.classList.toggle('active');
                if (window.updateCompareView) window.updateCompareView();
            });
        }
        if (closeCompare) {
            closeCompare.addEventListener('click', function() {
                if (compareSection) compareSection.classList.remove('active');
            });
        }
        if (clearCompare) {
            clearCompare.addEventListener('click', function() {
                SCRIPT_COMPARE_ROBOT_IDS = [];
                SCRIPT_COMPARE_ROBOTS = [];
                _saveCompareRobotIds();
                if (window.updateCompareView) window.updateCompareView();
            });
        }
        if (detailsAddCompare) {
            detailsAddCompare.addEventListener('click', function() {
                if (SCRIPT_CURRENT_ROBOT && window.addToCompare) {
                    window.addToCompare(SCRIPT_CURRENT_ROBOT);
                }
            });
        }
        if (window.updateCompareView) window.updateCompareView(); // Initial display
    }

    const activeAdvancedFilters = { weight: '', battery: '', features: '', purpose: '' };
    function initAdvancedFilters() {
        if (filterToggle) {
            filterToggle.addEventListener('click', function() {
                if (advancedFiltersContainer) advancedFiltersContainer.classList.toggle('active');
                this.classList.toggle('active');
            });
        }
        function handleFilterChange(filterName, value) {
            activeAdvancedFilters[filterName] = value;
            if (window.applyFilters) window.applyFilters(); // This is from main.js
        }
        if (weightFilter) weightFilter.addEventListener('change', (e) => handleFilterChange('weight', e.target.value));
        if (batteryFilter) batteryFilter.addEventListener('change', (e) => handleFilterChange('battery', e.target.value));
        if (featuresFilterInput) featuresFilterInput.addEventListener('change', (e) => handleFilterChange('features', e.target.value));
        if (purposeFilterInput) purposeFilterInput.addEventListener('change', (e) => handleFilterChange('purpose', e.target.value));

        const resetFiltersButton = document.getElementById('resetFilters');
        if (resetFiltersButton) {
            const originalResetClickHandler = resetFiltersButton.onclick;
            resetFiltersButton.onclick = function(event) {
                if (originalResetClickHandler) originalResetClickHandler.call(this, event);
                if (weightFilter) weightFilter.value = '';
                if (batteryFilter) batteryFilter.value = '';
                if (featuresFilterInput) featuresFilterInput.value = '';
                if (purposeFilterInput) purposeFilterInput.value = '';
                activeAdvancedFilters.weight = '';
                activeAdvancedFilters.battery = '';
                activeAdvancedFilters.features = '';
                activeAdvancedFilters.purpose = '';
                // applyFilters() should be called by the originalResetClickHandler if it exists and handles it,
                // or explicitly here if not. Assuming main.js's resetFilters handles re-filtering.
                 if (window.applyFilters) window.applyFilters();
            };
        }
        // Make current advanced filters available for applyAdvancedFilters
        window.getAdditionalFilters = () => activeAdvancedFilters;
    }
    
    // This function is called from main.js and needs access to activeAdvancedFilters
    // So, getAdditionalFilters is provided above.
    // window.applyAdvancedFilters = _applyAdvancedFilters; // Already assigned earlier


    function initShareFeature() {
        if (shareButton) {
            shareButton.addEventListener('click', function(e) {
                e.stopPropagation();
                if (shareOptions) shareOptions.classList.toggle('active');
            });
        }
        document.addEventListener('click', function(e) { // Close on outside click
            if (shareOptions && !shareOptions.contains(e.target) && e.target !== shareButton) {
                shareOptions.classList.remove('active');
            }
        });
        const shareOptionButtons = document.querySelectorAll('.share-option');
        shareOptionButtons.forEach(option => {
            option.addEventListener('click', function() {
                const shareType = this.getAttribute('data-type');
                if (window.shareRobot) window.shareRobot(shareType);
            });
        });
        document.addEventListener('robotDetailsOpened', function(e) { // Listen for custom event from main.js
            SCRIPT_CURRENT_ROBOT = e.detail.robot;
        });
    }

    // Call initializers
    initDarkMode();
    initFavorites();
    initCompare();
    initAdvancedFilters();
    initShareFeature();

    // Final check / update based on loaded data
    if (window.updateRobotCardsState) window.updateRobotCardsState();
    if (window.updateCompareView) window.updateCompareView();

    document.addEventListener('languageChanged', function() {
        const labelText = window.i18n?.t('compare.label', 'Compare') || 'Compare';
        document.querySelectorAll('.compare-checkbox label').forEach(label => {
            label.textContent = labelText;
        });
        if (window.updateCompareTable) window.updateCompareTable();
    });

}); 

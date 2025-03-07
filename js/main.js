document.addEventListener('DOMContentLoaded', function() {
    // Elemente aus dem DOM abrufen
    const robotsGrid = document.getElementById('robotsGrid');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const manufacturerFilter = document.getElementById('manufacturerFilter');
    const priceFilter = document.getElementById('priceFilter');
    const resetFiltersButton = document.getElementById('resetFilters');
    const categoryLinks = document.querySelectorAll('nav a');
    const robotDetails = document.getElementById('robotDetails');
    const closeDetailsButton = document.getElementById('closeDetails');
    const noResults = document.getElementById('noResults');

    // Hersteller für das Filter-Dropdown sammeln
    const manufacturers = new Set();
    allRobots.forEach(robot => {
        manufacturers.add(robot.manufacturer);
    });

    // Hersteller-Filter befüllen
    manufacturers.forEach(manufacturer => {
        const option = document.createElement('option');
        option.value = manufacturer;
        option.textContent = manufacturer;
        manufacturerFilter.appendChild(option);
    });

    // Aktuelle Filter
    let currentFilters = {
        category: 'all',
        search: '',
        manufacturer: '',
        price: ''
    };

    // Roboter anzeigen
    function displayRobots() {
        // Grid leeren
        robotsGrid.innerHTML = '';
        
        // Roboter filtern
        let filteredRobots = allRobots;
        
        // Nach Kategorie filtern
        if (currentFilters.category !== 'all') {
            filteredRobots = filteredRobots.filter(robot => robot.category === currentFilters.category);
        }
        
        // Nach Suchbegriff filtern
        if (currentFilters.search) {
            const searchTerm = currentFilters.search.toLowerCase();
            filteredRobots = filteredRobots.filter(robot => 
                robot.manufacturer.toLowerCase().includes(searchTerm) || 
                robot.model.toLowerCase().includes(searchTerm)
            );
        }
        
        // Nach Hersteller filtern
        if (currentFilters.manufacturer) {
            filteredRobots = filteredRobots.filter(robot => robot.manufacturer === currentFilters.manufacturer);
        }
        
        // Nach Preis filtern
        if (currentFilters.price) {
            filteredRobots = filteredRobots.filter(robot => {
                const price = robot.price.toLowerCase();
                
                switch(currentFilters.price) {
                    case 'low':
                        return price.includes('€') && parseFloat(price.replace(/[^0-9,.]/g, '').replace(',', '.')) < 5000;
                    case 'medium':
                        const priceValue = parseFloat(price.replace(/[^0-9,.]/g, '').replace(',', '.'));
                        return price.includes('€') && priceValue >= 5000 && priceValue <= 50000;
                    case 'high':
                        return price.includes('€') && parseFloat(price.replace(/[^0-9,.]/g, '').replace(',', '.')) > 50000 || 
                               price.includes('$') && parseFloat(price.replace(/[^0-9,.]/g, '').replace(',', '.')) > 50000;
                    case 'request':
                        return price.toLowerCase().includes('request') || price.toLowerCase().includes('anfrage');
                    default:
                        return true;
                }
            });
        }
        
        // Keine Ergebnisse anzeigen
        if (filteredRobots.length === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
        }
        
        // Roboter-Karten erstellen
        filteredRobots.forEach(robot => {
            const robotCard = document.createElement('div');
            robotCard.className = 'robot-card';
            robotCard.dataset.robot = JSON.stringify(robot);
            
            // Platzhalter-Bild verwenden, wenn kein Bild vorhanden ist
            const imageSrc = robot.image || 'images/placeholder.jpg';
            
            // Kategorie-Text
            const categoryText = robot.category === 'humanoid' ? 'Humanoid' : 'Robohund';
            
            // Preis formatieren
            let priceText = robot.price;
            if (priceText.toLowerCase().includes('request') || priceText.toLowerCase().includes('anfrage')) {
                priceText = 'Preis auf Anfrage';
            }
            
            // Specs für die Karte auswählen
            let specsHTML = '';
            if (robot.category === 'humanoid') {
                specsHTML = `
                    <div class="spec-item">${robot.weight}</div>
                    <div class="spec-item">${robot.batteryLife}</div>
                `;
            } else {
                specsHTML = `
                    <div class="spec-item">${robot.ipRating || 'IP-?'}</div>
                    <div class="spec-item">${robot.maxRuntime}</div>
                    <div class="spec-item">${robot.speed || '-'}</div>
                `;
            }
            
            robotCard.innerHTML = `
                <div class="robot-image">
                    <img src="${imageSrc}" alt="${robot.model}">
                    <div class="robot-category">${categoryText}</div>
                </div>
                <div class="robot-info">
                    <h3>${robot.model}</h3>
                    <div class="robot-manufacturer">${robot.manufacturer}</div>
                    <div class="robot-specs">
                        ${specsHTML}
                    </div>
                    <div class="robot-price">${priceText}</div>
                </div>
            `;
            
            // Event-Listener für Klick auf Karte
            robotCard.addEventListener('click', function() {
                showRobotDetails(robot);
            });
            
            robotsGrid.appendChild(robotCard);
        });
    }

    // Roboter-Details anzeigen
    function showRobotDetails(robot) {
        // Details-Elemente abrufen
        const detailsTitle = document.getElementById('detailsTitle');
        const detailsManufacturer = document.getElementById('detailsManufacturer');
        const detailsImage = document.getElementById('detailsImage');
        const detailsSpecs = document.getElementById('detailsSpecs');
        const detailsWebsite = document.getElementById('detailsWebsite');
        
        // Daten einfügen
        detailsTitle.textContent = robot.model;
        detailsManufacturer.textContent = robot.manufacturer;
        
        // Platzhalter-Bild verwenden, wenn kein Bild vorhanden ist
        detailsImage.src = robot.image || 'images/placeholder.jpg';
        detailsImage.alt = robot.model;
        
        // Spezifikationstabelle erstellen
        detailsSpecs.innerHTML = '';
        
        for (const [key, value] of Object.entries(robot.specs)) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${key}</td>
                <td>${value}</td>
            `;
            detailsSpecs.appendChild(row);
        }
        
        // Website-Link setzen
        detailsWebsite.href = robot.website;
        
        // Details-Bereich anzeigen
        robotDetails.classList.add('active');
        
        // Body-Scrolling deaktivieren
        document.body.style.overflow = 'hidden';
    }

    // Details-Bereich schließen
    function closeRobotDetails() {
        robotDetails.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event-Listener für Suche
    searchButton.addEventListener('click', function() {
        currentFilters.search = searchInput.value.trim();
        displayRobots();
    });
    
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            currentFilters.search = searchInput.value.trim();
            displayRobots();
        }
    });

    // Event-Listener für Hersteller-Filter
    manufacturerFilter.addEventListener('change', function() {
        currentFilters.manufacturer = this.value;
        displayRobots();
    });

    // Event-Listener für Preis-Filter
    priceFilter.addEventListener('change', function() {
        currentFilters.price = this.value;
        displayRobots();
    });

    // Event-Listener für Filter zurücksetzen
    resetFiltersButton.addEventListener('click', function() {
        searchInput.value = '';
        manufacturerFilter.value = '';
        priceFilter.value = '';
        
        currentFilters = {
            category: currentFilters.category,
            search: '',
            manufacturer: '',
            price: ''
        };
        
        displayRobots();
    });

    // Event-Listener für Kategorie-Links
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Aktiven Link markieren
            categoryLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Kategorie-Filter setzen
            currentFilters.category = this.dataset.category;
            displayRobots();
        });
    });

    // Event-Listener für Schließen-Button
    closeDetailsButton.addEventListener('click', closeRobotDetails);

    // Event-Listener für Klick außerhalb des Detail-Bereichs
    robotDetails.addEventListener('click', function(event) {
        if (event.target === robotDetails) {
            closeRobotDetails();
        }
    });

    // Escape-Taste zum Schließen der Details
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && robotDetails.classList.contains('active')) {
            closeRobotDetails();
        }
    });

    // Initiale Anzeige aller Roboter
    displayRobots();
});

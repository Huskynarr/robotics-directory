(function() {
    const translations = {
        en: {
            "app.title": "Robotics Directory",
            "lang.label": "Language",
            "nav.all": "All",
            "nav.humanoid": "Humanoids",
            "nav.robodog": "Dogs",
            "nav.table": "Table",
            "nav.entertainment": "Entertainment",
            "nav.educational": "Educational",
            "nav.household": "Household",
            "nav.vacuum": "Vacuum",
            "hero.title": "Discover the World of Robotics",
            "hero.subtitle": "A comprehensive collection of robots, categorized and interactively searchable",
            "search.placeholder": "Search for robots, manufacturers...",
            "filters.manufacturer": "Manufacturer:",
            "filters.category": "Category:",
            "filters.price": "Price:",
            "filters.sort": "Sort by:",
            "filters.all": "All",
            "filters.price.low": "Under $5,000",
            "filters.price.medium": "$5,000 - $50,000",
            "filters.price.high": "Over $50,000",
            "filters.price.request": "On Request",
            "filters.sort.default": "Default",
            "filters.sort.name": "Name",
            "filters.sort.manufacturer": "Manufacturer",
            "filters.reset": "Reset Filters",
            "filters.advanced": "Advanced Filters",
            "filters.weight.light": "Light (< 10 kg)",
            "filters.weight.medium": "Medium (10-50 kg)",
            "filters.weight.heavy": "Heavy (> 50 kg)",
            "filters.battery.short": "Short (< 2 hours)",
            "filters.battery.medium": "Medium (2-5 hours)",
            "filters.battery.long": "Long (> 5 hours)",
            "filters.features.autonomous": "Autonomous Navigation",
            "filters.features.voice": "Voice Control",
            "filters.features.ai": "AI Powered",
            "filters.features.app": "App Control",
            "filters.purpose.home": "Home",
            "filters.purpose.industry": "Industry",
            "filters.purpose.education": "Education",
            "filters.purpose.entertainment": "Entertainment",
            "filters.purpose.research": "Research",
            "favorites.title": "Your Favorite Robots",
            "favorites.clear": "Clear All",
            "favorites.empty": "You haven't added any favorites yet. Click the heart icon on a robot card to add it to your favorites.",
            "results.empty": "No results found. Please try different search criteria.",
            "details.specs": "Specifications",
            "details.video": "Video",
            "details.website": "Official Website",
            "details.addCompare": "Add to Compare",
            "details.share": "Share",
            "share.twitter": "Twitter",
            "share.facebook": "Facebook",
            "share.whatsapp": "WhatsApp",
            "share.email": "Email",
            "share.copy": "Copy Link",
            "share.linkCopied": "Link copied to clipboard!",
            "share.linkFailed": "Failed to copy link.",
            "compare.title": "Compare Robots",
            "compare.close": "Close",
            "compare.clear": "Clear All",
            "compare.label": "Compare",
            "compare.minimum": "Add at least two robots to compare them.",
            "compare.specification": "Specification",
            "seo.index.title": "Robot Index",
            "seo.index.subtitle": "All robots listed in the directory.",
            "spec.manufacturer": "Manufacturer",
            "spec.price": "Price",
            "spec.weight": "Weight",
            "spec.batteryLife": "Battery Life",
            "spec.features": "Features",
            "spec.hands": "Hands",
            "spec.sensors": "Sensors",
            "spec.ipRating": "IP Rating",
            "spec.maxRuntime": "Max Runtime",
            "spec.payload": "Payload",
            "spec.speed": "Speed",
            "spec.terrain": "Terrain",
            "spec.purpose": "Purpose",
            "spec.connectivity": "Connectivity",
            "spec.ageGroup": "Age Group",
            "footer.subtitle": "A comprehensive collection of robots",
            "footer.essentials": "Essentials",
            "footer.shops": "Shops",
            "footer.link.github": "GitHub Repository",
            "footer.link.contribute": "Contribute",
            "footer.link.myrobotcenter": "MyRobotCenter",
            "footer.link.mybotshop": "MyBotShop",
            "footer.link.huskynarr": "Huskynarr",
            "footer.link.contact": "Contact",
            "footer.copyright": "© 2025 Robotics Directory.",
            "footer.madeWith": "Made with",
            "footer.ai": "and AI Power by",
            "footer.by": "Huskynarr & contributors.",
            "footer.disclaimer": "All images and trademarks are property of their respective owners."
        },
        de: {
            "app.title": "Robotik Verzeichnis",
            "lang.label": "Sprache",
            "nav.all": "Alle",
            "nav.humanoid": "Humanoide",
            "nav.robodog": "Roboterhunde",
            "nav.table": "Tisch",
            "nav.entertainment": "Unterhaltung",
            "nav.educational": "Bildung",
            "nav.household": "Haushalt",
            "nav.vacuum": "Staubsauger",
            "hero.title": "Entdecke die Welt der Robotik",
            "hero.subtitle": "Eine umfassende Sammlung von Robotern, kategorisiert und interaktiv durchsuchbar",
            "search.placeholder": "Suche nach Robotern, Herstellern...",
            "filters.manufacturer": "Hersteller:",
            "filters.category": "Kategorie:",
            "filters.price": "Preis:",
            "filters.sort": "Sortieren nach:",
            "filters.all": "Alle",
            "filters.price.low": "Unter $5,000",
            "filters.price.medium": "$5,000 - $50,000",
            "filters.price.high": "Uber $50,000",
            "filters.price.request": "Auf Anfrage",
            "filters.sort.default": "Standard",
            "filters.sort.name": "Name",
            "filters.sort.manufacturer": "Hersteller",
            "filters.reset": "Filter zuruecksetzen",
            "filters.advanced": "Erweiterte Filter",
            "filters.weight.light": "Leicht (< 10 kg)",
            "filters.weight.medium": "Mittel (10-50 kg)",
            "filters.weight.heavy": "Schwer (> 50 kg)",
            "filters.battery.short": "Kurz (< 2 Stunden)",
            "filters.battery.medium": "Mittel (2-5 Stunden)",
            "filters.battery.long": "Lang (> 5 Stunden)",
            "filters.features.autonomous": "Autonome Navigation",
            "filters.features.voice": "Sprachsteuerung",
            "filters.features.ai": "KI-basiert",
            "filters.features.app": "App-Steuerung",
            "filters.purpose.home": "Zuhause",
            "filters.purpose.industry": "Industrie",
            "filters.purpose.education": "Bildung",
            "filters.purpose.entertainment": "Unterhaltung",
            "filters.purpose.research": "Forschung",
            "favorites.title": "Deine Favoriten",
            "favorites.clear": "Alle loeschen",
            "favorites.empty": "Du hast noch keine Favoriten. Klicke das Herz, um einen Roboter zu speichern.",
            "results.empty": "Keine Ergebnisse gefunden. Bitte andere Suchkriterien probieren.",
            "details.specs": "Spezifikationen",
            "details.video": "Video",
            "details.website": "Offizielle Website",
            "details.addCompare": "Zum Vergleich hinzufuegen",
            "details.share": "Teilen",
            "share.twitter": "Twitter",
            "share.facebook": "Facebook",
            "share.whatsapp": "WhatsApp",
            "share.email": "E-Mail",
            "share.copy": "Link kopieren",
            "share.linkCopied": "Link in die Zwischenablage kopiert!",
            "share.linkFailed": "Link konnte nicht kopiert werden.",
            "compare.title": "Roboter vergleichen",
            "compare.close": "Schliessen",
            "compare.clear": "Alles loeschen",
            "compare.label": "Vergleichen",
            "compare.minimum": "Bitte mindestens zwei Roboter zum Vergleich hinzufuegen.",
            "compare.specification": "Spezifikation",
            "seo.index.title": "Roboterindex",
            "seo.index.subtitle": "Alle Roboter im Verzeichnis.",
            "spec.manufacturer": "Hersteller",
            "spec.price": "Preis",
            "spec.weight": "Gewicht",
            "spec.batteryLife": "Batterielaufzeit",
            "spec.features": "Funktionen",
            "spec.hands": "Haende",
            "spec.sensors": "Sensoren",
            "spec.ipRating": "IP Bewertung",
            "spec.maxRuntime": "Max. Laufzeit",
            "spec.payload": "Nutzlast",
            "spec.speed": "Geschwindigkeit",
            "spec.terrain": "Gelaende",
            "spec.purpose": "Zweck",
            "spec.connectivity": "Konnektivitaet",
            "spec.ageGroup": "Altersgruppe",
            "footer.subtitle": "Eine umfassende Sammlung von Robotern",
            "footer.essentials": "Essentielles",
            "footer.shops": "Shops",
            "footer.link.github": "GitHub Repository",
            "footer.link.contribute": "Mitmachen",
            "footer.link.myrobotcenter": "MyRobotCenter",
            "footer.link.mybotshop": "MyBotShop",
            "footer.link.huskynarr": "Huskynarr",
            "footer.link.contact": "Kontakt",
            "footer.copyright": "© 2025 Robotics Directory.",
            "footer.madeWith": "Erstellt mit",
            "footer.ai": "und KI-Unterstuetzung von",
            "footer.by": "Huskynarr & Mitwirkende.",
            "footer.disclaimer": "Alle Bilder und Marken gehoeren ihren jeweiligen Eigentuemern.",
        }
    };

    function t(key, fallback) {
        const lang = window.i18n?.lang || "en";
        const table = translations[lang] || translations.en;
        return table[key] || fallback || key;
    }

    function applyTranslations(lang) {
        const table = translations[lang] || translations.en;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (table[key]) {
                el.textContent = table[key];
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (table[key]) {
                el.setAttribute('placeholder', table[key]);
            }
        });
        document.documentElement.lang = lang;
        document.title = table["app.title"] || document.title;
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }

    function setLanguage(lang) {
        const safeLang = translations[lang] ? lang : 'en';
        window.i18n.lang = safeLang;
        localStorage.setItem('lang', safeLang);
        applyTranslations(safeLang);
    }

    function getInitialLanguage() {
        const stored = localStorage.getItem('lang');
        if (stored && translations[stored]) return stored;
        const browser = navigator.language || 'en';
        return browser.toLowerCase().startsWith('de') ? 'de' : 'en';
    }

    window.i18n = {
        lang: 'en',
        t,
        setLanguage,
        applyTranslations
    };

    document.addEventListener('DOMContentLoaded', () => {
        const initial = getInitialLanguage();
        window.i18n.lang = initial;
        const select = document.getElementById('languageSelect');
        if (select) {
            select.value = initial;
            select.addEventListener('change', () => setLanguage(select.value));
        }
        applyTranslations(initial);
    });
})();

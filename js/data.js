// Roboterdaten aus den README-Tabellen
const robotsData = {
    // Humanoide Roboter
    humanoid: [
        {
            manufacturer: "Ameca",
            model: "Ameca",
            price: "Prototype, not for sale",
            weight: "~50 kg",
            batteryLife: "~8 hours",
            hands: "Articulated fingers",
            website: "https://www.engineeredarts.co.uk/ameca/",
            image: "images/humanoid/ameca.jpg",
            category: "humanoid",
            specs: {
                "Gewicht": "~50 kg",
                "Akkulaufzeit": "~8 Stunden",
                "Hände/Greifer": "Artikulierte Finger",
                "Preis/Hinweise": "Prototyp, nicht zum Verkauf"
            }
        },
        {
            manufacturer: "Agility Robotics",
            model: "Digit",
            price: "~250,000 USD",
            weight: "~40 kg",
            batteryLife: "~3 hours",
            hands: "None (designed for legs only)",
            website: "https://www.agilityrobotics.com/",
            image: "images/humanoid/digit.jpg",
            category: "humanoid",
            specs: {
                "Gewicht": "~40 kg",
                "Akkulaufzeit": "~3 Stunden",
                "Hände/Greifer": "Keine (nur für Beine konzipiert)",
                "Preis/Hinweise": "~250.000 USD"
            }
        },
        {
            manufacturer: "Apptronik",
            model: "Apollo",
            price: "Not disclosed",
            weight: "~70 kg",
            batteryLife: "~4 hours",
            hands: "Modular hands",
            website: "https://www.apptronik.com/",
            image: "images/humanoid/apollo.jpg",
            category: "humanoid",
            specs: {
                "Gewicht": "~70 kg",
                "Akkulaufzeit": "~4 Stunden",
                "Hände/Greifer": "Modulare Hände",
                "Preis/Hinweise": "Nicht veröffentlicht"
            }
        },
        {
            manufacturer: "Boston Dynamics",
            model: "Atlas",
            price: "Not commercially available",
            weight: "~90 kg",
            batteryLife: "N/A",
            hands: "None",
            website: "https://www.bostondynamics.com/",
            image: "images/humanoid/atlas.jpg",
            category: "humanoid",
            specs: {
                "Gewicht": "~90 kg",
                "Akkulaufzeit": "Nicht angegeben",
                "Hände/Greifer": "Keine",
                "Preis/Hinweise": "Nicht kommerziell erhältlich"
            }
        },
        {
            manufacturer: "Boston Dynamics",
            model: "E-Atlas",
            price: "Not disclosed",
            weight: "~85 kg",
            batteryLife: "N/A",
            hands: "None",
            website: "https://www.bostondynamics.com/",
            image: "images/humanoid/e-atlas.jpg",
            category: "humanoid",
            specs: {
                "Gewicht": "~85 kg",
                "Akkulaufzeit": "Nicht angegeben",
                "Hände/Greifer": "Keine",
                "Preis/Hinweise": "Nicht veröffentlicht"
            }
        },
        {
            manufacturer: "Figure",
            model: "Figure 02",
            price: "Prototype phase",
            weight: "~60 kg",
            batteryLife: "~6 hours",
            hands: "Articulated hands",
            website: "https://www.figure.ai/",
            image: "images/humanoid/figure02.jpg",
            category: "humanoid",
            specs: {
                "Gewicht": "~60 kg",
                "Akkulaufzeit": "~6 Stunden",
                "Hände/Greifer": "Artikulierte Hände",
                "Preis/Hinweise": "Prototypphase"
            }
        },
        {
            manufacturer: "Fourier Intelligence",
            model: "GR-1",
            price: "~90,000 USD",
            weight: "~55 kg",
            batteryLife: "~4.5 hours",
            hands: "Grippers or modular hands",
            website: "https://www.intelligentfourier.com/",
            image: "images/humanoid/gr1.jpg",
            category: "humanoid",
            specs: {
                "Gewicht": "~55 kg",
                "Akkulaufzeit": "~4,5 Stunden",
                "Hände/Greifer": "Greifer oder modulare Hände",
                "Preis/Hinweise": "~90.000 USD"
            }
        },
        {
            manufacturer: "Hanson Robotics",
            model: "Sophia",
            price: "Not disclosed",
            weight: "~50 kg",
            batteryLife: "~8 hours",
            hands: "Basic articulated hands",
            website: "https://www.hansonrobotics.com/",
            image: "images/humanoid/sophia.jpg",
            category: "humanoid",
            specs: {
                "Gewicht": "~50 kg",
                "Akkulaufzeit": "~8 Stunden",
                "Hände/Greifer": "Einfache artikulierte Hände",
                "Preis/Hinweise": "Nicht veröffentlicht"
            }
        },
        {
            manufacturer: "Honda",
            model: "ASIMO",
            price: "Discontinued (non-commercial)",
            weight: "~54 kg",
            batteryLife: "~1 hour",
            hands: "Advanced articulated hands",
            website: "https://global.honda/innovation/robotics/ASIMO.html",
            image: "images/humanoid/asimo.jpg",
            category: "humanoid",
            specs: {
                "Gewicht": "~54 kg",
                "Akkulaufzeit": "~1 Stunde",
                "Hände/Greifer": "Fortschrittliche artikulierte Hände",
                "Preis/Hinweise": "Eingestellt (nicht kommerziell)"
            }
        },
        {
            manufacturer: "Tesla",
            model: "Optimus",
            price: "Prototype stage",
            weight: "~73 kg",
            batteryLife: "~8 hours",
            hands: "Modular manipulators",
            website: "https://www.tesla.com/",
            image: "images/humanoid/optimus.jpg",
            category: "humanoid",
            specs: {
                "Gewicht": "~73 kg",
                "Akkulaufzeit": "~8 Stunden",
                "Hände/Greifer": "Modulare Manipulatoren",
                "Preis/Hinweise": "Prototypphase"
            }
        },
        {
            manufacturer: "Unitree",
            model: "H1",
            price: "~90,000 USD",
            weight: "~55 kg",
            batteryLife: "~6 hours",
            hands: "Advanced grippers",
            website: "https://www.unitree.com/",
            image: "images/humanoid/h1.jpg",
            category: "humanoid",
            specs: {
                "Gewicht": "~55 kg",
                "Akkulaufzeit": "~6 Stunden",
                "Hände/Greifer": "Fortschrittliche Greifer",
                "Preis/Hinweise": "~90.000 USD"
            }
        },
        {
            manufacturer: "Xiaomi",
            model: "CyberOne",
            price: "Concept, price not disclosed",
            weight: "~52 kg",
            batteryLife: "~5 hours",
            hands: "Basic manipulators",
            website: "https://www.mi.com/global/",
            image: "images/humanoid/cyberone.jpg",
            category: "humanoid",
            specs: {
                "Gewicht": "~52 kg",
                "Akkulaufzeit": "~5 Stunden",
                "Hände/Greifer": "Einfache Manipulatoren",
                "Preis/Hinweise": "Konzept, Preis nicht veröffentlicht"
            }
        }
    ],
    
    // Roboterhunde
    robodog: [
        {
            manufacturer: "Anybotics",
            model: "ANYmal",
            ipRating: "IP65",
            maxRuntime: "120 min",
            payloadRunning: "10 kg",
            payloadStanding: "-",
            speed: "1 m/s",
            hardware: "Rugged design, versatile applications",
            price: "Price on request",
            website: "https://www.anybotics.com/",
            image: "images/robodog/anymal.jpg",
            category: "robodog",
            specs: {
                "IP-Schutzart": "IP65",
                "Max. Laufzeit": "120 min",
                "Nutzlast (laufend)": "10 kg",
                "Nutzlast (stehend)": "-",
                "Geschwindigkeit": "1 m/s",
                "Hardware": "Robustes Design, vielseitige Anwendungen",
                "Preis": "Preis auf Anfrage"
            }
        },
        {
            manufacturer: "Boston Dynamics",
            model: "Spot",
            ipRating: "IP54",
            maxRuntime: "90 min",
            payloadRunning: "14 kg",
            payloadStanding: "-",
            speed: "1.6 m/s",
            hardware: "Advanced mobility, sensors, SDK",
            price: "$74,500",
            website: "https://www.bostondynamics.com/spot",
            image: "images/robodog/spot.jpg",
            category: "robodog",
            specs: {
                "IP-Schutzart": "IP54",
                "Max. Laufzeit": "90 min",
                "Nutzlast (laufend)": "14 kg",
                "Nutzlast (stehend)": "-",
                "Geschwindigkeit": "1,6 m/s",
                "Hardware": "Fortschrittliche Mobilität, Sensoren, SDK",
                "Preis": "$74.500"
            }
        },
        {
            manufacturer: "Ghost Robotics",
            model: "Spirit",
            ipRating: "IP68",
            maxRuntime: "180 min",
            payloadRunning: "15 kg",
            payloadStanding: "25 kg",
            speed: "2.5 m/s",
            hardware: "Adaptable, rugged for extreme terrains",
            price: "Price on request",
            website: "https://www.ghostrobotics.io/",
            image: "images/robodog/spirit.jpg",
            category: "robodog",
            specs: {
                "IP-Schutzart": "IP68",
                "Max. Laufzeit": "180 min",
                "Nutzlast (laufend)": "15 kg",
                "Nutzlast (stehend)": "25 kg",
                "Geschwindigkeit": "2,5 m/s",
                "Hardware": "Anpassungsfähig, robust für extreme Gelände",
                "Preis": "Preis auf Anfrage"
            }
        },
        {
            manufacturer: "Unitree",
            model: "Go1",
            ipRating: "IP54",
            maxRuntime: "120 min",
            payloadRunning: "30 kg",
            payloadStanding: "-",
            speed: "1.5 m/s",
            hardware: "Terrain-capable, customizable add-ons",
            price: "€3,300",
            website: "https://www.unitree.com/",
            image: "images/robodog/go1.jpg",
            category: "robodog",
            specs: {
                "IP-Schutzart": "IP54",
                "Max. Laufzeit": "120 min",
                "Nutzlast (laufend)": "30 kg",
                "Nutzlast (stehend)": "-",
                "Geschwindigkeit": "1,5 m/s",
                "Hardware": "Geländefähig, anpassbare Erweiterungen",
                "Preis": "€3.300"
            }
        },
        {
            manufacturer: "Unitree",
            model: "Go2",
            ipRating: "IP54",
            maxRuntime: "120 min",
            payloadRunning: "30 kg",
            payloadStanding: "-",
            speed: "2 m/s",
            hardware: "Improved speed, customizable add-ons",
            price: "€1,500",
            website: "https://www.unitree.com/",
            image: "images/robodog/go2.jpg",
            category: "robodog",
            specs: {
                "IP-Schutzart": "IP54",
                "Max. Laufzeit": "120 min",
                "Nutzlast (laufend)": "30 kg",
                "Nutzlast (stehend)": "-",
                "Geschwindigkeit": "2 m/s",
                "Hardware": "Verbesserte Geschwindigkeit, anpassbare Erweiterungen",
                "Preis": "€1.500"
            }
        },
        {
            manufacturer: "Xiaomi",
            model: "Cyberdog",
            ipRating: "-",
            maxRuntime: "150 min",
            payloadRunning: "3 kg",
            payloadStanding: "-",
            speed: "3.2 m/s",
            hardware: "Customizable add-ons",
            price: "€1,300",
            website: "https://www.mi.com/",
            image: "images/robodog/cyberdog.jpg",
            category: "robodog",
            specs: {
                "IP-Schutzart": "-",
                "Max. Laufzeit": "150 min",
                "Nutzlast (laufend)": "3 kg",
                "Nutzlast (stehend)": "-",
                "Geschwindigkeit": "3,2 m/s",
                "Hardware": "Anpassbare Erweiterungen",
                "Preis": "€1.300"
            }
        },
        {
            manufacturer: "Xiaomi",
            model: "Cyberdog 2",
            ipRating: "IP68",
            maxRuntime: "120 min",
            payloadRunning: "-",
            payloadStanding: "-",
            speed: "-",
            hardware: "Improved mobility, enhanced AI",
            price: "€1,640",
            website: "https://www.mi.com/",
            image: "images/robodog/cyberdog2.jpg",
            category: "robodog",
            specs: {
                "IP-Schutzart": "IP68",
                "Max. Laufzeit": "120 min",
                "Nutzlast (laufend)": "-",
                "Nutzlast (stehend)": "-",
                "Geschwindigkeit": "-",
                "Hardware": "Verbesserte Mobilität, erweiterte KI",
                "Preis": "€1.640"
            }
        }
    ]
};

// Alle Roboter in einem Array zusammenfassen
const allRobots = [...robotsData.humanoid, ...robotsData.robodog];

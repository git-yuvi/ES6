//LearnJSON
const stats = [
    {
        "country": "india",
        "batsman": [
            {
                "name": "virat kohli",
                "formats": {
                    "test": {
                        "matches": 100,
                        "innings": 169,
                        "runs": 8007,
                        "avg": 50.4
                    },
                    "odi": {
                        "matches": 260,
                        "innings": 251,
                        "runs": 12311,
                        "avg": 58.1
                    },
                    "t20": {
                        "matches": 97,
                        "innings": 89,
                        "runs": 3296,
                        "avg": 51.5
                    }
                }
            },
            {
                "name": "rohit sharma",
                "formats": {
                    "test": {
                        "matches": 44,
                        "innings": 75,
                        "runs": 3076,
                        "avg": 46.6
                    },
                    "odi": {
                        "matches": 230,
                        "innings": 223,
                        "runs": 9283,
                        "avg": 48.6
                    },
                    "t20": {
                        "matches": 125,
                        "innings": 117,
                        "runs": 3313,
                        "avg": 32.5
                    }
                }
            },
            {
                "name": "ms dhoni",
                "formats": {
                    "test": {
                        "matches": 90,
                        "innings": 144,
                        "runs": 4876,
                        "avg": 37.6
                    },
                    "odi": {
                        "matches": 350,
                        "innings": 297,
                        "runs": 10773,
                        "avg": 50.6
                    },
                    "t20": {
                        "matches": 98,
                        "innings": 85,
                        "runs": 1617,
                        "avg": 38.1
                    }
                }
            }
        ],
    }
];

const indiaBatsmen = stats[0].batsman; // Extract batsman data for India

// Sort the batsmen by test average in ascending order
indiaBatsmen.sort((a, b) => a.formats.test.avg - b.formats.test.avg);

// Display the sorted batsmen in the console
console.log("Batsmen sorted by Test average (ascending order):");
indiaBatsmen.forEach((batsman) => {
    console.log(`Name: ${batsman.name}, Test Avg: ${batsman.formats.test.avg}`);
});

// If you want to sort in descending order, you can reverse the order after sorting
indiaBatsmen.sort((a, b) => b.formats.test.avg - a.formats.test.avg);

// Display the sorted batsmen in the console
console.log("Batsmen sorted by Test average (descending order):");
indiaBatsmen.forEach((batsman) => {
    console.log(`Name: ${batsman.name}, Test Avg: ${batsman.formats.test.avg}`);
});

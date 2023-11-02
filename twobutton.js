const batterButton = document.getElementById("batter-button");
const bowlerButton = document.getElementById("bowler-button");
const resetButton = document.getElementById("reset-button");
const output = document.getElementById("output");

let currentData = null;

batterButton.addEventListener("click", () => {
    currentData = "batsman";
    displayData();
});

bowlerButton.addEventListener("click", () => {
    currentData = "bowlers";
    displayData();
});

resetButton.addEventListener("click", () => {
    currentData = null;
    output.innerHTML = "";
});

function displayData() {
    output.innerHTML = "";

    if (currentData === null) {
        return;
    }

    for (const country of stats) {
        output.innerHTML += `<h2>${country.country} ${currentData}:</h2>`;
        for (const player of country[currentData]) {
            output.innerHTML += `<h3>${player.name}:</h3>`;
            output.innerHTML += "<ul>";

            for (const format in player.formats) {
                output.innerHTML += `<li>${format} - Matches: ${player.formats[format].matches}, Runs: ${player.formats[format].runs}</li>`;
            }

            output.innerHTML += "</ul>";
        }
    }
}

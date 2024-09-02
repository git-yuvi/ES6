//fivebuttons 
 const output = document.getElementById('output');
 
 function displayData(data) {
   output.textContent = JSON.stringify(data, null, 2);
 }
 
 function resetData() {
   output.textContent = '';
 }
 
 document.getElementById('batsmanBtn').addEventListener('click', () => {
   displayData(stats.map(country => country.batsman));
 });
 
 document.getElementById('bowlerBtn').addEventListener('click', () => {
   displayData(stats.map(country => country.bowlers));
 });
 
 document.getElementById('resetBtn').addEventListener('click', resetData);
 
 document.getElementById('sortAverageBtn').addEventListener('click', () => {
   const sortedBatsmen = stats
     .map(country => country.batsman)
     .flat()
     .filter(player => player.formats.test.avg)
     .sort((a, b) => b.formats.test.avg - a.formats.test.avg);
 
   displayData(sortedBatsmen);
 });
 
 document.getElementById('noWicketsBtn').addEventListener('click', () => {
   const filteredPlayers = stats.map(country => ({
     batsman: country.batsman.filter(player => !player.formats.test.wickets),
     allrounders: country.allrounders.filter(player => !player.formats.test.wickets),
   }));
 
   displayData(filteredPlayers);
 });

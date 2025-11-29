//AverageData
const allBatsmen = stats.reduce((acc, country) => {
   return acc.concat(country.batsman);
 }, []);
 
 const sortedBatsmen = allBatsmen.sort((a, b) => {
   return b.formats.test.avg - a.formats.test.avg;
 });
 
 // Display the sorted batsman details
 sortedBatsmen.forEach((batsman, index) => {
   console.log(`#${index + 1}`);
   console.log(`Name: ${batsman.name}`);
   console.log(`Country: ${stats.find((country) => country.batsman.includes(batsman)).country}`);
   console.log("Test Stats:");
   console.log(`  Matches: ${batsman.formats.test.matches}`);
   console.log(`  Innings: ${batsman.formats.test.innings}`);
   console.log(`  Runs: ${batsman.formats.test.runs}`);
   console.log(`  Average: ${batsman.formats.test.avg}`);
   console.log("\n");
 });

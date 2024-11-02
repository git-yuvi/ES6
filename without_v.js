//Function to filter and display batsmen and all-rounders without wickets
function displayBatsmenAndAllroundersWithoutWickets(data) {
  data.forEach((country) => {
    console.log(`Country: ${country.country}`);
    
    // Display Batsmen
    console.log('Batsmen:');
    country.batsman.forEach((player) => {
      const { name, formats } = player;
      const { test, odi, t20 } = formats;
      console.log(`Name: ${name}`);
      console.log(`Test: Matches: ${test.matches}, Innings: ${test.innings}, Runs: ${test.runs}, Avg: ${test.avg}`);
      console.log(`ODI: Matches: ${odi.matches}, Innings: ${odi.innings}, Runs: ${odi.runs}, Avg: ${odi.avg}`);
      console.log(`T20: Matches: ${t20.matches}, Innings: ${t20.innings}, Runs: ${t20.runs}, Avg: ${t20.avg}`);
    });
    
    // Display All-rounders without wickets
    console.log('All-rounders:');
    country.allrounders.forEach((player) => {
      const { name, formats } = player;
      const { test, odi, t20 } = formats;
      console.log(`Name: ${name}`);
      console.log(`Test: Matches: ${test.matches}, Innings: ${test.innings}, Runs: ${test.runs}, Avg: ${test.avg}`);
      console.log(`ODI: Matches: ${odi.matches}, Innings: ${odi.innings}, Runs: ${odi.runs}, Avg: ${odi.avg}`);
      console.log(`T20: Matches: ${t20.matches}, Innings: ${t20.innings}, Runs: ${t20.runs}, Avg: ${t20.avg}`);
    });

    console.log('\n');
  });
}

// Call the function to display the data
displayBatsmenAndAllroundersWithoutWickets(stats);

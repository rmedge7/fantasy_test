// Make an HTTP GET request to the Sleeper API
fetch('https://api.sleeper.app/v1/league/997862686069198848/rosters')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // The 'data' variable now contains the most recent data from the API
    // You can work with this data as needed

    // For example, to get the team data array, you can access it like this:
    const teams = data;

    // Now you can use the 'teams' array in your code.
    console.log(teams);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

const teams = [
    // Your team data here...
];

function createStandingsTable(teams) {
    // Sort the teams based on wins and then losses
    teams.sort((a, b) => {
        if (a.settings.wins !== b.settings.wins) {
            return b.settings.wins - a.settings.wins;
        } else {
            return a.settings.losses - b.settings.losses;
        }
    });

    // Create an HTML table
    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Team</th>
            <th>Wins</th>
            <th>Losses</th>
        </tr>
    `;

    // Add each team's data to the table
    teams.forEach((team, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}. Team ${index + 1}</td>
            <td>${team.settings.wins}</td>
            <td>${team.settings.losses}</td>
        `;
        table.appendChild(row);
    });

    return table;
}

// Get the container where you want to display the table
const container = document.getElementById('standings-container');

// Create and append the table to the container
container.appendChild(createStandingsTable(teams));

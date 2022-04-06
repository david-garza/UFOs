// import the data from data.js
const tableData = data;

// Rerference the HTML table using d3
var tbody = d3.select("tbody");

// Function to build the table, pulls the data from the data.js array
function buildTable(data){
    // Clear table
    tbody.html("");
}

data.forEach((dataRow) => {
    // HTML table row tag
    let row = tbody.append("tr");

    // HTML row item tag
    Object.values(dataRow).forEach((val) => {

        // Pulls text from the object and adds a td tag.
        let cell = row.append("td");
        cell.text(val);
    });
});
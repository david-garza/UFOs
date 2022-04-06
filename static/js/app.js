// import the data from data.js
const tableData = data;

// Rerference the HTML table using d3
var tbody = d3.select("tbody");

// Function to build the table, pulls the data from the data.js array
function buildTable(data){
    // Clear table
    tbody.html("");

    // Function to add rows and populate rows with data
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

}

// Date that handles button click for data filtering
function handleClick() {

     // look for id="datetime"
    let date = d3.select("#datetime").property("value");

    // Default filter, whole data table
    let filteredData = tableData;

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Build table using the filtered data
    buildTable(filteredData);
}

// Click handling call to run handleClick
d3.selectAll("#filter-btn").on("click",handleClick);

// Default table for first load of page
buildTable(tableData);
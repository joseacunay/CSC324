/********************************************************************
 * 
 * Your introductory remarks go here.
 * 
 *******************************************************************/

 // The array of objects, one object for each artist.
 
// Array from artics. 
const artists = [
  { name: "Ms Scandalous", birthYear: 1985, link: "https://www.youtube.com/watch?v=2FPivlfvxu0" },
  { name: "Juggy D", birthYear: 1981, link: "https://www.youtube.com/watch?v=1jAc_-FVjdI" },
  { name: "Sukhbir Singh", birthYear: 1969, link: "https://www.youtube.com/watch?v=HiprNF9Jad0" },
  { name: "Abrar-ul-Haq", birthYear: 1989, link: "https://www.youtube.com/watch?v=-lnnVIP7FEc" },
  { name: "Rishi Rich", birthYear: 1970, link: "https://www.youtube.com/watch?v=O95-w2gACuA" }
];

// Select the table using its ID
const table = document.getElementById("bhangra"); //Select the HTML table with the id="bhangra" 
// attribute and save it to the table variable. This allows us to manipulate the table from JavaScript.
// Similiar to QuerySelector


// Create the table header
const headerRow = document.createElement("tr"); // Create a header row
for (let key of Object.keys(artists[0])) {
  const th = document.createElement("th");
  th.textContent = key;
  headerRow.appendChild(th);
}
table.appendChild(headerRow);

// Fill the table with the artists' data

for (let artist of artists) {
  const row = document.createElement("tr"); // For each artist, create a new row (<tr>) to enter their data.

  for (let key in artist) {
    const cell = document.createElement("td");

 // If the property is "link", create a clickable link
 if (key === "link") { // Check: is the current key called "link"?
  const a = document.createElement("a"); // Create a new <a> (link) element
  a.href = artist[key]; // Set the link’s address (URL)
  a.textContent = "Listen";// Set the text that will show in the link
  a.target = "_blank";// Make the link open in a new tab
  cell.appendChild(a);// Add the link inside the table cell
} else {                                
  cell.textContent = artist[key];// If the key is not "link", just show the value (like name or birth year)
}

row.appendChild(cell);// Add the cell to the current table row

table.appendChild(row);// Add the row to the table
  }
}
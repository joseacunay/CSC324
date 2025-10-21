/********************************************************************
 * 
 * Your introductory remarks go here.
 * 
 *******************************************************************/

// Array of artists
const artists = [
  { name: "Ms Scandalous", birthYear: 1985, link: "https://www.youtube.com/watch?v=2FPivlfvxu0" },
  { name: "Juggy D", birthYear: 1981, link: "https://www.youtube.com/watch?v=1jAc_-FVjdI" },
  { name: "Sukhbir Singh", birthYear: 1969, link: "https://www.youtube.com/watch?v=HiprNF9Jad0" },
  { name: "Abrar-ul-Haq", birthYear: 1989, link: "https://www.youtube.com/watch?v=-lnnVIP7FEc" },
  { name: "Rishi Rich", birthYear: 1970, link: "https://www.youtube.com/watch?v=O95-w2gACuA" }
];

const table = document.getElementById("bhangra");

// Function to rebuild the table
function buildTable(data) {
  table.innerHTML = ""; // Clear previous table

  // Create header
  const headerRow = document.createElement("tr");
  for (let key of Object.keys(data[0])) {
    const th = document.createElement("th");
    th.textContent = key;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  // Fill rows
  for (let artist of data) {
    const row = document.createElement("tr");

    for (let key in artist) {
      const cell = document.createElement("td");
      if (key === "link") {
        const a = document.createElement("a");
        a.href = artist[key];
        a.textContent = "Listen";
        a.target = "_blank";
        cell.appendChild(a);
      } else {
        cell.textContent = artist[key];
      }
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}

// Initial table
buildTable(artists);

// Button functionality
document.getElementById("sortName").addEventListener("click", () => {
  const sorted = [...artists].sort((a, b) => a.name.localeCompare(b.name));
  buildTable(sorted);
});

document.getElementById("sortYear").addEventListener("click", () => {
  const sorted = [...artists].sort((a, b) => a.birthYear - b.birthYear);
  buildTable(sorted);
});

document.getElementById("shuffle").addEventListener("click", () => {
  const shuffled = [...artists].sort(() => Math.random() - 0.5);
  buildTable(shuffled);
});

let allData = [];

// Load data on page load
window.onload = () => {
  fetchData();
};

async function fetchData() {
  try {
    const response = await fetch(
      'https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=1000&$order=crash_date DESC'
    );

    const data = await response.json();
    allData = data;
    displayData(allData);

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Display cards
function displayData(data) {
  const container = document.getElementById("cardsContainer");
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "<p>No data found</p>";
    return;
  }

  data.forEach(item => {
    const crashDate = item.crash_date || "N/A";
    const borough = item.borough || "N/A";
    const zip = item.zip_code || "N/A";
    const injured = item.number_of_persons_injured || 0;
    const killed = item.number_of_persons_killed || 0;
    const cause = item.contributing_factor_vehicle_1 || "Unknown";

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
  <h3>Collision Report</h3>
  <p><strong>Date:</strong> ${crashDate}</p>
  <p><strong>Borough:</strong> ${borough}</p>
  <p><strong>Zip:</strong> ${zip}</p>
  <p><strong>Injured:</strong> ${injured}</p>
  <p><strong>Killed:</strong> ${killed}</p>
  <p><strong>Cause:</strong> ${cause}</p>
`;

    container.appendChild(card);
  });
}

// Apply filters
function applyFilter() {
  const selectedBorough = document.getElementById("boroughFilter").value;
  const minInjured = document.getElementById("injuryFilter").value;

  const filtered = allData.filter(item => {
    const borough = item.borough || "";
    const injured = parseInt(item.number_of_persons_injured) || 0;

    return (
      (selectedBorough === "" || borough === selectedBorough) &&
      (minInjured === "" || injured >= parseInt(minInjured))
    );
  });

  displayData(filtered);
}
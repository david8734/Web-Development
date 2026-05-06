console.log("script loaded");

async function loadData() {
  const output = document.getElementById("output");
  if (!output) {
    console.error("ERROR: output container not found");
    return;
  }

  try {
    const response = await fetch("./fbi.json");
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    if (!data || !Array.isArray(data.items)) {
      throw new Error("Invalid JSON format: expected { items: [] }");
    }

    const html = data.items
      .map(person => {
        const files = Array.isArray(person.files) ? person.files : [];
        const pdfUrl = files.length > 0 ? files[0].url : "";
        return `
          <div class="card">
            <h2>${person.title || "No title"}</h2>
            <p>${person.description || "No description available."}</p>
            ${pdfUrl
              ? `<a class="button" target="_blank" rel="noopener noreferrer" href="https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(pdfUrl)}">View Poster</a>`
              : `<p>No poster available</p>`
            }
          </div>`;
      })
      .join("");

    output.innerHTML = html || "<div class='message'>No records found.</div>";
  } catch (error) {
    console.error("ERROR LOADING DATA:", error);
    output.innerHTML = `<div class="message error">Failed to load data: ${error.message}</div>`;
  }
}

loadData();
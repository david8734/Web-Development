console.log("script loaded");

const output = document.getElementById("output");

async function loadData() {
  try {
    const url = "https://raw.githubusercontent.com/rcastro2/WebDevelopment/main/data/fbi.json";

    const res = await fetch(url);
    console.log("fetch status:", res.status);

    const data = await res.json();
    console.log("data loaded:", data);

    let html = "";

    data.items.forEach(person => {
      const pdf = person.files?.[0]?.url;

      html += `
        <div class="card">
          <h2>${person.title}</h2>
          <p>${person.description || "No description available."}</p>

          ${
            pdf
              ? `<a class="btn" target="_blank"
                   href="https://mozilla.github.io/pdf.js/web/viewer.html?file=${pdf}">
                   View Poster
                 </a>`
              : `<p>No poster available</p>`
          }
        </div>
      `;
    });

    output.innerHTML = html;

  } catch (err) {
    console.error("ERROR LOADING DATA:", err);
    output.innerHTML = "<h2 style='color:red'>Failed to load data</h2>";
  }
}

loadData();
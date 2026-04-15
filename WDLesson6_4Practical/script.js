async function init(){
  // Challenge 1: Retrieve the FBI data from https://raw.githubusercontent.com/rcastro2/WebDevelopment/refs/heads/main/data/fbi.json
  let link = "https://raw.githubusercontent.com/rcastro2/WebDevelopment/refs/heads/main/data/fbi.json"
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";
  /* Challenge 2: 
          1) Traverse the data.  
          2) Create a variable to extract each criminal from data.
          3) Using the variable created, generate HTML to display the information for each criminal
     Note: For the pdf of the criminal poster include the following before the string interpolated url
     into a hyperlink in order to actually display the pdf in a new tab
     https://mozilla.github.io/pdf.js/web/viewer.html?file=${...}
  */
for (let i = 0; i < data.items.length; i++) {
let criminal = data.items[i];

build += `
<div>
<h2>${criminal.title}</h2>
<p>${criminal.description}</p>
<a href="https://mozilla.github.io/pdf.js/web/viewer.html?file=${criminal.files[0].url}" target="_blank">View Poster</a>
</div>
`;
}

output.innerHTML = build;
}



  output.innerHTML = build;




let data = [];


async function init(){

  let response = await fetch("311.json");
  let json = await response.json();

  
  if(Array.isArray(json)){
    data = json;
  } else if(json.data){
    data = json.data;
  } else {
    data = [];
  }

  showAll();
}

init();



function showAll(){

  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i++){

    let c = data[i];

    build += `
      <div class="card">

        <h3>${c.contributing_factor_vehicle_1 || "N/A"}</h3>

        <p><b>Borough:</b> ${c.borough || "N/A"}</p>

        <p><b>Date:</b> ${c.crash_date || "N/A"}</p>

        <p><b>Zip:</b> ${c.zip_code || c.incident_zip || "N/A"}</p>

        <p><b>Injured:</b> ${c.number_of_persons_injured || 0}</p>

        <p><b>Killed:</b> ${c.number_of_persons_killed || 0}</p>

      </div>
    `;
  }

  output.innerHTML = build;
}



function filterByBorough(){

  let input = document.getElementById("borough").value.toLowerCase();
  let vehicleInput = document.getElementById("vehicle").value.toLowerCase(); // ✅ ADDED

  let output = document.getElementById("output");
  let result = document.getElementById("result");

  let build = "";
  let count = 0;

  for(let i = 0; i < data.length; i++){

    let c = data[i];

    let borough = (c.borough || "").toLowerCase();
    let vehicle = (c.vehicle_type_code1 || "").toLowerCase(); // ✅ ADDED

    if(borough.includes(input) && vehicle.includes(vehicleInput)){ // ✅ MODIFIED

      build += `
        <div class="card">

          <h3>${c.contributing_factor_vehicle_1 || "N/A"}</h3>

          <p><b>Borough:</b> ${c.borough || "N/A"}</p>

          <p><b>Date:</b> ${c.crash_date || "N/A"}</p>

          <p><b>Zip:</b> ${c.zip_code || c.incident_zip || "N/A"}</p>

          <p><b>Injured:</b> ${c.number_of_persons_injured || 0}</p>

          <p><b>Killed:</b> ${c.number_of_persons_killed || 0}</p>

        </div>
      `;

      count++;
    }
  }

  result.innerHTML = count + " results found";
  output.innerHTML = build;
}
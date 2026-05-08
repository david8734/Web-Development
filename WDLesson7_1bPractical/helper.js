//get( ) accepts an id of an element and returns the actual element with that id. This functions serves to shorten the code required to get an element
function get(id){
  return document.getElementById(id);
}

//Challeng 1: Create a function card that accepts a JSON of a 311 complaint, generates and returns an appropriate card for the complaint
function card(violation){
  let build = "<div class='card'>";
  build += "<p class='heading'>" + violation.plate + "</p>";
  build += "<p><strong>Violation:</strong> " + violation.violation + "</p>";
  build += "<p><strong>Date:</strong> " + violation.issue_date + "</p>";
  build += "<p><strong>Fine:</strong> $" + violation.fine_amount + "</p>";
  build += "</div>";
  return build;
}



//Challenge 2: Create a function cards that accepts an array of JSON of Open Parking and Camera Violations, generates and return cards for each violation
function cards(violations){
  let build = "";
  for(let i = 0; i < violations.length; i++){
    build += card(violations[i]);
  }
  return build;
}



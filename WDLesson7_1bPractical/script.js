//Data Source: https://data.cityofnewyork.us/City-Government/Open-Parking-and-Camera-Violations/nc67-uf89

let data, output, result;
function init(){
  $.ajaxSetup({async: false});
  data = $.getJSON("data.js").responseJSON;

  output = get("output");

  //Challenge 2: Test the card( ) developed in Challenge 1 by displaying the first violation to the webpage.
  output.innerHTML = card(data[0]);



  //Challenge 4: Display all the Open Parking and Camera Violations to the web page using the cards( ) from Challenge 3.
  output.innerHTML = cards(data);
  
  
}



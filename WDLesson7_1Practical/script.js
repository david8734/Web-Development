
"use strict";
/* global area, celsius, bmi, bmiCategory, lottery, results, rnd, display */
function init(){
  //For all challenges use the function display( ) in order to output the results to the console and the webpage.  Below is an example
  let secret = rnd(1,10);
  display(secret);
  
  //Challenge 1: Use the function area( ) created in helper.js to display the area of any rectangle of your choice.
  let rectArea = area(5, 10);
  display(rectArea);

  //Challenge 2: Use the function celsius(  ) created in helper.js to celsius equivalent of any fahrenheit temperature. 
  let tempC = celsius(32);
  display(tempC);

  //Challenge 4: Set height and weight to appropriate numbers. Pass the variables as arguments to the bmi() created in Challenge 3 and store in a variable called b. Display the value of b.
  let height = 1.75;
  let weight = 70;
  let b = bmi(height, weight);
  display(b);

  //Challenge 6:  Passed the value b from the previous challenge to the bmiCategory() and stored in a variable bc.  Display the category returned by bmiCategory().
  let bc = bmiCategory(b);
  display(bc);
  
  //Challenge 8: Call lottery with some number and display the results.
  let lotto = lottery(5);
  display(lotto);

  //Challenge 10: Create an array, survey which contains several of "Y" and "N" response.  Pass the survey to the results( ) and display the value returned.
  let survey = ["Y", "N", "Y", "Y", "N"];
  let surveyResults = results(survey);
  display(surveyResults);
  
}


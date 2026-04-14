/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
 balance() 
     principal = parseFloat(document.getElementById("principal").value);
     rate = parseFloat(document.getElementById("rate").value) / 100;
     years = parseInt(document.getElementById("years").value);
     n = parseInt(document.getElementById("n").value);

     table = "<table>";
    table += "<tr><th>Year</th><th>Balance</th></tr>";

     currentBalance = principal;

    for ( i = 1; i <= years; i++) {
        currentBalance = currentBalance * Math.pow(1 + rate / n, n);

        table += "<tr>";
        table += "<td>" + i + "</td>";
        table += "<td>" + currentBalance.toFixed(2) + "</td>";
        table += "</tr>";
    }

    table += "</table>";

    document.getElementById("output").innerHTML = table;




 calculateBMI() 
     height = parseFloat(document.getElementById("height").value);
     weight = parseFloat(document.getElementById("weight").value);

     bmi = weight / (height * height);

     category = "";
     image = "";

    if (bmi < 18.5) {
        category = "Underweight";
        image = "underweight.png";
    } 
    else if (bmi < 25) {
        category = "Healthy Weight";
        image = "healthyweight.png";
    } 
    else if (bmi < 30) {
        category = "Overweight";
        image = "overweight.png";
    } 
    else {
        category = "Obesity";
        image = "obeseweight.png";
    }

     result = "<p>BMI: " + bmi.toFixed(2) + "</p>";
    result += "<p>Category: " + category + "</p>";
    result += "<img src='" + image + "' width='150'>";

    document.getElementById("bmiOutput").innerHTML = result;




/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/


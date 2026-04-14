

        function balance() {
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value) / 100;
    let years = parseInt(document.getElementById("years").value);
    let n = parseInt(document.getElementById("n").value);

    let table = "<table>";
    table += "<tr><th>Year</th><th>Balance</th></tr>";

    let currentBalance = principal;

    for (let i = 1; i <= years; i++) {
        currentBalance = currentBalance * Math.pow(1 + rate / n, n);

        table += "<tr>";
        table += "<td>" + i + "</td>";
        table += "<td>" + currentBalance.toFixed(2) + "</td>";
        table += "</tr>";
    }

    table += "</table>";

    document.getElementById("output").innerHTML = table;
}



function calculateBMI() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    let bmi = weight / (height * height);

    let category = "";
    let image = "";

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

    let result = "<p>BMI: " + bmi.toFixed(2) + "</p>";
    result += "<p>Category: " + category + "</p>";
    result += "<img src='" + image + "' width='150'>";

    document.getElementById("bmiOutput").innerHTML = result;
}



/* Challenge Bonus: Allow the user to enter n.  This will require you to modify,
        1) Retrieve the value of n from the user.
        2) Modify the formula to incorporate the value of n
        3) Adjust the heading reflect the compound length.  Below are some typical lengths
              a. n = 1 then the interest is compounded yearly
              b. n = 12 then the interest is compounded monthly
              c. n = 3 then the interest is compounded quarterly
              d. n = 2 then the interest is compounded bi-yearly
*/ 
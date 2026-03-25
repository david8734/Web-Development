/*
  List of all the images. "beeftips.jpg","brisket.jpg","ribeye.jpg","steak.jpg","clams.jpg","crabs.jpg","lobster.png","scallops.jpg","shrimp.jpg","tuna.jpg","flan.jpg","passionberry.jpeg","oreocup.jpg"
*/ 
//Challenge 1: Add the appropriate images to each array below from the list above.
//Challenge 2: Add appropriate prices for each food in their corresponding array.
//Challenge 3: Add appropriate titles for each food in their corresponding array.  Use the image names as a hint for the food title.
let meat_titles = ["Beef Tips", "Brisket", "Ribeye", "Steak"];
let meats = ["beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg"];
let meat_prices = ["$18.99", "$22.99", "$25.99", "$20.99"];

let seafood_titles = ["Clams", "Crabs", "Lobster", "Scallops", "Shrimp", "Tuna"];
let seafood = ["clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg", "tuna.jpg"];
let seafood_prices = ["$12.99", "$19.99", "$29.99", "$17.99", "$15.99", "$21.99"];

let dessert_titles = ["Flan", "Passion Berry Dessert", "Oreo Cup"];
let desserts = ["flan.jpg", "passionberry.jpeg", "oreocup.jpg"];
let dessert_prices = ["$6.99", "$7.99", "$5.99"];


function init(){
  //Each food has its own output container
  let m = document.getElementById("meats");
  let s = document.getElementById("seafoods");
  let d = document.getElementById("desserts");
  let build = ``;

  //Challenge 4: Build cards for the meats. Place the build in the meat container.
  for (let i = 0; i < meats.length; i++) {
    build += `
    <div class="card">
        <h3>${meat_titles[i]}</h3>
        <img src="images/${meats[i]}" alt="${meat_titles[i]}">
        <p>${meat_prices[i]}</p>
    </div>
    `;
}
m.innerHTML = build;


//Challenge 5: Build cards for the seafoods. Place the build in the seafood container.
build = ``;

for (let i = 0; i < seafood.length; i++) {
    build += `
    <div class="card">
        <h3>${seafood_titles[i]}</h3>
        <img src="images/${seafood[i]}" alt="${seafood_titles[i]}">
        <p>${seafood_prices[i]}</p>
    </div>
    `;
}
s.innerHTML = build;


//Challenge 6: Build cards for the desserts. Place the build in the dessert container.
build = ``;

for (let i = 0; i < desserts.length; i++) {
    build += `
    <div class="card">
        <h3>${dessert_titles[i]}</h3>
        <img src="images/${desserts[i]}" alt="${dessert_titles[i]}">
        <p>${dessert_prices[i]}</p>
    </div>
    `;
}
d.innerHTML = build;

  /*Notes for Challenges 4 through 6:
      1) Each challenge requires its own for loop to build the output.
      2) You can reuse the build variable as long as you set it back to `` before each loop.
      3) Create a basic card with the title, image and price.
  */
}

/* Challenge 2: Create a function for each image that display a description of the picture into the div with an id of highlight*/
// Function for Challenge 2: Show description when mouse is over an image
function showDescription(description) {
    // Get the div with the id 'highlight'
    var highlightDiv = document.getElementById("highlight");

    // Change the content of the div to the description of the image
    highlightDiv.innerHTML = description;

    // Optionally, you can also change the style of the div to highlight it
    highlightDiv.style.border = "2px solid #000";
    highlightDiv.style.padding = "10px";
    highlightDiv.style.backgroundColor = "#f0f0f0";
}

// Function to clear the description when the mouse leaves the image (Challenge 2)
function clearDescription() {
    var highlightDiv = document.getElementById("highlight");
    highlightDiv.innerHTML = ""; // Remove the description text
    highlightDiv.style.border = "none"; // Remove the border
    highlightDiv.style.padding = "0"; // Remove the padding
    highlightDiv.style.backgroundColor = "transparent"; // Make the background transparent again
}
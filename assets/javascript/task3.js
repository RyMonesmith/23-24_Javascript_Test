/* Put code for the task below */
// Function to change the text in basic directions
function changeText() {
    const basicDirections = document.querySelector('.main > p');
    basicDirections.innerHTML = "I Clicked It!";
}

// Event listener for the button in the navigation bar
document.getElementById('changeTextButton').addEventListener('click', changeText);

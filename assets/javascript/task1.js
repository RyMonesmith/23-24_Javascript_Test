/* Put code for the task below */
// Function to hide the image
function hideImage() {
    const image = document.getElementById('imageTask1');
    image.style.display = 'none';
}

// Event listener for mouseover to show the button
document.getElementById('imageTask1').addEventListener('mouseover', function () {
    var button = document.getElementById('buttonTask1');
    button.style.display = 'block';
});

// Event listener for button click to hide the image
document.getElementById('buttonTask1').addEventListener('click', hideImage);

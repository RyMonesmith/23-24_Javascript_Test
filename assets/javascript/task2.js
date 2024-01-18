/* Put code for the task below */
// Function to change the table background color
function changeTableColor(color) {
    const table = document.querySelector('.table');
    table.style.backgroundColor = color;
}

// Event listeners for each button
document.getElementById('buttonRed').addEventListener('click', function () {
    changeTableColor('red') ;
});

document.getElementById('buttonGreen').addEventListener('click', function () {
    changeTableColor('green');
});

document.getElementById('buttonBlue').addEventListener('click', function () {
    changeTableColor('blue');
});

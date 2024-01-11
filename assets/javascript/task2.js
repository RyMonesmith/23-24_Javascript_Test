/* Put code for the task below */
function changeColor() {
    document.table.style.backgroundColor = colors[colorIndex % 7];
    colorIndex++;
}
/* Put code for the task below */
// Function to open a new page with the specified text
function createNewPage() {
    const newPageText = "new page has been created";
    // Open a new window with the specified text
    const newWindow = window.open('', '_blank');
    newWindow.document.write('<html><head><title>New Page</title></head><body>' + newPageText + '</body></html>');
}

// Event listener for the "clear" button in the navigation bar
document.getElementById('clearButton').addEventListener('click', createNewPage);

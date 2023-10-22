// Sample data: In a real application, this could be fetched from a server
const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Something else"];

// Function to display all items
function displayItems(items) {
    const container = document.getElementById('itemsContainer');
    container.innerHTML = ''; // Clear current items
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = item;
        container.appendChild(div);
    });
}

// Initial display of items
displayItems(items);

// Search functionality
document.getElementById('searchBox').addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredItems = items.filter(item => item.toLowerCase().includes(searchText));
    displayItems(filteredItems);
});

// Function to process books and invoke the callback
function processBooks(books, callback) {
    // Use map to create a new list containing only the titles
    const titles = books.map(book => book.title);

    // Pass the new list to the callback function
    callback(titles);
}

// Example callback function to log titles in alphabetical order
function logTitlesAlphabetically(titles) {
    // Sort the titles alphabetically
    const sortedTitles = titles.sort();

    // Log the sorted titles to the console
    console.log("Titles in alphabetical order:", sortedTitles.join(', '));
}

// Example usage:
const bookList = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    // Add more books as needed
];

// Call the processBooks function with the bookList and logTitlesAlphabetically callback
processBooks(bookList, logTitlesAlphabetically);

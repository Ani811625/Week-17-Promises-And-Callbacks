// Function to fetch and handle errors from the specified API
async function fetchDataFromAPI(apiURL) {
    try {
        // Use fetch to make an asynchronous request to the API
        const response = await fetch(apiURL);

        // Check if the request was successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Extract data from the response
        const data = await response.json();

        // Log the data to the console or handle it as needed
        console.log('Data from API:', data);
    } catch (error) {
        // Handle errors by logging an error message or displaying it on the webpage
        console.error('Error fetching data:', error.message);

        // Example: Display error message on the webpage
        const errorMessageElement = document.getElementById('error-message');
        if (errorMessageElement) {
            errorMessageElement.textContent = 'An error occurred while fetching data.';
        }
    }
}

// Specify the API URL (e.g., JSONPlaceholder posts endpoint)
const apiURL = 'https://jsonplaceholder.typicode.com/posts/123456789'; // Simulating an error

// Call the function to fetch and handle errors from the specified API
fetchDataFromAPI(apiURL);

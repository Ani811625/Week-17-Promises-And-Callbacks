// Function to fetch and log data from the specified API
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

        // Log the data to the console
        console.log('Data from API:', data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Specify the API URL (e.g., JSONPlaceholder posts endpoint)
const apiURL = 'https://jsonplaceholder.typicode.com/posts';

// Call the function to fetch and log data from the specified API
fetchDataFromAPI(apiURL);

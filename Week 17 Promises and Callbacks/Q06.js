async function fetchDataFromAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Data from API:', data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Call the function to fetch and log data
fetchDataFromAPI();

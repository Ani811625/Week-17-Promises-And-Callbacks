async function fetchDataFromMultipleAPIs() {
    try {
        // Use Promise.all to fetch data from both APIs concurrently
        const [todoResponse, postResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/todos/1'),
            fetch('https://jsonplaceholder.typicode.com/posts/1')
        ]);

        // Check if both API requests are successful
        if (!todoResponse.ok || !postResponse.ok) {
            throw new Error('Error fetching data from one or more APIs.');
        }

        // Extract data from the responses
        const todoData = await todoResponse.json();
        const postData = await postResponse.json();

        // Combine the results into an object
        const combinedData = {
            todo: todoData,
            post: postData
        };

        // Log the combined data to the console
        console.log('Combined Data:', combinedData);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Call the function to fetch and log data from multiple APIs
fetchDataFromMultipleAPIs();

function doubleArrayElements(arr, callback) {
    // Check if the callback is a function
    if (typeof callback === 'function') {
        // Use the map method to create a new array with doubled elements
        const doubledArray = arr.map(callback);
        return doubledArray;
    } else {
        // If the callback is not a function, return an empty array
        console.error("Callback is not a function");
        return [];
    }
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];

// Define a callback function to double a number
const doubleCallback = function (num) {
    return num * 2;
};

// Call the function with the input array and callback
const resultArray = doubleArrayElements(inputArray, doubleCallback);

// Output the result
console.log(resultArray); // Output: [2, 4, 6, 8, 10]

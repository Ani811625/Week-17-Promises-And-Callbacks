function manipulateString(inputString) {
    // Function to convert characters to uppercase
    function convertToUpperCase(str) {
        return str.toUpperCase();
    }

    // Callback function to log the manipulated string
    function logString() {
        const manipulatedString = convertToUpperCase(inputString);
        console.log("The manipulated string is:", manipulatedString);
    }

    // Return the callback function
    return logString;
}

// Example usage:
const originalString = "Hello, World!";

// Call manipulateString to get the logString callback
const logStringCallback = manipulateString(originalString);

// Call the returned callback function to log the manipulated string
logStringCallback();

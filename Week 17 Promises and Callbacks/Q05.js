function greetWithPromise(name) {
    return new Promise((resolve, reject) => {
        if (name) {
            const greetingMessage = `Hello, ${name}!`;
            resolve(greetingMessage);
        } else {
            reject(new Error("Name is required."));
        }
    });
}

// Example usage:
const personName = "Mithun";

// Call the function and handle the resolved promise
greetWithPromise(personName)
    .then((greeting) => {
        console.log(greeting); // Output: Hello, Mithun!
    })
    .catch((error) => {
        console.error(error.message);
    });

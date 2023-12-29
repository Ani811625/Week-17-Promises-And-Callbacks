function ageInDays(person) {
    // Concatenate first name and last name
    const fullName = person.firstName + ' ' + person.lastName;

    // Calculate age in days
    const ageInDays = person.age * 365; // Assuming an average year has 365 days

    // Return a callback function
    return function logMessage() {
        console.log("The person's full name is " + fullName + " and their age in days is " + ageInDays + ".");
    };
}

// Example usage:
const personInfo = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

// Call ageInDays to get the logMessage callback
const logMessageCallback = ageInDays(personInfo);

// Call the returned callback function to log the message
logMessageCallback();

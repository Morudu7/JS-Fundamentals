const numArgs = process.argv.length - 2;

// Check the number of arguments and print the corresponding message.
if (numArgs === 0) {
    // If no user-provided arguments
    console.log("No argument");
} else if (numArgs === 1) {
    // If exactly one user-provided argument
    console.log("Argument found");
} else {
    // If two or more user-provided arguments
    console.log("Arguments found");
}


const argument = process.argv[2];
const num = Number(argument);

if (Number.isInteger(num)) {  //if user enter number as an argument
	console.log(`My number: ${num}`);
} else {
	console.log("Not a number"); //when user does not use numbers
}

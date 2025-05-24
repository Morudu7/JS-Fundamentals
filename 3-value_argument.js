const argument = process.argv[2];

//print argument if there is any if not print no argument
if (argument) {
	//If there is user-provided argument
	console.log(argument);
}else {
	//if there is no user-provided argument
	console.log("No argument");	
}

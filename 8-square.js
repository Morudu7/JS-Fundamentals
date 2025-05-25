const argu = Math.floor(Number(process.argv[2])); // Identify the first object

//create an object
const square = {size:"X"};


//Build text
if (argu > 0) {
	for (let i = 0; i < argu; i++) {
		let row = '';
		for (let j = 0; j < argu; j++) {
			row += "X";
		}
		console.log(row);
	}
} else {
	console.log("Missing size");
}

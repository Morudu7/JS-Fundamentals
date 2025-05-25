const argu1 = Number(process.argv[2]);
const argu2 = Number(process.argv[3]);

function add(argu1, argu2) {
       return argu1 + argu2
}
if (Number.isInteger(argu1 && argu2)) {
	console.log(add(argu1, argu2));
} else {
	console.log(NaN);
}

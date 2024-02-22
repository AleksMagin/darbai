// Duomenys
var x = 5;
var y = 10;
var z = -12;

// Rasti skaičių sandaugą
var sandauga = x * y * z;

// Nustatyti sandaugos ženklą
var sandaugosZenklas = "";
if (sandauga > 0) {
    sandaugosZenklas = "+";
} else if (sandauga < 0) {
    sandaugosZenklas = "-";
} else {
    sandaugosZenklas = "0";
}

// Atvaizduoti rezultatą
console.log("Sandaugos ženklas yra '" + sandaugosZenklas + "'.");

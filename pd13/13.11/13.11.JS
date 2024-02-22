// Gauti duomenis iš vartotojo
var s = parseFloat(prompt("Įveskite pajamų ribą vienam šeimos nariui (s eurų per mėnesį): "));
var k = parseFloat(prompt("Įveskite likusią paskolos sumą (k eurų): "));
var n = parseInt(prompt("Įveskite šeimos narių skaičių: "));
var t = parseFloat(prompt("Įveskite tėvo atlyginimą (t eurų per mėnesį): "));
var m = parseFloat(prompt("Įveskite motinos atlyginimą (m eurų per mėnesį): "));

// Patikrinti, ar šeima tenkina sąlygas paskolai gauti
var reikalingosPajamos = n * s;
if (t + m >= reikalingosPajamos && k >= 0) {
    console.log("Bankas suteiks paskolą.");
} else {
    console.log("Bankas paskolos nesuteiks.");
}

// Koeficientų reikšmės
var a = 13;
var b = -6;
var c = 172;

// Apskaičiuojame diskriminantą
var diskriminantas = b * b - 4 * a * c;

// Tikriname diskriminanto reikšmę ir randame sprendinius
if (diskriminantas > 0) {
    var x1 = (-b + Math.sqrt(diskriminantas)) / (2 * a);
    var x2 = (-b - Math.sqrt(diskriminantas)) / (2 * a);
    console.log("Lygtis turi du skirtingus sprendinius:");
    console.log("x1 = " + x1);
    console.log("x2 = " + x2);
} else if (diskriminantas === 0) {
    var x = -b / (2 * a);
    console.log("Lygtis turi vieną sprendinį:");
    console.log("x = " + x);
} else {
    console.log("Lygtis neturi sprendinių realiųjų skaičių aibėje.");
}

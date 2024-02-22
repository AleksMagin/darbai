// Gauti duomenis iš vartotojo
var a = parseFloat(prompt("Įveskite voko vidinį plotį (a mm): "));
var b = parseFloat(prompt("Įveskite voko vidinį ilgį (b mm): "));
var c = parseFloat(prompt("Įveskite atviruko plotį (c mm): "));
var d = parseFloat(prompt("Įveskite atviruko ilgį (d mm): "));

// Patikrinti, ar atvirukas tilps į voką
if (c + 2 <= a && d + 2 <= b) {
    console.log("Atvirukas telpa į voką.");
} else {
    console.log("Atvirukas netelpa į voką.");
}

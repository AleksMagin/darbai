// Sukurkite elementą su konkrečiu ID
let element = document.createElement("div");
element.id = "manoID";
element.textContent = "Pradinis tekstas";
document.body.appendChild(element);

// Suraskite elementą pagal jo ID ir pakeiskite jo tekstą
let elementToChange = document.getElementById("manoID");
elementToChange.textContent = "Sveiki, aš esu naujas tekstas!";
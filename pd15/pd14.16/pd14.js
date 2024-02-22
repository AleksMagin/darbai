function removeRandomElement(inputArray) {
    if (!Array.isArray(inputArray)) {
        return 'Input is not an array';
    }

    let randomIndex = Math.floor(Math.random() * inputArray.length);
    let newArray = inputArray.filter((element, index) => index !== randomIndex);
    return newArray;
}

let arrayInput = [1, 2, 3, 4, 5];

let updatedArray = removeRandomElement(arrayInput);

console.log(updatedArray); // Tai turi išvesti atsitiktinių rezultatų
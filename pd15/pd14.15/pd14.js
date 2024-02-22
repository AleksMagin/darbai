function removeElement(inputArray, elementToRemove) {
    if (!Array.isArray(inputArray)) {
        return 'Input is not an array';
    }

    let newArray = inputArray.filter(element => element !== elementToRemove);
    return newArray;
}

let arrayInput = [1, 2, 3, 4, 5];
let elementToRemove = 3;

let updatedArray = removeElement(arrayInput, elementToRemove);

console.log(updatedArray); // Tai turi išvesti: [1, 2, 4, 5]
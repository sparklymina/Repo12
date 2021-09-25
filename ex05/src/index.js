// Only change code below this line
function myPetsFunction(pets) {
    return pets.name[1];
}

var myPetsArray = [
    {
        animalType: [
            "Dog",
            "Cat",
            "Bird"
        ]
    },
    {
        name: [
            "Pujdo",
            "Maca",
            "Tweety"
        ]
    }
]
// Only change code above this line

console.log(myPetsFunction(myPetsArray[1])); // Change this line
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;
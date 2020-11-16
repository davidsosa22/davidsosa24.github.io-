/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};

animal.species = 'dog';
animal["name"] = 'sosa';
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises = ['bark'];
noises.push('cry');
noises.unshift('yell');
function animalNoises(noise){
    noises.push(noise);
}
animalNoises('screech');


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
console.log(noises);
animal['noises'].push('screech');
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];//make a var named animals assigned with empty array
animals.push(animal);
//create variable named duck with object
var duck = { //assign keys and assign values
    name: 'Jerome', 
    species: 'duck',
    noises: ['quack', 'honk', 'sneeze', 'woosh'] 
    
};

animals.push(duck);//push duck object to animals array

console.log(animals);
//create variable named tiger assigned with object
var tiger = { //assign keys and assign values
    name: 'Liger', 
    species: 'tiger',
    noises: ['growl', 'yell'] 
};

animals.push(tiger);//push tiger object to animals array

////create variable named bull with object
var bull = { //assign key and assign values
    name: 'bullzEye',
    species: 'bull', 
    noises: ['snort'] 
};

animals.push(bull);//push bull object to animals array
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = [];//create friends variable assinged with empty array
//2.
//create function named getRandom with one parameter named array
function getRandom(array){
    //inisde the function made let varibale named randomFriends assigned with the math.random function
    let randomFriends = animals[Math.floor(Math.random() * animals.length)];
    animal['friends'] = friends;
    
    return friends.push(randomFriends['name']);//push randomfriends into the friends array.
    
}
getRandom();

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */

// Step 1 - Search ///////////////////////////////////////////////////


// create a function called search
// takes a paramater animals with is an array
// takes a paramater animal which is a string that represents the name of an animal to perform a search on
// look through the animals array and returns the animal's object if the animal is found 
// return null if no animal with that name exists

var search = (animals, animal) => {
   for(let i = 0; i < animals.length; i++){
       if(animals[i].name === animal){
           return animals[i];
       } 
   } return null;
};




//////////////////////////////////////////////////////////////////////
// Step 2 - Replace


// create a function called replace 
// replace has 3 parameters animals, name and replacement
// if the animal with the name exists in the animals array, replace the object

var replace = (animals, name, replacement) => {
    for (let i = 0; i < animals.length; i++){
        if(name === animals[i].name){
            animals.splice(i, 1, replacement);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove

// create a function called remove
// remove will have 2 parameters: an array of animals and a name of an animal with to preform a search on
// if the animal matches the animals.name then remove it 

var remove = (animals, animal) => {
    for(let i = 0; i < animals.length; i++){
        if(animals[i].name === animal){
            animals.splice(i, 1);
        }
    }
}



//////////////////////////////////////////////////////////////////////
// Step 4 - Add


// create a function call add
// add will have 2 parameters
// check to see if the name property has a length > 0
// check to see if the species property has a length > 0
// check to see if the name is unique that no other animals have that name
// add the new object to the animals array if all the conditions passes

var add = (animalsArr, animalObj) => {
    for(let i = 0; i < animalsArr.length; i++){
        if(animalObj.name === animalsArr[i].name){
            break;
        } else if (animalObj.name.length > 0 && animalObj.species.length > 0){
            animalsArr.push(animalObj);
        }
       
        
    }
};







//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
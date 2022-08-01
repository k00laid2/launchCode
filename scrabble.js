


// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
    word = word.toUpperCase();
    let letterPoints = "";
    let totalPoints = 0;

    for (let i = 0; i < word.length; i++) {

        for (const pointValue in oldPointStructure) {
            if (oldPointStructure[pointValue].includes(word[i])) {
                letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
                totalPoints = Number(pointValue) + totalPoints;
                // console.log('Total points: ' + letterPoints);
            }

        }
    }
    // totalPoints = letterPoints + totalPoints;
    // console.log('Total points: ' + totalPoints);
    // console.log('Score for ' + userInput + ' ' + totalPoints);
    return totalPoints;

}


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

let userInput = '';

function initialPrompt() {
    console.log("Let's play some scrabble!");
    userInput = input.question("Enter a word to score: ");

};




let simpleScore;

const simplePointStructure = {
    1: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
};

function simpleScorer(word) {
    word = word.toUpperCase();
    let letterPoints = "";
    let totalPoints = 0;
    for (let i = 0; i < word.length; i++) {

        for (const pointValue in simplePointStructure) {

            if (simplePointStructure[pointValue].includes(word[i])) {
                letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
                totalPoints = Number(pointValue) + totalPoints;
                // console.log('Total points: ' + letterPoints);
            }

        }
    }
    // console.log('Total points: ' + letterPoints);
    return totalPoints;
}



const vowelPointStructure = {
    1: ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"],
    3: ['A', 'E', 'I', 'O', 'U',],
};

let vowelBonusScore;
function vowelScorer(y) {
    word = y.toUpperCase();
    let letterPoints = "";
    let totalPoints = 0;

    for (let i = 0; i < word.length; i++) {

        for (const pointValue in vowelPointStructure) {

            if (vowelPointStructure[pointValue].includes(word[i])) {
                letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
                totalPoints = Number(pointValue) + totalPoints;
                // console.log('Total points: ' + letterPoints);
            }

        }
    }
    // console.log('Total points: ' + letterPoints);
    return totalPoints;
}


let scrabbleScore;


const scoringAlgorithms = [
    {
        name: 'Simple Score',
        description: 'Each letter is worth 1 point.',
        scoreFunction: simpleScorer
    },
    {
        name: 'Bonus Vowels',
        description: 'Vowels are 3 pts, consonants are 1 pt.',
        scoreFunction: vowelScorer
    },
    {
        name: 'Scrabble',
        description: 'The traditional scoring algorithm.',
        scoreFunction: oldScrabbleScorer
    },
];

// console.log("algorithm name: ", scoringAlgorithms[0].name);
// console.log("description of this scoring method:", scoringAlgorithms[0].description);
// console.log("scoringFunction result: ", scoringAlgorithms[0].scoreFunction("JavaScript"));

// {
//   name: ['Simple Score', 'Bonus Vowels', ]
// }

//   [
//   simpleScorer(),
//   vowelScorer(),
//   oldScrabbleScorer(),
// ]
// {
//   0: ['Simple Score', 'Each letter is worth 1 point.', simpleScorer()],
//   1: ['Bonus Vowels', 'Vowels are 3 pts, consonants are 1 pt.', vowelScorer()],
//   3: ['Scrabble', 'The traditional scoring algorithm.', oldScrabbleScorer()],
// }


function scorerPrompt() {
    console.log(`Which scoring algorithm would you like to use?

0 - Simple: One point per character
1 - Vowel Bonus: Vowels are worth 3 points
2 - Scrabble: Uses scrabble point system
`)
    let scoreType = input.question("Input the specified scoring method number: ");
    const totalPoints = scoringAlgorithms[scoreType].scoreFunction(userInput);
    console.log('Score for \'' + userInput + '\': ' + totalPoints);
    return scoreType;
}
// {
//   scorerSelect = input.question('Choose a scoring method.');
//   if (scorerSelect == 0){
//     return scoringAlgorithms[0];
//   }if (scorerSelect == 1){
//     return scoringAlgorithms[1];
//   }if (scorerSelect == 2){
//     return scoringAlgorithms[2];
//   }
//   return scorerSelect
// }



function transform() { }



let newPointStructure;

function runProgram() {
    initialPrompt();
    // console.log(oldScrabbleScorer(userInput));
    // console.log(simpleScorer(userInput));
    // console.log(vowelScorer(userInput));
    scorerPrompt();

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
    initialPrompt: initialPrompt,
    transform: transform,
    oldPointStructure: oldPointStructure,
    simpleScore: simpleScore,
    vowelBonusScore: vowelBonusScore,
    scrabbleScore: scrabbleScore,
    scoringAlgorithms: scoringAlgorithms,
    newPointStructure: newPointStructure,
    runProgram: runProgram,
    scorerPrompt: scorerPrompt
};


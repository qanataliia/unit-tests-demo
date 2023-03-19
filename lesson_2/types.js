const num = 1; // integer
const num2 = 2.3333 // floats

const numberInStringForm = num2.toString();

const phrase = "this is a phrase"
const firstLetter = phrase.charAt(0)

const list = [1, 2 ,3 , 4]
const list2 = [num, num ,num , num]
const emptyList = [];

const phraseWithNumbers = list.join(" and "); // phraseWithNumbers = "1 and 2 and 3 and 4"


function testFunction(arg1, arg2){

}

const testFunction2 = (arg1, arg2) => {}

// Object
const objectVariable = {
    numberOfDocuments: 1500,
    numberOfSecretaries: 10,
    workOnADocument : () => {
        console.log("Working on a document")
    }
}

const listOfObjects = [objectVariable,objectVariable,objectVariable,objectVariable]

console.log(objectVariable.numberOfDocuments)
console.log(objectVariable.numberOfSecretaries)
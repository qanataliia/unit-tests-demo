import { countStudents, countMaleStudents, countFemaleStudents, averageAge, selectFemaleStudents, filterByAge, newAverageAge } from "./lesson01.js";

import { listOfStudents } from "./lesson01/students.js";

let numberOfStudents = countStudents(listOfStudents);
console.log(numberOfStudents);

let numberOfMaleStudents = countMaleStudents(listOfStudents);
console.log(numberOfMaleStudents);

let numberOfFemaleStudents = countFemaleStudents(listOfStudents);
console.log(`Number of female students: ${numberOfFemaleStudents}`);

let sumOfAllAges = averageAge(listOfStudents);
console.log(`Average age of students is ${sumOfAllAges}`);

let listOfFemaleStudents = selectFemaleStudents(listOfStudents);
console.log(`This is the list of all the female students`);
console.log(listOfFemaleStudents);

let studentAge = filterByAge(listOfStudents, 10);
console.log(studentAge);

let averAge = newAverageAge(listOfStudents);
console.log("averAge", averAge);
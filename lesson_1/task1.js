export function countStudents(listOfStudents) {
  return listOfStudents.length;
}
export function countMaleStudents(listOfStudents) {
  return listOfStudents.filter((student) => student.gender == "male").length;
}
export function countFemaleStudents(listOfStudents) {
  return listOfStudents.filter((student) => student.gender == "female").length;
}
export function averageAge(listOfStudents) {
  let sumOfAllAges = 0;
  for (let student of listOfStudents) {
    sumOfAllAges += student.age;
  }
  return sumOfAllAges / listOfStudents.length;
}
export function selectFemaleStudents(listOfStudents) {
  return listOfStudents.filter((student) => student.gender == "female");

  //console.log(listOfStudents);
  //return listOfStudents.map(el => {console.log(Object.fromEntries(el))})
  // .filter(student => student.gender == "female")
}
export function filterByAge(listOfStudents, age) {
  return listOfStudents.filter((student) => student.age > age);
}

export function newAverageAge(listOfStudents) {
  let sum = listOfStudents.reduce(function (acumulator, current) {
    return acumulator + current.age;
  }, 0);
  // return Math.round(sum/listOfStudents.length);
  return sum / listOfStudents.length;
}

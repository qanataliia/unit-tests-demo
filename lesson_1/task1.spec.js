import * as assert from "assert"
import { countStudents, countMaleStudents, countFemaleStudents, averageAge, selectFemaleStudents } from "./lesson01.js"
import {Student} from "./students.js"
import { expect } from 'chai';

describe('Lesson 1 tests', function () {
  describe('selectFemaleStudents', function(){
    it('should be female', function(){
      const femaleList = [
        new Student("Olya", 26,"female"),
        new Student("Katya", 22, "female"),
        new Student("Natusya", 22, "female"),
        new Student("Tanya", 25, "female")
      ];

      let filteredListOfFemaleStudents = selectFemaleStudents(femaleList);
      for (const student of filteredListOfFemaleStudents) {
        expect(student.gender).equals("female")
      }

    })
  });

  describe('averageAge', function(){
    it('should be 23', function(){
      const listOfAges = [
        new Student("Olya", 26,"female"),
        new Student("Katya", 22, "female"),
        new Student("Natusya", 22, "female")
      ];
      const avg = (listOfAges[0].age + listOfAges[1].age + listOfAges[2].age) / 3
      let averageNumber = averageAge(listOfAges);
      expect(averageNumber).equals(avg)
    })
  });

  describe('countFemaleStudents', function(){
    it('should count 3 female students', function(){
      const newListOfFemaleStudents = [
        new Student("Olya", 26,"female"),
        new Student("Katya", 22, "female"),
        new Student("Erik", 22, "martian")
      ];
      let numberOfFemaleStudents = countFemaleStudents(newListOfFemaleStudents);
      expect(numberOfFemaleStudents).equals(2)
    })

    it('should count 3 female students', function(){
      const newListOfFemaleStudents = [
        new Student("Olya", 26,"female"),
        new Student("Katya", 22, "female"),
        new Student("Erik", 22, "male")
      ];
      let numberOfFemaleStudents = countFemaleStudents(newListOfFemaleStudents);
      expect(numberOfFemaleStudents).equals(2)
    })

    it('should count 3 female students', function(){
      const newListOfFemaleStudents = [
        new Student("Olya", 26,"female"),
        new Student("Katya", 22, "female"),
        new Student("Natusya", 22, "female")
      ];
      let numberOfFemaleStudents = countFemaleStudents(newListOfFemaleStudents);
      expect(numberOfFemaleStudents).equals(3)
    })
  });
 
  describe('countMaleStudents', function (){
    it('should count 0 male students', function(){
      const listOfFemaleStudents = [
        new Student("Olya", 26,"female"),
        new Student("Katya", 22, "female"),
        new Student("Natusya", 22, "female"),
        new Student("Tanya", 25, "female")
      ];
      let numberOfMaleStudents = countMaleStudents(listOfFemaleStudents);
      expect(numberOfMaleStudents).equals(0)
    })
  });

  describe('countStudentsTests', function () {
    it('should count 0 students', function (){
      const anotherListOfStudents = [        
      ];
      let anotherNumberOfStudents = countStudents(anotherListOfStudents);
      expect(anotherNumberOfStudents).equals(0)
    })
    
    it('should count 5 students', function () {
     const newListOfStudents = [
       new Student("John", 18, "male"),
       new Student("Mike", 20, "male"),
       new Student("Ricardo", 26, "male"),
       new Student("Nataliia", 22, "female"),
       new Student("Rita", 20, "female")
     ];
     let newNumberOfStudents = countStudents(newListOfStudents);
     expect(newNumberOfStudents).equals(5)
    });
  });

});
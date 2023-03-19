export class Student {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

export const listOfStudents = [
    new Student("John", 20, "male"),
    new Student("Mike", 18, "male"),
    new Student("Randall", 21, "male"),
    new Student("Richard", 25, "male"),
    new Student("Ricky", 22, "male"),
    new Student("Josh", 23, "male"),
    new Student("Rita", 20, "female"),
    new Student("Janice", 21, "female"),
    new Student("Kate", 23, "female"),
    new Student("Irina", 19, "female"),
    new Student("Margarette", 18, "female"),
    new Student("Jessica", 27, "female"),
]
// use modern code
'use strict';

const studentList = 
[
    {
      id: 1058,
      isActive: true,
      age: 29,
      firstName: "Winifred",
      lastName: "Carter",
      math: 10,
      english: 6,
      favoriteFruit: "banana"
    },
    {
      id: 2775,
      isActive: false,
      age: 24,
      firstName: "Glenn",
      lastName: "Larson",
      math: 9,
      english: 10,
      favoriteFruit: "apple"
    },
    {
      id: 3072,
      isActive: true,
      age: 28,
      firstName: "Marcy",
      lastName: "Bowman",
      math: 10,
      english: 8,
      favoriteFruit: "banana"
    },
    {
      id: 7626,
      isActive: false,
      age: 22,
      firstName: "Golden",
      lastName: "Wilson",
      math: 4,
      english: 4,
      favoriteFruit: "apple"
    },
    {
      id: 9337,
      isActive: true,
      age: 22,
      firstName: "Blevins",
      lastName: "Travis",
      math: 3,
      english: 6,
      favoriteFruit: "strawberry"
    },
    {
      id: 6218,
      isActive: true,
      age: 27,
      firstName: "Harrell",
      lastName: "Day",
      math: 4,
      english: 6,
      favoriteFruit: "apple"
    }
]
// ARRAY-----------------------------------------------
// question 1: write the function to find the student by id
/*function findStudent(studentID, studentList)
{
    // validation check
    if(!Number.isInteger(studentID))
    {
        console.log('The input value must be a number');
        return;
    }
    let student = studentList.find(i => i.id === studentID);
    if(typeof(student) != typeof({}))
    {
        student = null;
    }
    return student;
}
let student = findStudent('tf', studentList);
console.log(student);

// question 2: write the function to filter students have isActive by true
function filterActiveStudentList(studenList)
{
    let students = studentList.filter(student => student.isActive === true);
    return students;
}
let students = filterActiveStudentList(studentList);
console.log(students);

// question 3: write the function to sort the student list  by firstname and lastname
// sort ascending
function sortStudentListByName(studentList)
{
    let temp = {};
    for(let i = 0; i < studentList.length; ++i)
    {
        for(let k = i + 1; k < studentList.length; ++k)
        {
            if(studentList[i].firstName > studentList[k].firstName)
            {
                temp = studentList[i];
                studentList[i] = studentList[k];
                studentList[k] = temp;
            }
            if(studentList[i].firstName === studentList[k].firstName)
            {
                if(studentList[i].lastName === studentList[k].lastName)
                {
                    temp = studentList[i];
                    studentList[i] = studentList[k];
                    studentList[k] = temp;
                }
            }
        }
    }
}
sortStudentListByName(studentList);
console.log(studentList);

// question 4: student classification
function gradingStudentList(studentList)
{
    let newStudentList = [
        ...studentList
    ];
    for(student of newStudentList)
    {
        const mediumScore = (student.math + student.english)/2;
        if(mediumScore >= 9)
        {
            student.grading_scale = 'A';
        }
        else if(mediumScore > 5)
        {
            student.grading_scale = 'B';
        }
        else if(mediumScore > 3)
        {
            student.grading_scale = 'C';
        }
        else
        {
            student.grading_scale = 'D';
        }
    }
    return newStudentList;
}
const newStudentList = gradingStudentList(studentList);
console.log(newStudentList);

// question 5: sort student list by medium score
function compare(st1, st2)
{
    const score1 = (st1.math + st1.english)/2;
    const score2 = (st2.math + st2.english)/2;
    let score = 0;
    if(score1 < score2)
    {
        score = -1;
    }
    else if(score1 > score2)
    {
        score = 1;
    }
    return score;
}
function sortStudentListByGradingScale(studenList)
{
    studentList.sort(compare);
}
sortStudentListByGradingScale(studentList);
console.log(studentList);

// questio 6: write the function to filter student list by favorite fruit
function filterStudentByFavoriteFruit(studentList, fruit)
{
    const newStudentList = studentList.filter(student => student.favoriteFruit === fruit);
    return newStudentList;
}
const newStudentList = filterStudentByFavoriteFruit(studentList, 'apple');
console.log(newStudentList);


// question 7: write the function that returns the oldest student
function findTheOldest(studentList)
{
    const student = studentList.reduce((st1, st2) => (st1.age < st2.age)? st2 : st1, studentList[0]);
    return student;
}
const student = findTheOldest(studentList);
console.log(student);

// question 8: write the function that returns the youngest student
function findTheYoungest(studentList)
{
    const student = studentList.reduce((st1, st2) => (st1.age > st2.age)? st2 : st1, studentList[0]);
    return student;
}
const student = findTheYoungest(studentList);
console.log(student);

// question 9: 
function findStudentGot10(studenList)
{
    let newStudentList = studentList.map(stud => {
        if(stud.math === 10 || stud.english === 10)
        {
            return stud
        }
    })
    return newStudentList;
}
const newStudentList = findStudentGot10(studentList);
console.log(newStudentList);

function findStudentGot10(studenList)
{
    let newStudentList = [];
    for(stud of studentList)
    {
        if(stud.math === 10 || stud.english === 10)
        {
            newStudentList.push(stud);
        }
    }
    return newStudentList;
}
const newStudentList = findStudentGot10(studentList);
console.log(newStudentList);

// OOP-----------------------------------------------
// question 1:

class Person{
    Greet()
    {
        console.log('Hello');
    }
    SetAge(age)
    {
        this.age = age;
    }
}

class Student extends Person{
    constructor()
    {
        super();
    }
    GoToClass()
    {
        console.log('I\'m going to class');
    }
    ShowAge()
    {
        console.log('My age is:', this.age, 'years old');
    }
    Greet()
    {
        console.log('Hello student');
    }
}

class Teacher extends Person{
    constructor(str)
    {
        super();
        this.subject = str;
    }

    Explain()
    {
        console.log('Explanation begins');
    }
    Greet()
    {
        console.log('Hello teacher');
    }
}

class StudentAndTeacherTest{
    main()
    {
        const person = new Person;
        person.Greet();
        const student = new Student;
        student.Greet();
        student.SetAge(21);
        student.ShowAge();
        const teacher = new Teacher('Hung');
        teacher.SetAge(30);
        teacher.Greet();
        teacher.Explain();
    }
}
const test = new StudentAndTeacherTest;
test.main();
*/
// question 2: 
class Cat{
    constructor(tiredness, hunger, lonliness, happiness)
    {
        this.tiredness = tiredness;
        this.hunger = hunger;
        this.lonliness = lonliness;
        this.happiness = happiness;
    }
    in_Or_DecreaseTiredness(number)
    {
        this.tiredness += number;
    }
    in_Or_DecreaseHunger(number)
    {
        this.hunger += number;
    }
    in_Or_DecreaseLonliness(number)
    {
        this.lonliness += number;
    }
    in_Or_DecreaseHappiness(number)
    {
        this.lonliness += number;
    }
    printSatusCat()
    {
        console.log('Tom is really hungry.');
        console.log('Tom is falling in love. He is very happy!');
        console.log('Tom is very tiredness today');
        console.log('I don\'t know what to write.');
    }
}
const cat = new Cat(0,0,0,0);
cat.in_Or_DecreaseTiredness(-8);
cat.in_Or_DecreaseHunger(-9);
cat.in_Or_DecreaseLonliness(-7);
cat.in_Or_DecreaseHappiness(10);
cat.printSatusCat();
console.log(cat);

// THE READING LIST


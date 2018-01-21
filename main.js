// lecture varibles
/*
var name = 'Dunia';
console.log(name);

var lastName = 'Goncalves'
console.log(lastName);

var age = 30;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// lecture variables 2
/*
var name = 'Dunia';
var age = 30;

console.log(name + age);
console.log(age + age);

var job, isMarried;

console.log(job);

job = 'teacher';
isMarried = 'false';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is she married? ' + isMarried + '.');

age = 'thirty-six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is she married? ' + isMarried + '.');

// var lastName = prompt('what is the last name?');
// console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is she married? ' + isMarried + '.');
*/

// var now = 2017;
// var birthYear = now - 30;
// birthYear = now - 30 * 2;
// console.log(birthYear);
//
// var ageJohn = 30;
// var ageMark = 30;
//
// ageJohn = 3 + 5* 4 - 6;

// if/else

// var name = 'dunia';
// var age = 30;
// var isMarried = true;
//
// if (isMarried) {
//   console.log(name + ' is married!');
// } else {
//   console.log(name + ' is not married');
// };
//
// if ( 23 === '23') {
//   console.log('hello');
// }


// var age = 25;
//
// if (age < 20) {
//   console.log('Jonh is a teen');
// } else if (age > 20 && age < 30) {
//     console.log('John is a young man');
// } else {
//     console.log('John is a man');
// }
//
// var job = 'bum';
//
// switch (job) {
//   case 'teacher':
//     console.log('John teaches kids');
//     break;
//   case 'driver':
//     console.log('He drives a bus');
//     break;
//   case 'cop':
//     console.log('he fights crime');
//     break;
//   default:
//     console.log("He's a bum");
//     break;
// }

// Coding challenge 1
//
// var johnHeight = 65;
// var tomHeight = 70;
// var ageJohn = 25;
// var ageTom = 23;
// var billyHeight = 70;
// var ageBilly = 25;
//
// var johnTotal = johnHeight + (ageJohn * 5);
// var tomTotal = tomHeight + (ageTom * 5);
// var billyTotal = billyHeight + (ageBilly * 5);
//
// if(johnTotal > tomTotal && johnTotal > billyTotal) {
//     console.log('John wins with a total of ' + johnTotal);
// } else if(johnTotal < tomTotal && billyTotal < tomTotal )  {
//     console.log('Tom wins with a total of ' + tomTotal);
// } else if(billyTotal > johnTotal && billyTotal > tomTotal) {
//     console.log('Billy wins with a total of ' + billyTotal);
// } else {
//     console.log('It is a tie.');
// }

//FUNCTIONS

// function calculateAge(yearOfBirth) {
//   var age = 2017 - yearOfBirth;
//   return age;
// }
//
// var ageJohn = calculateAge(1987);
// var ageTom = calculateAge(1983);
// var ageBilly = calculateAge(1994);
//
// function yearsUntilRetirement(name, year){
//   var age = calculateAge(year);
//   var retirement = 65 - age;
//
//   if(retirement >= 0){
//     console.log(name + ' retires in ' + retirement + ' years.');
//   } else {
//     console.log(name + ' is already retired.');
//   }
// }
//
// yearsUntilRetirement('John', 1987);
// yearsUntilRetirement('tom', 1933);
// yearsUntilRetirement('billy', 1990);

//Statements and Expressions
  // Expressions produces a value
  // A statement is meant to do an action

// ARRAYS
// var names = ['John', 'Jane', 'Mark'];
// var years = new Array(1990, 1969, 1948);
//
// console.log(names[0]);
// names[1] = 'Bennie';
//
// console.log(names);
//
// var john = ['John', 'Smith', 1990, 'cop', false];
// john.push('blue');// adds to the end of the array
// console.log(john);
// john.unshift('Mr.'); //adds to the begining
// console.log(john);
// john.pop();//deletes from end of array
// john.shift(); //removes from begin
// alert(john.indexOf('Smith')); //to find out if somthing is in an array
// console.log(john);
//
// if(john.indexOf('teacher') === -1) {
//   console.log('John is not a teacher');
// }

// OBJECTS

// var john = {
//   name: 'John',
//   lastName: 'Smith',
//   yearOfBirth: 1990,
//   job: 'teacher',
//   isMarried: 'false'
// };
//
// console.log(john.lastName);//dot notation
// console.log(john['lastName']);//brackets
//
// var xyz = 'job';
// console.log(john[xyz]);
// //making changes
// john.lastName = 'Miller';
// john['job'] = 'programer';
// console.log(john);
//
// var jane = new Object();
// jane.name = 'Jane';
// jane.lastName = 'Smith';
// jane['yearOfBirth'] = 1969;
// console.log(jane);

// OBJECTS & Methods
//v1.0
// var john = {
//   name: 'John',
//   lastName: 'Smith',
//   yearOfBirth: 1990,
//   job: 'teacher',
//   isMarried: 'false',
//   family: ['Jane','Merk','Bob'],
//   calculateAge: function() {
//     return 2017 - this.yearOfBirth;
//   }
// };
//
// // console.log(john.calculateAge(1990));
// console.log(john.calculateAge());
//
// var age = john.calculateAge();
// john.age = age;
// console.log(john);

//v2.0

// var john = {
//   name: 'John',
//   lastName: 'Smith',
//   yearOfBirth: 1990,
//   job: 'teacher',
//   isMarried: 'false',
//   family: ['Jane','Merk','Bob'],
//   calculateAge: function() {
//     this.age = 2017 - this.yearOfBirth;
//   }
// };
//
// john.calculateAge();
// console.log(john);

//Practice

// var dunia = {
//   firstName: 'Dunia',
//   lastName: 'Goncalves',
//   yearOfBirth: 1987,
//   family: ['Joszyel', 'Miya', 'Akeem', 'Ginger'],
//   job: 'Programer',
//   calculateAge: function() {
//     this.age = 2017 - this.yearOfBirth;
//   }
// };
// dunia.calculateAge();
// console.log(dunia);


// function Car(make, model, year) {
//   'use strict'
//   this.make = make,
//   this.model = model,
//   this.year = year
// }
//
// let newWhip = new Car('Toyota', 's80', 1990)
// console.log(newWhip);


// LOOPS

// for loops
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
//
// var names = ['john', 'jane', 'mary', 'mark', 'bob'];
//
// for (var i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }
//
// for (var i = names.length - 1; i >= 0 ; i--) {
//   console.log(names[i]);
// }
//
// //while loops
//
// var i = 0;
// while(i < names.length){
//   console.log(names[i]);
//   i++;
// }
//
// var i = names.length - 1;
// while(i >= 0){
//   console.log(names[i]);
//   i--;
// }
//
// for (var i = 1; i <= 5; i++) {
//   console.log(i);
//
//   if (i === 3) {
//     break;
//   }
// }
//
// for (var i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }

// CODING CHALLENGE 2

function printFullAge(yearsBorn) {
  var ages = [];
  var fullAges = [];

  for (var i = 0; i < yearsBorn.length; i++){
    ages[i]= 2017 - yearsBorn[i];
  }

  for (var i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
      console.log('This person is ' + ages[i] + ' and is of full age.');
      fullAges.push(true);
    } else {
      console.log('This person is ' + ages[i] + ' and not of full age.');
      fullAges.push(false)
    }
  }
  return fullAges;
}
var yearsBorn = [1983,1987,2004,2006,2017];
var full_1 = printFullAge(yearsBorn);
var full_2 = printFullAge([2004,1933,1958]);

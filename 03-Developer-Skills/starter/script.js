// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// new code snippets

// cl = console.log();

// tl = `Text ${}`;

/* for loop = for Element of arr {

} */

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // const myfunction = num => num * 10;
// const mapped = numbers.map(num => num ** 2);
// console.log(mapped);

// const persons = [
//   { firstName: "Konstantin", lastName: "Reicher" },
//   { firstName: "Daniel", lastName: "Reicher" },
// ];
// // function getFullName(item) {
// //     return [item.firstName, item.lastName].join(" ");
// // }
// const personsMapped = persons.map(item =>
//   [item.firstName, item.lastName].join(" ")
// );
// console.log(personsMapped);

// const newFormat = persons.map(({ firstName, lastName }) => ({
//   [firstName]: lastName,
// }));
// // const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
// console.log(newFormat);

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map(user => ({
//         fullName: `${user.name} ${user.surname}`,
//         id: user.id
//     }));

// console.log(usersMapped);

//   alert(usersMapped[0].id); // 1
// alert(usersMapped[0].fullName); // John Smith

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];

// console.log(arr);

// function sortByAge(arr) {
//     arr.sort((a, b) => a.age - b.age);
// }

// console.log(sortByAge(arr));
// // arr.reverse();
// console.log(arr);

// now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// function getAverageAge(arr) {
//     let ages = 0;
//     for (let i of arr) {
//         ages += i.age;
//     }
//     const avg = ages / arr.length;
//     return avg;
// }

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

function unique(arr) {
  let uniqueNames = [];
  for (let string of arr) {
    console.log(string);
    if (!uniqueNames.includes(string)) {
      uniqueNames.push(string);
    }
  }
  return uniqueNames;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(strings));

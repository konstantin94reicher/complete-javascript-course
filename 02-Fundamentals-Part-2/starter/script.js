// 'use strict'; 

// const jonas = {
//     firstName: "Jonas", 
//     lastName: "Schmedtmann",
//     job: "teacher",
//     friends: ["Michael", "Alex", "Hans"],
//     birthYear: 1991,
//     hasDriversLicense: true,
//     calcAge: function() {
//         this.age = 2025 - this.birthYear; 
//         return this.age; 
//     }
// };

// console.log(jonas.firstName); 
// console.log(jonas["job"]); 
// console.log(`Jonas has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`); 
// // console.log(jonas); 
// jonas.calcAge();

// // "Jonas is a 34 years old teacher and he has a driver's license."
// console.log(`${jonas.firstName} is a ${jonas.age} years old ${jonas.job} and he has ${jonas.hasDriversLicense ? "a" : "no"} drivers license.`);


// /* Write your code below. Good luck! 🙂 */

// const mark = {
//     fullName: "Mark Miller", 
//     mass: 78, 
//     height: 1.69, 
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: "John Smith", 
//     mass: 92, 
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi);
// console.log(john.bmi);

// // console.log(mark);
// // console.log(john);


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
  
/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]; 
let tips = []; 
let totals = []; 



for (let bill of bills) {
    const tip = calcTip(bill); 
    const total = bill + tip; 
    tips.push(tip); 
    totals.push(total); 
}

console.log(tips); 
console.log(totals); 
  
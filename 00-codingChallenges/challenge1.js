// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. 2. 3. Store Mark's and John's mass and height in variables
// Calculate both their BMIs using the formula (you can even implement both
// versions)
// Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2:  Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

let massMark; 
let massJohn;
let heightMark;
let heightJohn;

function calculateBMI(mass, height) {
    return parseFloat(mass / (height ** 2)).toFixed(2);
}

massMark = 78; 
heightMark = 1.69; 
massJohn = 92; 
heightJohn = 1.95; 

let bmiMark = calculateBMI(massMark, heightMark); 
let bmiJohn = calculateBMI(massJohn, heightJohn); 

let markHigherBMI = (bmi1, bmi2) => bmi1 > bmi2;

console.log(`BMI Mark Test 1: ${bmiMark}`);
console.log(`BMI John Test 1: ${bmiJohn}`);
alert (`BMI Mark higher than BMI John: ${markHigherBMI(bmiMark, bmiJohn)}`); 

massMark = 95; 
heightMark = 1.88; 
massJohn = 85; 
heightJohn = 1.76; 

bmiMark = calculateBMI(massMark, heightMark); 
bmiJohn = calculateBMI(massJohn, heightJohn); 

console.log(`BMI Mark Test 2: ${bmiMark}`);
console.log(`BMI John Test 2: ${bmiJohn}`);
alert (`BMI Mark higher than BMI John: ${markHigherBMI(bmiMark, bmiJohn)}`); 
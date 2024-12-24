"use strict";
const isLegal = (arr) => {
    return arr.filter(age => age >= 18);
};
const us = {
    firstName: "AQ",
    lastName: "QA",
    age: 19,
    Score: 100
};
const userr = {
    firstName: "Ashiq",
    lastName: "Aha",
    age: 21
};
console.log(us);
console.log(userr);
const numArr = [10, 12, 37, 40, 17, 18, 19, 22, 9, 11];
const legalArr = isLegal(numArr);
console.log(legalArr);

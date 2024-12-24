
interface User {
    firstName: string,
    lastName: string,
    age: number
}

const isLegal = (arr: number[]) => {
    return arr.filter(age => age >= 18);
}

type Auser = User | {Score: number}

const us : Auser = {
    firstName: "AQ",
    lastName: "QA",
    age: 19,
    Score: 100
}

const userr : Auser = {
    firstName: "Ashiq",
    lastName: "Aha",
    age: 21
}

console.log(us);
console.log(userr);

const numArr : number[] = [10,12,37,40,17,18,19,22,9,11];
const legalArr = isLegal(numArr);
console.log(legalArr);

interface User {
    firstName: string,
    lastName: string,
    age: number
}

const isLegal = (arr: number[]) => {
    return arr.every(age => age >= 18);
}

type Auser = User | {Score: number}

const us : Auser = {
    firstName: "AQ",
    lastName: "QA",
    age: 19,
    Score: 100
}

console.log(us);
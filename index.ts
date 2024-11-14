interface People {
    name: string,
    age: number,
    greet: () => string
}

let p : People = {
    name: "Ashiq",
    age: 23,
    greet: () => "Hello"
}

console.log(p.greet());
console.log(p.name);
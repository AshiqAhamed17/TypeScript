function greet (user: UserType) {
    console.log(`Name : ${user.name}, Score : ${user.score}`);
}

interface UserType {
    name: string, 
    score: number
}

type User = {
    name: string,
    score: number
}



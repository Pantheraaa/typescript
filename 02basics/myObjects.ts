// function addTwo(num: number): number {
//     return num + 2;
// }

// function getUpperVal(val: string): string {
//     return val.toUpperCase()
// }

// const User = {
//     name: "Rahul",
//     email: "rahul@gmail.com",
//     isActive: true,
// }

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = {
//     name: "Rahul",
//     isPaid: false,
//     email: "yadav@gmail.com",
// }

// createUser({ name: "Rahul", isPaid: true });
// createUser(newUser);

// function createCourse(): { name: string, price: number } {
//     return { name: "TypeScript", price: 200 };
// }


// ==========>>> type Alliase:
// type User = {
//     name: string;
//     age: number;
//     email: string;
//     isActive: boolean;
// };

// // type myString = string; // this is allowed in typescript

// function createUser(user: User): {name: string}{
//     return {name: "Yadav"}
// }

// createUser({ ...newUser, age: 43, isActive: true });

// =========================>>>> READONLY & OPTIONAL
type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardNumber?: number;  // ? means optional, it is not required
}

function createUser(u: User) { }

let user: User = {
    _id: "34534",
    name: "Yadav",
    email: "r@r.com",
    isActive: true,
}

user.email = "rahul@gmail.com";
// user._id = "432";    // Not possible as it's readonly

type cardNumber = {
    cardnumber: string;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
}


export { };
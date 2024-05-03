function signUpUser(name: string, email: string, isPaid: boolean) { };

const loginUser = (name: string, email: string, isPaid: boolean = false) => { };

signUpUser("Rahul", "rahul@gmail.com", true);
loginUser("r", "r@g.com");

const addTwo = (num: number): number => {
    return num + 2;
    // return "Hello";  // throw error as number type should be returned
}

addTwo(3);

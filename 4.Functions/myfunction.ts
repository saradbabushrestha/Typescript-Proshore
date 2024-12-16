function addTwo(num: number) {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(5);
getUpper("sarad");

signUpUser("sarad", "sarad@dev.com", false);

loginUser("sarad", "s@dev.com");

export {};

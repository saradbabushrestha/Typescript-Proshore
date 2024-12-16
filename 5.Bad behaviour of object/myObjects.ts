const User = {
  name: "sarad",
  email: "sarad@dev.com",
  isActive: true,
};
function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "sarad", isPaid: false, email: "sa@dev.com" };

createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "hello", price: 399 };
}

export {};

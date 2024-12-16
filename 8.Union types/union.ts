let score: number | string = 33;

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let sarad: User | Admin = {
  name: "sarad",
  id: 123,
};

sarad = { username: "sar", id: 234 };

// function getDbId(id: number | string) {
//   //making some API calls
//   console.log(`DB id is : ${id}`);
// }

getDbId(3);
getDbId("3");
function getDbId(id: number | string) {
  // id.toUpperCase()
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

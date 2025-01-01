// Union is a combination of different data types
// assuming playing games
// avoid using "any" instead use "union (|)"
// operator => | (pipe)
let score: number | string = 33;

score = 44;
score = "55";

// user defined data types
type User = {
  name: string;
  id: number;
};
type Admin = {
  user_name: string;
  id: number;
};

let pradeep: User | Admin = { name: "Pradeep", id: 12 };

pradeep = { user_name: "pradeep", id: 13 };

function getDbId(id: number | string) {
  //making some API calls
  console.log(`DB id is: ${id}`);
}
getDbId(3);
getDbId("3");

// suppose i hv to perform any string operation id.toUpperCase();
// suppose i hv to perform any number operation id + 2;
// then doing this operation will throw erorr cause typescript treat it as string | number not specific
// to avoid we can do this
function getDbIds(id: number | string) {
  if (typeof id === "string") {
    return id.toLowerCase();
  } else {
    return id + 2;
  }
}

const data: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];

// Either be all the number or all string should be in not mixup
const data3: string[] | number[] = ["1", "2", "3", "4"];

//To mix number and array
const data4: (string | number)[] = [1, 2, "3", "4"];

//avoid using any 
// const data4: any[] = [1, 2, "3", "4"];

// some strict way for constant and enums

// Ex: 1
let pi:3.14 = 3.14
    // pi= 3.145  => this will be error

// Ex: 2
let seatAllotment:"aisle"| "middle"|"window"

seatAllotment="aisle" // work fine
// seatAllotment="crew" => error 


export {};

//Example : 1
function addTwo(num) {
  return num + 2;
}
// Is there any inference in type in terms of variables then thats ok
// but in case of function its is not ok
addTwo(5); // by default any
addTwo("5"); // anyone can do this and this is dangerous

function addTwoNumbers(num: number) {
  // this function needs to be number
  // we don't need to do if(num is numbers) then do this and that

  return num + 2;
}

//Example : 2

function getUpper(val: string) {
  return val.toUpperCase();
}
addTwo(5);

// getUpper(4);
// it will show error
getUpper("Hello");

//Example : 3

function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser("Pradeep", "pradeep@gmail.com", true);

const loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("Pradeep", "pradeep@gmail.com");
// the ispaid parameter does not compaint for the arguments

//Example : 4
// function addTwonum(num:number){
//   return "hello"
// this will not give error while writing but
// this will give on run time so to rid i am expecting
//that it return number so i do like this

function addTwonum(num: number): number {
  return num + 2;
}

// returning more than one type
// function getValue(num:number):bool || string the whould be error  {
//   if(num>5) return true;
//   return "hello";
// }

// returning type in arrow function
const getHello = (s: string): string => {
  return "";
};

// returning in map
const heros = ["Thor","Spiderman","Ironman"]
// const heros = [1,2,3,]

heros.map((hero):string=> {
  return `hero is ${hero}`
})
addTwonum(5);

function consoleErorr(errmsg:string):void{
  console.log(errmsg)
}

// never => some function never return value
function handleErorr(errmsg:string):never{
  throw new Error(errmsg)
}

export {};

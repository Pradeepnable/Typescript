# TypeScript Documentation

## 1. Introduction
TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. Below are examples and explanations to help you get started with TypeScript.

### Example:
```typescript
let user = { name: "Hitesh", age: 10 };

console.log("Pradeep");
console.log(user.name);

export {};
```

---

## 2. Variables
### Defining Variables with Types
TypeScript allows you to define variables with specific types, ensuring type safety.

```typescript
// String
let myVar: string = "myVar";
console.log(myVar);

// Number
let userId: number = 32333;
let userRole = 3838;
console.log(userRole.toFixed()); // TypeScript infers the type as number

// Boolean
let isLoggedIn: boolean = false;

// Any
// Avoid using 'any' as it defeats the purpose of TypeScript.
let hello; // TypeScript infers 'any'

function greeting() {
    return "Thor";
}
hello = greeting();
```

---

## 3. Functions
### Enforcing Parameter and Return Types
TypeScript ensures that functions accept and return values of specific types.

#### Example 1:
```typescript
// No type specified, may cause runtime errors
function addTwo(num) {
  return num + 2;
}
addTwo(5); // Valid
addTwo("5"); // Dangerous, might cause issues

// With type annotation
function addTwoNumbers(num: number): number {
  return num + 2;
}
```

#### Example 2:
```typescript
function getUpper(val: string): string {
  return val.toUpperCase();
}
getUpper("Hello");
```

#### Example 3:
```typescript
function signUpUser(name: string, email: string, isPaid: boolean): void {}
signUpUser("Pradeep", "pradeep@gmail.com", true);

const loginUser = (name: string, email: string, isPaid: boolean = false): void => {};
loginUser("Pradeep", "pradeep@gmail.com");
```

#### Example 4:
```typescript
function addTwoNumbersStrict(num: number): number {
  return num + 2;
}

const heros = ["Thor", "Spiderman", "Ironman"];
heros.map((hero): string => {
  return `Hero is ${hero}`;
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
}

function handleCriticalError(errMsg: string): never {
  throw new Error(errMsg);
}
```

---

## 4. Objects
### Defining Object Structures
You can define object structures using TypeScript's type annotations.

#### Example:
```typescript
const User = {
  name: "Pradeep",
  email: "pradeep@xsh.com",
  isActive: true,
};

function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}

let newUser = { name: "Pradeep", isPaid: false, email: "p@p.com" };
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "ReactJS", price: 399 };
}

// Type Alias Example
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number; // Optional field
};

let myUser: User = {
  _id: "1",
  name: "Hue",
  email: "hue@j.com",
  isActive: false,
  creditCardDetails: 1234,
};
myUser.email = "hue2@j.com"; // Allowed
// myUser._id = "2"; // Error: Cannot assign to '_id' because it is a read-only property

// Combining Types
type CardNumber = {
  cardNumber: string;
};
type CardDate = {
  cardDate: string;
};
type CardDetails = CardNumber & CardDate & {
  cvv: number;
};
```

---

## 5. Arrays
### Type-Safe Arrays

#### Example:
```typescript
const superHeros: string[] = [];
superHeros.push("Spider Man");

const heroPower: Array<number> = [];
heroPower.push(2);

// Array of Objects
const allUsers: { name: string; isActive: boolean }[] = [];
allUsers.push({ name: "Pradeep", isActive: false });

// 2D Arrays
const mlModels: number[][] = [
  [255, 255, 255],
];
```

---

## 6. Enums
### Restricting Choices
Enums provide a way to define a set of named constants.

#### Example:
```typescript
const enum SeatChoice {
  AISLE = "aisle",
  MIDDLE = 22,
  WINDOW,
  FOURTH,
}

const mySeat = SeatChoice.AISLE;
```

---

## 7. Tuples
### Defining Fixed Arrays
Tuples are arrays with a fixed number of elements and types.

#### Example:
```typescript
let tUser: [string, number, boolean];
tUser = ["py", 132, true];

let rgb: [number, number, number] = [255, 255, 255];

type User = [number, string];
const newUser: User = [12, "example.google.com"];
```

---

## 8. Union Types
### Combining Different Types
Unions allow a variable to hold values of multiple types.

#### Example:
```typescript
let score: number | string = 33;
score = "55";

function getDbId(id: number | string) {
  if (typeof id === "string") {
    return id.toLowerCase();
  } else {
    return id + 2;
  }
}

const data: (string | number)[] = [1, 2, "3", "4"];
```

---

## 9. Interfaces
### Defining Contracts
Interfaces define the structure of an object and can be extended.

#### Example:
```typescript
interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial(): string;
  getCoupon(couponName: string, value: number): number;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const pradeep: Admin = {
  dbId: 22,
  role: "admin",
  email: "p@y.com",
  userId: 23,
  githubToken: "github",
  startTrial: () => "Trial Started",
  getCoupon: (name, off) => 10,
};
```

---

### Final Note
This guide introduces key TypeScript features. As you practice more, you'll uncover its full potential for building robust, maintainable, and scalable applications.


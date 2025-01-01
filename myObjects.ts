const User = {
  name: "Pradeep",
  email: "pradeep@xsh.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

// createUser({ name: "Pradeep", isPaid: false,email:"p@p.com" });
// this above line give error
let newUser ={ name: "Pradeep", isPaid: false,email:"p@p.com" }
createUser(newUser)
// but this will not but it should give error 



function createCourse():{name:string,price:number}{
    return {name:"reactjs",price:399}
}

//type alias => keyword 

// type User = {
//     name:string,
//     email:string,
//     isActive:boolean
// }

// function createUser2 (user:User):User{
//     return {name:"Pradeep",email:"p@p",isActive:true}
// }

// createUser2({ name: "Pradeep", isActive:true,email:"p@p.com" })


type User = {
   readonly _id:string // can't manipulate
    name:string,
    email:string,
    isActive:boolean,
    creaditCardDetails?:number, // ? will show it is optional
}

let myUser:User = {
    _id:"1",
    name:"hue",
    email:"hue@j.com",
    isActive:false,
    creaditCardDetails:1234,
}

myUser.email = "h2@j.com"
// myUser._id = 2 // it will show error casue readonly

// function createUser2(u:User):User{

//     return {}
// }

type cardNumber = {
    cardNumber:string,
}
type cardDate = {
    cardDate:string,
}

// to combine both the card related data use => &
type cardDetails =cardNumber & cardDate & {
    cvv:number,
}


export {};

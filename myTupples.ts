
// A kind of specific array which is given by typescript

// const user: (string| number) []=['py',1,]

let tUser: [string,number,boolean];
// it will recieve only spefied pattern
tUser =["py",132,true]
// tUser =["py",true,132] => this will throw error 

let rgb:[number,number,number]=[255,255,255]

// with type
type User =[number,string]

const newUser:User = [12,"example.google.com"]

// newUser[1]="hc.com" =>it wil change email example.google.com

// newUser.push(true)  => throw error 

export{}
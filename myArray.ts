
// const superHeros = []  type show never
// superHeros.push("spiderman")
// this will throw error casue the array is by default never and 
// we cant push into that


// Now this will work fine 
// the type could be anything e.g number,bolean string
const superHeros:string []=[]
superHeros.push("Spider Man");

// another way 
const heroPower : Array<number>=[]
heroPower.push(2)

type User ={
    name:string,
    isActive:boolean,
}

const allUsers: User[] = [] 
allUsers.push({name:"pradeep",isActive:false})

//Array inside array / 2d array
 const mlModels:number[][]=[
    [255,255,255],// assume its a rgb code
 ]
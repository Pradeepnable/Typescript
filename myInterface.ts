interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //startTrial:()=> string  : frist way of writing methods
  startTrial(): string; //Another way of writing methods
  getCoupon(couponname: string, value: number): number;
}

//Reopning of interface
interface User {
    githubToken:string,
}



interface Admin extends User{
    role:"admin"|"ta"|"learner"
}

const pradeep: Admin = {
  dbId: 22,
  role:"admin",
  email: "p@y.com",
  userId: 23,
  githubToken:"github",
  startTrial: () => {
    return "Srial Started";
  },
  // parameter does not need to be same
  getCoupon(name: "pradeep10", off: 10):number {
    return 10;
  },
};






export {};

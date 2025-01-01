interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //startTrial:()=> string  : frist way of writing methods
  startTrial(): string; //Another way of writing methods
  getCoupon(couponname: string, value: number): number;
}

const pradeep: User = {
  dbId: 22,
  email: "p@y.com",
  userId: 23,
  startTrial: () => {
    return "Srial Started";
  },
  // parameter does not need to be same
  getCoupon(name: "pradeep10", off: 10) {
    return 10;
  },
};

export {};

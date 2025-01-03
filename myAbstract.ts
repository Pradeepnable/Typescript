abstract class TakePhoto {
  constructor(public cameraModa: string, public filter: string) {}

  // this will throw error without abstract keyword
  abstract getSepia(): void;
  getReelTime(): number {
    // complex calculation
    return 9;
  }
}

//When i use abstract keyword before TakePhoto i'll not be able to create object
// const Pradeep = new TakePhoto ("test","test");

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  //overriding the method
  getSepia(): void {
    console.log("Sepia");
  }
}
//But i can create usig the class which is extending
const Pradeep = new Instagram("test", "test", 3);

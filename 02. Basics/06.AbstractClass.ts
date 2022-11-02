abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}
    abstract getPhoto(): void;
    getTime(): number{
        return 0;
    };
}


//const cam = new TakePhoto('Auto', 'Black and White'); // Error: Cannot create an instance of an abstract class.

class Camera extends TakePhoto {
    getPhoto(): void {
        // since we are using abstract class, we have to implement the abstract method
        console.log('Photo taken');
    }
}


//Abstract class can be extended but cannot be instantiated
const cam = new Camera('Auto', 'Black and White'); // No error
// advantantage of abstract class is that we can use it as a type and we can use it as a base class
// abstract class has pre defined defination which get implemented or needs to be implemented in the child class
cam.getTime(); // 0
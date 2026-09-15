console.log("hello");

class ToyotaCar{
    constructor(brand,mileage,color){
        console.log("Creating New Object");
        
        this.brand=brand;
        this.mileage=mileage;
        this.color=color;

    }

    start(){
        console.log("Start");
    }

    stop(){
        console.log("Stop");
    }
}

let fortuner = new ToyotaCar("fortuner",10,"White");
console.log(fortuner);
let lexus = new ToyotaCar("Lexus",12,"Red");
console.log(lexus);
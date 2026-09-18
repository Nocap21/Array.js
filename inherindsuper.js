console.log("hello peter");

class person {
    constructor(name){
        console.log("Enter Parent Construcor")
        this.species="Homo Spacies "
        this.name=name;

    }

    eat(){

        console.log("Eat")

    }
   
}

class engineer extends person{
    constructor(name,branch){
        console.log("Enter child Constructor")
        super(name); // super invoke parent class constructor
        this.branch= branch;
        console.log("Exit child Constructor")

    }

    work(){
        console.log("Build Something ,soleve Problems")
    }
}

let engObj = new engineer("Peter","Information Tech");

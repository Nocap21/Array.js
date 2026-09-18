console.log("hello");

let DATA ="secret information";
class user {

    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("data ",DATA);
    }
}

class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA="some new value";

    }

}

let student1=new user ("Peter ","abc@12");
let student2=new user ("Gwen ","abc@123");

let teacher1=new user ("dean ","abc@1234");
let admin1=new admin ("Admin ","abc@12345");
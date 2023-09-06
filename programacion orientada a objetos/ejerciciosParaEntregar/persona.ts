class Persona {
private name: string;
private age: number;

constructor (name: string="", age: number=1) {
    this.name = name;
    this.age = age;

}

setName (name: string):void {
    this.name = name;
    console.log("my name is",this.name);

};

setAge (age: number):void{
     this.age = age;
     console.log ("my age is",this.age);
    
};

getInfo (): void {
   
    console.log ("soy",this.name, "tengo", this.age, "años")
};

}

const per01 : Persona= new Persona();
per01.setName("ramiro");
per01.setAge(25);
per01.getInfo();




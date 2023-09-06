var Persona = /** @class */ (function () {
    function Persona(name, age) {
        if (name === void 0) { name = ""; }
        if (age === void 0) { age = 1; }
        this.name = name;
        this.age = age;
    }
    Persona.prototype.setName = function (name) {
        this.name = name;
        console.log("my name is", this.name);
    };
    ;
    Persona.prototype.setAge = function (age) {
        this.age = age;
        console.log("my age is", this.age);
    };
    ;
    Persona.prototype.getInfo = function () {
        console.log("soy", this.name, "tengo", this.age, "años");
    };
    ;
    return Persona;
}());
var per01 = new Persona();
per01.setName("ramiro");
per01.setAge(25);
per01.getInfo();

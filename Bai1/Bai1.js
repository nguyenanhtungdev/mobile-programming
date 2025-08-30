var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.show = function () {
        console.log("T\u00EAn t\u00F4i l\u00E0 ".concat(this.name, ", ").concat(this.age, " tu\u1ED5i"));
    };
    return Person;
}());
var p = new Person("Nguyen Tung", 24);
p.show();

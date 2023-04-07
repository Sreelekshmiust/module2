var Employee1 = /** @class */ (function () {
    function Employee1(fname, mname, lname) {
        this.fname = fname;
        this.mname = mname;
        this.lname = lname;
    }
    Employee1.prototype.getMname = function () {
        return this.mname;
    };
    return Employee1;
}());
var e1 = new Employee1('a', 'b', 'c');
console.log(e1.getMname());

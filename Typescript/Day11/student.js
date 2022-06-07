"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(fname, lname, id) {
        this.fname = fname;
        this.lname = lname;
        this.id = id;
    }
    Student.prototype.display = function () {
        console.log("\n          First Name  :: ".concat(this.fname, "\n          Last name   :: ").concat(this.lname, "\n          Id          :: ").concat(this.id, "\n    "));
    };
    return Student;
}());
exports.Student = Student;

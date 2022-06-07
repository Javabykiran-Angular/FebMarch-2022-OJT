"use strict";
exports.__esModule = true;
exports.EmployeDetails = void 0;
var department_1 = require("./department");
var EmployeDetails = /** @class */ (function () {
    function EmployeDetails(f, l, sal, role) {
        this.fname = f;
        this.lname = l;
        this.salary = sal;
        this.dept = new department_1.Department(role);
    }
    EmployeDetails.prototype.Display = function () {
        console.log("\n              -------------Employee Details----------\n              First name  :: ".concat(this.fname, "\n              Last Name   :: ").concat(this.lname, "\n              Salary      :: ").concat(this.salary, "\n              Role        :: ").concat(this.dept.getRole(), "\n        "));
    };
    return EmployeDetails;
}());
exports.EmployeDetails = EmployeDetails;

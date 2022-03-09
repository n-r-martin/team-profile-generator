const Employee = require("./Employee.js");


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    // What is the point of these methods??
    getOfficeNumber() {
        return this.officeNumber;
    }

    // Overridden to Return 'Manager' - Will I need this?
    // on generator role gets whatever is return from this method
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;
class Employee  {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    // // Simple return statements
    getEmail() {
        return this.email;
    }

    // // conditional to check the role
    getRole() {
        return 'Employee';
    }
}


module.exports = Employee;
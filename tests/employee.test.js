const Employee = require("../lib/Employee");

describe("Employee", () => {
    // Test for all use cases when initializing a new Employee object
    const employee = new Employee("Test", 1, 'email@test.com');

    describe("Initialization", () => {
        it("should create an object with a name, id, and email if provided valid arguments", () => {

        // Verify that the new object has the correct properties
        expect(employee.name).toEqual("Test");
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual('email@test.com');
        });

        // Testing getName() object method
        it("should return the name of the employee", () => {
            
            // Verify that the function getName() returns the name
            expect(employee.getName()).toEqual("Test");
        });

         // Testing getId() object method
         it("should return the ID of the employee", () => {
            
            // Verify that the function getId() returns the name
            expect(employee.getId()).toEqual(1);
        });

         // Testing getEmail() object method
         it("should return the email of the employee", () => {
            
            // Verify that the function getEmail() returns the name
            expect(employee.getEmail()).toEqual("email@test.com");
        });

         // Testing getRole() object method
         it("should return the role of the employee", () => {
            
            // Verify that the function getRole() returns the name
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});
const Manager = require("../lib/Manager");

describe("Manager", () => {
    // Test for all use cases when initializing a new manager object
    const manager = new Manager("Test", 1, 'email@test.com',"111-222-3333");

    describe("Initialization", () => {
        it("should create an object with a name, id, email, and office number if provided valid arguments", () => {

        // Verify that the new object has the correct properties
        expect(manager.name).toEqual("Test");
        expect(manager.id).toEqual(1);
        expect(manager.email).toEqual('email@test.com');
        });

        // Testing getName() object method
        it("should return the name of the manager", () => {
            
            // Verify that the function getName() returns the name
            expect(manager.getName()).toEqual("Test");
        });

         // Testing getId() object method
         it("should return the ID of the manager", () => {
            
            // Verify that the function getId() returns the name
            expect(manager.getId()).toEqual(1);
        });

         // Testing getEmail() object method
         it("should return the email of the manager", () => {
            
            // Verify that the function getEmail() returns the name
            expect(manager.getEmail()).toEqual("email@test.com");
        });

         // Testing getOfficeNumber() object method
         it("should return the office number of the manager", () => {
            
            // Verify that the function getOfficeNumber() returns the name
            expect(manager.getOfficeNumber()).toEqual("111-222-3333");
        });

         // Testing getRole() object method
         it("should return the role of the manager", () => {
            
            // Verify that the function getRole() returns the name
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});
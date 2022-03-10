const Intern = require("../lib/Intern");

describe("Intern", () => {
    // Test for all use cases when initializing a new Intern object
    const intern = new Intern("Test", 1, 'email@test.com',"University of Test");

    describe("Initialization", () => {
        it("should create an object with a name, id, email, and school if provided valid arguments", () => {

        // Verify that the new object has the correct properties
        expect(intern.name).toEqual("Test");
        expect(intern.id).toEqual(1);
        expect(intern.email).toEqual('email@test.com');
        });

        // Testing getName() object method
        it("should return the name of the Intern", () => {
            
            // Verify that the function getName() returns the name
            expect(intern.getName()).toEqual("Test");
        });

         // Testing getId() object method
         it("should return the ID of the Intern", () => {
            
            // Verify that the function getId() returns the name
            expect(intern.getId()).toEqual(1);
        });

         // Testing getEmail() object method
         it("should return the email of the Intern", () => {
            
            // Verify that the function getEmail() returns the name
            expect(intern.getEmail()).toEqual("email@test.com");
        });

         // Testing getSchool() object method
         it("should return the github url of the Intern", () => {
            
            // Verify that the function getSchool() returns the name
            expect(intern.getSchool()).toEqual("University of Test");
        });

         // Testing getRole() object method
         it("should return the role of the Intern", () => {
            
            // Verify that the function getRole() returns the name
            expect(intern.getRole()).toEqual("Intern");
        });
    });
});
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    // Test for all use cases when initializing a new Engineer object
    const engineer = new Engineer("Test", 1, 'email@test.com',"github.com/test-user");

    describe("Initialization", () => {
        it("should create an object with a name, id, email, and github url if provided valid arguments", () => {

        // Verify that the new object has the correct properties
        expect(engineer.name).toEqual("Test");
        expect(engineer.id).toEqual(1);
        expect(engineer.email).toEqual('email@test.com');
        });

        // Testing getName() object method
        it("should return the name of the Engineer", () => {
            
            // Verify that the function getName() returns the name
            expect(engineer.getName()).toEqual("Test");
        });

         // Testing getId() object method
         it("should return the ID of the Engineer", () => {
            
            // Verify that the function getId() returns the name
            expect(engineer.getId()).toEqual(1);
        });

         // Testing getEmail() object method
         it("should return the email of the Engineer", () => {
            
            // Verify that the function getEmail() returns the name
            expect(engineer.getEmail()).toEqual("email@test.com");
        });

         // Testing getGitHub() object method
         it("should return the github url of the Engineer", () => {
            
            // Verify that the function getGitHub() returns the name
            expect(engineer.getGitHub()).toEqual("github.com/test-user");
        });

         // Testing getRole() object method
         it("should return the role of the Engineer", () => {
            
            // Verify that the function getRole() returns the name
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});
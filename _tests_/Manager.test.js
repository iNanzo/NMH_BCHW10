const Manager = require("../lib/ManagerObj.js");

describe("Manager", () => {
    describe("Initializing test object", () => {
        it("Should return: Newton, 1, nhoang99@gmail.com, and 101", () => {
            const employee = new Manager("Newton", 1, "nhoang99@gmail.com", 101);
            
            expect(employee.name).toEqual("Newton");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("nhoang99@gmail.com");
            expect(employee.office).toEqual(101);
        });
    });
});
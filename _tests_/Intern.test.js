const Intern = require("../lib/InternObj.js");

describe("Intern", () => {
    describe("Initializing test object", () => {
        it("Should return: Newton, 1, nhoang99@gmail.com, and Bellevue College", () => {
            const employee = new Intern("Newton", 1, "nhoang99@gmail.com", "Bellevue College");
            
            expect(employee.name).toEqual("Newton");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("nhoang99@gmail.com");
            expect(employee.school).toEqual("Bellevue College");
        });
    });
});
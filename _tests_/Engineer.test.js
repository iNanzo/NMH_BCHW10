const Engineer = require("../lib/EngineerObj.js");

describe("Engineer", () => {
    describe("Initializing test object", () => {
        it("Should return: Newton, 1, nhoang99@gmail.com, and iNanzo", () => {
            const employee = new Engineer("Newton", 1, "nhoang99@gmail.com", "iNanzo");
            
            expect(employee.name).toEqual("Newton");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("nhoang99@gmail.com");
            expect(employee.github).toEqual("iNanzo");
        });
    });
});
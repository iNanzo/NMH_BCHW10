const Employee = require("../lib/EmployeeObj.js");

describe("Employee", () => {
    describe("Initializing test object", () => {
        it("Should return: Newton, 1, and nhoang99@gmail.com", () => {
            const employee = new Employee("Newton", 1, "nhoang99@gmail.com");
            
            expect(employee.name).toEqual("Newton");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("nhoang99@gmail.com");
        });
    });
});
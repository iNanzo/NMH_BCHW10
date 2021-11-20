const Employee = require("../lib/EmployeeObj.js");

describe("Employee", () => {
    describe("Initialization of Employee", () => {
        it("should return value with what it was initialized with", () => {
            const employee = new Employee("name", "id", "email")
            expect(employee.name).toEqual("name")
        });
        it("should have 3 keys inside the object", () => {
            const employee = new Employee("name", "id", "email")
            expect(Object.keys(employee).length).toEqual(3)
        });
    });

    describe("testing functions", () => {
        it("should return name", () => {
            const employee = new Employee("name", "id", "email")
            expect(employee.getName()).toEqual("name")
        });
        it("should return employee", () => {
            const employee = new Employee("name", "id", "email")
            expect(employee.getRole()).toEqual("Employee")
        });
    });
});
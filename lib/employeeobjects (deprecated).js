// DEPRECATED (couldn't figure out how to refer to specific class)

class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}

class Manager extends Employee{
    constructor(name, id, email, office){
        super(name, id, email);
        this.office = office;
    }

    getRole(){
        return "Manager";
    }
}

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getRole(){
        return "Engineer";
    }
}

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getRole(){
        return "Intern";
    }
}

module.exports = Employee, Engineer, Intern, Manager;
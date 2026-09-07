// It is a template for creating objects. 

class Employee {
    constructor(firstName, lastName, department) {
        this.firstname = firstName
        this.lastName = lastName
        this.department = department
    }
}

const employee  = new Employee("Emeka", "Nwachukwu", "Engineering");
console.log(employee.getDisplayname())
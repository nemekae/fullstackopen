
let employee = {
  firstName: "Emeka",
  lastName: "Nwachukwu",
  title: "Engineering Manager",
  isActive: true,
  numberOfYearsEmployed: 10,
  startDate: "2016-06-01T00:00:00.000Z",
  manager: "Jeremy Chawd",
  contact: {
    email: "nemekae@neex.com",
    phone: "+447784006436",
  },
};


const {firstName, lastName} = employee;
console.log(firstName)

//renaming while destructuring
const {title: position} = employee
console.log(position)

//Array Destructuring
const departments = ["Engineering", "Product", "HR"]
const [firstDept, secondDept] = departments

console.log(secondDept)



//Rest syntax with objects 
const{title, ...employeeDetails} = employee
console.log(employeeDetails)

//Spread syntax - it copies and expands 
const updatedEmployee = {
    ...employee,
    title: "Senior Principal Engineer"
}

console.log(updatedEmployee)


// Optional Chaining vs Nullish Coalescing 


//Logical nullish assignment 
const settings = {}

settings.theme ??= "light"
console.log(settings.theme)

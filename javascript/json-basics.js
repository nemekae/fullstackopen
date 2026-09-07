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


//JSON(Javascript Object Notations) Fundamentals. It was designed for data not executable codes.
//JSON is a text based data format and its commonly used to represent structured data. Looks similar to JS object literals

//convert the employee object to JSON.

const jsonEmployee = JSON.stringify(employee)
console.log(jsonEmployee)
console.log(typeof jsonEmployee)

const formatJson = JSON.stringify(employee, null, 2)
console.log(formatJson)

// convert JSON back to object, we use JSON.parse()

const parsedEmployee = JSON.parse(formatJson)
console.log(parsedEmployee)
console.log(parsedEmployee.contact)
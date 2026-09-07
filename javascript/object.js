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
    phone: "+447784006436"
  }
};

console.log(employee.lastName)
console.log(employee.numberOfYearsEmployed)
console.log("God abeg please help me!!!")

// Modern Javascript introduces Object.hasOwn(objectName, key)
console.log(Object.hasOwn(employee, "firstName"))



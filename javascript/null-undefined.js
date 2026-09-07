let manager;

console.log(manager)

manager = "nemekae"
console.log(manager)

const ceoManager = null;
console.log(ceoManager)

const employeeWithContact = {
    name: "Emeka",
    contact: {
        email: "nemekae@nee.com"
    }
}

const employeeWithNoContact = {
  name: "Amara",
};


//optional chaining, helps us avoid null or undefined error by putting ? in front of request.

console.log(employeeWithNoContact.contact?.email)


/* Nullish coalescing  is a programming operator (written as ??) used in JavaScript and TypeScript. It returns the right-hand side value when the left-hand side value is null or undefined; otherwise, it returns the left-hand side value.It is highly popular because it provides a safe way to set default values without running into the bugs caused by older methods.
*/
//It is highly popular because it provides a safe way to set default values without running into the bugs caused by older methods.
// If leftValue is null or undefined, result becomes rightValue.
// If leftValue is anything else (like 0, false, or an empty string ""), result stays leftValue.
const result = leftValue ?? rightValue;
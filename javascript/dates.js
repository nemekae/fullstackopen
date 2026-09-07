const now = new Date()
console.log(now)


const startDate = new Date("2024-07-01")
console.log(startDate)

const myDate = new Date(2026, 5, 1)
console.log(myDate)


//Explore Date information 

console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())

//
const epoch = new Date(0)
console.log(epoch)


// Location and dates tricks
console.log(now.toLocaleDateString("en-US"))
console.log(now.toLocaleDateString("en-GB"))
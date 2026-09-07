
const counted = document.getElementById("counter")
const saved = document.getElementById("saver");
let count = 0


const increment = () => {
    count += 1;
    counted.textContent = count
}

const save = () => {
    let countStr = count + " _ "
    saved.textContent += countStr;
    counted.textContent = 0
    count = 0
}
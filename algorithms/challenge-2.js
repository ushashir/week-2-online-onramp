const numSwap = (number) => {
    number = String(number)
    let output = ""

    if(number.length % 2 !== 0) {
        return "Lwngth of num is not even"
    }

    for(let i=0; i < number.length; i++) {
        if(i % 2 !== 0) {
            var leftNum = number[i-1]
            var rightNum = number[i]
            output += rightNum
            output += leftNum
        }
    }
    return Number(output)
}

console.log(numSwap(12345))
function numSwap(number) {}

module.exports = numSwap

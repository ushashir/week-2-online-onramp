function increment(arr, value) {
    let newArr = [];
    return arr.map((elem) => {
        return {
            val: elem.val + value
        }
    });
}

const result = increment([{ val: 1 }, { val: 2}, { val: 3 }], 2) 
console.log(result)
// [{ val: 3 }, { val: 4 }, { val: 5 }]  

// module.exports = increment

const numSwap = (nums) => {
    nums = String(nums)
    let output = ""

    if(nums.length % 2 !== 0) {
        return "Lwngth of num is not even"
    }

    for(let i=0; i < nums.length; i++) {
        if(i % 2 !== 0) {
            var leftNum = nums[i-1]
            var rightNum = nums[i]

            output += rightNum
            output += leftNum
        }
    }
    return Number(output)
}

console.log(numSwap(12345))
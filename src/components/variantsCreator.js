

export const variantsCreator = (variantsArray) => {
    let nums = [0,1,2,3,4]
    let ranNums = []
    let i = nums.length
    let j = 0

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
}

    let variantsOutput = []
    for(let i = 0; i < 5; i++) {
        variantsOutput.push(variantsArray[ranNums[i]])
    }
    return variantsOutput
} 



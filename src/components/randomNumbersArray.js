

export const randomNumbersArray = (number) => {

    let numbers = [];
    for(let i = 0; i < number; i++) {
        numbers.push(i);
    }
    let ranNums = []
    let i = numbers.length
    let j = 0

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(numbers[j]);
    numbers.splice(j,1);
}
return ranNums

}
function getMaxSubSum(arr){
    let firstSum = 0;
    for(let i = 0;i < arr.length; i++){
        let secondSum = 0;
        for(let j = 0;j < arr.length; j++){
            secondSum += arr[j];

            firstSum = Math.max(firstSum, secondSum);
        }
    }
    return firstSum;
}

alert(getMaxSubSum([-1, 2, 3, -9]));
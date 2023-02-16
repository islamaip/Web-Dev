function sumInput(){
    let sum = 0;
    let arr = [];
    let num;

    while(true){
        num = prompt('Enter a number: ');

        if(!isFinite(num) || num === '' || num === null){
            break;
        };

        arr.push(+num);
    };

    for(let i of arr){
        sum += i;
    }
    return sum;
}
alert(sumInput());
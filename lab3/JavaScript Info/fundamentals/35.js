let number = prompt('Enter a number: ', '');

outer: for(let i = 2;i <= number;i++){
    let cnt = 0;
    for(let j = 2;j < i; j++){
        if(i % j == 0){
            continue outer;
        }
    }
    if(cnt == 0) alert(i);
}
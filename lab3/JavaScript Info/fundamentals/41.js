function pow(a, b){
    return a ** b;
}

let a = prompt('Enter number:', '');

let b = prompt('Enter a number:', '');

if(b < 1){
    alert('Only positive');
}else{
    pow(a, b);
}
function readNumber(){
    let num;
    
    while(!isFinite(num)){
        num = prompt('Enter a number:','');

        if(num === null || num === ''){
            return null;
        }
    }
    return num;
}

alert(readNumber());
function checkSpam(str){
    let checkString = str.toLowerCase();
    return checkString.includes('viagra') || checkString.includes('xxx');
}

alert(checkSpam('Hello'));

alert(checkSpam('dxxx'));
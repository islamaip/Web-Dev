function pow(x, n) { //space between arguments and open bracket on the same line;
  let result = 1; //space before and after =; 
  for(let i = 0; i < n; i++) { //spaces, {...} should be on new line
    result *= x;
  }

  return result;
}

let x=prompt("x?",'');
let n=prompt("n?",'');
//better to write o separate lines 
if (n <= 0) { //spaces and bracket
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else { //better to write { on the same line
  alert(pow(x,n))
}
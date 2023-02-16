function random(min, max) {
    return min + Math.random() * (max - min); /* random * (max-min) generates number between 0 .. max-min
     adding min generates number from min to max*/
  }
  
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );
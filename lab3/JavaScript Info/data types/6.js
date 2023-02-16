function random(min, max) {
    return Math.floor(min + Math.random() * (max + 1- min)); /* random from min to max + 1
    and then we have to round result*/
  }
  
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );
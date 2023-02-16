let browser = prompt('Enter a browser name: ', '');

if(browser == 'Edge'){
    alert("You've got the Edge");
}else if(browser == 'Chrome' || browser == 'Safari' || browser == 'Opera' || browser == 'Firefox'){
    alert('Okay we support these browsers too');
}else{
    alert('We hope that this page looks ok!');
}
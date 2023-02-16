let styles = ['Jazz', 'Blues'];

styles.push('Rock-n-Roll');
alert(styles);

let n = (styles.length-1)/2;

styles[n] = 'Classics';
alert(styles);

styles.shift();
alert(styles);

styles.unshift('Rap' ,'Reggae');
alert(styles);
function truncate(str, maxLength){
    if(str.length > maxLength){
        return str.slice(0, maxLength - 1) + '...';
    }
    return str;
}

alert(truncate("What I'd like to tell on this topic is:", 20));
alert(truncate('Hello', 20));
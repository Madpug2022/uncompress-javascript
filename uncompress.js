function uncompress(str){
    let number = "123456789";
    let newWord = [];
    let letter = "";
    for (let i = 1; i < str.length; i++){
        letter = str[i-1];
        if (number.includes(str[i])){
            newWord.push(letter.repeat(str[i]))
        } else continue
    }
    return newWord.join("")
}





console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'

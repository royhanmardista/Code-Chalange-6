function missingLetter(str) {
    const kamus = '7ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const output = []
    for (let i=0; i<str.length-1; i++) {
        //console.log(kamus.indexOf(str[i+1]))
        if (kamus.indexOf(str[i+1]) - kamus.indexOf(str[i]) === 2) {
            let key = (kamus.indexOf(str[i+1]) + kamus.indexOf(str[i])) / 2            
            output.push(kamus[key])            
        }
    }
    return output
}

console.log(missingLetter('ABDF'))
console.log(missingLetter('ABDFGJLACXZ'))
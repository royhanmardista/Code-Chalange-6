function convertToCoin(number) {
    var kamus = [1 , 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000]
    var output = []    
    while (number > 0) {
        for (let i=kamus.length-1; i>=0; i--) {
            if (number >= kamus[i]) {
                output.push(kamus[i])
                number -= kamus[i]
                break;
            }                              
        }       
    }
    return output
}

console.log(convertToCoin(543))
console.log(convertToCoin(7752))
console.log(convertToCoin(37454))
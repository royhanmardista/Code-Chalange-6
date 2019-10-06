function toRoman(num) {
    var kamus = [[1,'I'],
                 [4, 'IV'],
                 [5, 'V'],
                 [9, 'IX'],
                 [10, 'X'],
                 [40,'XL'],
                 [50, 'L'],
                 [90,'XC'],
                 [100,'C'],
                 [400, 'CD'],
                 [500,'D'],
                 [900,'CM'],
                 [1000,'M']]

    var output = ''    
    while (num > 0) {
        for (let i=kamus.length-1; i>= 0; i--) {        
            if (kamus[i][0]<=num) {
                output += kamus[i][1]
                num -= kamus[i][0] 
            }            
        } 
    }
    return output;
}

console.log(toRoman(4))
console.log(toRoman(9))
console.log(toRoman(23))
console.log(toRoman(1453))
console.log(toRoman(1646))
console.log(toRoman(1000))
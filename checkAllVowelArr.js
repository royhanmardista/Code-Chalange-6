function checkAllVowelArr(array) {
    if (array.length === 1) {
        return 0
    }
    const kamus = 'aioeoAIUEO'
    let i = 0
    let j = 0
    let output = 0
    while (i< array.length-1) {               
        while (j<array[0].length-1) {   
            let counter = 0                      
            for (let k=i; k<i+2; k++) {                
                for (let l=j; l<j+2; l++) {                    
                    if (kamus.indexOf(array[k][l]) != -1) {
                        counter ++
                    }
                }
            }
            if (counter === 4) {
                output ++
            }
            j++
        }
        i++
    }
    return output +  checkAllVowelArr(array.slice(1))       
}
var array1 = [
            ['A','I','B','S','D'],
            ['U','E','C','T','Y'],
            ['O','A','T','B','J']
        ]
var array2 = [
    ['A','X','C','Y'],
    ['E','O','O','S'],
    ['I','U','I','N'],
    ['M','Y','O','E'],
    ['P','D','A','I'],
]        
console.log(checkAllVowelArr(array1))
console.log(checkAllVowelArr(array2))
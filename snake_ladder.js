function generateBoard(num) {
    var output = []
    let max = num*num
    var ganjil = num % 2
    for (let i=ganjil; i<num+ganjil; i++) {        
        let temp = []
        if (i % 2 === 0) {
            for (let j=max; j>max-num; j--){
                temp.push(j)                
            }
        } else {
            for (let j=max-num+1; j<=max; j++){
                temp.push(j)
            }        
        }
        max -= num
        output.push(temp)
    
    }
    return output
}    
console.log(generateBoard(9))
console.log(generateBoard(10))
console.log(generateBoard(15))
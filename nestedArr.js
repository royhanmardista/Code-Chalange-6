function createNestedArr(jumlahRow, jumlahCol) {
    const output = []
    const kamus = 'abcdefghijklmnopqrstuvwxyz'
    for (let i=0; i<=jumlahRow; i++) {
        let temp = []
        for (let j=0; j<jumlahCol; j++) {
            let key = Math.floor(Math.random()*(kamus.length))
            temp.push(kamus[key])            
        }
        output.push(temp)
    }
    return output
}
console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))

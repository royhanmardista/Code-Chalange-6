function stringToArr(str) {
    const kamus = str.split(',')
    const output = []
    for (let i=0; i<kamus.length; i++) {
        let temp = []
        for (let j=0; j<kamus[i].length; j++) {
            temp.push(kamus[i][j])
        }
        output.push(temp)
    }
    return output;
}

console.log(stringToArr('aku,maut,iki'))
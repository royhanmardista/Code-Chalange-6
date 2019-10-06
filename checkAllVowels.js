function checkAllVowels(string) {
    var kamus = 'aiueoAIUEO'
    kamus = kamus.split('')
    if (string.length === 0) {
        return true
    }
    if (kamus.indexOf(string[0])===-1) {
        return false
    }
    return checkAllVowels(string.slice(1))
}
console.log(checkAllVowels('aiueoiouj'))
console.log(checkAllVowels('aiueoiouoaeiueaUUUUUU'))


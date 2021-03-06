function in_words(num) {
    var kamus = [ [1,'satu'],
    [2,'dua'],
    [3,'tiga'],
    [4,'empat'],
    [5,'lima'],
    [6,'enam'],
    [7,'tujuh'],
    [8,'delapan'],
    [9,'sembilan'],
    [10,'sepuluh'],
    [11,'sebelas'],
    [100,'seratus'],
    [1000,'seribu'],    
    ]
    if (!num) {
        return ''
    } 
    for (let i=0; i<kamus.length; i++) {
        if (kamus[i].indexOf(num) != -1) {
            return kamus[i][1]
        }        
    } 
    if (String(num).length === 2) {
        var temp = Number(String(num)[0])
        if (num > 19) {
            return in_words(temp) + ' puluh ' + in_words(Number(String(num).slice(1)))
        } else {
            return in_words(Number(String(num)[1])) + ' belas '
        }
    } else if (String(num).length === 3) {
        var temp = Number(String(num)[0])
        if (temp != 1) {
            return in_words(temp) + ' ratus ' + in_words(Number(String(num).slice(1)))
        } else {
            return in_words(temp*100) + ' ' + in_words(Number(String(num).slice(1)))
        }
    } else if (String(num).length === 4) {
        var temp = Number(String(num)[0])        
        if (temp != 1) {
            return in_words(temp) + ' ribu ' + in_words(Number(String(num).slice(1)))
        } else {
            return in_words(temp*1000) + ' ' + in_words(Number(String(num).slice(1)))
        }             
    }  else {
        var panjang = String(num).length
        if (String(num).length >= 5 && String(num).length < 7) {            
            var temp = Number(String(num).slice(0,panjang-3))        
                return in_words(temp)  + ' ribu ' + in_words(Number(String(num).slice(panjang-3)))
            
        }  else if (String(num).length >= 7 && String(num).length < 10) {
            var temp = Number(String(num).slice(0,panjang-6))         
                return in_words(temp)  + ' juta ' + in_words(Number(String(num).slice(panjang-6)))
            }    
        else if (String(num).length >= 10 && String(num).length < 13) {
            var temp = Number(String(num).slice(0,panjang-9))         
                return in_words(temp)  + ' milyar ' + in_words(Number(String(num).slice(panjang-9)))
            }
        else if (String(num).length >= 13 ) {
            var temp = Number(String(num).slice(0,panjang-12))         
                return in_words(temp)  + ' triliun ' + in_words(Number(String(num).slice(panjang-12)))
            }  
    }             
}

console.log(in_words(1100202010111))
console.log(in_words(1312301831283013))
console.log(in_words(999999999999999))
console.log(in_words(11111))





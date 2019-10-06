var tono = 0
var anton = 0
var budi = 0
var str = ['Tono', 'Anton', 'Budi']
for (let i=7; i<= 31; i++) {
    if (i===7) {        
        console.log('Tanggal ' + i + ' : ' + str.join(','))        
    } else {
        str = []
        tono ++
        anton ++
        budi ++ 
        if (tono === 2) {
            str.push(' Tono')        
            tono = 0;
        }
        if (anton === 4) {
            str.push(' Anton')
            anton = 0
        }
        if (budi === 5) {
            str.push(' Budi')
            budi = 0
        }
        if (i % 5 === 0) {
            console.log('Tanggal ' + i + ' : Tempat Fitness Tutup')
        } else {    
            console.log('Tanggal ' + i + ' : ' + str.join(','))
        }
    }
}

/**
 * Buat variabel tono
 * Buat variabel anton
 * Buat variabel budi
 * Buat variabel output
 * 
 * Looping nilai dari 7 sampai 31
 *  jika nilai sama dengan 7 
 *      Tampilkan 'Tanggal 7 : Tono, Anton, Budi'
 *  else 
 *      tambah variabel tono dengan 1
 *      tambah variabel anton dengan 1
 *      tambah variabel budi dengan 1
 * 
 *      jika tono sama dengan 2 
 *          tambahkan tono ke output
 *          reset variabel tono
 *      jika anton sama dengan 4
 *          tambahkan anton ke output
 *          reset variabel tono
 *      jika budi sama dengan 5
 *          tambahkan budi ke output
 *          reset variabel budi
 *      jika nilai habis dibagi 5
 *          tampilkan 'Tanggal dan Tempat Fitness Tutup'
 *      else 
 *          tampilkan 'Tanggal dan orang yang masuk fitness'
 */
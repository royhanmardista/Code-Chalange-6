let arr = []
function createObj(nama,phase,gender) {
    let output = {}
    output.name = nama;
    output.phase = phase;
    output.gender = gender;
    arr.push(output)
}
createObj('akbar', 1, 'male')
createObj('icha', 1, 'female')
console.log(arr)


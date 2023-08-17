const tinggi = document.getElementById('tinggi-input')
const alas = document.getElementById('alas-input')
const hasil = document.getElementById('hasil-luas')
const hitung = document.getElementById('hitung-luas')
const reset = document.getElementById('reset-luas')


hitung.addEventListener('click',function(){
    hasil.innerHTML = eval(
        tinggi.value * alas.value * 0.5
        )
    })
reset.addEventListener('click', function() {
        tinggi.value = '';
        alas.value = '';
        hasil.innerHTML = 'Hasil :';
    });

const sisi1 = document.getElementById('sisi-input1')
const sisi2 = document.getElementById('sisi-input2')
const sisi3 = document.getElementById('sisi-input3')
const operator = "+"
const hasilkeliling = document.getElementById('hasil-keliling')
const hitungkeliling = document.getElementById('hitung-keliling')
const resetkeliling = document.getElementById('reset-keliling')
    
hitungkeliling.addEventListener('click', function() {
    let a = parseFloat(sisi1.value); // Konversi nilai sisi menjadi angka (float)
    let b = parseFloat(sisi2.value);
    let c = parseFloat(sisi3.value);
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        hasilkeliling.innerHTML = "Masukkan angka pada semua sisi.";
    } else {
        let keliling = a + b + c;
        hasilkeliling.innerHTML = keliling;
    }
});

resetkeliling.addEventListener('click', function() {
    sisi1.value = '';
    sisi2.value = '';
    sisi3.value = '';
    hasilkeliling.innerHTML = 'Hasil :';
});
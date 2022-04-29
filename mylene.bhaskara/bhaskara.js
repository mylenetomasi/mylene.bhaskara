document.getElementById('btncalcular').addEventListener('click', caldelta)
function caldelta() {
    var valorA = document.getElementById('valorA').value;
    var valorB = document.getElementById('valorB').value;
    var valorC = document.getElementById('valorC').value;
    var delta = valorB * valorB - 4 * valorA * valorC;
    document.getElementById('delta').innerHTML = 'Delta: <strong> '+delta+'</strong>';
    x1 = (- valorB + Math.sqrt(delta)) / (2 * valorA);
    x2 = (- valorB - Math.sqrt(delta)) / (2 * valorA);
    document.getElementById('resultadobhaskaradiv').innerHTML = 'X1='+x1+'\nX2 ='+x2;
}
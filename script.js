function somar(){
    let i1 = Number(document.getElementById('ida1').value)
    let i2 = Number(document.getElementById('ida2').value)
    let a = i1 + i2
    document.getElementById('res').innerHTML = `A idade é ${a}`;
}
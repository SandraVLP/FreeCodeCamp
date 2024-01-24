function display(value){

    document.getElementById('display').value += value

    return value

}


function clearDisplay(){

    document.getElementById('display').value = ''

}

function calculate(){

    let a = document.getElementById('display').value

    let b = eval(a);

    document.getElementById('display').value = b

    return b

}
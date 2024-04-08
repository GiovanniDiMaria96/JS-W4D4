function display(dato) {
    switch(dato){
        case "+":
            case "-":
                case "*":
                    case "/":
                    let currValue= document.getElementById("display").value
                    if(currValue !==""){
                        if(currValue.endsWith ("+") || currValue.endsWith ("-") || currValue.endsWith ("*") || currValue.endsWith ("/")){
                            let modValue= currValue.slice(0, -1)
                            document.getElementById("display")= modValue + dato
                        } else {
                            document.getElementById("display").value +=dato
                        }
                    }         
                    break;
                    
                    default: document.getElementById('display').value += dato;
    }

}

function clearAll() {
    document.getElementById('display').value = "";
}

function operazione(){
    document.getElementById("display").value= math.evaluate(document.getElementById("display").value)
}


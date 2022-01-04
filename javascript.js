function efetuaCalculo(tipo, valor) {

    var operacao = 0
    
    if (tipo == "acao") {

        console.log(tipo, valor)
        switch (valor) {
            case "/":
                document.getElementById('tela').value += '/'
                break

            case "*":
                document.getElementById('tela').value += '*'
                break

            case "-":
                document.getElementById('tela').value += '-'
                break

            case "+":
                document.getElementById('tela').value += '+'
                break

            case "=":       
                operacao = eval(document.getElementById('tela').value)         
                document.getElementById('tela').value = operacao
                operacao = "" 
                break

            case ".":
                document.getElementById('tela').value += '.'
                break

            default:
                document.getElementById("tela").value = ""                               
                break
        }     

    }

    else if (tipo == "numero") {
        
        document.getElementById('tela').value += valor

    } 

}
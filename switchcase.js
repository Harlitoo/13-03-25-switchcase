function coloririrFundo() {
    let cor = document.getElementById("txtCorFundo").value.toLowerCase(); // a variavel cor esta recebendo em letras minusculas o valor do txt.cor

    switch (corFundo) {//o algoritmo switch vai procurar a cor e vai executar a troca da mesma. A cor é a tomada
        case "azul": // case é o interruptor.
            document.body.bgColor = "#0000ff";
            break;//o break seria uma "torneira" uma pausa no que está sendo feito
        case "vermelho": // case é o interruptor.
            document.body.bgColor = "#FF0000";
            break;//o break seria uma "torneira" uma pausa no que está sendo feito
        case "verde": // case é o interruptor.
            document.body.bgColor = "#008000";
            break;//o break seria uma "torneira" uma pausa no que está sendo feito
        case "preto": // case é o interruptor.
            document.body.bgColor = "#000000";
            document.body.style.color = "#ffffff"
            break;//o break seria uma "torneira" uma pausa no que está sendo feito
        case "branco": // case é o interruptor.
            document.body.bgColor = "#FFFFFF";
            break;//o break seria uma "torneira" uma pausa no que está sendo feito
        case "marrom": // case é o interruptor.
            document.body.bgColor = "#800000";
            break;//o break seria uma "torneira" uma pausa no que está sendo feito
        case "prata": // case é o interruptor.
            document.body.bgColor = "#C0C0C0";
            break;//o break seria uma "torneira" uma pausa no que está sendo feito
        case "cinza": // case é o interruptor.
            document.body.bgColor = "#808080";
            break;//o break seria uma "torneira" uma pausa no que está sendo feito
        case "roxo": // case é o interruptor.
            document.body.bgColor = "#800080";
            break;//o break seria uma "torneira" uma pausa no que está sendo feito
        default:
            document.body.bgColor = "#ffffff";
            break;
    }
}

document.getElementById("txtCorLetra").addEventListener('keyup', function() {
    colorir();
});

function colorirLetra() {
    let cor = document.getElementById("txtCorLetra").value.toLowerCase(); // a variavel cor esta recebendo em letras minusculas o valor do txt.cor

    switch (corLetra) {//o algoritmo switch vai procurar a cor e vai executar a troca da mesma. A cor é a tomada
        case "azul": // case é o interruptor.
            document.body.bgColor = "#0000ff";
            break;//o break seria uma "torneira" uma pausa no que está sendo feito
        case "vermelho": // case é o interruptor.
            document.body.bgColor = "#FF0000";
            break;//o break seria uma "torneira" uma pausa no que está sendo feito
        case "verde": // case é o interruptor.
            document.body.bgColor = "#008000";
            break;//o break seria uma "torneira" uma pausa no que está sendo feito
        case "preto": // case é o interruptor.
            document.body.bgColor = "#000000";
            document.body.style.color = "#ffffff"
            break;//o break seria uma "torneira" uma pausa no que está sendo feito
        case "branco": // case é o interruptor.
            document.body.bgColor = "#FFFFFF";
            break;//o break seria uma "torneira" uma pausa no que está sendo feito
        case "marrom": // case é o interruptor.
            document.body.bgColor = "#800000";
            break;//o break seria uma "torneira" uma pausa no que está sendo feito
        case "prata": // case é o interruptor.
            document.body.bgColor = "#C0C0C0";
            break;//o break seria uma "torneira" uma pausa no que está sendo feito
        case "cinza": // case é o interruptor.
            document.body.bgColor = "#808080";
            break;//o break seria uma "torneira" uma pausa no que está sendo feito
        case "roxo": // case é o interruptor.
            document.body.bgColor = "#800080";
            break;//o break seria uma "torneira" uma pausa no que está sendo feito
        default:
            document.body.bgColor = "#ffffff";
            break;

    }
}

document.getElementById("txtCorFundo").addEventListener('keyup', function() {
    if (event.keyCode == 13) {
        colorirFundo();
    }
});

document.getElementById("txtCorLetra").addEventListener('keyup', function() {
    if (event.keyCode == 13) {
        colorirLetra();
    }
}); 
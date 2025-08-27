function playRockPaperScissor(player1, player2){
    let resultado = "Empate!"
    if(player1 == "Pedra" && player2 == "Pedra"){
        resultado = "Empate!";
        return resultado;
    } else if (player1 == "Pedra" && player2 == "Tesoura"){
        resultado = "Jogador 1 venceu!";
        return resultado;
    } else if (player1 == "Pedra" && player2 == "Papel"){
        resultado = "Jogador 2 venceu!"
        return resultado
    } else if (player1 == "Papel" && player2 == "Pedra"){
        resultado = "Jogador 1 venceu!"
        return resultado
    } else if (player1 == "Papel" && player2 == "Tesoura"){
        resultado = "Jogador 2 venceu!"
        return resultado
    } else if (player1 == "Papel" && player2 == "Papel"){
        resultado = "Empate!"
        return resultado
    } else if (player1 == "Tesoura" && player2 == "Pedra"){
        resultado = "Jogador 2 venceu!"
        return resultado
    } else if (player1 == "Tesoura" && player2 == "Tesoura"){
        resultado = "Empate!"
        return resultado
    } else if (player1 == "Tesoura" && player2 == "Papel"){
        resultado = "Jogador 1 venceu!"
        return resultado
    }
}
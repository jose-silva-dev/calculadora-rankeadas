let rankResult = rankedWinAndLoss(10, 5)

function rankedWinAndLoss(Win, Loss) {
    let resultWinAndLoss = Win - Loss
    return resultWinAndLoss
}

let rankedLevel = ""

switch (true) {
    case (rankResult <= 10):
        rankedLevel = "Ferro";
        break

    case (rankResult >= 11 && rankResult <= 20):
        rankedLevel = "Bronze";
        break

    case (rankResult >= 21 && rankResult <= 50):
        rankedLevel = "Prata";
        break

    case (rankResult >= 51 && rankResult <= 80):
        rankedLevel = "Ouro";
        break

    case (rankResult >= 81 && rankResult <= 90):
        rankedLevel = "Diamante";
        break

    case (rankResult >= 91 && rankResult <= 100):
        rankedLevel = "Lendário";
        break

    case (rankResult >= 101):
        rankedLevel = "Imortal";
        break

    default:
        console.log("O jogador não possui ranked definido.")
}

console.log("O jogador está no ranked: " + rankedLevel)
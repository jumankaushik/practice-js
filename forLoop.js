//for (let i= 1; i < 6; i++) {
//    let str= "*"
//    console.log(str.repeat(i))
//}
//
//let cards = [6,7,8,9]
//for (let i=0; i<cards.length; i++){
//    console.log(cards[i])
//}
//
//let num = Math.floor(Math.random()*6 +1)
//console.log(num)


let hands = ["rock", "paper", "scissor"]

function getHand(){
    let randomIndex= Math.floor(Math.random()*3)
    return hands[randomIndex]
}

console.log(getHand())
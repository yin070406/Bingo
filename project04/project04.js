var Board = [[F,F,F,F,F], [F,F,F,F,F], [F,F,T,F,F], [F,F,F,F,F], [F,F,F,F,F]]

var winConditions = [
    [0,1,2,3,4],
    [5,6,7,8,9],
    [10,11,12,13,14],
    [15,16,17,18,19],
    [20,21,22,23,24]
    [0,5,10,15,20],
    [1,6,11,16,21],
    [2,7,12,17,22],
    [3,8,13,18,23],
    [4,9,14,19,24],
    [0,6,12,18,24],
    [4,8,12,16,20]
]

let valueBoard = [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]]
let randomValue = Math.floor((Math.random() * 75) + 1);
let randomOption = Math.floor((Math.random() * 75) + 1);

for (let i = 0; i < 10; i++) {
    valueBoard.push(randomValue)
    console.log(valueBoard)
}
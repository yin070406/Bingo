var Board = [[false,false,false,false,false], [false,false,false,false,false], [false,false,true,false,false], [false,false,false,false,false], [false,false,false,false,false]]

function randomValue() {
    const test = Math.floor((Math.random() * 75) + 1);
    return test
}

//let randomValue = Math.floor((Math.random() * 75) + 1);
let randomOption = Math.floor((Math.random() * 75) + 1);


for (let i = 0; i < 5; i++) {
    let valueBoard = []
    for (let j = 0; j < 5; j++) {
        let ValueOfBoard = randomValue()
    }
    valueBoard.push([ValueOfBoard])
    let valueBoard_Message = "Current valueBoard: " + valueBoard
    console.log(valueBoard_Message)
}

console.log(ValueOfBoard)
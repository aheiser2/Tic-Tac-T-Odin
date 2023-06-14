

const Player = (name, symbol) => {
    const getName  = name;
    const getSymbol = symbol;
    // const markSymbol = index => {
    //     if (document.getElementById(index).innerHTML.indexOf("") !== -1 ) {
    //         document.getElementById(index).innerHTML = symbol
    //     }
    // };
    // return {getSymbol, getName};

    return {getSymbol, getName}
};


const GameBoard = (() =>{
    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let spaces = document.querySelectorAll(".space")
    let player1;
    let player2;
    let turn = "player1"

    const createBoard = board => { //onclick="markSymbol(${index})"
        return board.map((space, index) => `  
        <button class="space" id="${index}" >
        </button>`)
        .join('');
    }

    const createPlayers = () =>{
        player1 = Player(document.getElementById("name").value, 
                    document.getElementById("symbol").value)
        document.getElementById("player1Name").innerHTML = document.getElementById("name").value
        let tempSymbol;
        if(player1.getSymbol == "X"){
            tempSymbol = "O"
            } else {
                tempSymbol = "X"
            }
            if (document.getElementById("compOpponent").checked == true ){
                document.getElementById("name2").value = "Computer"
            }
        player2 = Player(document.getElementById("name2").value, tempSymbol)
        document.getElementById("player2Name").innerHTML = document.getElementById("name2").value
        console.log(player1)
        console.log(player2)
        // return [player1, player2]
    };

    const showBoard = board => {
        document.getElementById("gameBoard").innerHTML = createBoard(board)
        for(let i = 0; i<=8; i++){
            document.getElementById([i]).addEventListener("click", function() {
                // if(document.getElementById([i]).innerHTML.trim() === "X") {
                //     document.getElementById([i]).innerHTML = "added"
                // } 
                if(turn === "player1" && document.getElementById([i]).innerHTML.trim() === ""){
                    document.getElementById([i]).innerHTML = player1.getSymbol
                } else if (turn === "player2" && document.getElementById([i]).innerHTML.trim() === ""){
                    document.getElementById([i]).innerHTML = player2.getSymbol
                }

                changeTurn()
            })
        }
    }

    

    

    const changeTurn = () => {
        if(turn == "player1"){
            turn = "player2"
            console.log("Player 2 turn")
        } else {
            turn = "player1"
            console.log("Player 1 turn")
        }
    };

    const gamePlay = () => {
       

    }

    return {board, createBoard, showBoard, createPlayers, changeTurn, gamePlay}
})();

let board = GameBoard.board
GameBoard.showBoard(board)

function openForm() {
    document.getElementById("myForm").style.display = "block";

}

function closeForm() {
    GameBoard.createPlayers()
    document.getElementById("myForm").style.display = "none";
}

const Game = (() =>{


    // GameBoard.playGame();

    // let turn = "player1"

    // const createPlayers = () =>{
    //     const player1 = Player(document.getElementById("name").value, 
    //                 document.getElementById("symbol").value)
    //     document.getElementById("player1Name").innerHTML = document.getElementById("name").value
    //     let tempSymbol;
    //     if(player1.getSymbol == "X"){
    //         tempSymbol = "O"
    //         } else {
    //             tempSymbol = "X"
    //         }
    //         if (document.getElementById("compOpponent").checked == true ){
    //             document.getElementById("name2").value = "Computer"
    //         }
    //     const player2 = Player(document.getElementById("name2").value, tempSymbol)
    //     document.getElementById("player2Name").innerHTML = document.getElementById("name2").value
    //     console.log(player1)
    //     console.log(player2)
    // };

    // const changeTurn = () => {
    //     if(turn == "player1"){
    //         turn = "player2"
    //         console.log("Player 2 turn")
    //     } else {
    //         turn = "player1"
    //         console.log("Player 1 turn")
    //     }
    // };

    // const gamePlay = () => {
    //     if(turn === "player1" && )

    // }

    // return{createPlayers}

})();


const Player = (name, symbol) => {
    const getName  = name;
    const getSymbol = symbol;

    return {getSymbol, getName}
};


const GameBoard = (() =>{
    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let spaces = document.querySelectorAll(".space")
    let player1;
    let player2;
    let turn = "player1"

    const createBoard = board => { 
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
        document.getElementById("player2Name").innerHTML += document.getElementById("name2").value
        console.log(player1)
        console.log(player2)
    };

    const showBoard = board => {
        document.getElementById("gameBoard").innerHTML = createBoard(board)

        //adds an event listener to each space that listens for a click and then 
        //adds the appropriate symbol, checks to see if it results in a win/tie condition, 
        //and then changes the turn if there isn't one
        for(let i = 0; i<=8; i++){
            document.getElementById([i]).addEventListener("click", function() {
                if(turn === "player1" && document.getElementById([i]).innerHTML.trim() === ""){
                    document.getElementById([i]).innerHTML = player1.getSymbol
                    GameBoard.board[i] = player1.getSymbol
                } else if (turn === "player2" && document.getElementById([i]).innerHTML.trim() === ""){
                    document.getElementById([i]).innerHTML = player2.getSymbol
                    GameBoard.board[i] = player2.getSymbol
                }
                winCheck()
                changeTurn()
            })
        }
    }

    //Changes who the current player is so that it can keep track of the
    //symbol to mark next
    const changeTurn = () => {
        if(turn == "player1"){
            turn = "player2"
            console.log("Player 2 turn")
        } else {
            turn = "player1"
            console.log("Player 1 turn")
        }
    };

    //Checks to see if there is win condition by seeing if the board array
    //has matching values in the different directions, and if there aren't any
    //and every single array index has been changed to a letter, notifies of a tie
    const winCheck = () => {
        let x = GameBoard.board
        if((x[0] == x[1] && x[1] == x[2]) || (x[0] == x[3] && x[3] == x[6])
        || (x[3] == x[4] && x[4] == x[5]) || (x[1] == x[4] && x[4] == x[7]) 
        || (x[6] == x[7] && x[7] == x[8]) || (x[2] == x[5] && x[5] == x[8])
        || (x[0] == x[4] && x[4] == x[8]) || (x[2] == x[4] && x[4] == x[6])){
            if(turn == "player1"){
                document.getElementById("winNotification").innerHTML = `${player1.getSymbol} won!`
            } else {
                document.getElementById("winNotification").innerHTML = `${player2.getSymbol} won!`
            }  
        } else if (x.every(ele => typeof ele !== "number")){
            document.getElementById("winNotification").innerHTML = `It's a tie!`
        }
    }

    return {board, createBoard, showBoard, createPlayers}
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


})();
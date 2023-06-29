
const Game = (() =>{
    let gameNumber = 0

    return {gameNumber}
})();


const Player = (name, symbol) => {
    const getName  = name;
    const getSymbol = symbol;

    return {getSymbol, getName}
};


const GameBoard = (() =>{
    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];  //board array
    let player1;
    let player2;
    let opponent = "human"
    let turn = "player1"
    let compTurn = 0  //tracker for compWinCheck to figure out who won
    let compGameDone = 'no' //track for compWinCheck to see if game is over

    const createBoard = board => { 
        return board.map((space, index) => `  
        <button class="space" id="${index}" >
        </button>`)
        .join('');
    }

    const createPlayers = () =>{ // creates two players, either real or one real and a computer
        player1 = Player(document.getElementById("name").value, 
                    document.getElementById("symbol").value)
        document.getElementById('player1Name').innerHTML = "Player " + player1.getSymbol + ": " + player1.getName
        document.getElementById("player1Name").classList.add("activeBorder")
        let tempSymbol;
        if(player1.getSymbol == "X"){
            tempSymbol = "O"
            } else {
                tempSymbol = "X"
            }
        if (document.getElementById("compOpponent").checked == true ){
            document.getElementById("name2").value = "Computer"
            GameBoard.opponent = "computer"
        } else if (document.getElementById("compOpponent").checked == false ){
            GameBoard.opponent = "human"
        }
        console.log(GameBoard.opponent)
        player2 = Player(document.getElementById("name2").value, tempSymbol)
        document.getElementById("player2Name").innerHTML = "Player " + player2.getSymbol + ": " + player2.getName
        document.getElementById("name").value = ""
        document.getElementById("symbol").value = "X"
        document.getElementById("name2").value = ""
        GameBoard.showBoard(board)  
        Game.gameNumber++
    };

    const showBoard = board => {
        document.getElementById("gameBoard").innerHTML = createBoard(board)

        //adds an event listener to each space that listens for a click and then 
        //adds the appropriate symbol, checks to see if it results in a win/tie condition, 
        //and then changes the turn if there isn't one (split in two paths for computer playing situation)
        if(GameBoard.opponent == "human" ){
        // if(document.getElementById("compOpponent").checked == false ){
            for(let i = 0; i<=8; i++){
                document.getElementById([i]).addEventListener("click", function() {
                    runGame(i)
                    winCheck()
                    changeTurn()
                })
            }
        // } else if(document.getElementById("compOpponent").checked == true ){
        } else if(GameBoard.opponent == "computer"){
            for(let i = 0; i<=8; i++){
                document.getElementById([i]).addEventListener("click", function() {
                    computerGameFirst(i)
                    winCheck()
                    changeTurn()
                    computerGameSecond(i)
                    let check = setTimeout(winCheck, 1000)
                    let turn = setTimeout(changeTurn, 1200)

                })
            }
        }
    }


    //the function that dictates a normal game between two human players
    const runGame = (i) =>{
        if(turn === "player1" && document.getElementById([i]).innerHTML.trim() === ""){
            document.getElementById([i]).innerHTML = player1.getSymbol
            document.getElementById([i]).classList.add(`${player1.getSymbol}`)
            document.getElementById([i]).setAttribute("disabled", '')
            GameBoard.board[i] = player1.getSymbol
        } else if (turn === "player2" && document.getElementById([i]).innerHTML.trim() === ""){
            document.getElementById([i]).innerHTML = player2.getSymbol
            document.getElementById([i]).classList.add(`${player2.getSymbol}`)
            document.getElementById([i]).setAttribute("disabled", '')
            GameBoard.board[i] = player2.getSymbol
        }
    }

    //the function that dictates the human move in a game against a computer
    const computerGameFirst = (i) =>{
        if (compGameDone == "no"){
        if(document.getElementById([i]).innerHTML.trim() === ""){
            document.getElementById([i]).innerHTML = player1.getSymbol
            document.getElementById([i]).classList.add(`${player1.getSymbol}`)
            document.getElementById([i]).setAttribute("disabled", '')
            GameBoard.board[i] = player1.getSymbol
            compTurn++
            }
        }
    }
    
    //the function that dictates the computer's move
    const computerGameSecond = () =>{
        if (compGameDone == "no"){
            function compMove(){
                let j = (Math.floor(Math.random()* GameBoard.board.length)) //generate random spot in board
                if(document.getElementById([j]).innerHTML.trim() === ""){
                    document.getElementById([j]).innerHTML = player2.getSymbol
                    document.getElementById([j]).classList.add(`${player2.getSymbol}`)
                    document.getElementById([j]).setAttribute("disabled", '')
                    GameBoard.board[j] = player2.getSymbol
                } else {
                    compMove() //reruns the function if the first pick was taken
                }
            }
            let move = setTimeout(compMove, 500) //makes it seem like the computer has to "think" of where to go
            compTurn++
            if(compGameDone == "yes"){ //stops computer from making another move if the first player wins
                    clearTimeout(move)
            }
        } 
    }


    //Changes who the current player is so that it can keep track of the
    //symbol to mark next
    const changeTurn = () => {
        if(turn == "player1"){
            turn = "player2"
            console.log("Player 2 turn")
            document.getElementById("player1Name").classList.remove("activeBorder")
            document.getElementById("player2Name").classList.add("activeBorder")
        } else {
            turn = "player1"
            console.log("Player 1 turn")
            document.getElementById("player2Name").classList.remove("activeBorder")
            document.getElementById("player1Name").classList.add("activeBorder")
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
            compGameDone = "yes" 
            for(let i = 0; i<=8; i++){
                document.getElementById([i]).setAttribute("disabled", '')
            }
            document.getElementById("winNotification").style.display = "block";
            if(turn == "player1" || (compTurn%2 == 1)){
                document.getElementById("winNotification").innerHTML = `${player1.getSymbol} won!`
            } else if (turn == "player2" || (compTurn%2 == 0)){
                document.getElementById("winNotification").innerHTML = `${player2.getSymbol} won!`
            }  
        } else if (x.every(ele => typeof ele !== "number")){
            compGameDone = "yes"
            for(let i = 0; i<=8; i++){
                document.getElementById([i]).setAttribute("disabled", '')
            }
            document.getElementById("winNotification").style.display = "block";
            document.getElementById("winNotification").innerHTML = `It's a tie!`
        }
    }

    //resets the game to beginning state 
    const resetGame = () => {
        board.length = 0;
        compTurn = 0
        compGameDone = 'no'
        for(let i = 0; i<=8; i++){
            board[i] = i
        }
        turn = "player1"
        document.getElementById("player1Name").classList.add("activeBorder")
        document.getElementById("player2Name").classList.remove("activeBorder")
        document.getElementById("winNotification").innerHTML = ""
        document.getElementById("winNotification").style.display = "none";
    }

    return {board, opponent, createBoard, showBoard, createPlayers, resetGame}
})();

//creates the initial board
let board = GameBoard.board
GameBoard.showBoard(board)


//opens the form for players to enter their names and choose if playing against the computer,
//or opens a second form if one game has already been played
function openForm() {
    if (Game.gameNumber == 0){
        document.getElementById("myForm").style.display = "block";
    } else {
        document.getElementById("myForm2").style.display = "block";
    }
}

//closes the form and begins the game directly after
function closeForm() {
    GameBoard.createPlayers()
    document.getElementById("myForm").style.display = "none";
}

//closes the second form and starts a new game with the same earlier entered data,
//or opens the form again so that new data can be entered
function closeForm2() {
    if(document.getElementById("newNames").value == "Yes"){
        GameBoard.resetGame()
        GameBoard.showBoard(board)
        document.getElementById("myForm2").style.display = "none";
    } else {
        GameBoard.resetGame()
        Game.gameNumber = 0
        document.getElementById("player1Name").innerHTML = ""
        document.getElementById("player2Name").innerHTML = ""
        document.getElementById("myForm2").style.display = "none";
        openForm()
    }
}
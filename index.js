function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}

const markSymbol = (index) => {
    if(document.getElementById(index).innerHTML.indexOf("X") !== -1 || document.getElementById(index).id == 1) {
        document.getElementById(index).innerHTML = "King"
    } else {
        document.getElementById(index).innerHTML= "NO"
    }
}



//Game Board
const gameBoard = (() => {
    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const createBoard = board => { 
        return board.map((space, index) => `  
        <button class="space" id="${index}" onclick="markSymbol(${index})">
        O
        </button>`)
        .join('');
    }

    const showBoard = board => {
        document.getElementById("gameBoard").innerHTML = createBoard(board)
    }

    return {
      board,
      showBoard,
    //   markSymbol
    };
  })();

  let board = gameBoard.board
  gameBoard.showBoard(board)

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    displayController.createPlayers()
    document.getElementById("myForm").style.display = "none";
}

//   function createPlayers() {
//     let playerName = document.getElementById("name").value
//     let symbol = document.getElementById("symbol").value
//     const player1 = Player(playerName, symbol)
//     document.getElementById("player1Name").innerHTML = playerName
//   console.log(player1)
//     let playerName2 = document.getElementById("name2").value
//     if(player1.getSymbol == "X"){
//         symbol = "O"
//         } else {
//             symbol = "X"
//         }
//         if (document.getElementById("compOpponent").checked == true ){
//             playerName2 = "Computer"
//         }
//     const player2 = Player(playerName2, symbol)
//     document.getElementById("player2Name").innerHTML = playerName2
//     console.log(player2)
// }


//Display Controller
  const displayController = (() => {
    const createPlayers = () =>{
        let playerName = document.getElementById("name").value
        let symbol = document.getElementById("symbol").value
        const player1 = Player(playerName, symbol)
        document.getElementById("player1Name").innerHTML = playerName
      console.log(player1)
        let playerName2 = document.getElementById("name2").value
        if(player1.getSymbol == "X"){
            symbol = "O"
            } else {
                symbol = "X"
            }
            if (document.getElementById("compOpponent").checked == true ){
                playerName2 = "Computer"
            }
        const player2 = Player(playerName2, symbol)
        document.getElementById("player2Name").innerHTML = playerName2
        console.log(player2)
    };
    const changePlayer = "";
    const checkGameOver = "";
    const displayWinner = "";
    const restart = "";

    return {
        createPlayers,
      changePlayer,
      checkGameOver,
      displayWinner,
      restart
    };
  })();

  const Player = (name, symbol) => {
    const getName  = name;
    const getSymbol = symbol;
    return {getSymbol, getName};
  };

  const player1 = Player("Abby", "X")
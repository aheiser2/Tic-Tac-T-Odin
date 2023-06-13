function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}

//Game Board
const gameBoard = (() => {
    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const i = board.indexOf();
    const createBoard = board => { 
        return board.map((space, index) => `  
        <div class="space" id="${index+1}">
        ${index+1}
        x
        </div>`)
        .join('');
    }
    const showBoard = (board) => {
        document.getElementById("gameBoard").innerHTML = createBoard(board)
    }
    return {
      board,
      showBoard
    };
  })();

  let board = gameBoard.board
  gameBoard.showBoard(board)


function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    // addBookToLibrary()
    startGame()
    document.getElementById("myForm").style.display = "none";
}

  function startGame() {
    let playerName = document.getElementById("name").value
    let symbol = document.getElementById("symbol").value
    const player1 = Player(playerName, symbol)
  console.log(player1)
//   document.getElementById("title").value = ""
//   document.getElementById("author").value = ""
//   document.getElementById("pages").value = ""
//   document.getElementById("readStatus").value = "read"
//   document.getElementById("myLibrary").innerHTML = showLibrary(myLibrary)
}


//Display Controller
  const displayController = (() => {
    const createPlayer = "";
    const changePlayer = "";
    const checkGameOver = "";
    const displayWinner = "";
    const restart = "";

    return {
        createPlayer,
      changePlayer,
      checkGameOver,
      displayWinner,
      restart
    };
  })();

  const Player = (name, symbol) => {
    const getName  = name;
    const getSymbol = symbol;
    // const die = () => {
    //   // uh oh
    // };
    // const damage = x => {
    //   health -= x;
    //   if (health <= 0) {
    //     die();
    //   }
    // };
    // const attack = enemy => {
    //   if (level < enemy.getLevel()) {
    //     damage(1);
    //     console.log(`${enemy.getName()} has damaged ${name}`);
    //   }
    //   if (level >= enemy.getLevel()) {
    //     enemy.damage(1);
    //     console.log(`${name} has damaged ${enemy.getName()}`);
    //   }
    // };
    return {getSymbol, getName};
  };

  const player1 = Player("Abby", "X")
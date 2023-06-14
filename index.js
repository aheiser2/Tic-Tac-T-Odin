// function myFunction() {
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }


// //Game Board
// const gameBoard = (() => {
//     const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//     const createBoard = board => { //onclick="markSymbol(${index})"
//         return board.map((space, index) => `  
//         <button class="space" id="${index}" >
//         </button>`)
//         .join('');
//     }


//     const showBoard = board => {
//         document.getElementById("gameBoard").innerHTML = createBoard(board)
//         for(let i = 0; i<=8; i++){
//             document.getElementById([i]).addEventListener("click", function() {
//                 if(document.getElementById([i]).innerHTML.trim() === "") {
//                     document.getElementById([i]).innerHTML = "added"
//                 } 

//             })
//         }
//     }

//     return {
//       board,
//       showBoard,
//     };
//   })();

//   let board = gameBoard.board
//   gameBoard.showBoard(board)

// function openForm() {
//     document.getElementById("myForm").style.display = "block";
// }

// function closeForm() {
//     displayController.createPlayers()
//     document.getElementById("myForm").style.display = "none";
// }


// //Display Controller
//   const displayController = (() => {
//     let gameOver = false;

//     let player1Active = true;

//     const createPlayers = () =>{
//         let playerName = document.getElementById("name").value
//         let symbol = document.getElementById("symbol").value
//         const player1 = Player(playerName, symbol)
//         document.getElementById("player1Name").innerHTML = playerName
//         let playerName2 = document.getElementById("name2").value
//         if(player1.getSymbol == "X"){
//             symbol = "O"
//             } else {
//                 symbol = "X"
//             }
//             if (document.getElementById("compOpponent").checked == true ){
//                 playerName2 = "Computer"
//             }
//         const player2 = Player(playerName2, symbol)
//         document.getElementById("player2Name").innerHTML = playerName2
//         console.log(player1)
//         console.log(player2)
//     };

//     const changePlayer = () => {
//         if(player1Active == true){
//             player1Active = false
//             console.log("Player 2 turn")
//         } else {
//             player1Active = true
//             console.log("Player 1 turn")
//         }
//     };

//     const takeTurn = () => {
//         board.showBoard()
//     }

//     const gamePlay = () => {
//         createPlayers();
//         while(gameOver == false){
//             takeTurn()
//             changePlayer()
//             checkGameOver()
//         }

//     }
//     const checkGameOver = () =>{
//         console.log("Not over yet")
//     };
//     const displayWinner = "";
//     const restart = "";

//     return {
//         createPlayers,
//       changePlayer,
//       takeTurn,
//       checkGameOver,
//       displayWinner,
//       restart
//     };
//   })();

//   const Player = (name, symbol) => {
//     const getName  = name;
//     const getSymbol = symbol;
//     // const markSymbol = index => {
//     //     if (document.getElementById(index).innerHTML.indexOf("") !== -1 ) {
//     //         document.getElementById(index).innerHTML = symbol
//     //     }
//     // };
//     return {getSymbol, getName};
//   };

  

// //   const player1 = Player("Abby", "X")
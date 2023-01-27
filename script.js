const cells = document.querySelectorAll("td");
let currentPlayer = "X";

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function(event) {
    if (event.target.textContent === "") {
      event.target.textContent = currentPlayer;
      checkWin();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
}

function checkWin() {
  // check for horizontal win
  for (let i = 0; i <= 6; i += 3) {
    if (cells[i].textContent === cells[i + 1].textContent && cells[i + 1].textContent === cells[i + 2].textContent && cells[i].textContent !== "") {
      alert(`Player ${cells[i].textContent} wins!`);
	  endGame();
      return;
    }
  }

  // check for vertical win
  for (let i = 0; i < 3; i++) {
    if (cells[i].textContent === cells[i + 3].textContent && cells[i + 3].textContent === cells[i + 6].textContent && cells[i].textContent !== "") {
      alert(`Player ${cells[i].textContent} wins!`);
	  endGame();
      return;
    }
  }

  // check for diagonal win
  if (cells[0].textContent === cells[4].textContent && cells[4].textContent === cells[8].textContent && cells[0].textContent !== "") {
    alert(`Player ${cells[0].textContent} wins!`);
	endGame();
    return;
  }
  if (cells[2].textContent === cells[4].textContent && cells[4].textContent === cells[6].textContent && cells[2].textContent !== "") {
    alert(`Player ${cells[2].textContent} wins!`);
	endGame();
    return;
  }

  // check for draw
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      return;
    }
  }
  alert("It's a draw!");
  endGame();
}

function endGame() {
	for (let i = 0; i < cells.length; i++) {
		cells[i].textContent = "";
	}
	currentPlayer = "O";
}
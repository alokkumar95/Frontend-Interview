const table = document.querySelector(".chessboard");

function colorDiagonal(x, y) {
  // move left(decrease column) and up(decrease row)
  for (i = x - 1,j=y-1; i >= 0&&j>=0; i--,j--) {
    table.rows[i].cells[j].classList.toggle("blue");
  }

  // move right(increase column) and up(decrease row)
  for (i = x - 1,j=y+1; i >= 0&&j<8; i--,j++) {
    table.rows[i].cells[j].classList.toggle("blue");
  }

  // move left(decrease column) and down(increase row)
  for (i = x + 1,j=y-1; i < 8&&j>=0; i++,j--) {
    table.rows[i].cells[j].classList.toggle("blue");
  }
 
  // move right(increase column) and down(increase row)
  for (i = x + 1,j=y+1; i < 8&&j<8; i++,j++) {
    table.rows[i].cells[j].classList.toggle("blue");
  }
}

// Loop through all of the cells in the table
for (let i = 0; i < table.rows.length; i++) {
  for (let j = 0; j < table.rows[i].cells.length; j++) {
    const cell = table.rows[i].cells[j];

    // apply blue color on hover after calling colorDiagonal function
    cell.addEventListener("mouseenter", function (event) {
      colorDiagonal(i, j);
    });

    // on mouse leave remove the class blue, that was applied on mouseenter
    cell.addEventListener("mouseleave", function (event) {
        colorDiagonal(i, j);
    });
  }
}

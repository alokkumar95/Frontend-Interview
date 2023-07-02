const table = document.querySelector(".chessboard");

// table.addEventListener('click',function(event){

//     console.log("---",event.target,event.currentTarget.rows,event)

// })

// Get a reference to the table element

function colorDiagonal(x, y) {
  for (i = x - 1,j=y-1; i >= 0&&j>=0; i--,j--) {
    table.rows[i].cells[j].classList.toggle("blue");
  }

  for (i = x - 1,j=y+1; i >= 0&&j<8; i--,j++) {
    table.rows[i].cells[j].classList.toggle("blue");
  }
}

// Loop through all of the cells in the table
for (let i = 0; i < table.rows.length; i++) {
  for (let j = 0; j < table.rows[i].cells.length; j++) {
    const cell = table.rows[i].cells[j];
    // Check if the cell's text content matches the content we're looking for
    cell.addEventListener("mouseenter", function (event) {
      console.log("8888", cell, event.target, i, j);
      colorDiagonal(i, j);
    });

    cell.addEventListener("mouseleave", function (event) {
        console.log("8888", cell, event.target, i, j);
        colorDiagonal(i, j);
      });
  }
}

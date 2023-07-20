const matrixData = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const cellSize = 50; // Adjust this value based on your preference
  
  const svg = d3.select("#matrix-container")
    .append("svg")
    .attr("width", cellSize * matrixData[0].length)
    .attr("height", cellSize * matrixData.length);
  
  const rows = svg.selectAll(".row")
    .data(matrixData)
    .enter()
    .append("g")
    .attr("class", "row")
    .attr("transform", (d, i) => `translate(0, ${i * cellSize})`);
  
  const cells = rows.selectAll(".cell")
    .data(d => d)
    .enter()
    .append("rect")
    .attr("class", "cell")
    .attr("width", cellSize)
    .attr("height", cellSize)
    .attr("x", (d, i) => i * cellSize)
    .style("fill", "lightblue") // Customize the cell color here
    .style("stroke", "black") // Customize the cell border color here
    .style("stroke-width", 1);
  
  const cellText = rows.selectAll(".cell-text")
    .data(d => d)
    .enter()
    .append("text")
    .attr("class", "cell-text")
    .attr("x", (d, i) => i * cellSize + cellSize / 2)
    .attr("y", cellSize / 2)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .text(d => d); // Display the matrix element value inside the cell
  
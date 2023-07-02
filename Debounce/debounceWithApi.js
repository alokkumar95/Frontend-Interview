let debounceTimer;

async function updatedDebounceValue() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();  
    console.log("fff"+data)
    for(let i=0;i<data.length;i++){
      console.log("Data--",data[i])
    }  
  } catch (error) {
    console.log("Error+error");
  }
}

const debounce = (callback, time) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = setTimeout(callback, time);
};

document.getElementById("name").addEventListener("input", function () {
  debounce(updatedDebounceValue, 250);
});

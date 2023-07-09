let debounceTimer;

function updatedDebounceValue(val) {
  const p = document.getElementById("debounce-value");
  p.innerText = val;
}

const debounce = (callback, delay, val) => {
  window.clearTimeout(debounceTimer);// clear  timeOut if new 
  //setTimeout is  created within delay, if not cleared then after delay the deboucing stop working and as you type in input, it will update simultaneouly
  debounceTimer = setTimeout(callback, delay, val);
};

document.getElementById("name").addEventListener("input", function (e) {
  debounce(updatedDebounceValue, 3000, e.target.value);
});

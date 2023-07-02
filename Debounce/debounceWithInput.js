let debounceTimer;

function updatedDebounceValue(val) {
  const p = document.getElementById("debounce-value");
  p.innerText = val;
}

const debounce = (callback, time, val) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = setTimeout(callback, time, val);
};

document.getElementById("name").addEventListener("input", function (e) {
  debounce(updatedDebounceValue, 250, e.target.value);
});

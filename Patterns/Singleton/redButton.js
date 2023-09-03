import Counter from "./counter.js";

const button = document.getElementById('red');
button.addEventListener('click',()=>{
    Counter.increment();
    console.log("Counter value - ",Counter.getCount())
})
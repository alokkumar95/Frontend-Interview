import Counter from "./counter.js";

const button = document.getElementById('blue');
button.addEventListener('click',()=>{
    Counter.increment();
    console.log("Counter value - ",Counter.getCount())
})
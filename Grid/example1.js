const parent = document.querySelector(".parent");
console.log("hi",parent)

const arr = new Array(4).fill(0);

arr.forEach((item,index)=>{
    const temp = document.createElement('div');
    temp.classList.add('child');
  
    parent.appendChild(temp)
    if(index===0){
        temp.classList.add('extended')
    }
 

})

// const temp = document.createElement('div');
// temp.classList.add('child');
// parent.appendChild(temp)

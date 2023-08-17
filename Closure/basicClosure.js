function addPhone(){
    let noOfPhone = 0;
    return function(){
        return noOfPhone++;
    }
}

var c = addPhone();

console.log(c());
console.log(c());
console.log(c());

function addPhone1(){
    let noOfPhone = 0;
    return ()=>{
        return noOfPhone++;
    }
}

var c1 = addPhone1();

console.log(c1());
console.log(c1());
console.log(c1());

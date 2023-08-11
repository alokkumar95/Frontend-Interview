const arr = [1,[6,7]];

let results = [];

function flatten(value){
    if(!Array.isArray(value)){
        results.push(value);
        return;
    }
    for(let item of value){
        flatten(item)
    }
    
}
flatten([1,[2,3,4,5,[6,7]]])
console.log(results);

function memoize(func){
    let cache={}
    return function(...args){
        let inputs = args.toString();//[1,2] 12

        if(Object.hasOwn(cache,inputs)){
            return cache[inputs];
        }else{
            console.log(args)
            let val = func(...args);
            cache[inputs] = val;
            return cache[inputs]
        }
    }

}

function multiply(a,b){
    return a*b;

}

const f = memoize(multiply);
console.log(f(3,4))
console.log(f(3,4))

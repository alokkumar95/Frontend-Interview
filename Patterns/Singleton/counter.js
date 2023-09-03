// let counter = 0;

// class Counter{
//     getInstance(){
//         return this;
//     }

//     getCount(){
//         return counter;
//     }

//     increment(){
//         return ++counter;
//     }

//     decrement(){
//         return --counter;
//     }
// }

// // we can create multiple instances of Counter
// let counter1 = new Counter();
// let counter2 = new Counter();

// console.log(counter1.getInstance()===counter2.getInstance()) //false

let counter = 0;
let instance;

class Counter{

    constructor(){
        if(instance){
            throw new Error('You can only create one instance')
        }
        instance = this;
    }
    getInstance(){
        return this;
    }

    getCount(){
        return counter;
    }

    increment(){
        return ++counter;
    }

    decrement(){
        return --counter;
    }
}

// let counter1 = new Counter();
// let counter2 = new Counter();// singleton.js:34 Uncaught Error: You can only create one instance at new Counter (singleton.js:34:19)at singleton.js:56:16


const singleCounter = Object.freeze(new Counter);
export default singleCounter




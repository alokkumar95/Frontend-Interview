// class Singleton{
//     constructor(){
//         // If instance doesn't exist, create it
//         if(!Singleton.instance){
//             Singleton.instance = this;
//         }
//         return Singleton.instance;
//     }

//     sayHello(){
//         console.log("Hello!")
//     }

// }

// const singletonCounter = Object.freeze(new Singleton());
// const singletonCounter = new Singleton();
// singletonCounter.sayHello=function(){
//     console.log("Hello!ww");
// }

// console.log(singletonCounter.sayHello())


// const singletonA = new Singleton();
// const singletonB = new Singleton();
// console.log("singletonA===singletonB", singletonA===singletonB,singletonA,singletonCounter);

// console.log(singletonA,Singleton.instance)

// function  Product(title, price){
//     this.title  =  title;
//     this.price  =  price;
//     console.log("--",new.target)
//   }
  
//   new Product(1,2)
//   console.log(Product.prototype) // {}
  
// let  Productf  = (title, price) => {
//     this.title  =  title;
//     this.price  =  price; 
// }
  
// console.log(Productf.prototype); // undefined

class C {
    a = 1;
    constructor() {
    //   this.method = this.method.bind(this);
    }
    method(){
      console.log(this);
    }
  }
const inst = new C();
inst.method();

const {method} = inst;
method();
 

"use strict"
// when ask() is normal function method
var workshop = {
    teacher: "alok",
    // normal function
    ask(question){
        setTimeout(()=>{
            console.log(this.teacher,question);
        },300)
    }
}

workshop.ask("Is this lexical 'this'?"); // alok Is this lexical 'this'?



// when ask() is normal function method
var workshop1 = {
    teacher: "alok",
    // arrow function
    ask:(question)=>{
        setTimeout(()=>{
            console.log(this.teacher,question);
        },300)
    }
}

workshop1.ask("Is this lexical 'this'?"); // undefined "Is this lexical 'this'?






// when ask() is normal function method
var workshop2 = {
    teacher: "alok",
    // normal function
    ask(question){
        // normal callback function in setTimeout
        setTimeout(function(){
            console.log(this.teacher,question);
        },300)
    }
}

workshop2.ask("Is this lexical 'this'?"); // undefined "Is this lexical 'this'?"

// when ask() is normal function method
var workshop4 = {
    teacher: "alok",
    // arrow function
    ask:(question)=>{
        setTimeout(function(){
            console.log(this.teacher,question);
        },300)
    }
}

workshop4.ask("Is this lexical 'this'?"); // undefined "Is this lexical 'this'?"
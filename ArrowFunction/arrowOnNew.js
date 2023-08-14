function animal(name){
    this.name = name;
    this.getName = function(){
        return this.name
    };

    this.setName = function(name){
        this.name = name;
    }
};


const fox = new animal('fox-dc');
console.log("Name of fox : ",fox.getName())

// new keyword on arrow function
const animal1= (name)=>{
    this.name = name;
    this.getName = function(){
        return this.name
    };

    this.setName = function(name){
        this.name = name;
    }
};

const cow = new animal1('desi-cow'); // Uncaught TypeError: animal1 is not a constructor
console.log("Name of Cow : ",cow.getName())
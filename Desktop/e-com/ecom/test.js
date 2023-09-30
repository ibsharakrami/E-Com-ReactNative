const { Component } = require("react");


class Person {
   constructor(name){
    this.name = this.format(name);
   }
   format( name ) {
    return name.toUpperCase()
   }

   say() {
    console.log(`hey ${this.name} `)
   }
  

  }
}

class Persona extends Person {
  constructor(name) {
    super(this.format(name));
  }
  format(name){
    return name.toLowerCase();
  }


}

var x = new Persona("ANTYhiu");
x.say(); 
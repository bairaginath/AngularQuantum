function Car() {
  this.setSpeed=function(speed){
    this.speed=speed;
  }
  this.getSpeed=function(){
    return this.speed;
  }
  this.setName=function(name){
    console.log("In side setName of Car");
    this.name=name;
  }
  this.getName=function(){
    console.log("In side getName of Car");
    return this.name;
  }

}


function Ferrari() {
  this.setName=function(name){
    console.log("In side setName of Farrari");
    this.name=name;
  }
  this.getName=function(){
    console.log("In side getName of Farrari");
    return this.name;
  }
}
Ferrari.prototype= new Car();

var ferrari=new Ferrari();
ferrari.setName("Ferrari");
ferrari.setSpeed(44);
console.log(ferrari.getName()+"    "+ferrari.getSpeed());


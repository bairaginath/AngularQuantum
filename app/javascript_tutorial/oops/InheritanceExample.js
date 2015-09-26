function Car() {
   this.setSpeed=function(speed){
     this.speed=speed;
   }
   this.getSpeed=function(){
     return this.speed;
   }
}


function Ferrari() {
  this.setName=function(name){
  this.name=name;
}
this.getName=function(){
  return this.name;
}
}
Ferrari.prototype= new Car();

var ferrari=new Ferrari();
ferrari.setName("Ferrari");
ferrari.setSpeed(44);
console.log(ferrari.getName()+"    "+ferrari.getSpeed());


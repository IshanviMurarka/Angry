class Slingshot {
    constructor(bodyA , bodyB){
    var option ={

       bodyA : bodyA ,
       bodyB : bodyB ,
       stiffness : 0.05,
       length : 10

    }
      this.sling = Constraint.create(option);
      World.add(world , this.sling);
    }
    display(){
        var pointA = this.sling.bodyA.position
        var pointB = this.sling.bodyB.position
        strokeWeight(8);
        line(pointA.x ,pointA.y ,pointB.x ,pointB.y);
        console.log(pointA.x);
        console.log(pointA.y);
        console.log(pointB.x);
        console.log(pointB.y);
    }
    }

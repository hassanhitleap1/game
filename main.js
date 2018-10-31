class Shape {
    
    constructor(pointsArray) {
        this.points=pointsArray;
       
    }

    // Adding a method to the constructor
    isCircle() {
       
        this.points.forEach(function(entry) {
            console.log(entry);
        });
       if(true){
        console.log("isCircle");
       }else{
        console.log("not isCircle");
       }
    }

    isRectangle(){
        if(true){
            console.log("isRectangle");
           }else{
            console.log("not isRectangle");
           }
    }

    
    isTriangle(){
        if(true){
            console.log("isTriangle");
           }else{
            console.log("not isTriangle");
           }
    }

    isSquare() {
        if(true){
            console.log("isSquare");
           }else{
            console.log("not isSquare");
           } 
    }
}


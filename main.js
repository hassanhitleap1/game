class Shape {
    
    constructor(pointsArray) {
        this.points=pointsArray;
        this.nodesPoint=pointsArray.length;
        console.log((this.nodesPoint-1)/2);
       if(((this.nodesPoint-1)/2) <= 2){
        console.log("notsqure");
       }
        

    }

    // Adding a method to the constructor
    isCircle() {
       
        this.points.forEach(function(arr) {
            console.log(arr);
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
        //this.islineRow();
        //this.islineColumn();

    }

    islineRow(){
        var correct=true;
        var firstNodeLeft=this.points[0][0];
        
        for (let index = 0; index < this.points.length; index++) {
           if(firstNodeLeft != this.points[index][0]){
            correct=false;
           }
        }
        if(correct){
            console.log('it is true');
        }else{
            console.log('it is false');  
        } 
    }

    islineColumn(){
        var correct=true;
        var firstNodeRight=this.points[0][1];
        
        for (let index = 0; index < this.points.length; index++) {
           if(firstNodeRight != this.points[index][1]){
            correct=false;
           }
        }
        if(correct){
            console.log('it is true');
        }else{
            console.log('it is false');  
        } 
    }
}


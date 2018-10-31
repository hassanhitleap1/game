class Shape {
    
    constructor(pointsArray) {
        this.points=pointsArray;
        this.nodePoint=pointsArray.length;
        console.log('initiozion object');
       
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
        this.islineRow();
    }

    islineRow(){
        points=this.points;
        //console.log(this.points[0][0]);
        //firstNodeLeft=(this.points[0][0]);
        console.log(this.points);

        for (let index = 0; index < this.points.length; index++) {
           
            console.log( this.points[index] );
            
        }
   
        // this.points.forEach(function(arr) {
        //     console.log(arr);
        //     // if(! firstNodeLeft==arr[0]){
        //     //     console.log("not line");
        //     // }
        // });  
    }
}


class Shape {
    
    constructor(pointsArray) {
        this.points=pointsArray;
        this.nodesPoint=pointsArray.length;
        if(this.isSquare()){
            console.log('it is sqeraure');
        }else{
            console.log('it is note sqeraure');
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
        
        // if(this.finalNodeEqFirstNode()&& this.isEvenNode(this.nodesPoint) )
        // {
        //     if(this.isGolineColumn())
        //     {
        //         if(this.sumNodeINColumn()==this.sumNodeINRowColumn()){
        //             return true;
        //         }
        //     } 
        //     if(this.isGoLineRow())
        //     {
        //         if(this.sumNodeINRow()==this.sumNodeINColumnRow())
        //         {
        //             return true;
        //         }
        //     }
        //     return false;
        // }
        // return false;

        if(this.finalNodeEqFirstNode()){
            console.log("finalNodeEqFirstNode");

        }
        if(this.isEvenNode(this.nodesPoint)){
            console.log("isEvenNode");
        }
        if(this.isGolineColumn()){
            console.log(" isGolineColumn");  
            if(this.sumNodeINColumn()==this.sumNodeINRowColumn()){
                console.log(this.sumNodeINColumn());
                console.log(this.sumNodeINRowColumn());
            }
        }

        if(this.isGoLineRow()){
            console.log("isGoLineRow");
            if(this.sumNodeINRow()==this.sumNodeINColumnRow()){
                console.log('it si suqre');
                console.log(this.sumNodeINRow()); 
                console.log(this.sumNodeINColumnRow())
            }
        }
       
        
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
            return true;
        }else{
            return false;
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
            return true;
        }else{
            return false;
        } 
    }

    finalNodeEqFirstNode(){
        var xfirstNode=this.points[0][0];
        var yfirstNode=this.points[0][1];
        var xfainalNode=this.points[this.points.length-1][0];
        var yfainalNode=this.points[this.points.length-1][1];
       if((xfirstNode==xfainalNode) && (yfirstNode==yfainalNode)){
           console.log('finalNodeEqFirstNode true');
            return true
       }
      
       return false;
    }


    isGoLineRow(){
        var firstNodeLeft=this.points[1][0];
        var secoundNodeLeft=this.points[2][0];
        if(firstNodeLeft==secoundNodeLeft){
            console.log("isGoLineRow true");
            return true;
        }
        return false;
    } 

    isGolineColumn(){
        var firstNodeRight=this.points[1][1];
        var secoundNodeRight=this.points[2][1];
        if(firstNodeRight==secoundNodeRight){
            console.log("isGolineColumn true");
            return true;
        }
        return false;
    }

    sumNodeINColumn(){
        let sumNode=0;
        let colum =0;
        let row=1;
        let firstNodeRight=this.points[1][1];
        
        for (++colum; colum < this.points.length; colum++) {
            if(firstNodeRight==this.points[colum][row]){
                sumNode+=1;
            }
        }
        console.log("sumNodeINColumn ="+sumNode);
        return sumNode;
    }

    sumNodeINRow(){
        let sumNode=0;
        let colum =0;
        let row=0;
        let firstNodeLeft=this.points[1][0];
        
        for (++colum; colum < this.points.length; colum++) {
            if(firstNodeLeft==this.points[colum][row]){
                sumNode+=1;
            }
        }
        console.log("sumNodeINColumn ="+sumNode);
        return sumNode;
    }

    sumNodeINColumnRow(){
        let sumNode=0;
        let colum =this.sumNodeINRow();
        let row=1;
        let firstNodeRight=this.points[this.sumNodeINRow()+1][1];
        
        for (colum; colum < this.points.length; colum++) {
            if(firstNodeRight==this.points[colum][row]){
                sumNode+=1;
            }
        }
        console.log("sumNodeINColumnRow ="+sumNode);
        return sumNode;
    }

    sumNodeINRowColumn(){
        let sumNode=0;
        let colum =this.sumNodeINColumn();
        let row=0;
        let firstNodeLeft=this.points[colum][0];
        
        for (colum; colum < this.points.length; colum++) {
            if(firstNodeLeft==this.points[colum][row]){
                sumNode+=1;
            }
        }
        console.log("sumNodeINRowColumn ="+sumNode);
        return sumNode;
    }


    isEvenNode(number){
        if (number % 2 == 0){
            console.log("isEvenNode true");
            return(true);
         }
         else{
            return(false);    
         }
    }
}


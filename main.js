class Shape {
    
    constructor(pointsArray) {
        this.points=pointsArray;
        this.nodesPoint=pointsArray.length;
        // this.isSquare();
        this.isRectangle();
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
        if(this.finalNodeEqFirstNode() && this.isEvenNode(this.nodesPoint)){
            if(this.isGolineColumn()){
                   // console.log('isGolineColumn');
                 var stratFromNode=this.sumNodeINColumn();
                 if(stratFromNode !=this.sumNodeINRowColumn(stratFromNode)){
                     console.log("its isRectangle");
                     return true; 
                 }
             }
             if(this.isGoLineRow()){
                  //  console.log('isGoLineRow');
                 var stratFromNode=this.sumNodeINRow();
                 if(stratFromNode!=this.sumNodeINColumnRow(stratFromNode)){
                     console.log("its isRectangle");
                     return true; 
                 }
             }
             return false;
        }
        return false;
    }

    
    isTriangle(){
        if(true){
            console.log("isTriangle");
           }else{
            console.log("not isTriangle");
           }
    }

    isSquare() {
     
        if(this.finalNodeEqFirstNode() && this.isEvenNode(this.nodesPoint)){
            //console.log("finalNodeEqFirstNode && isEvenNode");
            if(this.isGolineColumn()){
               // console.log('isGolineColumn');
                var stratFromNode=this.sumNodeINColumn();
                if(stratFromNode==this.sumNodeINRowColumn(stratFromNode)){
                    console.log("its squre");
                    return true; 
                }
            }
            if(this.isGoLineRow()){
               // console.log('isGoLineRow');
                var stratFromNode=this.sumNodeINRow();
                if(stratFromNode==this.sumNodeINColumnRow(stratFromNode)){
                    console.log("its squre");
                    return true; 
                }
            }
            return false;
        }
        return false;  
        
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
           //console.log('finalNodeEqFirstNode true');
            return true
       }
      
       return false;
    }


    isGoLineRow(){
        var firstNodeLeft=this.points[1][0];
        var secoundNodeLeft=this.points[2][0];
        if(firstNodeLeft==secoundNodeLeft){
            //console.log("isGoLineRow true");
            return true;
        }
        return false;
    } 

    isGolineColumn(){
        var firstNodeRight=this.points[1][1];
        var secoundNodeRight=this.points[2][1];
        if(firstNodeRight==secoundNodeRight){
            //console.log("isGolineColumn true");
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
        if(this.finalNodeEqFirstNode()){
            --sumNode;
        }
        //console.log("sumNodeINColumn ="+sumNode);
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
        if(this.finalNodeEqFirstNode()){
            --sumNode;
        }
        //console.log("start form  sumNodeINColumn ="+sumNode);
        return sumNode;
    }

    sumNodeINColumnRow(stratFromNode){
        let sumNode=0;
        let colum =stratFromNode;
        let row=1;
        let firstNodeRight=this.points[colum][1];
        
        for (colum; colum < this.points.length; colum++) {
            if(firstNodeRight==this.points[colum][row]){
                sumNode+=1;
            }
        }
        //console.log("sumNodeINColumnRow ="+sumNode+" start form  " +colum);
        return sumNode;
    }

    sumNodeINRowColumn(stratFromNode){
        let sumNode=0;
        let colum =stratFromNode;
        let row=0;
        let firstNodeLeft=this.points[colum][0];
        
        for (colum; colum < this.points.length; colum++) {
            if(firstNodeLeft==this.points[colum][row]){
                sumNode+=1;
            }
        }
        // console.log("sumNodeINRowColumn ="+sumNode);
        return sumNode;
    }


    isEvenNode(number){
        if (number % 2 == 0){
            //console.log("isEvenNode true");
            return(true);
         }
         else{
            return(false);    
         }
    }
}


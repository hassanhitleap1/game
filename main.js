class Shape {
    
    constructor(pointsArray) {
        this.points=pointsArray;
        this.nodesPoint=pointsArray.length;
    }


    isRectangle(){
        var condations=0;// must be .. condtion
        if(this.points[this.points.length-1][0]==this.points[0][0] || this.points[this.points.length-1][1]==this.points[0][1] ){
            condations++;  
        }
        for (let index = 0; index < this.points.length; index++) {

            if(this.points[index][1]==this.points[index+1][1]){
                condations+=1;
            }else{
                if(this.points[0][1]==this.points[this.points.length-1][1]){
                    condations+=1; 
                }
            }
            if(condations>=3){
                if(this.itsNotSquare()){
                    return true;  
                }
            }
        }
        return false;
        
        
    
       

        if(this.finalNodeEqFirstNode() && this.mostDuplicatesRow()){
            return true; 
            // if(this.isGolineColumn()){
            //         console.log('isGolineColumn');
            //      var stratFromNode=this.sumNodeINColumn();
            //      if(stratFromNode !=this.sumNodeINRowColumn(stratFromNode)){
            //          alert("its isRectangle");
            //          return true; 
            //      }
            //  }
            //  if(this.isGoLineRow()){
            //        console.log('isGoLineRow');
            //      var stratFromNode=this.sumNodeINRow();
            //      if(stratFromNode!=this.sumNodeINColumnRow(stratFromNode)){
            //         alert("its isRectangle");
                     
            //      }
            //  }
        }
        
        return false;
    }

    moin(){
        if (!this.isSquare() && this.cornerCouunt() && !this.isRectangle() && this.isEvenNode(this.nodesPoint) && this.finalNodeEqFirstNode()){
            console.log('is moin ');
        }
    }

    isHexa(){
        let condations=0;
        if(this.nodesPoint==8){
            condations++;
        }
        console.log(this.points);
        if( !this.isRectangle()&& this.isEvenNode(this.nodesPoint)&& this.cornerCouuntHexa()&& this.finalNodeEqFirstNode() ){
            console.log("it is Hexa");
         }  
    }

    isTriangle(){
        console.log(this.points);
        let condition=0;
        if(this.nodesPoint==3){
            condition++;   
        }else{
            return false;
        }
        for (let index = 0; index < this.points.length; index++) {
            if(this.points[index][1]==this.points[index+1][1]){
                condition++; 
            }
            if(this.points[index][1]==this.points[index+1][0]){
                condition++; 
            }
           if(condition>=3){
               return true;
           }
        }

        return false;


        if(!this.isSquare()&& !this.isRectangle()&& this.isEvenNode(this.nodesPoint)&& this.cornerCouuntTriangle()&& this.finalNodeEqFirstNode() ){
           console.log("it is isTriangle");
        }
      
    }
    itsNotSquare(){
        let condtion=0 ; 
     
        for (let index = 0; index < this.points.length; index++) {
            if(this.points[index][0]==this.points[index][1]){
                condtion++;
                
            }
        }
        if(condtion==2){
            return false;
        }else{
            return true;
        }
      
    }
    isSquare() {
        let threeCondtion=0 ; // must be three condation 
        var comprition1;
        var comprition2;
        
        for (let index = 0; index < this.points.length; index++) {
            if(this.points[index][0]==this.points[index][1]){
                threeCondtion++;
            }
        }
     
        if(this.points[0][0]!= this.points[0][1]){

            if(this.points[0][1] > this.points[0][0]){
                
                comprition1=this.points[0][1]-this.points[0][0];
                comprition2=this.points[this.points.length-2][0]-this.points[this.points.length-2][1];

            }else{

                comprition1=this.points[0][0]-this.points[0][1];
                comprition2=this.points[this.points.length-2][1]-this.points[this.points.length-2][0];
            }
        }else{
          
            if(this.points[1][1] > this.points[1][0]){
                

                comprition1=this.points[1][1]-this.points[1][0];
                comprition2=this.points[this.points.length-1][0]-this.points[this.points.length-1][1];

            }else{
                comprition1=this.points[1][0]-this.points[1][1];
                comprition2=this.points[this.points.length-1][1]-this.points[this.points.length-1][0];
            }
        }

        if(comprition1==comprition2){
            threeCondtion++;
        }
        if(threeCondtion==3){
           return true;
        }else{
            return false;
        }

        if(this.finalNodeEqFirstNode() && this.isEvenNode(this.nodesPoint)){
            //console.log("finalNodeEqFirstNode && isEvenNode");
            if(this.isGolineColumn()){
               // console.log('isGolineColumn');
                var stratFromNode=this.sumNodeINColumn();
                if(stratFromNode==this.sumNodeINRowColumn(stratFromNode)){
                    //console.log("its squre");
                    return true; 
                }
            }
            if(this.isGoLineRow()){
               // console.log('isGoLineRow');
                var stratFromNode=this.sumNodeINRow();
                if(stratFromNode==this.sumNodeINColumnRow(stratFromNode)){
                    //console.log("its squre");
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

    cornerColumn(){
        let corner;
        let colum =0;
        let row=1;
        let firstNodeRight=this.points[1][1];
        
        for (++colum; colum < this.points.length; colum++) {
            if(firstNodeRight==this.points[colum][row]){
                corner=this.points[colum];
            }
        }
        // if(this.finalNodeEqFirstNode()){
        //     --sumNode;
        // }
        //console.log("sumNodeINColumn ="+sumNode);
        return corner;
    }

    cornerRow(){
        let corner;
        let colum =0;
        let row=0;
        let firstNodeLeft=this.points[1][0];
        
        for (++colum; colum < this.points.length; colum++) {
            if(firstNodeLeft==this.points[colum][row]){
                corner=this.points[colum];
            }
        }
        // if(this.finalNodeEqFirstNode()){
        //     --sumNode;
        // }
        //console.log("start form  sumNodeINColumn ="+sumNode);
        return corner;
    }



    corner() { 
        let cornerlimt;

        for (let index = 1; index < this.points.length; index++) {
            var arr= this.points[index];
           if(--this.points[index+1][0]==arr[0] && arr[0] == ++this.points[index-1][0] ){
                console.log('true');
           }
           if(++this.points[index+1][0]==arr[0] && arr[0] == --this.points[index-1][0] ){
                    console.log('true');
            }
        }
     }

    cornerCouunt(){
        let cornerCount = 0;//let  cornerCount must be 4 
        let one;
        let two;
        let three;
        let four;
        
        for (let index = 1; index < this.points.length; index++) {
                one = 0; two = 0; three = 0; four = 0;
                one = this.points[index - 1][0] - this.points[index][0];
                two = this.points[index][1]-this.points[index - 1][1] ;
                three = this.points[index + 1][0] - this.points[index][0];
                four = this.points[index + 1][1] - this.points[index][1];
                
                if ((one == 1) && (two == 1) && (three == 1) && (four == 1)) {
                    cornerCount += 1;
                    one=0;two=0;three=0;four=0;
                }
                
                one = this.points[index][0]-this.points[index - 1][0] ;
                two = this.points[index][1] - this.points[index - 1][1];
                three = this.points[index + 1][0] - this.points[index][0];
                four = this.points[index][1]-this.points[index + 1][1] ;

                if ((one == 1) && (two == 1) && (three == 1) && (four == 1)) {
                    cornerCount += 1;
                    one = 0; two = 0; three = 0; four = 0;
                }

                one = this.points[index][0] - this.points[index - 1][0];
                two = this.points[index - 1][1] - this.points[index][1];
                three = this.points[index][0] - this.points[index + 1][0];
                four = this.points[index][1] - this.points[index + 1][1];

                if ((one == 1) && (two == 1) && (three == 1) && (four == 1)) {
                    cornerCount += 1;
                    one = 0; two = 0; three = 0; four = 0;
                }

                one = this.points[index][0] - this.points[index - 1][0];
                two = this.points[index - 1][1] - this.points[index][1];
                three = this.points[index][0] - this.points[index + 1][0];
                four = (this.points[index][1]) - this.points[index + 1][1];

                if ((one == 1) && (two == 1) && (three == 1) && (four == 1)) {
                    cornerCount+=1;
                    one = 0; two = 0; three = 0; four = 0;
                }
                if (cornerCount>=3){
                    return true;
                }
             
            }
        return flase;
    }
    cornerCouuntTriangle() {
        let cornerCount = 0;//let  cornerCount must be 2 


        for (let index = 1; index < this.points.length; index++) {

            if (this.points[index-1][1] == this.points[index][1] && this.points[index-1][0] != this.points[index][0]) {
                cornerCount += 1;
            }
            if (this.points[index+1][1] == this.points[index][1]&& this.points[index+1][0] != this.points[index][0]) {
                cornerCount += 1;
            }
            
            if (cornerCount > 3) {
                return true;
            }

        }
        return flase;
    }

    
    cornerCouuntHexa(){
        let corner=0;
        var con1=0;
        var con2=0;
        var con3=0;
        var con4=0;
        for (let index = 1; index < this.points.length; index++) {
            con1=0; con2=0; con3=0; con4=0;
        //     // node one
           con1= this.points[index-1][0]-this.points[index][0];
           con2= this.points[index][1]-this.points[index-1][1];
            if(this.points[index][0]==this.points[index+1][0]){
                con3=1;
            }
            con4= this.points[index+1][1]-this.points[index][1];
            if((con1==1)&&(con2==1)&& (con3==1)&&(con4==1)){
                corner++; 
            }

            // // node two 
            con1= this.points[index][0]-this.points[index-1][0];
            con2= this.points[index][1]-this.points[index-1][1];
            con3=this.points[index+1][0]-this.points[index][0];
             if(this.points[index][1]==this.points[index+1][1]){
                con4=1;
             }
             if((con1==1)&&(con2==1)&& (con3==1)&&(con4==1)){
                 corner++; 
             }

             //node three
             con1= this.points[index][0]-this.points[index-1][0];
             con2= this.points[index-1][1]-this.points[index][1];
             if(this.points[index][0]==this.points[index+1][0]){
                con3=1;
             }
             con4=this.points[index][1]-this.points[index+1][1];

              if((con1==1)&&(con2==1)&& (con3==1)&&(con4==1)){
                  corner++; 
              }
            
            // // node four
            con1= this.points[index-1][0]-this.points[index][0];
            con2= this.points[index-1][1]-this.points[index][1];

            con3=this.points[index][0]-this.points[index+1][0];
             if(this.points[index][1]==this.points[index+1][1]){
                con4=1;
             }
             if((con1==1)&&(con2==1)&& (con3==1)&&(con4==1)){
                 corner++; 
             }
            if(corner  >=3){
                return true;
            }
        }

       return false;
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


    mostDuplicatesRow(){
        var nodeRow=0;
        var nodeColumn=0;
        var row;
        var cloumn;
        for (let index = 0; index < this.points.length; index++) {
            cloumn=this.points[index][0];
            row=this.points[index][1];
            if(index < this.points.length-1){
                if(this.points[index+1][0]==(cloumn++) ){
                    nodeRow++;
                }
                if(this.points[index+1][1]==(row++)){
                    nodeColumn++;
                }
            }
        }
        if(nodeColumn==nodeRow){
            return false;
        }
        return true;
    }
}


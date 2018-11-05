var svg = new SVG(document.querySelector(".graph")).size("100%", 400);
var svg2 = new SVG(document.querySelector("#drawing2")).size("100%", 400);
var svg3 = new SVG(document.querySelector("#drawing3")).size("100%", 400);
var svg4 = new SVG(document.querySelector("#drawing4")).size("100%", 400);

var nodes = svg.group();
var nodes2 = svg2.group();
var nodes3 = svg3.group();
var nodes4 = svg4.group();

var links = svg.group();
var links2 = svg2.group();
var links3 = svg3.group();
var links3 = svg3.group();

var markers = svg.group();
var markers2 = svg2.group();
var markers3 = svg3.group();
var markers4 = svg4.group();

const shapes = [];
const shapes2 = [];
const shapes3 = [];
const shapes4 = [];

let index = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;

let shape;
let shape2;
let shape3;
let shape4;

let pointsArray=Array();
let pointsArray2=Array();
let pointsArray3=Array();
let pointsArray4=Array();

let idG;
let idG2;
let idG3;
let idG4;


drowNods();
drowNods2();
drowNods3();
drowNods4();

function drowNods() {
 x=0;
 y=0;

 for (let i = 0; i < 8; i++) {
    
     for (let i2 = 0; i2 < 8; i2++) {
         var g = nodes.group().translate(x, y);
         g.circle(20).fill("#ff0000");
         $("#"+g).attr( "x", i);
         $("#"+g).attr( "y", i2);
         y+=50;
     }
     y=0;
     x+=60;
 }
}

function drowNods2() {
 x=0;
 y=0;

 for (let i = 0; i < 8; i++) {
    
     for (let i2 = 0; i2 < 8; i2++) {
         var g = nodes2.group().translate(x, y);
         g.circle(20).fill("#ff0000");
         $("#"+g).attr( "x", i);
         $("#"+g).attr( "y", i2);
         y+=50;
     }
     y=0;
     x+=60;
 }
}
function drowNods3() {
 x=0;
 y=0;

 for (let i = 0; i < 8; i++) {
    
     for (let i2 = 0; i2 < 8; i2++) {
         var g = nodes3.group().translate(x, y);
         g.circle(20).fill("#ff0000");
         $("#"+g).attr( "x", i);
         $("#"+g).attr( "y", i2);
         y+=50;
     }
     y=0;
     x+=60;
 }
}
function drowNods4() {
 x=0;
 y=0;

 for (let i = 0; i < 8; i++) {
     
     for (let i2 = 0; i2 < 8; i2++) {
         var g = nodes4.group().translate(x, y);
         g.circle(20).fill("#ff0000");
         $("#"+g).attr( "x", i);
         $("#"+g).attr( "y", i2);
         y+=50;
     }
     y=0;
     x+=60;
 }
} 

const getDrawObject = () => {
  shape="mouse paint";
  var color="#000000";
  const option = {
      stroke: color,
      'stroke-width': 10,
      'fill-opacity': 0,
  };

  switch (shape) {
      case 'mouse paint':
          return svg.polyline().attr(option);
      case 'ellipse':
          return svg.ellipse().attr(option);
      case 'rect':
          return svg.rect().attr(option);
  }
  return null;
}

const getDrawObject2 = () => {
  shape2="mouse paint";
  var color2="#000000";
  const option2 = {
      stroke: color2,
      'stroke-width': 10,
      'fill-opacity': 0,
  };

  switch (shape2) {
      case 'mouse paint':
          return svg2.polyline().attr(option2);
      case 'ellipse':
          return svg2.ellipse().attr(option2);
      case 'rect':
          return svg2.rect().attr(option2);
  }
  return null;
}

const getDrawObject3 = () => {
  shape3="mouse paint";
  var color3="#000000";
  const option3 = {
      stroke: color3,
      'stroke-width': 10,
      'fill-opacity': 0,
  };

  switch (shape3) {
      case 'mouse paint':
          return svg3.polyline().attr(option3);
      case 'ellipse':
          return svg3.ellipse().attr(option3);
      case 'rect':
          return svg3.rect().attr(option3);
  }
  return null;
}

const getDrawObject4 = () => {
  shape4="mouse paint";
  var color4="#000000";
  const option4 = {
      stroke: color4,
      'stroke-width': 10,
      'fill-opacity': 0,
  };

  switch (shape4) {
      case 'mouse paint':
          return svg4.polyline().attr(option4);
      case 'ellipse':
          return svg4.ellipse().attr(option4);
      case 'rect':
          return svg4.rect().attr(option4);
  }
  return null;
}


$("#drawing >> g[x]" ).mousedown(function() {
// console.log('mousedown circle');
const shape = getDrawObject();
  shapes[index] = shape;
  shape.draw(event);
  xDireaction=$(this).attr('x');
  yDireaction=$(this).attr('y');
  if(!pointsArray.length){
    pointsArray=[[xDireaction,yDireaction]];
  }else{
    pointsArray.push([xDireaction,yDireaction]);
  }
    
    //  pointsArray=[[xDireaction,yDireaction]];
    //  idG=$( "g[x]" ).attr('id');
     
});

$("#drawing2 >> g[x]" ).mousedown(function() {
// console.log('mousedown circle');
const shape2 = getDrawObject2();
  shapes2[index2] = shape2;
  shape2.draw(event);
     xDireaction=$(this).attr('x');
    yDireaction=$(this).attr('y');
     if(!pointsArray2.length){
        pointsArray2=[[xDireaction,yDireaction]];
      }else{
        pointsArray2.push([xDireaction,yDireaction]);
      }
    //  idG2=$( this ).attr('id');
});

$("#drawing3 >> g[x]" ).mousedown(function() {
// console.log('mousedown circle');
const shape3 = getDrawObject3();
  shapes3[index2] = shape3;
  shape3.draw(event);
     xDireaction=$(this).attr('x');
    yDireaction=$(this).attr('y');
    //  pointsArray3=[[xDireaction,yDireaction]];
     if(!pointsArray3.length){
        pointsArray3=[[xDireaction,yDireaction]];
      }else{
        pointsArray3.push([xDireaction,yDireaction]);
      }
    //  idG3=$( this ).attr('id');
});
$("#drawing4 >> g[x]" ).mousedown(function() {
 
    const shape4 = getDrawObject4();
    shapes4[index2] = shape4;
    shape4.draw(event);
     xDireaction=$(this).attr('x');
    yDireaction=$(this).attr('y');
     if(!pointsArray4.length){
        pointsArray4=[[xDireaction,yDireaction]];
      }else{
        pointsArray4.push([xDireaction,yDireaction]);
      }
});


$( "#drawing >> g[x]" ).mouseup(function() {
    //console.log('mouseup circle');
    if (shape === 'mouse paint') {
            try {
            shapes[index].draw('stop', event); 
            xDireaction=$(this).attr('x');
            yDireaction=$(this).attr('y');
            pointsArray.push([xDireaction,yDireaction]);
            // shapeObject=new  Shape(pointsArray); 
                
            } catch (error) {
                
            }
            
        } 
        // else {
        //     try {
        //     shapes[index].draw(event);
        //     shapeObject=new  Shape();
        //         } catch (error) {
                
        //     }
        // }
        index++;  
});

$( "#drawing2 >> g[x]" ).mouseup(function() {
    //console.log('mouseup circle');
    if (shape2 === 'mouse paint') {
            try {
            shapes2[index2].draw('stop', event); 
            xDireaction=$(this).attr('x');
            yDireaction=$(this).attr('y');
            pointsArray2.push([xDireaction,yDireaction]);
            shapeObject2=new  Shape(pointsArray2); 
                
            } catch (error) {
                
            }
            
        } 
        // else {
        //     try {
        //     shapes2[index2].draw(event);
        //     shapeObject2=new  Shape();
        //         } catch (error) {
                
        //     }
        // }
        index2++;  
});

$( "#drawing3 >> g[x]" ).mouseup(function(event) {
    //console.log('mouseup circle');
    event.stopPropagation();
    if (shape3 === 'mouse paint') {
            try {
            shapes3[index3].draw('stop', event); 
            xDireaction=$(this).attr('x');
            yDireaction=$(this).attr('y');
            pointsArray3.push([xDireaction,yDireaction]);
            // shapeObject3=new  Shape(pointsArray3); 
                
            } catch (error) {
                
            }
            
        } 
        // else {
        //     try {
        //     shapes3[index3].draw(event);
        //     // shapeObject3=new  Shape();
        //         } catch (error) {
                
        //     }
        // }
        index3++;  
});
//$('#drawing4 >> g[x]').on('mouseup', function(event) 




$( "#drawing" ).mouseup(function() {
    //console.log('mouseup drawing');
        if (shape === 'mouse paint') {
            try {
                shapes[index].draw('stop', event); 
                // shapeObject=new  Shape(pointsArray);   
            } catch (error) {   
            }
        } else {
            if(!shape=='undefined'){
                shapes[index].draw(event);
            }
        }
        index++; 
});

 $( "#drawing2" ).mouseup(function() {
    //console.log('mouseup drawing');
        if (shape2 === 'mouse paint') {
            try {
                shapes2[index2].draw('stop', event); 
                shapeObject2=new  Shape(pointsArray2);   
            } catch (error) {   
            }
        } else {
            if(!shape2=='undefined'){
                shapes2[index2].draw(event);
            }
        }
        index2++; 
});

$( "#drawing3" ).mouseup(function() {
    //console.log('mouseup drawing');
    if (shape3 === 'mouse paint') {
        try {
            shapes3[index3].draw('stop', event); 
            // shapeObject=new  Shape(pointsArray);   
        } catch (error) {   
        }
    } else {
        if(!shape3=='undefined'){
            shapes[index3].draw(event);
        }
    }
    index++; 
});


$( "#drawing4" ).mouseup(function() {
    //console.log('mouseup drawing');
        if (shape4 === 'mouse paint') {
            try {
                shapes4[index4].draw('stop', event); 
                shapeObject4=new  Shape(pointsArray4);   
            } catch (error) {   
            }
        } else {
            if(!shape4=='undefined'){
                shapes4[index4].draw(event);
            }
        }
        index4++; 
});


$(document).ready(function () {
    $('#drawing4 >> g[x]').on('mouseup', function(event) {
   
        console.log('mouseup mouseup');
        

    }); 
});
document.getElementById("drawing3").style.display = "none";
document.getElementById("drawing2").style.display = "none";
document.getElementById("drawing").style.display = "none";
document.getElementById("graph1").style.display = "none";
document.getElementById("graph2").style.display = "none";
document.getElementById("graph3").style.display = "none";


function calculate(){
    let countTrue=0;

    // try{
    //     squre=new Shape(pointsArray);
    //     if(squre.isSquare()){
    //         countTrue++;
    //         alert("good ");
    //     }else{
    //         alert("its is ot  squre ");
    //     }
    // }catch(error){
    //     alert("must be drow squre ");
    // }
   
    // try{
    //     triangle= new Shape(pointsArray2);
    //     if(triangle.isTriangle()){
    //         countTrue++;
    //         alert("good it is Triangle");
    //     }else{
    //         alert("its is ot  Triangle ");
    //     }
    // }catch(error){
    //     alert("must be drow Triangle ");
    // }

    // try{
    //     rectangle= new Shape(pointsArray3);

    //     if(rectangle.isRectangle()){
    //         countTrue++;
    //         alert("good it is rectangle");
    //     }else{
    //         alert("its is not  rectangle ");
    //     }
    // }catch(error){
    //     alert("must be drow rectangle ");
    // }

    try{
        hexa= new Shape(pointsArray3);
        if(hexa.isHexa()){
            countTrue++;
            alert("good it is hexa");
        }else{
            alert("its is ot  hexa ");
        }
    }catch(error){
        alert("must be drow hexa ");
    }
    
    // if(countTrue >=4){
    //     alert("all off ture ");
    // }else{

    // }
}


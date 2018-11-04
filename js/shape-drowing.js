window.addEventListener("load", function () {
    var svgsh1 = new SVG(document.querySelector("#graph1")).size("100%", 500);
    var svgsh2 = new SVG(document.querySelector("#graph2")).size("100%", 500);
    var svgsh3 = new SVG(document.querySelector("#graph3")).size("100%", 500);
    var svgsh4 = new SVG(document.querySelector("#graph4")).size("100%", 500);

    var linkssh1 = svgsh1.group();
    var linkssh2 = svgsh2.group();
    var linkssh3 = svgsh3.group();
    var linkssh4 = svgsh4.group();
    

    var markerssh1 = svgsh1.group();
    var markerssh2 = svgsh2.group();
    var markerssh3 = svgsh3.group();
    var markerssh4 = svgsh4.group();

    var nodesh1 = svgsh1.group();
    var nodesh2 = svgsh2.group();
    var nodesh3 = svgsh3.group();
    var nodesh4 = svgsh4.group();


    drowShape1(nodesh1,linkssh1,markerssh1);
    drowShape2(nodesh2,linkssh2,markerssh2);
    drowShape3(nodesh3,linkssh3,markerssh3);
    drowShape3(nodesh4,linkssh4,markerssh4);

        x=0;
        y=0;
        var g ;
        for (let i = 0; i < 8; i++) {
            for (let i2 = 0; i2 < 10; i2++) {
                 g = nodesh1.group().translate(x, y).draggy();
                g.circle(20).fill("#ff0000");
                y+=50;
            }
            x+=60;
            y=0;
        }
       

});

function drowShape1(nodesh1,linkssh1,markerssh1){
    var g1 = nodesh1.group().translate(0, 50).draggy();
            g1.circle(50).fill("#C2185B");

    var g2 = nodesh1.group().translate(240, 50).draggy();
            g2.circle(50).fill("#E91E63");

    var g4 = nodesh1.group().translate(40, 240).draggy();
            g4.circle(50).fill("#FF5252");  

    var g3 = nodesh1.group().translate(240, 240).draggy();
            g3.circle(50).fill("#FF5252");
  
 
            
    g1.connectable({
                container: linkssh1,
                markers: markerssh1
            }, g2).setLineColor("#5D4037");  
    g2.connectable({
                container: linkssh1,
                markers: markerssh1
            }, g3).setLineColor("#5D4037");   
    g3.connectable({
                container: linkssh1,
                markers: markerssh1
            }, g4).setLineColor("#5D4037");   
    g4.connectable({
                container: linkssh1,
                markers: markerssh1
            }, g1).setLineColor("#5D4037");        

}

function drowShape2(nodesh2,linkssh2,markerssh2){
    var g1 = nodesh2.group().translate(120, 50).draggy();
            g1.circle(50).fill("#C2185B");

    var g2 = nodesh2.group().translate(300, 100).draggy();
            g2.circle(50).fill("#E91E63");

    var g3 = nodesh2.group().translate(120, 50).draggy();
            g3.circle(50).fill("#FF5252");
  
    var g4 = nodesh2.group().translate(300, 250).draggy();
            g4.circle(50).fill("#FF5252");    
            
    g1.connectable({
                container: linkssh2,
                markers: markerssh2
            }, g2).setLineColor("#5D4037");  
    g2.connectable({
                container: linkssh2,
                markers: markerssh2
            }, g3).setLineColor("#5D4037");   
    g3.connectable({
                container: linkssh2,
                markers: markerssh2
            }, g4).setLineColor("#5D4037");   
    g4.connectable({
                container: linkssh2,
                markers: markerssh2
            }, g1).setLineColor("#5D4037");        

}

function drowShape3(nodesh3,linkssh3,markerssh3){
    var g1 = nodesh3.group().translate(120, 50).draggy();
            g1.circle(50).fill("#C2185B");

    var g2 = nodesh3.group().translate(300, 100).draggy();
            g2.circle(50).fill("#E91E63");

    var g3 = nodesh3.group().translate(120, 50).draggy();
            g3.circle(50).fill("#FF5252");
  
    var g4 = nodesh3.group().translate(300, 250).draggy();
            g4.circle(50).fill("#FF5252");    
            
    g1.connectable({
                container: linkssh3,
                markers: markerssh3
            }, g2).setLineColor("#5D4037");  
    g2.connectable({
                container: linkssh3,
                markers: markerssh3
            }, g3).setLineColor("#5D4037");   
    g3.connectable({
                container: linkssh3,
                markers: markerssh3
            }, g4).setLineColor("#5D4037");   
    g4.connectable({
                container: linkssh3,
                markers: markerssh3
            }, g1).setLineColor("#5D4037");        

}


function drowShape4(nodesh4,linkssh4,markerssh4){
    var g1 = nodesh4.group().translate(120, 50).draggy();
            g1.circle(50).fill("#C2185B");

    var g2 = nodesh4.group().translate(300, 100).draggy();
            g2.circle(50).fill("#E91E63");

    var g3 = nodesh4.group().translate(120, 50).draggy();
            g3.circle(50).fill("#FF5252");
  
    var g4 = nodesh4.group().translate(300, 250).draggy();
            g4.circle(50).fill("#FF5252");    
            
    g1.connectable({
                container: linkssh4,
                markers: markerssh4
            }, g2).setLineColor("#5D4037");  
    g2.connectable({
                container: linkssh4,
                markers: markerssh4
            }, g3).setLineColor("#5D4037");   
    g3.connectable({
                container: linkssh4,
                markers: markerssh4
            }, g4).setLineColor("#5D4037");   
    g4.connectable({
                container: linkssh4,
                markers: markerssh4
            }, g1).setLineColor("#5D4037");        

}
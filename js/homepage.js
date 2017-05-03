var myCanvas = document.getElementById("timePieChart");
myCanvas.width = 1000;
myCanvas.height =1000;
 
var ctx = myCanvas.getContext("2d"); //get reference to its 2D context which contains all the drawing methods


//draw pie slice
function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}

//draw the pie chart
drawPieSlice(ctx,myCanvas.width/2,myCanvas.width/2,200,0,7/24*2*Math.PI,'#3973ac');
drawPieSlice(ctx,myCanvas.width/2,myCanvas.width/2,200,7/24*2*Math.PI,15/24*2*Math.PI,'#ffa366');
drawPieSlice(ctx,myCanvas.width/2,myCanvas.width/2,200,15/24*2*Math.PI,17.5/24*2*Math.PI,'#10A296');
drawPieSlice(ctx,myCanvas.width/2,myCanvas.width/2,200,17.5/24*2*Math.PI,20.5/24*2*Math.PI,'#72CCA7');
drawPieSlice(ctx,myCanvas.width/2,myCanvas.width/2,200,20.5/24*2*Math.PI,21.5/24*2*Math.PI,'#FA987D');
drawPieSlice(ctx,myCanvas.width/2,myCanvas.width/2,200,21.5/24*2*Math.PI,22.5/24*2*Math.PI,'#F06060');
drawPieSlice(ctx,myCanvas.width/2,myCanvas.width/2,200,22.5/24*2*Math.PI,2*Math.PI,'#a6a6a6');




//draw line
function drawLine(ctx, startX, startY, endX, endY, linewidth, color){
	ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.lineWidth=linewidth;
    ctx.strokeStyle=color;
    ctx.stroke();
}



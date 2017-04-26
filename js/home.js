//https://code.tutsplus.com/tutorials/how-to-draw-a-pie-chart-and-doughnut-chart-using-javascript-and-html5-canvas--cms-27197


var myCanvas = document.getElementById("timePieChart");
myCanvas.width = 300;
myCanvas.height = 300;
 
var ctx = timePieChart.getContext("2d"); //get reference to its 2D context which contains all the drawing methods


//draw line
function drawLine(ctx, startX, startY, endX, endY){
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
}

//draw arc or circle
function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle){
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();
}

//draw pie slice
function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}


/*
//use an object to store categories and corresponding values of the pie
var myData = {
	    "Programming": 60,
	    "Physical Exercise": 10,
	    "Cooking": 15,
	    "social": 15,
	};
*/	
	
var myVinyls = {
	    "Classical music": 10,
	    "Alternative rock": 14,
	    "Pop": 2,
	    "Jazz": 12
	};


var Piechart = function(options){
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;
 
    this.draw = function(){
        var total_value = 0;
        var color_index = 0;
        for (var categ in this.options.data){
            var val = this.options.data[categ];
            total_value += val;
        }
 
        var start_angle = 0;
        for (categ in this.options.data){
            val = this.options.data[categ];
            var slice_angle = 2 * Math.PI * val / total_value;
 
            drawPieSlice(
                this.ctx,
                this.canvas.width/2,
                this.canvas.height/2,
                Math.min(this.canvas.width/2,this.canvas.height/2),
                start_angle,
                start_angle+slice_angle,
                this.colors[color_index%this.colors.length]
            );
 
            start_angle += slice_angle;
            color_index++;
        }
    };
};

var myPiechart = new Piechart(
	    {
	        canvas:myCanvas,
	        data:myVinyls,
	        colors:["#fde23e","#f16e23", "#57d9ff","#937e88"]
	    }
	);
	myPiechart.draw();

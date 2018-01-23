var canvas = document.getElementById("my-canvas"); 
var circle=document.getElementById("ab-circle"); 
var rect=document.getElementById("ab-rect");
var line=document.getElementById("ab-line");
var free=document.getElementById("ab-freehand");
var eraser=document.getElementById("ab-eraser"); 
var fill=document.getElementById("fill-color");
var out=document.getElementById("stroke-color");
var ctx = canvas.getContext("2d");
var flag = false;
var sp={x:0,y:0};
var ep={x:0,y:0};
		
var choice=-1;
var kd=false;
var ku=false;
var km=false;
var ev;
function drowCircle()
{
	choice=4;		
}

function drowrect()
{
	choice=3;		
}

function drowline()
{
	choice=1;		
}
function ereaser()
{
	choice=5;
}
function hand()
{
	choice=0;
}
function draw(num)
{
	switch(num)
	{
		case 0:
		//	ctx.beginPath();
		break;
		case 1:
			if(kd==true)
			{
				ctx.moveTo(sp.x,sp.y);
			}
			if(ku==true)
			{
				ctx.beginPath();
				ctx.moveTo(sp.x,sp.y);
				ctx.lineTo(ep.x,ep.y);
				ctx.strokeStyle = out.value;
				ctx.stroke();
				
			}
			break;
		case 3:
			if(kd==true)
			{
				ctx.moveTo(sp.x,sp.y);
			}
			if(ku==true)
			{
				
				ctx.beginPath();
				var r=Math.sqrt( ((ep.x-sp.x)*(ep.x-sp.x)) + ((ep.y-sp.y)*(ep.y-sp.y)) );
				ctx.rect(sp.x,sp.y,ep.x-sp.x,ep.y-sp.y);
				ctx.fillStyle = fill.value; ctx.fillRect(sp.x,sp.y,ep.x-sp.x,ep.y-sp.y);
				ctx.strokeStyle = out.value;
				ctx.stroke();
				
			}
		break;
		case 4:
			if(kd==true)
			{
				
				ctx.moveTo(sp.x,sp.y);
			}
			if(ku==true)
			{
				
				ctx.beginPath();
				var r=Math.sqrt( ((ep.x-sp.x)*(ep.x-sp.x)) + ((ep.y-sp.y)*(ep.y-sp.y)) );
				ctx.arc(sp.x,sp.y,r,0,2*Math.PI);
				ctx.fillStyle = fill.value;
				ctx.fill();
				ctx.strokeStyle = out.value;
				ctx.stroke();
			}
		break;
		case 5:
	
			if(km==true&&kd==true)
			{
				ctx.beginPath();
				ctx.moveTo(sp.x,sp.y);
				ctx.lineTo(ep.x,ep.y);
				ctx.strokeStyle = "#FFFFFF";
				ctx.stroke();
			}
		break;
		
		
	}
	
}
var newp={x:0,y:0};
canvas.addEventListener("mousemove", function (e) {
        km=true;
		
		//kd=false;
		ku=false;
		if(choice==5)
		{
			ctx.beginPath();
				ctx.moveTo(sp.x,sp.y);
				ctx.lineTo(ep.x,ep.y);
				ctx.strokeStyle = "#FFFFFF";
				ctx.stroke();
		}else if(choice==0 && kd==true)
		{
			ctx.beginPath();
				ctx.moveTo(sp.x,sp.y);
				newp.x=e.offsetX; newp.y=e.offsetY;
				
			ctx.lineTo(newp.x,newp.y);
				ctx.strokeStyle = out.value;
				ctx.stroke();
				sp.x=e.offsetX;
		sp.y=e.offsetY;
				
		}
		
});
canvas.addEventListener("mousedown", function (e) {
        kd=true;
		sp.x=e.offsetX;
		sp.y=e.offsetY;
		ku=false;
		km=false;
		
		
		
});
canvas.addEventListener("mouseup", function (e) {
        ku=true;
		ep.x=e.offsetX;
		ep.y=e.offsetY;
		km=false;
		kd=false;
		draw(choice);
		if(choice==5)
		{
			
				ctx.moveTo(ep.x,ep.y);
				
		}
		
});


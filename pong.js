const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');
setInterval(ball,1);



var keyState = {};    
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);    
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);

xPos = 250;
yPos = 133;
xVel = 1;
yVel = 1;
tileSize = 3;
boardWidth = 1500;
boardHeight = 800;
playerWidth=20;
playerHeight=400;
pX = 1480;
pY = 600-playerHeight;
score = 0;


function ball(){
	document.getElementById("display").innerHTML = score;
	xPos+=xVel;
	yPos+=yVel;
	context.fillStyle="black";
	context.fillRect(0,0,canvas.width,canvas.height);

	context.fillStyle="white";
	context.fillRect(xPos*tileSize,yPos*tileSize,10,10);

	context.fillStyle="red";
	context.fillRect(pX,pY,playerWidth,playerHeight);
	if(yPos>800/tileSize){
		yVel=-1;
	}
	if(yPos<0){
		yVel=1;
	}
	if(xPos<0)
	{
		xVel=1;
	}
	if(xPos >=1470/tileSize && yPos >= pY/tileSize && yPos <= (pY+playerHeight)/tileSize){
		xVel=-1;
		score++;
		if(playerHeight>=30){
			playerHeight = playerHeight -15;
		}
	}
	if(xPos >1500/tileSize){
		xPos = 250;
		yPos = 133;
		pX = 1480;
		playerHeight=400;
		pY = 600-playerHeight;
		score = 0; 
		alert('You Lose');
	}
	if(keyState[38]==true && pY >1){
		pY = pY-5;
	}
	if(keyState[40]==true && pY <799-playerHeight){
		pY = pY+5;
	}
}




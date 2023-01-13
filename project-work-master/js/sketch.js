let angle = 0;
let spotSize = [50, -10, -70, -90]; // an array
let i = 0; // a variable


function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	background('#1f001f');
}

function draw() {

noFill();
stroke(random(0, 100), 00, 200)
	translate(width/2, height/2);
	rotate(angle);
	circle(50, 50, 50); //first circle
	
	circle(250, 200, 20);		//third circle
	line (50, 100, 100, 6)		//first line
	translate(width/10, height/20);
	circle(20, 30, 50);				//2nd circle (x,y, size)
	
	line (80, 200, 100, 6)		//2nd line
	angle = angle + 1;

	//*** PINK CIRCLES ***//

	background(10, 6);
	stroke(random(50, 300), 0, 220)
	translate(width/140, height/30);
	rotate(angle);
	circle(spotSize[0], -50, 10, 5);		
	
	stroke(random(50, 300), 0, 220)
	translate(width/140, height/30);
	rotate(angle);
	circle(spotSize[1], -40, 10, 40);		

	stroke(random(50, 300), 0, 220)			
	translate(width/140, height/30);
	rotate(angle);
	circle(spotSize[2], -30, 10, 40);		

	//stroke(random(50, 300), 0, 220)			
	//translate(width/140, height/30);
	//rotate(angle);
	//circle(spotSize[3], -30, 10, 40);

	//***LEFT&RIGHT MOVEMENT OF PINK CIRCLES ***//

	if (keyIsPressed) {
		if (keyCode == RIGHT_ARROW) {
			spotSize[0] +=1; 
		}  else if (keyCode == LEFT_ARROW) {
			spotSize[0] -= 1;
		}
	   } 
	if (keyIsPressed) {
		if (keyCode == RIGHT_ARROW) {
			spotSize[1] +=1; 
		}  else if (keyCode == LEFT_ARROW) {
			spotSize[1] -= 1;
		}
	   }
	if (keyIsPressed) {
		if (keyCode == RIGHT_ARROW) {
			spotSize[2] +=1; 
		}  else if (keyCode == LEFT_ARROW) {
			spotSize[2] -= 1;
		}
	   }

	  // if (keyIsPressed) {
		//if (keyCode == UP_ARROW) {
		 //spotSize[i] = i + 1; 
		//}  else if (keyCode == DOWN_ARROW) {
		 //spotSize[i] = i - 1;
	   //}
	//} 
	 
	//*** LIMITS OF X COORDINATE ***//

	if(spotSize[0] < 0) {
	spotSize[0] =1;
	}
	if(spotSize[0] > 140) {
		spotSize[0] =140;
	}		
	
	if(spotSize[1] < 0) {
			spotSize[1] =1;
	}
	if(spotSize[1] > 140) {					
			spotSize[1] =140;
	}		
	if(spotSize[2] < 0) {
			spotSize[2] =1;
	}
	if(spotSize[2] > 120) {
		spotSize[2] =120;
	}
}
var stars = [];
var bgImg;
var stateVal = 0;
var alphaVal = 0;
const Y_AXIS = 1;
let cAlpha = 0;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  for (var i = 0  ;  i < 800  ;  i++) {
    stars[i] = new Star();
  }
} 



function preload() {
  bgImg = loadImage("https://i.imgur.com/OcIs6Rw.jpg");
}

function draw() { 
  //background(21, 26, 59);
  background (bgImg);

  for (var i = 0  ;  i < stars.length  ;  i++) {
    stars[i].move();
    stars[i].display();
  }
  fill(21, 26, 59);
  drawGradient(width/2, windowHeight, width, 450);
  //rect(0, windowHeight-100, width, windowHeight);
  fill(360);

  if (stateVal == 3) {
		if(cAlpha < .97) {
			cAlpha += .005;
		}
		let c1String = 'rgba(0,0,0,' + cAlpha + ')';
		let c2String = 'rgba(104, 65, 10,' + cAlpha + ')';
		let c1 = color(c1String);
		let c2 = color(c2String);//255, 178, 102
    setGradient(0, 0, windowWidth, windowHeight, c1, c2, Y_AXIS);
    // if(sound3Vol < 1) {
    //   sound3Vol += .1;
    //   sound3.setVolume(sound3Vol)
    // }
    // if(sound0Vol > 0) {
    //   sound0Vol -= .1;
    //   sound0.setVolume(sound0Vol);
    //}
  } 

  if (stateVal == 2) {
		if(cAlpha < .63) {
			cAlpha += .005;
		} else if (cAlpha > .66) {
      cAlpha -= .005;
    }
		let c1String = 'rgba(0,0,0,' + cAlpha + ')';
		let c2String = 'rgba(104, 65, 10,' + cAlpha + ')';
		let c1 = color(c1String);
		let c2 = color(c2String);
    setGradient(0, 0, windowWidth, windowHeight, c1, c2, Y_AXIS);
    
    // if(sound3Vol > .6) {
    //   sound3Vol -= .1;
    //   sound3.setVolume(sound3Vol)
    // } else if (sound3Vol < .6) {
    //   sound3Vol += .1;
    //   sound3.setVolume(sound3Vol)
    // }
    // if(sound0Vol > 0) {
    //   sound0Vol -= .1;
    //   sound0.setVolume(sound0Vol);
    //}
  } 
  
  if (stateVal == 1) {
		if(cAlpha < .33) {
			cAlpha += .005;
		} else if (cAlpha > .36) {
      cAlpha -= .005;
    }
		let c1String = 'rgba(0,0,0,' + cAlpha + ')';
		let c2String = 'rgba(104, 65, 10,' + cAlpha + ')';
		let c1 = color(c1String);
		let c2 = color(c2String);
    setGradient(0, 0, windowWidth, windowHeight, c1, c2, Y_AXIS);
    
    // if(sound3Vol > .3) {
    //   sound3Vol -= .1;
    //   sound3.setVolume(sound3Vol)
    // } else if (sound3Vol < .3) {
    //   sound3Vol += .1;
    //   sound3.setVolume(sound3Vol)
    // }
    // if(sound0Vol > 0) {
    //   sound0Vol -= .1;
    //   sound0.setVolume(sound0Vol);
    //}
	} 

	if (stateVal == 0) {
		if(cAlpha > .01) {
      if(cAlpha < .009){
        cAlpha = .009;
      }else {
        cAlpha -= .009;
      }
		}
		let c1String = 'rgba(0,0,0,' + cAlpha + ')';
		let c2String = 'rgba(104, 65, 10,' + cAlpha + ')';
		let c1 = color(c1String);
		let c2 = color(c2String);
    setGradient(0, 0, windowWidth, windowHeight, c1, c2, Y_AXIS);
    // if(sound3Vol > .1) {
    //   sound3Vol -= .1;
    //   sound3.setVolume(sound3Vol)
    // }
    // if(sound0Vol < .6) {
    //   sound0Vol += .1;
    //   sound0.setVolume(sound0Vol);
    // }
  }
}

function Star() {
  this.centerX = width / 2;
  this.centerY = windowHeight;
  this.orbitRadius = random(20, width);
	this.angle = random(-3,0);
  this.speed = random (-0.00022, -0.0000);
  this.size = random(1.5, 2.3);
  this.move = function () {
    this.angle = this.angle + this.speed;
    if(this.angle < -3.25) {
        this.angle = 0;
    }
  }
  
  this.display = function () {
    var x = this.centerX + cos(this.angle) * this.orbitRadius;
    var y = this.centerY + sin(this.angle) * this.orbitRadius;
    noStroke();
    ellipse (x, y, this.size, this.size);
  }
}

function drawGradient(x, y, r, l) {
  let radius = width
  fill(21, 26, 59);
  ellipse(x, y, r, l);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis === Y_AXIS) {
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter-.1);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
}
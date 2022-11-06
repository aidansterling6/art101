function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
}

//the path does not always go to the right

//wasd or arrow keys to move, R to reset to last check point, down stops bouncing on blocks

//true to use brick texture, false to not use it
var Brick = true;
//creats array of keys
var keys = [];
var keyPressed = function(){

    keys[keyCode] = true;

};
var keyReleased = function(){

    keys[keyCode] = false;

};
//find intersection between two lines
var lineS = function(x1,y1,x2,y2,x3,y3,x4,y4){
var ua = ((x4 - x3)*(y1 - y3) - (y4 - y3)*(x1 - x3))/((y4 - y3)*(x2 - x1) - (x4 - x3)*(y2 - y1));
var x = x1 + ua*(x2-x1);
var y = y1 + ua*(y2-y1);
if(!x || !y){
    x = 0;
    y = 0;
}
return {x:x,y:y,t:((dist(x1,y1,x,y) + dist(x,y,x2,y2)) - dist(x1,y1,x2,y2)) < 0.5 && ((dist(x3,y3,x,y) + dist(x,y,x4,y4)) - dist(x3,y3,x4,y4)) < 0.5};
};
//changes positive and negative numbers to 1 and -1
var sgn = function(num){
if(num < 0){
    return -1;
}
return 1;
};
//bounce friction for balls and blocks
var BLoss = 0.9;
var BLoss2 = 0.5;
//air resistance
var fairLoss = 0.99;
var airLoss = fairLoss;
var WallS = 0.7;
//camera position
var camX = 0;
var camY = 175;
//amount of time after collision were you can still jump
var jumpLim = 5;
var jumpt = 5;
//if you are touching an object
var Jump = false;
var JumpD = 0;
//calculates speed after collision
var Ball = function(x1,y1,sx1,sy1,s1,x2,y2,sx2,sy2,s2/*,m1,m2,type*/){
var m1 = 1;
var m2 = 1;
var type = "bounce";
var Dist = dist(x1,y1,x2,y2);
var out = {x1:0,y1:0,x2:0,y2:0};
if(Dist !== 0){
var x3 = x1 + (x2 - x1)/Dist*50/2;
var y3 = y1 + (y2 - y1)/Dist*50/2;
var xy = lineS((x2 + sx2) - (y2 - y1)/Dist*100,(y2 + sy2) + (x2 - x1)/Dist*100,(x2 + sx2) + (y2 - y1)/Dist*100,(y2 + sy2) - (x2 - x1)/Dist*100,x1,y1,x2,y2);
var xy2 = lineS((x1 + sx1) - (y2 - y1)/Dist*100,(y1 + sy1) + (x2 - x1)/Dist*100,(x1 + sx1) + (y2 - y1)/Dist*100,(y1 + sy1) - (x2 - x1)/Dist*100,x1,y1,x2,y2);

var sv1 = {x:xy.x - x2,y:xy.y - y2};
var sh1 = {x:(x2 + sx2) - xy.x,y:(y2 + sy2) - xy.y};

var sv2 = {x:xy2.x - x1,y:xy2.y - y1};
var sh2 = {x:(x1 + sx1) - xy2.x,y:(y1 + sy1) - xy2.y};

out = {nax1:sv1.x,nay1:sv1.y,pax1:sh2.x,pay1:sh2.y,nax2:sv2.x,nay2:sv2.y,pax2:sh1.x,pay2:sh1.y};
}
return out;
};
//array of balls
var ball = [];
//array of blocks
var block = [];
//creats brick texture
var brick = function(x,y,w,h){
     noFill();
    noStroke();
    var H = 10;
    var W = 20;
    fill(148, 148, 148);
    rect(x,y,w + 1,h);
    fill(107, 107, 107);
    stroke(82, 82, 82);
    var sx = x;
    var ex = x;
    var sy = y;
    var ey = y;
    var X = camX - 200;
    var Y = camY - 200;
    if(sx - X < -20){
        sx = -20 + X;
    }
    if(ex - X < 420){
        ex = 420 + X;
    }
    if(sy - Y < -20){
        sy = -20 + Y;
    }
    if(ey - Y < 420){
        ey = 420 + Y;
    }
    for(var y1 = 0; y1 < h;y1 += H){
        if(y + y1 >= sy && y + y1 <= ey){
        line(x,y + y1,x + w,y + y1);
        }
    }
    for(var y1 = 0; y1 < h;y1 += H){
        var x2 = 0;
        if(y1/H/2 === round(y1/H/2)){
            x2 = W/2;
        }
        for(var x1 = x; x1 < x + w;x1 += W){
            if(x1 + x2 >= sx && x1 + x2 <= ex){
                if(y + y1 >= sy && y + y1 <= ey){
                    if(x1 + x2 < x + w){
                        var b = y + y1 + H;
                        if(b > y + h){
                            b = y + h;
                        }
            line(x1 + x2,y + y1 + 1,x1 + x2,b);
                    }
                }
            }
        }
    }
};
//draws blocks
var blocks = function(){
for(var i = 0; i < block.length;i++){
    fill(0, 0, 0);
    stroke(0, 0, 0);
    //text(i,block[i].x,block[i].y);
    if(Brick){
    brick(block[i].x,block[i].y,block[i].w,block[i].h);
    }
    else{
        rect(block[i].x,block[i].y,block[i].w,block[i].h);
    }
}
};
//current checkpoint
var check = 0;
//array of checkpoints
var checkPoint = [];
//current level
var currentLevel = -1;
//number of levels - 1
var lastLevel = 2;
//draws and controls balls, made before contest
var balls = function(){
for(var i = 0; i < ball.length;i++){
    //move
    ball[i].x += ball[i].ax;
    ball[i].y += ball[i].ay;
    //add air resistance
    ball[i].ax *= airLoss;
    ball[i].ay *= airLoss;
    //gravity
    ball[i].ay += 0.3;
    var bb = false;
    //block collisions
    for(var o = 0; o < block.length;o++){
        if(ball[i].x >= block[o].x && ball[i].x <= block[o].x + block[o].w && ball[i].y > block[o].y - ball[i].s/2 && ball[i].y < block[o].y + block[o].h/2){
            ball[i].y = block[o].y - ball[i].s/2;
        ball[i].ay = -BLoss2*abs(ball[i].ay);
        if(i === 0){
        Jump = true;
        jumpt = 0;
        bb = true;
        }
        ball[i].ax *= BLoss2;
        }
        else if(ball[i].x >= block[o].x && ball[i].x <= block[o].x + block[o].w && ball[i].y < block[o].y + block[o].h + ball[i].s/2 && ball[i].y > block[o].y + block[o].h/2){
            ball[i].y = block[o].y + block[o].h + ball[i].s/2;
        ball[i].ay = BLoss2*abs(ball[i].ay);
        ball[i].ax *= BLoss2;
        }
        else if(ball[i].y >= block[o].y && ball[i].y <= block[o].y + block[o].h && ball[i].x > block[o].x - ball[i].s/2 && ball[i].x < block[o].x + block[o].w/2){
            ball[i].x = block[o].x - ball[i].s/2;
        ball[i].ax = -BLoss2*abs(ball[i].ax);
        ball[i].ay *= WallS;
        }
        else if(ball[i].y >= block[o].y && ball[i].y <= block[o].y + block[o].h && ball[i].x < block[o].x + block[o].w + ball[i].s/2 && ball[i].x > block[o].x + block[o].w/2){
            ball[i].x = block[o].x + block[o].w + ball[i].s/2;
        ball[i].ax = BLoss2*abs(ball[i].ax);
        ball[i].ay *= WallS;
        }
        else{
        if(dist(ball[i].x,ball[i].y,block[o].x,block[o].y) < ball[i].s/2){
            if(i === 0){
            Jump = true;
jumpt = 0;
bb = true;
            }
            for(var t = 0; t < ball[i].s/2;t++){
                if(dist(ball[i].x,ball[i].y,block[o].x,block[o].y) < ball[i].s/2){
                    ball[i].x += (ball[i].x - block[o].x)/dist(ball[i].x,ball[i].y,block[o].x,block[o].y);
                    ball[i].y += (ball[i].y - block[o].y)/dist(ball[i].x,ball[i].y,block[o].x,block[o].y);
                }
            }
            var temp = Ball(ball[i].x,ball[i].y,ball[i].ax,ball[i].ay,ball[i].s,block[o].x,block[o].y,-ball[i].ax,-ball[i].ay,10);
            ball[i].ax = BLoss2*(temp.nax1 + temp.pax1);
            ball[i].ay = BLoss2*(temp.nay1 + temp.pay1);
        }
        if(dist(ball[i].x,ball[i].y,block[o].x + block[o].w,block[o].y) < ball[i].s/2){
            if(i === 0){
            Jump = true;
jumpt = 0;
bb = true;
            }
            for(var t = 0; t < ball[i].s/2;t++){
                if(dist(ball[i].x,ball[i].y,(block[o].x + block[o].w),block[o].y) < ball[i].s/2){
                    ball[i].x += (ball[i].x - (block[o].x + block[o].w))/dist(ball[i].x,ball[i].y,(block[o].x + block[o].w),block[o].y);
                    ball[i].y += (ball[i].y - block[o].y)/dist(ball[i].x,ball[i].y,(block[o].x + block[o].w),block[o].y);
                }
            }
            var temp = Ball(ball[i].x,ball[i].y,ball[i].ax,ball[i].ay,ball[i].s,block[o].x + block[o].w,block[o].y,-ball[i].ax,-ball[i].ay,10);
            ball[i].ax = BLoss2*(temp.nax1 + temp.pax1);
            ball[i].ay = BLoss2*(temp.nay1 + temp.pay1);
        }
        if(dist(ball[i].x,ball[i].y,block[o].x,block[o].y + block[o].h) < ball[i].s/2){
            for(var t = 0; t < ball[i].s/2;t++){
                if(dist(ball[i].x,ball[i].y,(block[o].x),block[o].y + block[o].h) < ball[i].s/2){
                    ball[i].x += (ball[i].x - (block[o].x))/dist(ball[i].x,ball[i].y,(block[o].x),block[o].y + block[o].h);
                    ball[i].y += (ball[i].y - (block[o].y + block[o].h))/dist(ball[i].x,ball[i].y,(block[o].x),block[o].y + block[o].h);
                }
            }
            var temp = Ball(ball[i].x,ball[i].y,ball[i].ax,ball[i].ay,ball[i].s,block[o].x,block[o].y + block[o].h,-ball[i].ax,-ball[i].ay,10);
            ball[i].ax = BLoss2*(temp.nax1 + temp.pax1);
            ball[i].ay = BLoss2*(temp.nay1 + temp.pay1);
        }
        if(dist(ball[i].x,ball[i].y,block[o].x + block[o].w,block[o].y + block[o].h) < ball[i].s/2){
            for(var t = 0; t < ball[i].s/2;t++){
                if(dist(ball[i].x,ball[i].y,(block[o].x + block[o].w),block[o].y + block[o].h) < ball[i].s/2){
                    ball[i].x += (ball[i].x - (block[o].x + block[o].w))/dist(ball[i].x,ball[i].y,(block[o].x + block[o].w),block[o].y + block[o].h);
                    ball[i].y += (ball[i].y - (block[o].y + block[o].h))/dist(ball[i].x,ball[i].y,(block[o].x + block[o].w),block[o].y + block[o].h);
                }
            }
            var temp = Ball(ball[i].x,ball[i].y,ball[i].ax,ball[i].ay,ball[i].s,block[o].x + block[o].w,block[o].y + block[o].h,-ball[i].ax,-ball[i].ay,10);
            ball[i].ax = BLoss2*(temp.nax1 + temp.pax1);
            ball[i].ay = BLoss2*(temp.nay1 + temp.pay1);
        }
        }
    }
    //ball collisions
    for(var o = 0; o < ball.length;o++){
        if(i !== o){
            if(dist(ball[i].x,ball[i].y,ball[o].x,ball[o].y) < (ball[i].s + ball[o].s)/2){
                if(i === 0){
                Jump = true;
jumpt = 0;
                }
                for(var t = 0; t < (ball[i].s + ball[o].s)/2;t++){
                    if(dist(ball[i].x,ball[i].y,ball[o].x,ball[o].y) <= (ball[i].s + ball[o].s)/2){
                ball[i].x += (ball[i].x - ball[o].x)/dist(ball[i].x,ball[i].y,ball[o].x,ball[o].y);
                ball[i].y += (ball[i].y - ball[o].y)/dist(ball[i].x,ball[i].y,ball[o].x,ball[o].y);
            }
                }
                var New = Ball(ball[i].x,ball[i].y,ball[i].ax,ball[i].ay,ball[i].s,ball[o].x,ball[o].y,ball[o].ax,ball[o].ay,ball[o].s);
                if(ball[i].x !== ball[o].x){
                ball[i].ax = BLoss*(New.nax1 + New.pax1);
                ball[i].ay = BLoss*(New.nay1 + New.pay1);
                ball[o].ax = BLoss*(New.nax2 + New.pax2);
                ball[o].ay = BLoss*(New.nay2 + New.pay2);
                }
                else{
                    ball[i].ay = -BLoss*ball[i].ay/2;
                    ball[o].ay = -BLoss*ball[o].ay/2;
                }
            }
        }
    }
    if(i === 0 && bb && currentLevel >= 0 && (keys[83] || keys[40]) && keyIsPressed){
    ball[i].ax *= 0.5;
    ball[i].ay *= 0.5;
}
    //draw balls
    fill(255, 0, 0);
    stroke(0, 0, 0);
    if(i === 0){
    fill(168, 168, 168);
    stroke(0, 0, 0);
    }
    ellipse(ball[i].x,ball[i].y,ball[i].s,ball[i].s);
}
};
//returns data for all levels
var levelData = function(i){
    var out = {level:800,balls:[],
blocks:[],
checkPoints:[]};
//level 1
        if(i === 0){
            out = {level:800,balls:[{x:56,y:2200,ax:0,ay:0,s:50},{x:131,y:200,ax:0,ay:0,s:50},{x:131,y:124,ax:0,ay:0,s:50},{x:131,y:54,ax:0,ay:0,s:50},{x:200,y:519,ax:0,ay:0,s:50},{x:200,y:466,ax:0,ay:0,s:50}],
blocks:[{x:-100,y:300,w:300,h:30},{x:-100,y:0,w:30,h:300},{x:200,y:300,w:30,h:100},{x:200,y:400,w:300,h:30},{x:600,y:300,w:30,h:300},{x:200,y:600,w:300,h:10000},{x:-300,y:520,w:50,h:118},{x:-300,y:600,w:300,h:10000},{x:-1385,y:0,w:300,h:10000},{x:-1462,y:0,w:20,h:10000},{x:-1538,y:0,w:20,h:10000},{x:-1616,y:0,w:20,h:10000},{x:-1781,y:0,w:93,h:10000},{x:-1935,y:0,w:20,h:10000},{x:-2154,y:0,w:93,h:10000},{x:-2420,y:-210,w:90,h:10000},{x:-2330,y:-40,w:60,h:10000},{x:-2330,y:-120,w:39,h:10},{x:-2340,y:-210,w:30,h:10},{x:-2480,y:-210,w:60,h:10},{x:-2566,y:-282,w:10,h:10},{x:-2657,y:-320,w:10,h:10},{x:-2752,y:-283,w:10,h:10},{x:-2891,y:-321,w:10,h:10},{x:-3152,y:-321,w:167,h:30}],
checkPoints:[{x:0,y:220},{x:369,y:525},{x:-165,y:525},{x:-1210,y:-75},{x:-1734,y:-75},{x:-2106,y:-75},{x:-2364,y:-285},{x:-3052,y:-396}]};
        }
//level 2
        if(i === 1){
            out = {level:1500,balls:[{x:0,y:252,ax:0,ay:0,s:50},{x:210,y:180,ax:0,ay:0,s:20},{x:140,y:105,ax:0,ay:0,s:20},{x:210,y:0,ax:0,ay:0,s:20},{x:565 + 200,y:1030,ax:0,ay:0,s:20}],
blocks:[{x:-100,y:300,w:230,h:1000},{x:200,y:212,w:20,h:20},{x:130,y:124,w:20,h:20},{x:200,y:36,w:20,h:20},{x:270,y:-50,w:200 + 200,h:40},{x:555 + 200,y:-180,w:20,h:340},{x:450 + 200,y:164,w:20,h:340},{x:555 + 200,y:512,w:20,h:340},{x:555 + 200,y:512,w:20,h:340},{x:555 + 200,y:952,w:20,h:20},{x:555 + 200,y:1052,w:20,h:20},{x:555 + 200,y:1152,w:20,h:20}],
checkPoints:[{x:0,y:220},{x:372,y:-123},{x:622 + 200,y:1126}]};
        }
//level 3
        if(i === 2){
            out = {level:500,balls:[{x:0,y:252,ax:0,ay:0,s:50},{x:210,y:180,ax:0,ay:0,s:20},{x:140,y:105,ax:0,ay:0,s:20},{x:210,y:0,ax:0,ay:0,s:20},{x:300,y:-65,ax:0,ay:0,s:20},{x:300 + 90,y:-140,ax:0,ay:0,s:20},{x:300 + 180,y:-175,ax:0,ay:0,s:20},{x:300 + 180 + 90,y:-210,ax:0,ay:0,s:20},{x:300 + 180 + 180,y:-285,ax:0,ay:0,s:20},{x:300 + 180 + 90,y:-375,ax:0,ay:0,s:20},{x:300 + 180 + 180,y:-465,ax:0,ay:0,s:20}],
blocks:[{x:-100,y:300,w:230,h:1000},{x:200,y:212,w:20,h:20},{x:130,y:124,w:20,h:20},{x:200,y:36,w:20,h:20},{x:290,y:-52,w:20,h:20},{x:290 + 90,y:-129,w:20,h:20},{x:290 + 180,y:-165,w:20,h:20},{x:290 + 180 + 90,y:-202,w:20,h:20},{x:290 + 180 + 180,y:-278,w:20,h:20},{x:290 + 180 + 90,y:-365,w:20,h:20},{x:290 + 180 + 180,y:-455,w:20,h:20},{x:390 + 180 + 180,y:-455,w:200,h:20}],
checkPoints:[{x:0,y:220},{x:844,y:-530}]};
        }
    return out;
    };
//sets level to input, -1 is main menu, -2 is settings menu, -3 is level menu
var level = function(num){
    ellipse(0,0,10,10);
    currentLevel = num;
//if num refers to level, go to that level
if(num >= 0){
ball = levelData(num).balls;
block = levelData(num).blocks;
checkPoint = levelData(num).checkPoints;
}
//create staircase the avalance of balls goes down in level 1
if(currentLevel === 0){
    for(var s = 0; s < 25;s++){
    block.push({x:-485 - (s*25),y:720 - (s*30),w:25,h:10000});
}
}
//create balls in main menu
if(num === -1){
    ball = [{x:0,y:220,ax:0,ay:0,s:50},{x:2,y:-79,ax:0,ay:0,s:50},{x:1,y:150,ax:0,ay:0,s:74},{x:-29,y:79,ax:0,ay:0,s:65},{x:66,y:87,ax:0,ay:0,s:50},{x:30,y:23,ax:0,ay:0,s:25}];
    block = [{x:-200,y:300,w:400,h:30}];
    checkPoint = [];
}
//create balls in settings menu
if(num === -2){
    ball = [{x:0,y:220,ax:0,ay:0,s:50},{x:-11,y:133,ax:0,ay:0,s:60},{x:22,y:177,ax:0,ay:0,s:42},{x:22,y:52,ax:0,ay:0,s:51},{x:-47,y:52,ax:0,ay:0,s:77}];
    block = [{x:-124,y:300,w:250,h:30}];
    checkPoint = [];
}
//create balls in level menu
if(num === -3){
    ball = [{x:-57,y:220,ax:0,ay:0,s:50},{x:-5,y:215,ax:0,ay:0,s:30},{x:30,y:205,ax:0,ay:0,s:30},{x:65,y:190,ax:0,ay:0,s:30}];
    block = [{x:-124,y:300,w:250,h:30}];
    checkPoint = [];
}
};
//controls checkpoints and resets player to them
var checkPoints = function (){
    if(checkPoint.length > 0 && currentLevel >= 0){
//if player fell or R key pressed, reset to last checkpoint
if(ball[0].y > levelData(currentLevel).level || (keys[82] && keyIsPressed)){
        level(currentLevel);
        ball[0].x = checkPoint[check].x;
        ball[0].y = checkPoint[check].y;
    }
//draw checkpoints and set check(current checkpoint) to checkpoints the player walks through
for(var i = 0; i < checkPoint.length;i++){
    fill(0, 255, 0);
    ellipse(checkPoint[i].x,checkPoint[i].y,50,50);
    if(check === i){
    fill(0, 145, 0);
    }
    else{
        fill(255, 255, 255);
    }
    ellipse(checkPoint[i].x,checkPoint[i].y,20,20);
    if(dist(ball[0].x,ball[0].y,checkPoint[i].x,checkPoint[i].y) < 50){
        check = i;
        if(i === checkPoint.length - 1 && currentLevel < lastLevel){
            level(currentLevel + 1);
        }
        else if(i === checkPoint.length - 1 && currentLevel >= lastLevel){
            level(-1);
        }
    }
}
}
};
var start = true;
//draw loop
draw = function() {
  if(!focused){
    background(150, 150, 150);
    fill(0, 0, 0);
    noStroke();
    textSize(30);
    text("Click to start", 200, 200);
  }
  if(focused){
  if(start){
    //set level to current level
    level(currentLevel);
    start = false;
  }
  //time after collisions were you can jump
  jumpt++;
  if(jumpt > jumpLim){
      Jump = false;
  }

      JumpD = 0;
      //spawns avalanch of balls in first level, made before contest
      if(currentLevel === 0){

      if(ball.length < 80/*number of max balls for first level*/){
          ball.push({x:-1019 + random(0,50),y:540 - (25*25),ax:random(0,10),ay:10,s:15});
      }
      for(var i = 0; i < ball.length;i++){
          if(i !== 0){
              if(ball[i].y > 800){
                  ball.splice(i,1);
              }
          }
      }
      }
      //set background to blue
      background(79, 161, 255);
      fill(0, 0, 0);
      //move camera twords player, made before contest
      camX += (ball[0].x - camX)/dist(ball[0].x,ball[0].y,camX,camY)*1/(10/dist(ball[0].x,ball[0].y,camX,camY));
      camY += (ball[0].y - camY)/dist(ball[0].x,ball[0].y,camX,camY)*1/(10/dist(ball[0].x,ball[0].y,camX,camY));
      //translate screen to camera
      translate(-camX + 200,-camY + 200);
      //call checkpoint function
      checkPoints();
      //call ball function
      balls();
      //call block function
      blocks();
      //movement for player, made before contest
      if(currentLevel >= 0){
      if(keyIsPressed && keys[68] && ball[0].ax < 3){
          ball[0].ax += 0.5;
      }
      if(keyIsPressed && keys[39] && ball[0].ax < 3){
          ball[0].ax += 0.5;
      }
      if(keyIsPressed && keys[65] && ball[0].ax > -3){
          ball[0].ax -= 0.5;
      }
      if(keyIsPressed && keys[37] && ball[0].ax > -3){
          ball[0].ax -= 0.5;
      }
      if(keyIsPressed && keys[87] && Jump){
          ball[0].ay = -8;
          ball[0].ax = JumpD;
          jumpt = 2*jumpLim;
      }
      if(keyIsPressed && keys[38] && Jump){
          ball[0].ay = -8;
          ball[0].ax = JumpD;
          jumpt = 2*jumpLim;
      }
      if(keyIsPressed && keys[32] && Jump){
          ball[0].ay = -8;
          ball[0].ax = JumpD;
          jumpt = 2*jumpLim;
      }
      }
      //reset translation
      translate(camX - 200,camY - 200);
      stroke(0, 0, 0);
      //main menu
      if(currentLevel === -1){
          fill(4, 255, 0);
          if(dist(mouseX,mouseY,ball[0].x + 200 - camX,ball[0].y + 200 - camY) < 25){
              fill(6, 194, 0);
          }
          ellipse(ball[0].x + 200 - camX,ball[0].y + 200 - camY,50,50);
          fill(0, 0, 0);
          textAlign(CENTER,CENTER);
          textSize(17);
          text("PLAY",ball[0].x + 200 - camX,ball[0].y + 200 - camY);
          if(mouseIsPressed && dist(mouseX,mouseY,ball[0].x + 200 - camX,ball[0].y + 200 - camY) < 25){
              level(0);
              check = 0;
          }

          fill(219, 219, 219);
          if(dist(mouseX,mouseY,ball[2].x + 200 - camX,ball[2].y + 200 - camY) < 74/2){
              fill(158, 158, 158);
          }
          ellipse(ball[2].x + 200 - camX,ball[2].y + 200 - camY,74,74);
          fill(0, 0, 0);
          textAlign(CENTER,CENTER);
          textSize(14);
          text("SETTINGS",ball[2].x + 200 - camX,ball[2].y + 200 - camY);
          if(mouseIsPressed && dist(mouseX,mouseY,ball[2].x + 200 - camX,ball[2].y + 200 - camY) < 25){
              currentLevel = -2;
              level(-2);
          }

          fill(219, 219, 219);
          if(dist(mouseX,mouseY,ball[1].x + 200 - camX,ball[1].y + 200 - camY) < 25){
              fill(158, 158, 158);
          }
          ellipse(ball[1].x + 200 - camX,ball[1].y + 200 - camY,50,50);
          fill(0, 0, 0);
          textAlign(CENTER,CENTER);
          textSize(12);
          text("LEVELS",ball[1].x + 200 - camX,ball[1].y + 200 - camY);
          if(mouseIsPressed && dist(mouseX,mouseY,ball[1].x + 200 - camX,ball[1].y + 200 - camY) < 25){
              currentLevel = -3;
              level(-3);
          }
      }
      //settings menu
      if(currentLevel === -2){
          fill(219, 219, 219);
          if(!Brick){
              fill(133, 133, 133);
          }
          if(Brick && dist(mouseX,mouseY,ball[0].x + 200 - camX,ball[0].y + 200 - camY) < 25){
              fill(158, 158, 158);
          }
          ellipse(ball[0].x + 200 - camX,ball[0].y + 200 - camY,50,50);
          fill(0, 0, 0);
          textAlign(CENTER,CENTER);
          textSize(11);
          text("low\ngraphics",ball[0].x + 200 - camX,ball[0].y + 200 - camY - 3);
          if(mouseIsPressed && dist(mouseX,mouseY,ball[0].x + 200 - camX,ball[0].y + 200 - camY) < 25){
              Brick = false;
          }

          fill(219, 219, 219);
          if(Brick){
              fill(133, 133, 133);
          }
          if(Brick === false && dist(mouseX,mouseY,ball[1].x + 200 - camX,ball[1].y + 200 - camY) < 60/2){
              fill(158, 158, 158);
          }
          ellipse(ball[1].x + 200 - camX,ball[1].y + 200 - camY,60,60);
          fill(0, 0, 0);
          textAlign(CENTER,CENTER);
          textSize(14);
          text("high\ngraphics",ball[1].x + 200 - camX,ball[1].y + 200 - camY - 5);
          if(mouseIsPressed && dist(mouseX,mouseY,ball[1].x + 200 - camX,ball[1].y + 200 - camY) < 25){
              Brick = true;
          }

          fill(219, 219, 219);
          if(dist(mouseX,mouseY,ball[3].x + 200 - camX,ball[3].y + 200 - camY) < 25){
              fill(158, 158, 158);
          }
          ellipse(ball[3].x + 200 - camX,ball[3].y + 200 - camY,50,50);
          fill(0, 0, 0);
          textAlign(CENTER,CENTER);
          textSize(12);
          text("Back",ball[3].x + 200 - camX,ball[3].y + 200 - camY);
          if(mouseIsPressed && dist(mouseX,mouseY,ball[3].x + 200 - camX,ball[3].y + 200 - camY) < 25){
              currentLevel = -1;
              level(-1);
          }
      }
      //level menu
      if(currentLevel === -3){
          fill(219, 219, 219);
          if(dist(mouseX,mouseY,ball[0].x + 200 - camX,ball[0].y + 200 - camY) < 25){
              fill(158, 158, 158);
          }
          ellipse(ball[0].x + 200 - camX,ball[0].y + 200 - camY,50,50);
          fill(0, 0, 0);
          textAlign(CENTER,CENTER);
          textSize(14);
          text("Back",ball[0].x + 200 - camX,ball[0].y + 200 - camY);
          if(mouseIsPressed && dist(mouseX,mouseY,ball[0].x + 200 - camX,ball[0].y + 200 - camY) < 25){
              currentLevel = -1;
              level(-1);
          }
          //generate level buttons
          for(var n = 1; n <= 3;n++){
          fill(219, 219, 219);
          //change color on hover
          if(dist(mouseX,mouseY,ball[n].x + 200 - camX,ball[n].y + 200 - camY) < 15){
              fill(158, 158, 158);
          }
          //draw botton
          ellipse(ball[n].x + 200 - camX,ball[n].y + 200 - camY,30,30);
          fill(0, 0, 0);
          textAlign(CENTER,CENTER);
          textSize(14);
          text(n,ball[n].x + 200 - camX,ball[n].y + 200 - camY);
          //go to level when clicked
          if(mouseIsPressed && dist(mouseX,mouseY,ball[n].x + 200 - camX,ball[n].y + 200 - camY) < 15){
              currentLevel = n-1;
              level(n-1);
              check = 0;
          }
          }




      }
      //home button in levels
      if(currentLevel >= 0){
          fill(255, 255, 255);
          //change fill color on hover
          if(dist(mouseX,mouseY,370,30) < 15){
              fill(150, 150, 150);
          }
          //draw button
          ellipse(370,30,30,30);
          fill(0, 0, 0);
          rect(362,27,15,10);
          triangle(362,27,370,21,378,27);
          //go to main menu when clicked
          if(mouseIsPressed && dist(mouseX,mouseY,370,30) < 15){
              level(-1);
          }
      }
  }
};

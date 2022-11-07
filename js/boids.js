function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  for (let element of document.getElementsByClassName("p5Canvas")) {
    element.addEventListener("contextmenu", (e) => e.preventDefault());
  }
}

var Width = 600;
var Height = 600;
var Scale = 400/600;
var boidCount = 350;
var mouseDist = 100;
var mouseForce = 0.3;
var border = 7;
var borderForce = 0.1;
var speedDrag = 0.1;
var alignSpeedForce = 0.01;
var spacingForceTouch = 0.5;
var spacingForceMin = 0.1;
var spacingForceMax = 0.2;
var interactDist = 15;
var targetDistMax = 15;
var targetDistMin = 12;
var targetDistTouch = 7;
var gridSize = 20;
var boids = [];
for(var x = 0; x < Width;x += gridSize){
    boids.push([]);
}
for(var x = 0; x < boids.length;x++){
    for(var y = 0; y < Height;y += gridSize){
        boids[x].push([]);
    }
}
var boid = function(){
    for(var x = 0; x < boids.length;x++){
        for(var y = 0; y < boids[x].length;y++){
            for(var i = 0; i < boids[x][y].length;i++){
                noFill();
                var xp = round((boids[x][y][i].x - (gridSize*0.5))/(gridSize));
                var yp = round((boids[x][y][i].y - (gridSize*0.5))/(gridSize));
                if(xp < 0){
                    xp = 0;
                }
                if(xp >= boids.length){
                    xp = boids.length - 1;
                }
                if(yp < 0){
                    yp = 0;
                }
                if(yp >= boids[0].length){
                    yp = boids[0].length - 1;
                }
                if(x !== xp || y !== yp){
                    boids[xp][yp].push(boids[x][y][i]);
                    boids[x][y].splice(i, 1);
                    i--;
                }
            }
        }
    }
    stroke(0, 0, 0);
    for(var x = 0; x < boids.length;x++){
        for(var y = 0; y < boids[x].length;y++){
            for(var i = 0; i < boids[x][y].length;i++){
                fill(0, 0, 0);
                ellipse(boids[x][y][i].x, boids[x][y][i].y, 5, 5);
                line(boids[x][y][i].x, boids[x][y][i].y, boids[x][y][i].x + boids[x][y][i].sx*10, boids[x][y][i].y + boids[x][y][i].sy*10);
            }
        }
    }
    for(var x = 0; x < boids.length;x++){
        for(var y = 0; y < boids[x].length;y++){
            for(var i = 0; i < boids[x][y].length;i++){
                // fill(0, 0, 0);
                // if(i === 0){
                //     fill(255, 0, 0);
                // }
                // ellipse(boids[x][y][i].x, boids[x][y][i].y, 5, 5);
                // line(boids[x][y][i].x, boids[x][y][i].y, boids[x][y][i].x + boids[x][y][i].sx*10, boids[x][y][i].y + boids[x][y][i].sy*10);
                boids[x][y][i].x += boids[x][y][i].sx;
                boids[x][y][i].y += boids[x][y][i].sy;
                if(boids[x][y][i].x < border){
                    boids[x][y][i].sx += borderForce;
                }
                if(boids[x][y][i].x > Width - border){
                    boids[x][y][i].sx -= borderForce;
                }
                if(boids[x][y][i].y < border){
                    boids[x][y][i].sy += borderForce;
                }
                if(boids[x][y][i].y > Height - border){
                    boids[x][y][i].sy -= borderForce;
                }
                if(dist(0,0,boids[x][y][i].sx, boids[x][y][i].sy) > boids[x][y][i].speed){
                    boids[x][y][i].sx *= (1 - speedDrag);
                    boids[x][y][i].sy *= (1 - speedDrag);
                } else if(dist(0,0,boids[x][y][i].sx, boids[x][y][i].sy) < boids[x][y][i].speed){
                    boids[x][y][i].sx *= 1 + speedDrag;
                    boids[x][y][i].sy *= 1 + speedDrag;
                }
                if(dist(boids[x][y][i].x, boids[x][y][i].y, mouseX, mouseY) < 30){

                                    }
                for(var x1 = -1; x1 <= 1;x1++){
                    for(var y1 = -1; y1 <= 1;y1++){
                        if(x + x1 >= 0 && x + x1 < boids.length && y + y1 >= 0 && y + y1 < boids[x + x1].length){
                            for(var o = 0; o < boids[x + x1][y + y1].length;o++){
                                if(!(boids[x][y][i].sx === boids[x + x1][y + y1][o].sx && boids[x][y][i].sy === boids[x + x1][y + y1][o].sy) && dist(boids[x][y][i].x, boids[x][y][i].y, boids[x + x1][y + y1][o].x, boids[x + x1][y + y1][o].y) < interactDist){
                                    if(boids[x][y][i].sx > boids[x + x1][y + y1][o].sx){
                                        boids[x][y][i].sx -= alignSpeedForce;
                                        boids[x + x1][y + y1][o].sx += alignSpeedForce;
                                    } else if(boids[x][y][i].sx < boids[x + x1][y + y1][o].sx){
                                        boids[x][y][i].sx += alignSpeedForce;
                                        boids[x + x1][y + y1][o].sx -= alignSpeedForce;
                                    }
                                    if(boids[x][y][i].sy > boids[x + x1][y + y1][o].sy){
                                        boids[x][y][i].sy -= alignSpeedForce;
                                        boids[x + x1][y + y1][o].sy += alignSpeedForce;
                                    } else if(boids[x][y][i].sy < boids[x + x1][y + y1][o].sy){
                                        boids[x][y][i].sy += alignSpeedForce;
                                        boids[x + x1][y + y1][o].sy -= alignSpeedForce;
                                    }
                                    var d = dist(boids[x][y][i].x, boids[x][y][i].y, boids[x + x1][y + y1][o].x, boids[x + x1][y + y1][o].y);
                                    var d2 = dist(boids[x][y][i].sx, boids[x][y][i].sy, boids[x + x1][y + y1][o].sx, boids[x + x1][y + y1][o].sy);
                                    if(d < targetDistTouch){
                                        boids[x][y][i].sx += spacingForceTouch*(boids[x][y][i].x - boids[x + x1][y + y1][o].x)/d;
                                        boids[x][y][i].sy += spacingForceTouch*(boids[x][y][i].y - boids[x + x1][y + y1][o].y)/d;
                                    } else if(d < targetDistMin){
                                        boids[x][y][i].sx += spacingForceMin*(boids[x][y][i].x - boids[x + x1][y + y1][o].x)/d;
                                        boids[x][y][i].sy += spacingForceMin*(boids[x][y][i].y - boids[x + x1][y + y1][o].y)/d;
                                    }


                                }
                            }
                        }
                    }
                }
                var dm = dist(boids[x][y][i].x, boids[x][y][i].y, mouseX/Scale, mouseY/Scale);
                if(dm < mouseDist && mouseIsPressed && mouseButton === LEFT){
                    boids[x][y][i].sx -= mouseForce*(boids[x][y][i].x - mouseX/Scale)/dm;
                    boids[x][y][i].sy -= mouseForce*(boids[x][y][i].y - mouseY/Scale)/dm;
                } if(dm < mouseDist && mouseIsPressed && mouseButton === RIGHT){
                    boids[x][y][i].sx += mouseForce*(boids[x][y][i].x - mouseX/Scale)/dm;
                    boids[x][y][i].sy += mouseForce*(boids[x][y][i].y - mouseY/Scale)/dm;
                }



            }
        }
    }
};
var start = true;
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
      for(var i = 0; i < boidCount;i++){
        boids[0][0].push({x:random(border,Width - border), y:random(border,Height - border), sx:random(-1,1),sy:random(-1,1), speed:1.3});
      }
      start = false;
    }
    background(224, 224, 224);
    push();
    scale(Scale);
    boid();
    pop();
  }
};

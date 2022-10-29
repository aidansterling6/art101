
function setup() {
  createCanvas(400, 400);
	textAlign(CENTER, CENTER);
	angleMode(DEGREES);
}



//define variables
if(true){
    //coins
    var coins;
    //key press variable
    var keys = [];
var keyPressed = function(){

    keys[keyCode] = true;

};
var keyReleased = function(){

    keys[keyCode] = false;

};
    if(true){
        var sstime = 20;
        var sctime = sstime;
    var swiches = [];
    var smt = 20;
    var cmt = 0;
    var numlevels = 6;
    var alx = 0;
    var lx = 0;
    var tlx = 0;
    var donelevels = 1;
    //exit rotation
    var aaa;
    //x of player
    var X;
    //y of player
    var Y;
    //y speed of player
    var ay;
    //x speed of player
    var ax;
    //speed to keep up with moving platforms
    var bax = 0;
    //if the player is on the ground
    var og;
    //if the player is dead
    var dead;
    //start death weight
    var stime;
    //active death time to reset
    var dtime;
    //next level portal function
    var Ex;
    var Ey;
    //array of blocks
    var blocks;
    //array of monsters
    var mon;
    //coin array
    var coin;
    //level
    var LEVEL = 2;
    var menu = false;
    var levelselect = false;
    var pause = false;
    var levelcoins = [];
    for(var i = 0; i < numlevels;i++){
        levelcoins.push(0);
    }
    }
}

//define functions
if(true){

    //draw functions************************************************************

    //level function
    var level = function(l){
    if(l === -1){
        LEVEL = 0;
        menu = true;
        levelselect = false;
        pause = false;
        if(true){
    coins = 0;
    aaa = 0;
    //x of player
    X = 6;
    //y of player
    Y = 88;
    //y speed of player
    ay = 0;
    //x speed of player
    ax = 0;
    //if the player is on the ground
    og = false;
    //if the player is dead
    dead = false;
    //start death weight
    stime = 100;
    //active death time to reset
    dtime = stime;
    //swiches
    swiches = [];
    //array of blocks
    blocks = [{x:0,y:91,w:82,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:123,y:64,w:26,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:168,y:109,w:26,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:229,y:76,w:26,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:122,y:281,w:135,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:247,y:270,w:152,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:0,y:270,w:20,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:60,y:270,w:72,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:0,y:176,w:277,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:343,y:176,w:58,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:267,y:166,w:10,h:20,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:333,y:166,w:10,h:20,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:34,y:348,w:16,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:83,y:328,w:16,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:123,y:366,w:16,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:174,y:339,w:16,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:213,y:370,w:16,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:271,y:356,w:133,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123}];
    //array of monsters
    mon = [{x:171,y:277,ay:0,ax:1},{x:100,y:174,ay:0,ax:1},{x:7,y:174,ay:0,ax:1},{x:221,y:174,ay:0,ax:-1}];
    //array of coins
    coin = [{x:135,y:51,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:182,y:36,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:242,y:63,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:382,y:162,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:24,y:164,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:182,y:268,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:182,y:326,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:111,y:290,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:10,y:257,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:324,y:343,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0}];
    for(var i = 0; i < coin.length;i++){
        coin[i].xxx = coin[i].x;
        coin[i].yyy = coin[i].y;
    }
    Ex = 389;
    Ey = 343;
    }
    }
    if(l === 0){
        LEVEL = 1;
        menu = false;
        levelselect = true;
        pause = false;
        if(true){
    coins = 0;
    aaa = 0;
    //x of player
    X = 6;
    //y of player
    Y = 88;
    //y speed of player
    ay = 0;
    //x speed of player
    ax = 0;
    //if the player is on the ground
    og = false;
    //if the player is dead
    dead = false;
    //start death weight
    stime = 100;
    //active death time to reset
    dtime = stime;
    //swiches
    swiches = [];
    //array of blocks
    blocks = [{x:0,y:91,w:82,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:123,y:64,w:26,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:168,y:109,w:26,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:229,y:76,w:26,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:122,y:281,w:135,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:247,y:270,w:152,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:0,y:270,w:20,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:60,y:270,w:72,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:0,y:176,w:277,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:343,y:176,w:58,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:267,y:166,w:10,h:20,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:333,y:166,w:10,h:20,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:34,y:348,w:16,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:83,y:328,w:16,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:123,y:366,w:16,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:174,y:339,w:16,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:213,y:370,w:16,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:271,y:356,w:133,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123}];
    //array of monsters
    mon = [{x:171,y:277,ay:0,ax:1},{x:100,y:174,ay:0,ax:1},{x:7,y:174,ay:0,ax:1},{x:221,y:174,ay:0,ax:-1}];
    //array of coins
    coin = [{x:135,y:51,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:182,y:36,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:242,y:63,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:382,y:162,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:24,y:164,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:182,y:268,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:182,y:326,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:111,y:290,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:10,y:257,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:324,y:343,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0}];
    for(var i = 0; i < coin.length;i++){
        coin[i].xxx = coin[i].x;
        coin[i].yyy = coin[i].y;
    }
    Ex = 389;
    Ey = 343;
    }
    }
    if(l === 1){
        LEVEL = 2;
        menu = false;
        levelselect = false;
        pause = false;
        if(true){
    coins = 0;
    aaa = 0;
    //x of player
    X = 6;
    //y of player
    Y = 88;
    //y speed of player
    ay = 0;
    //x speed of player
    ax = 0;
    //if the player is on the ground
    og = false;
    //if the player is dead
    dead = false;
    //start death weight
    stime = 100;
    //active death time to reset
    dtime = stime;
    //swiches
    swiches = [];
    //array of blocks
    blocks = [{x:0,y:91,w:82,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:123,y:64,w:26,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:168,y:109,w:26,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:229,y:76,w:26,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:122,y:281,w:135,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:247,y:270,w:152,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:0,y:270,w:20,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:60,y:270,w:72,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:0,y:176,w:277,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:343,y:176,w:58,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:267,y:166,w:10,h:20,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:333,y:166,w:10,h:20,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:34,y:348,w:16,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:83,y:328,w:16,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:123,y:366,w:16,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:174,y:339,w:16,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:213,y:370,w:16,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:271,y:356,w:133,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123}];
    //array of monsters
    mon = [{x:171,y:277,ay:0,ax:1},{x:100,y:174,ay:0,ax:1},{x:7,y:174,ay:0,ax:1},{x:221,y:174,ay:0,ax:-1}];
    //array of coins
    coin = [{x:135,y:51,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:182,y:36,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:242,y:63,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:382,y:162,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:24,y:164,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:182,y:268,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:182,y:326,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:111,y:290,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:10,y:257,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:324,y:343,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0}];
    for(var i = 0; i < coin.length;i++){
        coin[i].xxx = coin[i].x;
        coin[i].yyy = coin[i].y;
    }
    Ex = 389;
    Ey = 343;
    }
    }
    if(l === 2){
        LEVEL = 3;
        menu = false;
        levelselect = false;
        pause = false;
        if(true){
    coins = 0;
    aaa = 0;
    //x of player
    X = 6;
    //y of player
    Y = 87;
    //y speed of player
    ay = 0;
    //x speed of player
    ax = 0;
    //if the player is on the ground
    og = false;
    //if the player is dead
    dead = false;
    //start death weight
    stime = 100;
    //active death time to reset
    dtime = stime;
    //swiches
    swiches = [];
    //array of blocks
    blocks = [{x:0,y:91,w:56,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:107,y:91,w:56,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:221,y:91,w:56,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:343,y:91,w:56,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:221,y:157,w:179,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:156,y:176,w:30,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:94,y:144,w:30,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:31,y:169,w:30,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:0,y:229,w:30,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:73,y:229,w:30,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:148,y:241,w:129,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:329,y:241,w:129,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:221,y:145,w:10,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:0,y:358,w:400,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:127,y:348,w:10,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:267,y:348,w:10,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:361,y:348,w:10,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123}];
    //array of monsters
    mon = [{x:280,y:152,ay:0,ax:1},{x:225,y:355,ay:0,ax:-1},{x:324,y:355,ay:0,ax:1},{x:100,y:355,ay:0,ax:1}];
    //array of coins
    coin = [{x:135,y:51,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:251,y:51,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:381,y:51,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:381,y:147,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:46,y:159,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:389,y:231,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:89,y:219,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:62,y:347,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:203,y:347,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:322,y:347,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0}];
    for(var i = 0; i < coin.length;i++){
        coin[i].xxx = coin[i].x;
        coin[i].yyy = coin[i].y;
    }
    Ex = 389;
    Ey = 343;
    }
    }
    if(l === 3){
        LEVEL = 4;
        menu = false;
        levelselect = false;
        pause = false;
        if(true){
    coins = 0;
    aaa = 0;
    //x of player
    X = 6;
    //y of player
    Y = 87;
    //y speed of player
    ay = 0;
    //x speed of player
    ax = 0;
    //if the player is on the ground
    og = false;
    //if the player is dead
    dead = false;
    //start death weight
    stime = 100;
    //active death time to reset
    dtime = stime;
    //swiches
    swiches = [];
    //array of blocks
    blocks = [{x:0,y:91,w:56,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:111,y:61,w:56,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:218,y:81,w:56,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:337,y:83,w:71,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:296,y:159,w:56,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:187,y:176,w:56,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:69,y:166,w:56,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:0,y:270,w:335,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:335,y:260,w:10,h:20,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:0,y:362,w:326,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123}];
    //array of monsters
    mon = [{x:5,y:265,ay:0,ax:1},{x:75,y:265,ay:0,ax:1},{x:145,y:265,ay:0,ax:1},{x:215,y:265,ay:0,ax:1},{x:285,y:265,ay:0,ax:1}];
    //array of coins
    coin = [{x:140,y:51,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:247,y:69,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:372,y:72,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:326,y:148,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:216,y:165,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:98,y:155,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:65,y:259,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:144,y:259,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:217,y:259,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:289,y:259,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0}];
    for(var i = 0; i < coin.length;i++){
        coin[i].xxx = coin[i].x;
        coin[i].yyy = coin[i].y;
    }
    Ex = 16;
    Ey = 349;
    }
    }
    if(l === 4){
        LEVEL = 5;
        menu = false;
        levelselect = false;
        pause = false;
        if(true){
    coins = 0;
    aaa = 0;
    //x of player
    X = 6;
    //y of player
    Y = 87;
    //y speed of player
    ay = 0;
    //x speed of player
    ax = 0;
    //if the player is on the ground
    og = false;
    //if the player is dead
    dead = false;
    //start death weight
    stime = 100;
    //active death time to reset
    dtime = stime;
    //swiches
    swiches = [];
    //array of blocks
    blocks = [{x:0,y:91,w:56,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:160,y:91,w:10,h:313,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:56,y:91,w:10,h:313,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:68,y:91,w:30,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:68,y:163,w:30,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:68,y:247,w:30,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:68,y:339,w:30,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:128,y:389,w:30,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:128,y:294,w:30,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:128,y:204,w:30,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:128,y:122,w:30,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:172,y:122,w:163,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:172,y:239,w:163,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:172,y:361,w:163,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:337,y:351,w:10,h:20,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:337,y:229,w:10,h:20,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:337,y:112,w:10,h:20,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123}];
    //array of monsters
    mon = [{x:280,y:120,ay:0,ax:1},{x:280,y:237,ay:0,ax:1},{x:280,y:356,ay:0,ax:1},{x:280,y:120,ay:0,ax:-1},{x:280,y:237,ay:0,ax:-1},{x:280,y:356,ay:0,ax:-1}];
    //array of coins
    coin = [{x:143,y:111,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:143,y:194,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:143,y:284,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:143,y:379,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:82,y:329,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:82,y:237,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:82,y:153,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:187,y:111,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:187,y:229,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:187,y:352,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0}];
    for(var i = 0; i < coin.length;i++){
        coin[i].xxx = coin[i].x;
        coin[i].yyy = coin[i].y;
    }
    Ex = 389;
    Ey = 343;
    }
    }
    if(l === 5){
        LEVEL = 6;
        menu = false;
        levelselect = false;
        pause = false;
        if(true){
    coins = 0;
    aaa = 0;
    //x of player
    X = 6;
    //y of player
    Y = 87;
    //y speed of player
    ay = 0;
    //x speed of player
    ax = 0;
    //if the player is on the ground
    og = false;
    //if the player is dead
    dead = false;
    //start death weight
    stime = 100;
    //active death time to reset
    dtime = stime;
    //swiches
    swiches = [{x:30,y:0,of:false,xx:0,yy:0,id:"s1",ar:-1,a:-45,ai:1}];
    for(var i = 0; i < swiches.length;i++){
        swiches[i].xx = swiches[i].x;
        swiches[i].yy = swiches[i].y;
    }
    //array of blocks
    blocks = [{x:0,y:91,w:55,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:55,y:123,w:60,h:10,t:"move",id:"s1",tx:340,ty:123,d:1,tx2:55,ty2:123},{x:0,y:370,w:200,h:10,t:"none",id:"s1",tx:340,ty:123,d:-1,tx2:55,ty2:123},{x:230,y:370,w:170,h:10,t:"none",id:"s1",tx:340,ty:123,d:-1,tx2:55,ty2:123}];
    //array of monsters
    mon = [/*{x:280,y:120,ay:0,ax:1}*/];
    //array of coins
    coin = [{x:143,y:111,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:194,y:76,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:247,y:111,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:285,y:111,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:55,y:-10,yy:0,ay:0.2,t:1,ai:1,xxx:0,yyy:0},{x:345,y:153,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:363,y:193,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:371,y:234,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:378,y:283,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:5,y:-10,yy:0,ay:0.2,t:1,ai:1,xxx:0,yyy:0}];
    for(var i = 0; i < coin.length;i++){
        coin[i].xxx = coin[i].x;
        coin[i].yyy = coin[i].y;
    }
    Ex = 20;
    Ey = 358;
    }
    }
    if(l === 6){
        LEVEL = 7;
        menu = false;
        levelselect = false;
        pause = false;
        if(true){
    coins = 0;
    aaa = 0;
    //x of player
    X = 6;
    //y of player
    Y = 87;
    //y speed of player
    ay = 0;
    //x speed of player
    ax = 0;
    //if the player is on the ground
    og = false;
    //if the player is dead
    dead = false;
    //start death weight
    stime = 100;
    //active death time to reset
    dtime = stime;
    //swiches
    swiches = [{x:30,y:0,of:false,xx:0,yy:0,id:"s1",ar:-1,a:-45,ai:0},{x:73,y:300,of:false,xx:0,yy:0,id:"s2",ar:-1,a:-45,ai:0},{x:8,y:0,of:false,xx:0,yy:0,id:"s1",ar:6,a:-45,ai:7}];
    for(var i = 0; i < swiches.length;i++){
        swiches[i].xx = swiches[i].x;
        swiches[i].yy = swiches[i].y;
    }
    //array of blocks
    blocks = [{x:0,y:90,w:45,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:100,y:0,w:10,h:330,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:165,y:90,w:45,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:210,y:30,w:10,h:70,t:"move",id:"s1",tx:210,ty:90,d:1,tx2:210,ty2:0},{x:45,y:90,w:10,h:310,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:155,y:90,w:10,h:310,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:55,y:390,w:25,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:130,y:390,w:25,h:10,t:"move",id:"s1",tx:130,ty:90,d:1,tx2:55,ty2:123},{x:100,y:330,w:10,h:100,t:"move",id:"s2",tx:100,ty:400,d:1,tx2:155,ty2:0},{x:55,y:90,w:10,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:55,y:135,w:10,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:55,y:183,w:10,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:90,y:235,w:10,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:90,y:285,w:10,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123},{x:166,y:370,w:300,h:10,t:"none",id:"none",tx:0,ty:0,d:1,tx2:55,ty2:123}];
    for(var i = 0; i < blocks.length;i++){
        blocks[i].tx2 = blocks[i].x;
        blocks[i].ty2 = blocks[i].y;
    }
    //array of monsters
    mon = [/*{x:280,y:120,ay:0,ax:1}*/];
    //array of coins
    coin = [{x:63,y:126,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:63,y:174,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:94,y:226,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:94,y:276,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:146,y:342,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:130,y:280,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:146,y:211,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:132,y:152,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:218,y:174,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0},{x:245,y:46,yy:0,ay:0.2,t:1,ai:-1,xxx:0,yyy:0}];
    for(var i = 0; i < coin.length;i++){
        coin[i].xxx = coin[i].x;
        coin[i].yyy = coin[i].y;
    }
    Ex = 380;
    Ey = 358;
    }
    }
    };
    //pause
    var PAUSE = function(){
        if(keys[80] === true){
            pause = true;
        }
        if(pause === true){
        fill(138, 138, 138,150);
        rect(-10,-10,420,420);
        if(cmt < 0 && mouseIsPressed && dist(mouseX,mouseY,250,200) < 25){
            pause = false;
            cmt = smt;
        }
        if(cmt < 0 && mouseIsPressed && dist(mouseX,mouseY,150,200) < 25){
            level(0);
            cmt = smt;
        }
        fill(36, 107, 0);
        stroke(64, 255, 0);
        ellipse(250,200,50,50);
        ellipse(150,200,50,50);
        fill(64, 255, 0);
        triangle(244,186,262,200,244,210);
        fill(0, 0, 0);
        textSize(11);
        text("level\nselect",150,200);
        }
    };
    //level select
    var LEVELSELECT = function(){
        if(levelselect){
   background(102, 102, 102);
    if(lx > tlx){
            alx -= 0.1;
        }
        if(lx < tlx){
            alx += 0.1;
        }
        alx *= 0.97;
        if(dist(tlx,0,lx,0) < 0.1 && abs(alx) < 0.2){
            lx = tlx;
            alx = 0;
        }
        lx += alx;
    for(var x = 0; x < numlevels;x++){
        if(x + 1 <= donelevels){
        if(cmt < 0 && mouseIsPressed && dist(mouseX,mouseY,lx + 200 + (x*60),200 + sin(x*60)*35) < 25){
            level(x + 1);
            cmt = smt;
        }
        strokeWeight(2);
        fill(36, 107, 0);
        stroke(64, 255, 0);
        ellipse(lx + 200 + (x*60),200 + sin(x*60)*35,50,50);
        ellipse(lx + 200 + (x*60),239 + sin(x*60)*35,29,20);
        textSize(25);
        fill(64, 255, 0);
        text(x + 1,lx + 200 + (x*60),200 + sin(x*60)*35);
        textSize(10);
        text(levelcoins[x],lx + 200 + (x*60),239 + sin(x*60)*35);
        }
        else{
        strokeWeight(2);
        fill(77, 77, 77);
        stroke(36, 36, 36);
        ellipse(lx + 200 + (x*60),200 + sin(x*60)*35,50,50);
        fill(43, 43, 43);
        stroke(43, 43, 43);
        rect(lx + 190 + (x*60),194 + sin(x*60)*35,20,20);
        strokeWeight(5);
        noFill();
        ellipse(lx + 200 + (x*60),193 + sin(x*60)*35,17,17);

        }
        if(dist(mouseX,mouseY,lx + 200 + (x*60),200 + sin(x*60)*35) < 25){
            tlx = -x*60;
        }
    }
    }
    strokeWeight(2);
    };
    //draw menu
    var MENU = function(){
        if(cmt < 0 && mouseIsPressed && dist(mouseX,mouseY,200,200) < 25){
            level(0);
            cmt = smt;
        }
        background(102, 102, 102);
        fill(36, 107, 0);
        stroke(64, 255, 0);
        ellipse(200,200,50,50);
        fill(64, 255, 0);
        triangle(194,189,212,200,194,210);
        fill(0, 0, 0);
        noStroke();
        text("wasd to move, space to activate switches",200,300);
    };
    //draw exit
    var drawExit = function(){
        //text(dist(X,Y,Ex,Ey),200,40);
        if(pause === false && menu === false && levelselect === false){
        aaa += 10;
        }
        strokeWeight(1);
        fill(88, 189, 0);
        stroke(0, 0, 0);
    ellipse(Ex,Ey,20,20);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    for(var a = 0; a < 344;a+=3){
        point(Ex + cos((a+aaa)*2)*((a)/35),Ey + sin((a+aaa)*2)*((a)/35));
    }
    };
    //death screen
    var death = function(){
    if(dead === true){
        background(0, 0, 0);
        fill(255, 0, 0);
        textSize(50);
        text("you died",200,200);
        dtime--;
        if(dtime < 0){
            dtime = stime;
            level(LEVEL - 1);
        }
    }
    };
    //draws all blocks
    var drawBlocks = function(){
        //loop through blocks
    for(var i = 0; i < blocks.length;i++){
        //fill and outline in black
        fill(0, 0, 0);
        stroke(0, 0, 0);
        //draw blocks
        rect(blocks[i].x,blocks[i].y,blocks[i].w,blocks[i].h);
    }
    };
    //draws all coins
    var drawCoins = function(){
        //loop through coins
    for(var i = 0; i < coin.length;i++){
        if(pause === false && menu === false && levelselect === false){
        if(coin[i].yy > 0){
            coin[i].ay -= 0.01;
        }
        if(coin[i].yy < 0){
            coin[i].ay += 0.01;
        }
        coin[i].yy += coin[i].ay;
        }
        strokeWeight(2);
        stroke(247, 255, 0);
        fill(194, 201, 0);
        ellipse(coin[i].x,coin[i].y + coin[i].yy,10,10);
        strokeWeight(1);
    }
    };
    //draws all monsters
    var drawMonsters = function(){
        //loops through all monsters
    for(var i = 0; i < mon.length;i++){
        //fill light green, outline in darker green,
        //make outline thicker
        fill(140, 0, 0);
        stroke(77, 0, 0);
        strokeWeight(2);
        //draws monster
        rect(mon[i].x - 5,mon[i].y - 5,10,10);
        //reset outline thickness
        strokeWeight(1);
    }
    };
    //draw player
    var drawPlayer = function(){
        strokeWeight(2);
        stroke(23, 115, 0);
        fill(0, 64, 0);
        rect(X-5,Y-5,10,10);
    };
    //draw swiches
    var drawSwiches = function(){
    for(var i = 0; i < swiches.length;i++){
        fill(201, 201, 201);
        stroke(201, 201, 201);
        strokeWeight(4);
        if(swiches[i].of === true){
            swiches[i].ar = 1;
        }
        if(swiches[i].of === false){
            swiches[i].ar = -1;
        }
        swiches[i].a += swiches[i].ar;
        if(swiches[i].a > 45){
            swiches[i].a = 45;
        }
        if(swiches[i].a < -45){
            swiches[i].a = -45;
        }
        translate(swiches[i].x,swiches[i].y);
        rotate(swiches[i].a);
        translate(-swiches[i].x,-swiches[i].y);
        line(swiches[i].x,swiches[i].y,swiches[i].x,swiches[i].y - 10);
        strokeWeight(1);
        translate(swiches[i].x,swiches[i].y);
        rotate(-swiches[i].a);
        translate(-swiches[i].x,-swiches[i].y);
        arc(swiches[i].x,swiches[i].y,10,10,-180,0);
    }
    };

    //logic functions************************************************************
    //swich logic
    var swichLogic = function(){
        sctime--;
    for(var i = 0; i < swiches.length;i++){
        swiches[i].x = swiches[i].xx + blocks[swiches[i].ai].x;
        swiches[i].y = swiches[i].yy + blocks[swiches[i].ai].y;
        if(keyIsPressed && keys[32] === true && dist(swiches[i].x,swiches[i].y,X,Y) < 10){
            if(sctime < 0){
                sctime = sstime;
            if(swiches[i].of === false){
            swiches[i].of = true;
            }
            else if(swiches[i].of === true){
            swiches[i].of = false;
            }
            }
        }
    }
    };
    //block logic
    var blockLogic = function(){
    for(var i = 0; i < blocks.length;i++){
        var ss = [];
        var fl = true;
        for(var o = 0; o < swiches.length;o++){
            if(swiches[o].id === blocks[i].id){
                ss.push(swiches[o].of);
            }
        }
        for(var o = 0; o < ss.length;o++){
            if(ss[o] === false){
                fl = false;
            }
        }
        if(fl === false){
            blocks[i].d = -1;
        }
        if(fl === true){
            blocks[i].d = 1;
        }
        if(blocks[i].t !== "move"){
            blocks[i].d = 0;
        }
        if(fl === false && dist(blocks[i].x,blocks[i].y,blocks[i].tx2,blocks[i].ty2) <= 2){
            blocks[i].x = blocks[i].tx2;
            blocks[i].y = blocks[i].ty2;
            blocks[i].d = 0;
        }
        if(fl === true && dist(blocks[i].x,blocks[i].y,blocks[i].tx,blocks[i].ty) <= 2){
            blocks[i].x = blocks[i].tx;
            blocks[i].y = blocks[i].ty;
            blocks[i].d = 0;
        }
        blocks[i].x -= ((blocks[i].tx2 - blocks[i].tx)/dist(blocks[i].tx2,blocks[i].ty2,blocks[i].tx,blocks[i].ty)) * blocks[i].d;
        blocks[i].y -= ((blocks[i].ty2 - blocks[i].ty)/dist(blocks[i].tx2,blocks[i].ty2,blocks[i].tx,blocks[i].ty)) * blocks[i].d;

    }
    };
    //exit logic
    var exitLogic = function(){
    if(dist(X,Y,Ex,Ey) < 20){
        if(LEVEL > donelevels){
        donelevels = LEVEL;
        }
        if(coins > levelcoins[LEVEL - 2]){
            levelcoins[LEVEL - 2] = coins;
        }
        if(LEVEL - 1 === numlevels){
            level(0);
        }
        else{
        level(LEVEL);
        }
    }
    };
    //coin logic
    var coinLogic = function(){
        for(var i = 0; i < coin.length;i++){
            if(coin[i].ai !== -1){
            coin[i].x = coin[i].xxx + blocks[coin[i].ai].x;
            coin[i].y = coin[i].yyy + blocks[coin[i].ai].y;
            }
            else{
            coin[i].x = coin[i].xxx;
            coin[i].y = coin[i].yyy;
            }
            if(dist(X,Y,coin[i].x,coin[i].y) < 10){
                coin.splice(i,1);
                coins++;
            }
        }
    };
    //behavior of monsters
    var monsterLogic = function(){
        //loops through all monsters
    for(var i = 0; i < mon.length;i++){
        //increase vertical velocety
        mon[i].ay += 0.1;
        //move by xy velocety
        mon[i].y += mon[i].ay;
        mon[i].x += mon[i].ax;
        //loop through all blocks
        for(var o = 0; o < blocks.length;o++){
            //collisions
            if(mon[i].y + 6 > blocks[o].y && mon[i].x > blocks[o].x && mon[i].x < blocks[o].x + blocks[o].w && mon[i].y < blocks[o].y){
                mon[i].ay = 0;
                mon[i].y = blocks[o].y - 6;
            }
            if(mon[i].x + 6 > blocks[o].x && mon[i].y + 6 > blocks[o].y && mon[i].y < blocks[o].y + blocks[o].h && mon[i].x < blocks[o].x && mon[i].y > blocks[o].y){
                mon[i].ax = -mon[i].ax;
                mon[i].x = blocks[o].x - 6;
            }
            if(mon[i].x - 6 < blocks[o].x + blocks[o].w && mon[i].y + 6 > blocks[o].y && mon[i].y < blocks[o].y + blocks[o].h && mon[i].x > blocks[o].x && mon[i].y > blocks[o].y){
                mon[i].ax = -mon[i].ax;
                mon[i].x = blocks[o].x + blocks[o].w + 6;
            }
        }
        //collisions with sides of screen
        if(mon[i].y + 6 > 400 && mon[i].x > -400 && mon[i].x < 800 && mon[i].y < 400){
                mon[i].ay = 0;
                mon[i].y = 400 - 6;
            }
        if(mon[i].x + 6 > 400 && mon[i].y + 6 > -400 && mon[i].y < 400 && mon[i].x < 400 && mon[i].y > -400){
                mon[i].ax = -mon[i].ax;
                mon[i].x = 400 - 6;
            }
            if(mon[i].x - 6 < 0 && mon[i].y + 6 > -400 && mon[i].y < 800 && mon[i].x > 0 && mon[i].y > -400){
                mon[i].ax = -mon[i].ax;
                mon[i].x = 0 + 6;
            }
    }
    };
    //behavior of player
    var playerLogic = function(){
        for(var i = 0; i <  mon.length;i++){
            if(dist(X,Y,mon[i].x,mon[i].y) < 10){
                dead = true;
            }
        }
        if(keyIsPressed && keys[68]){
                X++;
            }
            if(keyIsPressed && keys[65]){
                X--;
            }
            if(keyIsPressed && keys[87] && og === true){
                ay = -3;
            }
    ay += 0.1;
        og = false;
        bax = 0;
        Y += ay;
        for(var o = 0; o < blocks.length;o++){
            //collisions
            if(Y + 7 >= blocks[o].y && X + 7 > blocks[o].x && X - 7 < blocks[o].x + blocks[o].w && Y <= blocks[o].y){
                og = true;
                ay = 0;
                Y = blocks[o].y - 7;
                if(blocks[o].t === "move"){
                bax = -(((blocks[o].tx2 - blocks[o].tx)/dist(blocks[o].tx2,blocks[o].ty2,blocks[o].tx,blocks[o].ty)) * blocks[o].d);
                }
            }
            if(Y - 7 < blocks[o].y + blocks[o].h && X + 12 > blocks[o].x && X - 6 < blocks[o].x + blocks[o].w && Y > blocks[o].y && X + 6 > blocks[o].x){
                ay = -ay;
                Y = blocks[o].y + blocks[o].h + 7;
            }
            if(X + 7 > blocks[o].x && Y + 12 > blocks[o].y && Y - 6 < blocks[o].y + blocks[o].h && X < blocks[o].x && Y + 6 > blocks[o].y){
                ax = 0;
                X = blocks[o].x - 7;
            }
            if(X - 7 < blocks[o].x + blocks[o].w && Y + 12 > blocks[o].y && Y - 6 < blocks[o].y + blocks[o].h && X > blocks[o].x && Y + 6 > blocks[o].y){
                ax = 0;
                X = blocks[o].x + blocks[o].w + 7;
            }
        }
        //collisions with sides of screen
        if(Y + 7 > 400 && X > -400 && X < 800 && Y < 400){
                //ay = 0;
                //og = true;
                //Y = 400 - 7;
                dead = true;
            }
        if(X + 7 > 400 && Y + 7 > -400 && Y < 400 && X < 400 && Y > -400){
                ax = 0;
                X = 400 - 7;
            }
            if(X - 6 < 0 && Y + 6 > -400 && Y < 800 && X > 0 && Y > -400){
                ax = 0;
                X = 0 + 6;
            }
    X += ax + bax;
    };
    var reload = function(){
    if(keys[82] === true){
        level(LEVEL - 1);
    }
    };
}

//set level to start
level(-1);

//draw loop
draw = function() {
    //game logic
    if(pause === false && menu === false && levelselect === false){
        //reload logic
        reload();
        //call swich logic
        swichLogic();
        //call exit logic
        exitLogic();
        //call coin logic function
        coinLogic();
        //call monster logic function
        monsterLogic();
        //call player logic function
        playerLogic();
        //call block logic
        blockLogic();
    }

    //draw game
    if(true){
    //resets screen to gray
    background(102, 102, 102);
    //coin text
    fill(255, 255, 255);
    stroke(255, 255, 255);
    rect(135,8,130,20);
    ellipse(135,18,20,20);
    ellipse(265,18,20,20);
    textSize(14);
    fill(0, 0, 0);
    text("coins: " + coins,165,18);
    text("level: " + (LEVEL - 1),235,18);
    //draws exit
    drawExit();
    //calls coin drawing function
    drawCoins();
    //calls monster drawing function
    drawMonsters();
    //calls draw player function
    drawPlayer();
    //draw swiches
    drawSwiches();
    //calls block drawing function
    drawBlocks();
    //death screen
    death();
    //pause
    PAUSE();
    //level select
    LEVELSELECT();
    //menu
    if(menu === true){
        MENU();
    }
    }
    cmt--;
};

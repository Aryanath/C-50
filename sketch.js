
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var platform;
var runningAnimation;
var jumpingAnimation;
var gameBackground;
var platformBackground;
var gameFont;
var gameMusic;
var gameOverMusic;
var jumpSound;

function preload()
{

	jumpingAnimation = loadAnimation(
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/jump00.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/jump01.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/jump02.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/jump03.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/jump04.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/jump05.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/jump06.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/jump07.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/jump08.png',     
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/jump09.png'    
	  );
	  runningAnimation = loadAnimation(
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/run00.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/run01.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/run02.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/run03.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/run04.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/run05.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/run06.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/run07.png'   
	  );
		
	  
gameBackground = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/environments/industrialBackground.png');
platformBackground = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/environments/industrialPlatform.png');
gameFont = loadFont('https://la-wit.github.io/build-an-infinite-runner/build/fonts/ARCADE_R.TTF');
gameMusic = loadSound('https://la-wit.github.io/build-an-infinite-runner/build/sounds/generic-game-loop-4.mp3');
gameOverMusic = loadSound('https://la-wit.github.io/build-an-infinite-runner/build/sounds/over.mp3');
jumpSound = loadSound('https://la-wit.github.io/build-an-infinite-runner/build/sounds/jump07.mp3');

	  
}

function setup() {
	createCanvas(900,500);
	platformgroup=new Group();
	player=createSprite(50,360,50,50);
	player.addAnimation("running",runningAnimation);
    player.velocityX=2;
	player.scale=2.0;
	
    player.addAnimation('jump', jumpingAnimation);
    player.addAnimation('run', runningAnimation);
    player.setCollider("rectangle", 0,0,10,41);
            
	engine = Engine.create();
	world = engine.world;
	
	
            
	background(200, 200, 200)
	
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(gameBackground);

  if (keyDown("space")) {
	 player.velocityY=-10; 
  }
  player.velocityY=player.velocityY+0.5;
  Spawnplatform();
 platformgroup.collide(player);
  drawSprites();
 
}

		function Spawnplatform() {
			 if(frameCount % 120 === 0) {
				  var platform = createSprite(900,495,50,40);
				  platform.addImage(platformBackground);
				 
				   //platform.debug = true; 
				   platform.velocityX = -6;
				  //assign scale and lifetime to the platform 
							 platform.scale = 0.5; platform.lifetime = 300; //add each platform to the group 
							 platformgroup.add(platform);
							 } 
							}




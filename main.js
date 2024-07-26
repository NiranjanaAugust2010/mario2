function preload() {
	world_start = loadSound("world_start.wav");
	mario_gameover=loadSound("gameover.wav")
	mario_jump=loadSound("jump.wav")
	mario_coin=loadSound("coin.wav")
	mario_kick=loadSound("kick.wav")
	mario_die=loadSound("mariodie.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	instializeInSetup(mario);
	video=createCapture(VIDEO)
	video.size(800,400)
	video.parent('gameconsole')

	poseNet=ml5.poseNet(video,modelLoaded)
	poseNet.on('pose',gotPoses)

}

function modelLoaded(){
   console.log("model loaded")
}
function gotPoses(results){
   if(results.length>0){
	console.log(results)
	leftX=results[0].pose.leftWrist.x
	leftY=results[0].pose.leftWrist.y
   }
}

function draw() {
	game()
}







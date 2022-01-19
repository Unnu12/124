difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 430);
    canvas.position(600, 150);

     poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
   
}

function modelLoaded(){
    console.log('posenet is initialized');
}

function gotPoses(){

}
leftWristx = 0;
leftWristy = 0;
leftWristscore=0;
song1_status="";
song2_status="";

rightWristx= 0;
rightWristy= 0;
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    function modelLoaded(){
        console.log("PoseNet is Initialised");
    }

    poseNet.on('pose', gotPoses());
    poseNet= ml5.poseNet(video, modelLoaded());
}

function preload() 
{ 
    song = loadSound("music.mp3"); 
    song = loadSound("music2.mp3");
}

function draw() {
    image(video, 600, 500, 600, 500);
    if (leftWristScore > 0.2) {
        circle(leftWristx, leftrightWristy, 20);
        fill("#FF0000");
        stroke("#FF0000");
        if (song2_status="true")
        {
            wait(10);
            stop("music2.mp3");
            set(song1_status=false); 
        }
    }
    if (song1_status=false) {
       play("music.mp3");
       document.getElementById("song_playing").innerHTML="Now Playing: Song 1";
    }

    if (rightWristScore > 0.2) {
        circle(rightWristx, rightrightWristy, 20);
        fill("#FF0000");
        stroke("#FF0000");
        if (song1_status="true")
        {
            wait(10);
            stop("music.mp3");
        }
    }
    if (song2_status=false) {
       play("music2.mp3");
       document.getElementById("song_playing").innerHTML="Now Playing: Song 2";
    }
}


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristx + "leftWristY" + leftWristy);
        rightWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;
        console.log("rightWristX= " + rightWristx + "rightWristY= " + rightWristy);
    }
}
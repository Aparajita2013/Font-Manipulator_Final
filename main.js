leftwrist_x = 0
rightwrist_x = 0
difference = 0

function setup() {
    video = createCapture(VIDEO)
    video.size(550,550)
    canvas = createCanvas(550, 550)
    canvas.position(580, 150)
    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on('pose',gotposes)
    
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
        leftwrist_x = results[0].pose.leftWrist.x
        rightwrist_x = results[0].pose.rightWrist.x
        difference = floor(leftwrist_x - rightwrist_x)
    }
}

function modelloaded() {
    console.log("PoseNet Is Loaded")
}

function draw() {
    background("#49f29b")
    textSize(difference)
    fill("#2225f2")
    text("Phone", 50, 300)
    document.getElementById("square_size").innerHTML = "Font Size will be = " + difference + "px"
}
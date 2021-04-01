var video = document.getElementById("player1");

window.addEventListener("onload", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", 
function() {
 	console.log("Play Video");
	 video.play();
});

document.querySelector('#pause').addEventListener("click",
function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector('#slower').addEventListener("click",
function() {
	console.log("Slow Down");
	video.playbackRate = video.playbackRate-0.5;
});

document.querySelector('#faster').addEventListener("click",
function() {
	console.log("Speed Up");
	video.playbackRate = video.playbackRate+0.5;
});

document.querySelector('#skip').addEventListener("click",
function() {
	console.log("Skip Ahead");
	video.currentTime = video.currentTime+15
});

document.querySelector('#mute').addEventListener("click",
function() {
	if (video.muted == false){
		console.log("Mute");
		video.muted = true;
	}
	else {
		console.log("Unmute");
		video.muted = false;
	}
});

document.querySelector('#slider').addEventListener("change",
function() {
	val = document.getElementById("slider").value;
	video.volume = val;
	document.getElementById("volume") = val+"%";
});
var video = document.getElementById("player1");

window.addEventListener("onload", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", 
function() {
 	console.log("Play Video");
	video.play();
	
	var val = document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = val+"%";
});

document.querySelector('#pause').addEventListener("click",
function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector('#slower').addEventListener("click",
function() {
	video.playbackRate = video.playbackRate-0.05;
	console.log("Slow Down"+video.playbackRate);
});

document.querySelector('#faster').addEventListener("click",
function() {
	video.playbackRate = video.playbackRate+0.05;
	console.log("Speed Up"+video.playbackRate);
});

document.querySelector('#skip').addEventListener("click",
function() {
	if (video.currentTime+15 < video.duration) {
		video.currentTime = video.currentTime+15;
		console.log("Skip Ahead"+video.currentTime);
	}
	else {
		video.currentTime = 0;
		console.log("Restart Video"+video.currentTime);
	}
});

document.querySelector('#mute').addEventListener("click",
function() {
	if (video.muted == false){
		console.log("Mute");
		video.muted = true;
		var elem = document.getElementById("mute");
		elem.innerHTML = "Unmute";
	}
	else {
		console.log("Unmute");
		video.muted = false;
		var elem = document.getElementById("mute");
		elem.innerHTML = "Mute";
	}
});

document.querySelector('#slider').addEventListener("change",
function() {
	var val = document.getElementById("slider").value;
	video.volume = val/100;
	document.getElementById("volume").innerHTML = val+"%";
});

document.querySelector('#vintage').addEventListener("click",
function() {
	video.classList.add("oldSchool");
});

document.querySelector('#orig').addEventListener("click",
function() {
	video.classList.remove("oldSchool");
});
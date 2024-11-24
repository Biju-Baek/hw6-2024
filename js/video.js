let video;
/* Page Load */
window.addEventListener("load", function(){
	console.log("Window loaded")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay and Loop are turned off")
});

/* Play Button */
document.querySelector("#play").addEventListener("click", function(){
	video.play()
	console.log("Played video")
	document.querySelector("#volume").innerHTML=video.volume *100 + "%";
	console.log("Volume is updated")
});

/* Pause Button */
document.querySelector("#pause").addEventListener("click", function(){
	video.pause()
	console.log("Paused video")
});

/* Slow Down */
document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate *= 0.9; /* Decreasing by 10%*/
	console.log("Slow down video")
});

/* Speed Up */
document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate /= 0.9; /* Increasing proportionally*/
	console.log("Speed up video")
});

/* Skip Ahead */
document.getElementById('skip').addEventListener('click', function(){
	if (video.currentTime + 10 >= video.duration){
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Video skipped 10s")
});

/* Mute and Unmute Function */
let muteButton = document.querySelector("#mute")
muteButton.addEventListener('click', function(){
	video.muted = !video.muted;
	muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
	console.log("Mute propert changed")
});

/* Volume Slider */
let volumeSlider = document.querySelector("#slider")
let volumeLabel = document.querySelector("#volume")

volumeSlider.addEventListener("input", function(){
	video.volume = parseFloat(volumeSlider.value)/100;
	volumeLabel.textContent = `Volume is: ${Math.round(video.volume * 100)}%`;
	console.log("Volume has changed");
});

/* Styled */
document.querySelector("#vintage").addEventListener('click', function(){
	video.classList.add('oldSchool');
	console.log("Applied Old School Style");
});

/* Original Styled */
document.querySelector("#orig").addEventListener('click', function(){
	video.classList.remove('oldSchool');
	console.log("Removed Old School Style")
});
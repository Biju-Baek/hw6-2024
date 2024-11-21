let video;

window.addEventListener("load", function(){
	console.log("Window loaded")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay and Loop are turned off")
});

document.querySelector("#play").addEventListener("click", function(){
	video.play()
	console.log("Play video")
	document.querySelector("#volume").innerHTML=video.volume *100 + "%";
	console.log("Volume is updated")
});

document.querySelector("#pause").addEventListener("click", function(){
	video.pause()
	console.log("Pause video")
});

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate = 0.5;
	console.log("Slow down video")
});
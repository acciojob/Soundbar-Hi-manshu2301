//your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttonDiv= document.getElementById("buttons");
let cuurentAudio;
sounds.forEach(function(sound){
	const btn = document.createElement("button");
	btn.classList.add("btn");
	btn.innerText = sound;
	btn.addEventListener("click", function(){
		stopSongs();
		cuurentAudio = new Audio(`sounds/${sound}.mp3`);
		cuurentAudio.play();
	});
	buttonDiv.appendChild(btn);
});
const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "stop";
stopBtn.addEventListener("click", stopSongs);
buttonDiv.appendChild(stopBtn);
function stopSongs() {
	if(cuurentAudio){
		cuurentAudio.pause();
		cuurentAudio.currentTime = 0;
	}
	
}









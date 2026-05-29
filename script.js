//your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttonDiv= document.getElementById("buttons");
let audio;
sounds.forEach(function(sound){
	const btn = document.createElement("button");
	btn.classList.add("btn");
	btn.innerText = sound;
	btn.addEventListener("click", function(){
		stopSongs();
		audio = document.createElement("audio");
		audio.src = `sounds/${sound}.mp3`;
		audio.play();
		document.body.appendChild(audio);
	});
	buttonDiv.appendChild(btn);
});
const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "stop";
stopBtn.addEventListener("click", stopSongs);
buttonDiv.appendChild(stopBtn);
function stopSongs() {
	if(audio){
		audio.pause();
		audio.currentTime = 0;
	}
	
}









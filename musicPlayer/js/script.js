var $ = document;
var musics = ["../music/music (1).mp3","../music/music (2).mp3","../music/music (3).mp3"];
var musicPlayer = $.getElementById("myMusic")
var playBtn = $.querySelector("#play")
var muteBtn = $.querySelector("#mute")
var nextBtn = $.querySelector("#next")
var prevBtn = $.querySelector("#prev")
var musicOrder = 0
function playMusic(){
    if (musicPlayer.paused === true){
        musicPlayer.play()
    } else{
        musicPlayer.pause()
    }
};
function muteMusic(){
    if (musicPlayer.muted === false){
        musicPlayer.muted = true;
        muteBtn.innerHTML = "&#128264;";
    } else {
        musicPlayer.muted = false;
        muteBtn.innerHTML = "&#128266;";
    }
};
function next(){
    musicOrder++;
    if (musicOrder === musics.length){
        musicOrder = 0
    }
    musicPlayer.src = musics[musicOrder]
};
function prev(){
    musicOrder-= 1;
    if (musicOrder < 0){
        musicOrder = musics.length - 1
    }
    musicPlayer.src = musics[musicOrder]
};
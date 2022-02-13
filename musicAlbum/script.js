var $ = document
var musics =  $.querySelectorAll(".music-box")
var body = $.querySelector('body')
var isPlaying = false;
var playing = $.getElementById("playing")
musics.forEach((music) => {
    music.addEventListener("click",playMusic)
})

function playMusic(e){
    if (isPlaying){
        playing.pause()
    }
    isPlaying = true;
    playing.src = e.target.dataset.music
    playing.play()
}

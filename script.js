var audio = document.getElementById("myAudio")
var songSlider = document.getElementById("songSlider")
var songNameDisplay = document.getElementById("songName")
var pauseBtn = document.getElementById("pause-btn")
var playBtn = document.getElementById("play-btn")

var songs = ["songs/01.mp3","songs/02.mp3","songs/03.mp3"]
var songNames = ["Song 1", "Song 2", "Song 3"]

var currentSongIndex=0


function playAudio(){
    audio.play()
    pauseBtn.style.display = "inline-block"
    playBtn.style.display = "none"


}
function pauseAudio(){
    audio.pause()
    playBtn.style.display = "inline-block"
    pauseBtn.style.display = "none"
}
function previousSong(){
    if(currentSongIndex>0){
        currentSongIndex--
        audio.src = songs[currentSongIndex]
        colordefault()
        updateSong()
        playAudio()
    }
}
function nextSong(){
    if(currentSongIndex<songs.length-1){
        currentSongIndex++
        audio.src = songs[currentSongIndex]
        colordefault()
        updateSong()
        playAudio()
    }
}
function seekSong(){
    audio.currentTime = songSlider.value
}
audio.addEventListener('timeupdate',function(){
    var currentTime = audio.currentTime;
    var duration = audio.duration;
    if (!isNaN(duration)) {
        var progress = (currentTime / duration) * 100;
        songSlider.value = currentTime;
        songSlider.max = duration;
    }
});
songSlider.addEventListener('input', function () {
    audio.currentTime = songSlider.value;
    updateSliderColor()
    
});

function updateSong() {
    audio.src = songs[currentSongIndex];
    songNameDisplay.textContent = songNames[currentSongIndex];
    songSlider.max = audio.duration;
}

function colordefault(){
    songSlider.style.background ="rgb(214,214,214)"
}
function updateSliderColor() {
    const currentPosition = (audio.currentTime * 100) / audio.duration
    const color = `linear-gradient(to right, rgb(54, 54, 54) ${currentPosition}%, rgb(214, 214, 214) ${currentPosition}%)`;
    songSlider.style.background = color;
}

window.onload = function () {
    pauseBtn.style.display = "none";
    playBtn.style.display = "block";
    updateSong();
    updateSliderColor();
};


// image slider
let currentIndex = 0
const slides = document.querySelectorAll(".slide")

function perv(){
    currentIndex = (currentIndex - 1 + sliderImage.length)% sliderImage.length
    updateSlide()
}
function next(){
    currentIndex = (currentIndex + 1 ) % sliderImage.length
    updateSlide()
}
function updateSlide(){
    slides.forEach((slide,index) => {
        if( index === currentIndex){
           slide.style.display = "block" 
        }
        else{
            slide.style.display = "none"
        }
    });
}

const container = document.getElementById("artists")
const BtnPerv =  document.getElementById("perv1")
const BtnNext=  document.getElementById("next1")

BtnPerv.addEventListener('click',() => {
    container.scrollLeft -=150

});
BtnNext.addEventListener('click',() => {
    container.scrollLeft +=150

});
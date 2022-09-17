console.log("welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs = [
        { songName: "IS quther ", filePath: "1.mp3", coverPath: "pic.jpg" },
        { songName: "8 Parche ", filePath: "8 Parche - (amlijatt.in).mp3", coverPath: "pic.jpg" },
        { songName: "Bholenath ", filePath: "Bholenath(PaglaSongs).mp3", coverPath: "pic.jpg" },
        { songName: "jksjh ", filePath: "1.mp3", coverPath: "pic.jpg" },
        { songName: " djaewjk", filePath: "1.mp3", coverPath: "pic.jpg" },
        { songName: " dWJH", filePath: "1.mp3", coverPath: "pic.jpg" },
        { songName: " HJCSDJH", filePath: "1.mp3", coverPath: "pic.jpg" },

    ]
    // handle play pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
})

//Listen to events..
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
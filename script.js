list = [
    "1. Atlant.mp3",
    "2. Utopia.mp3",
    "3. Мало нам.mp3",
    "4. Психопатия.mp3",
    "5. Tantra.mp3",
    "6. Medicine.mp3",
    "7. Minor.mp3",
    "8. Там ревели горы.mp3",
    "9. Yamakasi.mp3",
    "10. Патрон.mp3"
    ];

currentMusic = 0;

player = document.querySelector('audio');
player.src = "audio/" + list[currentMusic]; 


playBtn = document.getElementById('play');
nextBtn = document.getElementById('next');
prevBtn = document.getElementById('prev');
songName = document.getElementById('title');

playBtn.onclick = play;
nextBtn.onclick = next;
prevBtn.onclick = prev;


function play() {
    //fa-pause-circle
    player.play();
    playBtn.className = "fa fa-pause-circle";
    playBtn.onclick = pause;
}

function pause() {
    player.pause();
    playBtn.className = "fa fa-play-circle";
    playBtn.onclick = play;
}

function next() {
    currentMusic = currentMusic + 1; 
    if(currentMusic >= 10) {
        currentMusic = 0;
    }
    console.dir(currentMusic);
    player.src = "audio/" + list[currentMusic]; 
    play();
    loadSong(currentMusic, list);
}



function prev() {
    currentMusic = currentMusic - 1; 
    if(currentMusic < 0) {
        currentMusic = 9;
    }
    console.dir(currentMusic);    player.src = "audio/" + list[currentMusic]; 
    play();
    loadSong(currentMusic, list);
}

function loadSong(currentMusic, list) {
    songName.innerHTML =  list[currentMusic];
} 
loadSong(currentMusic, list);




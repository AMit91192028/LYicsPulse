

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs1/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let ProgressBar = document.getElementById('ProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songName: "Hint", filePath: "songs1/1.mp3", coverPath: "covers/4.webp" },
    { songName: "Mera Pyar Tera Pyar", filePath: "songs1/5.mp3", coverPath: "covers/Call Out My Name - The Weeknd.jpg" },
    { songName: "Die For You-TheWeeknd", filePath: "songs1/28.mp3", coverPath: "covers/Die For You-TheWeeknd.jpg" },
    { songName: "Starboy - The Weeknd", filePath: "songs1/63.mp3", coverPath: "covers/Starboy - The Weeknd.jpg" },

    { songName: "Raatan lambiyan", filePath: "songs1/11.mp3", coverPath: "covers/11.jpg" },
    { songName: "Gerua", filePath: "songs1/12.mp3", coverPath: "covers/12.jpg" },
    { songName: "God Damn", filePath: "songs1/17.mp3", coverPath: "covers/17.jpg" },
    { songName: "Don't Mind-Young Stunners", filePath: "songs1/31.mp3", coverPath: "covers/Don't Mind-Young Stunners.jpg" },

    { songName: "Kya Baat Hai", filePath: "songs1/13.mp3", coverPath: "covers/13.jpg" },
    { songName: "Kya Mujhe Pyar Hai-K.K", filePath: "songs1/43.mp3", coverPath: "covers/Kya Mujhe Pyar Hai -K.K.jpg" },
    { songName: "Labon Ko(Bhool Bhulaiya) -KK", filePath: "songs1/44.mp3", coverPath: "covers/Labon Ko-KK.jpg" },
    { songName: "Sach Keh Raha Hai-KK", filePath: "songs1/60.mp3", coverPath: "covers/Sach Keh Raha Hai-KK.jpg" },

    { songName: "Akhiyaan Gulaab", filePath: "songs1/4.mp3", coverPath: "covers/1.jpg" },
    { songName: "Ve Haaniyaan", filePath: "songs1/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Piche Hut - Hassan Raheem", filePath: "songs1/58.mp3", coverPath: "covers/Piche Hut - Hassan Raheem.jpg" },

    { songName: "O Maahi", filePath: "songs1/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "We Don't Talk-Charlie Puth", filePath: "songs1/68.mp3", coverPath: "covers/We Don't Talk Anymore - Charlie Puth.jpg" },
    { songName: "Ve Jaan Waaleya", filePath: "songs1/10.mp3", coverPath: "covers/10.jpg" },

    { songName: "Blow Your Mind-Dua Lipa", filePath: "songs1/21.mp3", coverPath: "covers/Blow Your Mind-Dua Lipa.jpg" },
    { songName: "Levitating-Dua Lipa", filePath: "songs1/45.mp3", coverPath: "covers/Levitating-Dua Lipa.jpg" },
    { songName: "No Lie -Dua Lipa,Sean Paul", filePath: "songs1/55.mp3", coverPath: "covers/No Lie-Dua Lipa.jpg" },

    { songName: "We Rollin", filePath: "songs1/19.mp3", coverPath: "covers/19.jpg" },
    { songName: "White brown Black", filePath: "songs1/20.mp3", coverPath: "covers/20.jpg" },
    { songName: "Lovely - Billie Eilish,Khalid", filePath: "songs1/48.mp3", coverPath: "covers/Lovely-Billie Eilish.jpg" },

    { songName: "Closer-The Chainsmokers", filePath: "songs1/24.mp3", coverPath: "covers/Closer-The Chainsmokers.jpg" },
    { songName: "Takeaway-The Chainsmokers", filePath: "songs1/65.mp3", coverPath: "covers/Takeaway-The Chainsmokers.jpg" },
    { songName: "Dont Let Me Down-Chainsmokers", filePath: "songs1/30.mp3", coverPath: "covers/Don't Let Me Down-The Chainsmokers.jpg" },

    { songName: "Cake By The Ocean-DNCE", filePath: "songs1/23.mp3", coverPath: "covers/Cake By The Ocean-DNCE.jpg" },
    { songName: "Dancing Feet-DNCE", filePath: "songs1/26.mp3", coverPath: "covers/Dancing Feet-DNCE.jpg" },

    { songName: "Hymn For - Coldplay", filePath: "songs1/39.mp3", coverPath: "covers/Hymn For The Weekend-Coldplay.jpg" },
    { songName: "My Universe-Coldplay", filePath: "songs1/53.mp3", coverPath: "covers/My Universe-Coldplay.jpg" },

    { songName: "In the Dark - Swae Lee", filePath: "songs1/40.mp3", coverPath: "covers/In the Dark-Swae Lee.jpg" },
    { songName: "Sunflower-Swae Lee", filePath: "songs1/64.mp3", coverPath: "covers/Sunflower-Swae Lee.jpg" },

    { songName: "Let Me Kiss You - 1D", filePath: "songs1/42.mp3", coverPath: "covers/Kiss You-1D.jpg" },
    { songName: "What Makes You Beautiful-1D", filePath: "songs1/70.mp3", coverPath: "covers/What Makes You Beautiful-1D.jpg" },

    { songName: "Lucid Dreams-Juice WRLD", filePath: "songs1/50.mp3", coverPath: "covers/Lucid Dreams-Juice WRLD.jpg" },
    { songName: "Smile - Juice WRLD", filePath: "songs1/61.mp3", coverPath: "covers/Smile-Juice WRLD.jpg" },

    { songName: "Sorry - Justin Bieber", filePath: "songs1/62.mp3", coverPath: "covers/Sorry-Justin Bieber.jpg" },
    { songName: "Do You Mean-Justin Bieber", filePath: "songs1/69.mp3", coverPath: "covers/What Do You Mean-Justin Bieber.jpg" },

    { songName: "Copines-Aya Nakamura", filePath: "songs1/25.mp3", coverPath: "covers/Copines-Aya Nakamura.jpg" },
    { songName: "Djadja-Aya Nakamura", filePath: "songs1/29.mp3", coverPath: "covers/Djadja-Aya Nakamura.jpg" },

    { songName: "Hass Hass", filePath: "songs1/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Pal", filePath: "songs1/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Phele Bhi Mein", filePath: "songs1/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Tere Sang Ishq Hua", filePath: "songs1/8.mp3", coverPath: "covers/8.jpg" },   
    { songName: "Soulmate", filePath: "songs1/14.mp3", coverPath: "covers/14.jpg" },
    { songName: "saudebazi", filePath: "songs1/15.mp3", coverPath: "covers/15.jpg" },
    { songName: "Mind Relex", filePath: "songs1/16.mp3", coverPath: "covers/16.jpg" },
    { songName: "Softly", filePath: "songs1/18.mp3", coverPath: "covers/18.jpg" },  
    { songName: "Burning Down - EYK", filePath: "songs1/22.mp3", coverPath: "covers/Burning Down-Everyone You Know.jpg" },       
    { songName: "Desire-Years & Years", filePath: "songs1/27.mp3", coverPath: "covers/Desire-Years & Years.jpg" },
    { songName: "El Melouk-Ahmed Saad", filePath: "songs1/32.mp3", coverPath: "covers/El Melouk-Ahmed Saad.jpg" },
    { songName: "Excuses-Ap Dhillon", filePath: "songs1/33.mp3", coverPath: "covers/Excuses-Ap Dhillon.jpg" },
    { songName: "Formula - Labrinth", filePath: "songs1/34.mp3", coverPath: "covers/Formula-Labrinth.jpg" },
    { songName: "Goosebumps-Travis Scott", filePath: "songs1/35.mp3", coverPath: "covers/Goosebumps-Travis Scott.jpg" },
    { songName: "Head First-Christian French", filePath: "songs1/36.mp3", coverPath: "covers/Head First-Christian French.jpg" },
    { songName: "Heartburn(Remix) - Wafia", filePath: "songs1/37.mp3", coverPath: "covers/Heartburn-Wafia.jpg" },
    { songName: "Honeypie - JAWNY", filePath: "songs1/38.mp3", coverPath: "covers/Honeypie-JAWNY.jpg" },    
    { songName: "Kana Yaari Kaifi Khalil", filePath: "songs1/41.mp3", coverPath: "covers/Kana Yaari Kaifi Khalil.jpg" },
    { songName: "Lights Down Low-MAX", filePath: "songs1/46.mp3", coverPath: "covers/Lights Down Low-MAX.jpg" },
    { songName: "Love Nwantiti-CKay", filePath: "songs1/47.mp3", coverPath: "covers/Love Nwantiti-CKay.jpg" },
    { songName: "Michael Jackson-Lovin You", filePath: "songs1/49.mp3", coverPath: "covers/Loving You-Michael Jackson.jpg" },
    { songName: "Maikada - M. Samie", filePath: "songs1/51.mp3", coverPath: "covers/Maikada-Muhammad Samie.jpg" },
    { songName: "Mushk OST-Ali Zafar", filePath: "songs1/52.mp3", coverPath: "covers/Mushk OST-Ali Zafar.jpg" },
    { songName: "Mystery of Love-Sufjan Stevens", filePath: "songs1/54.mp3", coverPath: "covers/Mystery of Love-Sufjan Stevens.jpg" },
    { songName: "Passive-The Perfect Circle", filePath: "songs1/56.mp3", coverPath: "covers/Passive-The Perfect Circle.jpg" },
    { songName: "Peaky Blinder-Otnicka", filePath: "songs1/57.mp3", coverPath: "covers/Peaky Blinder-Otnicka.jpg" },
    { songName: "The Hot Stepper-Ini Kamoze", filePath: "songs1/66.mp3", coverPath: "covers/The Hot Stepper-Ini Kamoze.jpg" },
    { songName: "Vibe(2021) -Herman", filePath: "songs1/67.mp3", coverPath: "covers/Vibe-Herman.jpg" },
    { songName: "World Is Mine-Samm Henshaw", filePath: "songs1/71.mp3", coverPath: "covers/World Is Mine-Samm Henshaw.jpg" },
    { songName: "Без тебя я не я-JONY", filePath: "songs1/72.mp3", coverPath: "covers/Без тебя я не я-JONY.jpg" },
    { songName: "Right Round - Flo Rida", filePath: "songs1/59.mp3", coverPath: "covers/Right Round - Flo Rida.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    ProgressBar.value = progress;
})

ProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 71) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
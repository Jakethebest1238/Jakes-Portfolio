'use strict';



/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "./assets/images/No Spirit/poster-1.jpg",
    posterUrl: "./assets/images/No Spirit/poster-1.jpg",
    title: "Happy Moments",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "./assets/music/No Spirit/music-1.mp3",
  },
  {
    backgroundImage: "./assets/images/No Spirit/poster-2.jpg",
    posterUrl: "./assets/images/No Spirit/poster-2.jpg",
    title: "We Are Going To Be Ok",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Jhove",
    musicPath: "./assets/music/No Spirit/music-2.mp3",
  },
  {
    backgroundImage: "./assets/images/No Spirit/poster-3.jpg",
    posterUrl: "./assets/images/No Spirit/poster-3.jpg",
    title: "Winter Meadow",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x  juniorodeo",
    musicPath: "./assets/music/No Spirit/music-3.mp3",
  },
  {
    backgroundImage: "./assets/images/No Spirit/poster-4.jpg",
    posterUrl: "./assets/images/No Spirit/poster-4.jpg",
    title: "From Where We Started",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit",
    musicPath: "./assets/music/No Spirit/music-4.mp3",
  },
  {
    backgroundImage: "./assets/images/No Spirit/poster-5.jpg",
    posterUrl: "./assets/images/No Spirit/poster-5.jpg",
    title: "Where I Found You",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit",
    musicPath: "./assets/music/No Spirit/music-5.mp3",
  },
  {
    backgroundImage: "./assets/images/G.E.M/G.E.M Heartbeat.jpg",
    posterUrl: "./assets/images/G.E.M/G.E.M Heartbeat.jpg",
    title: "Long Distance",
    album: "Heartbeat",
    year: 2015,
    artist: "G.E.M.",
    musicPath: "./assets/music/G.E.M/G.E.M - 新的心跳 - 多遠都要在一起.mp3",
  },
    {
    backgroundImage: "./assets/images/G.E.M/G.E.M Time.jpg",
    posterUrl: "./assets/images/G.E.M/G.E.M Time.jpg",
    title: "11",
    album: "Time",
    year: 2023,
    artist: "G.E.M.",
    musicPath: "./assets/music/G.E.M/G.E.M - 11 - Time.mp3",
  },
  {
    backgroundImage: "./assets/images/高爾宣 OSN/OSNrap.jpg",
    posterUrl: "./assets/images/高爾宣 OSN/OSNrap.jpg",
    title: "Without You",
    album: "#osnrap",
    year: 2019,
    artist: "OSN",
    musicPath: "./assets/music/高爾宣 OSN/高爾宣 OSN - osnrap - Without You.mp3",
  },
  {
    backgroundImage: "./assets/images/陈雪凝/陈雪凝 - 绿色 - 绿色.jpg",
    posterUrl: "./assets/images/陈雪凝/陈雪凝 - 绿色 - 绿色.jpg",
    title: "绿色",
    album: "绿色",
    year: 2019,
    artist: "陈雪凝",
    musicPath: "./assets/music/陈雪凝/陈雪凝 - 绿色.mp3",
  },
  {
    backgroundImage: "./assets/images/吳青峰/吳青峰 - 加油，你是最棒的 -  起风了.jpg",
    posterUrl: "./assets/images/吳青峰/吳青峰 - 加油，你是最棒的 -  起风了.jpg",
    title: "起风了",
    album: "起风了",
    year: 2019,
    artist: "吳青峰",
    musicPath: "./assets/music/吳青峰/吳青峰 - 加油，你是最棒的 (电视原声带) - 起风了.mp3",
  },
  {
    backgroundImage: "./assets/images/En/En - 我走后 - 深情版.jpg",
    posterUrl: "./assets/images/En/En - 我走后 - 深情版.jpg",
    title: "我走后 (深情版)",
    album: "我走后 (深情版)",
    year: 2023,
    artist: "En",
    musicPath: "./assets/music/En/En - 我走后 - 深情版.mp3",
  },
  {
    backgroundImage: "./assets/images/Joey Yung/Joey Yung - 就让这大雨全都落下.jpg",
    posterUrl: "./assets/images/Joey Yung/Joey Yung - 就让这大雨全都落下.jpg",
    title: "就让这大雨全都落下",
    album: "就让这大雨全都落下",
    year: 2022,
    artist: "Joey Yung",
    musicPath: "./assets/music/Joey Yung/Joey Yung - 就让这大雨全都落下.mp3",
  },
  {
    backgroundImage: "./assets/images/Conor Maynard/Conor Maynard - You Broke Me First.jpg",
    posterUrl: "./assets/images/Conor Maynard/Conor Maynard - You Broke Me First.jpg",
    title: "You Broke Me First",
    album: "You Broke Me First",
    year: 2020,
    artist: "Conor Maynard",
    musicPath: "./assets/music/Conor Maynard/Conor Maynard - You Broke Me First.mp3",
  },
  {
    backgroundImage: "./assets/images/Distrion/Distrion - Alibi.jpg",
    posterUrl: "./assets/images/Distrion/Distrion - Alibi.jpg",
    title: "Alibi",
    album: "Alibi",
    year: 2020,
    artist: "Distrion",
    musicPath: "./assets/music/Distrion/Distrion - Alibi.mp3",
  },
  {
    backgroundImage: "./assets/images/Xaia/Xaia - Breakdown.jpg",
    posterUrl: "./assets/images/Xaia/Xaia - Breakdown.jpg",
    title: "Breakdown",
    album: "Breakdown",
    year: 2020,
    artist: "Xaia",
    musicPath: "./assets/music/Xaia/Xaia - Breakdown.mp3",
  },
  {
    backgroundImage: "./assets/images/girl in red/girl in red - we fell in love in october  October Passed Me By.jpg",
    posterUrl: "./assets/images/girl in red/girl in red - we fell in love in october  October Passed Me By.jpg",
    title: "we fell in love in october / October Passed Me By",
    album: "we fell in love in october",
    year: 2018,
    artist: "girl in red",
    musicPath: "./assets/music/girl in red/girl in red - we fell in love in october  October Passed Me By.mp3",
  },
  {
    backgroundImage: "./assets/images/elijah woods/elijah woods - look what i made.jpg",
    posterUrl: "./assets/images/elijah woods/elijah woods - look what i made.jpg",
    title: "be somebody",
    album: "look what i made",
    year: 2021,
    artist: "elijah woods",
    musicPath: "./assets/music/elijah woods/elijah woods - look what i made - be somebody.mp3",
  },
  {
    backgroundImage: "./assets/images/elijah woods/elijah woods - look what i made.jpg",
    posterUrl: "./assets/images/elijah woods/elijah woods - look what i made.jpg",
    title: "wildfire",
    album: "look what i made",
    year: 2021,
    artist: "elijah woods",
    musicPath: "./assets/music/elijah woods/elijah woods - look what i made - wildfire.mp3",
  },
  {
    backgroundImage: "./assets/images/elijah woods/elijah woods - someone new.jpg",
    posterUrl: "./assets/images/elijah woods/elijah woods - someone new.jpg",
    title: "someone new",
    album: "look what i made",
    year: 2021,
    artist: "elijah woods",
    musicPath: "./assets/music/elijah woods/elijah woods - look what i made - someone new.mp3",
  },
  {
    backgroundImage: "./assets/images/elijah woods/elijah woods - take care.jpg",
    posterUrl: "./assets/images/elijah woods/elijah woods - take care.jpg",
    title: "take care",
    album: "take care",
    year: 2021,
    artist: "elijah woods",
    musicPath: "./assets/music/elijah woods/elijah woods - take care.mp3",
  },
  {
    backgroundImage: "./assets/images/elijah woods/elijah woods - almost happy.jpg",
    posterUrl: "./assets/images/elijah woods/elijah woods - almost happy.jpg",
    title: "almost happy",
    album: "almost happy",
    year: 2022,
    artist: "elijah woods",
    musicPath: "./assets/music/elijah woods/elijah woods - almost happy.mp3",
  },
  {
    backgroundImage: "./assets/images/elijah woods/elijah woods - everything everywhere always.jpg",
    posterUrl: "./assets/images/elijah woods/elijah woods - everything everywhere always.jpg",
    title: "everything everywhere always",
    album: "everything everywhere always",
    year: 2022,
    artist: "elijah woods",
    musicPath: "./assets/music/elijah woods/elijah woods - everything everywhere always.mp3",
  },
  {
    backgroundImage: "./assets/images/elijah woods/elijah woods - fingers crossed.jpg",
    posterUrl: "./assets/images/elijah woods/elijah woods - fingers crossed.jpg",
    title: "fingers crossed",
    album: "fingers crossed",
    year: 2022,
    artist: "elijah woods",
    musicPath: "./assets/music/elijah woods/elijah woods - fingers crossed.mp3",
  },
  {
    backgroundImage: "./assets/images/elijah woods/elijah woods - ilu.jpg",
    posterUrl: "./assets/images/elijah woods/elijah woods - ilu.jpg",
    title: "ilu",
    album: "ilu",
    year: 2022,
    artist: "elijah woods",
    musicPath: "./assets/music/elijah woods/elijah woods - ilu.mp3",
  },
  {
    backgroundImage: "./assets/images/elijah woods/elijah woods - matthew.jpg",
    posterUrl: "./assets/images/elijah woods/elijah woods - matthew.jpg",
    title: "matthew",
    album: "matthew",
    year: 2022,
    artist: "elijah woods",
    musicPath: "./assets/music/elijah woods/elijah woods - matthew.mp3",
  },
  {
    backgroundImage: "./assets/images/elijah woods/elijah woods - the way that we started (taylor).jpg",
    posterUrl: "./assets/images/elijah woods/elijah woods - the way that we started (taylor).jpg",
    title: "the way that we started (taylor)",
    album: "the way that we started (taylor)",
    year: 2022,
    artist: "elijah woods",
    musicPath: "./assets/music/elijah woods/elijah woods - the way that we started (taylor).mp3",
  },
  {
    backgroundImage: "./assets/images/elijah woods/elijah woods - 247, 365.jpg",
    posterUrl: "./assets/images/elijah woods/elijah woods - 247, 365.jpg",
    title: "247, 365",
    album: "247, 365",
    year: 2023,
    artist: "elijah woods",
    musicPath: "./assets/music/elijah woods/elijah woods - 247, 365.mp3",
  },
  {
    backgroundImage: "./assets/images/elijah woods/elijah woods - bright orange everglow.jpg",
    posterUrl: "./assets/images/elijah woods/elijah woods - bright orange everglow.jpg",
    title: "fish on your line",
    album: "bright orange everglow",
    year: 2023,
    artist: "elijah woods",
    musicPath: "./assets/music/elijah woods/elijah woods - bright orange everglow - fish on your line.mp3",
  },
  {
    backgroundImage: "./assets/images/elijah woods/elijah woods - bright orange everglow.jpg",
    posterUrl: "./assets/images/elijah woods/elijah woods - bright orange everglow.jpg",
    title: "if you want love",
    album: "bright orange everglow",
    year: 2023,
    artist: "elijah woods",
    musicPath: "./assets/music/elijah woods/elijah woods - bright orange everglow - if you want love.mp3",
  },
  {
    backgroundImage: "./assets/images/elijah woods/elijah woods - bright orange everglow.jpg",
    posterUrl: "./assets/images/elijah woods/elijah woods - bright orange everglow.jpg",
    title: "last girl",
    album: "bright orange everglow",
    year: 2023,
    artist: "elijah woods",
    musicPath: "./assets/music/elijah woods/elijah woods - bright orange everglow - last girl.mp3",
  },
  {
    backgroundImage: "./assets/images/elijah woods/elijah woods - bright orange everglow.jpg",
    posterUrl: "./assets/images/elijah woods/elijah woods - bright orange everglow.jpg",
    title: "where were going",
    album: "bright orange everglow",
    year: 2023,
    artist: "elijah woods",
    musicPath: "./assets/music/elijah woods/elijah woods - bright orange everglow - where were going.mp3",
  },
  {
    backgroundImage: "./assets/images/elijah woods/elijah woods - last girl.jpg",
    posterUrl: "./assets/images/elijah woods/elijah woods - last girl.jpg",
    title: "last girl",
    album: "last girl",
    year: 2023,
    artist: "elijah woods",
    musicPath: "./assets/music/elijah woods/elijah woods - last girl.mp3",
  },
  {
    backgroundImage: "./assets/images/elijah woods/elijah woods - life after life.jpg",
    posterUrl: "./assets/images/elijah woods/elijah woods - life after life.jpg",
    title: "life after life",
    album: "life after life",
    year: 2023,
    artist: "elijah woods",
    musicPath: "./assets/music/elijah woods/elijah woods - life after life.mp3",
  },
  {
    backgroundImage: "./assets/images/elijah woods/elijah woods - make believe.jpg",
    posterUrl: "./assets/images/elijah woods/elijah woods - make believe.jpg",
    title: "make believe",
    album: "make believe",
    year: 2023,
    artist: "elijah woods",
    musicPath: "./assets/music/elijah woods/elijah woods - make believe.mp3",
  },
  {
    backgroundImage: "./assets/images/elijah woods/elijah woods - past life.jpg",
    posterUrl: "./assets/images/elijah woods/elijah woods - past life.jpg",
    title: "past life",
    album: "past life",
    year: 2023,
    artist: "elijah woods",
    musicPath: "./assets/music/elijah woods/elijah woods - past life.mp3",
  },
  {
    backgroundImage: "./assets/images/elijah woods/elijah woods - what if it was great.jpg",
    posterUrl: "./assets/images/elijah woods/elijah woods - what if it was great.jpg",
    title: "easier said",
    album: "what if it was great",
    year: 2023,
    artist: "elijah woods",
    musicPath: "./assets/music/elijah woods/elijah woods - what if it was great - easier said.mp3",
  },
  {
    backgroundImage: "./assets/images/elijah woods/elijah woods - what if it was great.jpg",
    posterUrl: "./assets/images/elijah woods/elijah woods - what if it was great.jpg",
    title: "phantom pain",
    album: "what if it was great",
    year: 2023,
    artist: "elijah woods",
    musicPath: "./assets/music/elijah woods/elijah woods - what if it was great - phantom pain.mp3",
  },
  {
    backgroundImage: "./assets/images/elijah woods/elijah woods - what if it was great.jpg",
    posterUrl: "./assets/images/elijah woods/elijah woods - what if it was great.jpg",
    title: "who you could be",
    album: "what if it was great",
    year: 2023,
    artist: "elijah woods",
    musicPath: "./assets/music/elijah woods/elijah woods - what if it was great - who you could be.mp3",
  },
];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);
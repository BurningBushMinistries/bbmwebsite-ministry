var songsToAdd = [
  {
    "name": "Terrain",
    "artist": "pg.lost",
    "album": "Key",
    "url": "https://521dimensions.com/songs/Terrain-pglost.mp3",
    "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/key.jpg"
  },
  // {
  //   "name": "Vorel",
  //   "artist": "Russian Circles",
  //   "album": "Guidance",
  //   "url": "https://521dimensions.com/songs/Vorel-RussianCircles.mp3",
  //   "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/guidance.jpg"
  // },
  // {
  //   "name": "Intro / Sweet Glory",
  //   "artist": "Jimkata",
  //   "album": "Die Digital",
  //   "url": "https://521dimensions.com/songs/IntroSweetGlory-Jimkata.mp3",
  //   "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/die-digital.jpg"
  // },
  // {
  //   "name": "Offcut #6",
  //   "artist": "Little People",
  //   "album": "We Are But Hunks of Wood Remixes",
  //   "url": "https://521dimensions.com/songs/Offcut6-LittlePeople.mp3",
  //   "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-but-hunks-of-wood.jpg"
  // },
  // {
  //   "name": "Dusk To Dawn",
  //   "artist": "Emancipator",
  //   "album": "Dusk To Dawn",
  //   "url": "https://521dimensions.com/songs/DuskToDawn-Emancipator.mp3",
  //   "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/from-dusk-to-dawn.jpg"
  // },
  // {
  //   "name": "Anthem",
  //   "artist": "Emancipator",
  //   "album": "Soon It Will Be Cold Enough",
  //   "url": "https://521dimensions.com/songs/Anthem-Emancipator.mp3",
  //   "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg"
  // }
];

Amplitude.init({
  "songs": [
    {
      "name": "Bush Camp Add",
      "artist": "Bush Camp Add",
      "album": "Burning Bush Ministries",
      "url": "http://docs.google.com/uc?export=open&id=1vSJ13LUCvUtisKsyeDPa5iKrPO0vk",
      "cover_art_url": "https://drive.usercontent.google.com/download?id=1gYTteuXcB7B7RRlyJf-Mk6wBH5WPedfW&export=open&authuser=0"
    },
    //  {
    //   "name": "CK Camp 2019",
    //   "artist": "Bishop L. Sidlayiya",
    //   "album": "Burning Bush Ministries",
    //   "url": "http://docs.google.com/uc?export=open&id=1vSJ13LUCvUtisKsyeDPa5iKrPO0vk",
    //   "cover_art_url": "http://docs.google.com/uc?export=open&id=1Y9lIoYA-hYluUjUJMP9lSwkwaH5mONOv"
    // },
    //  {
    //   "name": "Harvest 2019 - Session 2",
    //   "artist": "Bishop T. Sambudla",
    //   "album": "Burning Bush Ministries",
    //   "url": "http://docs.google.com/uc?export=open&id=1_ju858C6qLm-G_xXXgdGz7eSOF36ppPk",
    //   "cover_art_url": "http://docs.google.com/uc?export=open&id=1eNKHi3uRH7FlUllRntSect09VJzSdNVq"
    // },
    //  {
    //   "name": "Harvest 2019 - Session 3",
    //   "artist": "Bishop TD. Hermanus",
    //   "album": "Burning Bush Ministries",
    //   "url": "http://docs.google.com/uc?export=open&id=1wxt0Toc12qJWg0Y1GDKABDq04pNJRw3g",
    //   "cover_art_url": "http://docs.google.com/uc?export=open&id=1Mw0k7ZBaY4aLE01_4PKSdmimZ2ufgYFF"
    // },
    //  {
    //   "name": "Prayer Camp - Repentance",
    //   "artist": "Apostle T. Mcoteli",
    //   "album": "Burning Bush Ministries",
    //   "url": "http://docs.google.com/uc?export=open&id=1KOLEzbbwLUzESHKnH0ql-ISB7BbmysfM",
    //   "cover_art_url": "http://docs.google.com/uc?export=open&id=1KPnqcP018pcRHe_Md0s2OAyjI1Xl1rtu"
    // },
  ]
});


/*
  Shows the playlist
*/
document.getElementsByClassName('show-playlist')[0].addEventListener('click', function(){
  document.getElementById('white-player-playlist-container').classList.remove('slide-out-top');
  document.getElementById('white-player-playlist-container').classList.add('slide-in-top');
  document.getElementById('white-player-playlist-container').style.display = "block";
});

/*
  Hides the playlist
*/
document.getElementsByClassName('close-playlist')[0].addEventListener('click', function(){
  document.getElementById('white-player-playlist-container').classList.remove('slide-in-top');
  document.getElementById('white-player-playlist-container').classList.add('slide-out-top');
  document.getElementById('white-player-playlist-container').style.display = "none";
});

/*
  Gets all of the add to playlist buttons so we can
  add some event listeners to actually add to playlist.
*/
var addToPlaylistButtons = document.getElementsByClassName('add-to-playlist-button');

for( var i = 0; i < addToPlaylistButtons.length; i++ ){
  /*
    Add an event listener to the add to playlist button.
  */
  addToPlaylistButtons[i].addEventListener('click', function(){
    var songToAddIndex = this.getAttribute('song-to-add');

    /*
      Adds the song to Amplitude, appends the song to the display,
      then rebinds all of the AmplitudeJS elements.
    */
    var newIndex = Amplitude.addSong( songsToAdd[ songToAddIndex ] );
    appendToSongDisplay( songsToAdd[ songToAddIndex ], newIndex );
    Amplitude.bindNewElements();

    /*
      Removes the container that contained the add to playlist button.
    */
    var songToAddRemove = document.querySelector('.song-to-add[song-to-add="'+songToAddIndex+'"]');
    songToAddRemove.parentNode.removeChild( songToAddRemove );
  });
}

/*
  Appends the song to the display.
*/
function appendToSongDisplay( song, index ){
  /*
    Grabs the playlist element we will be appending to.
  */
  var playlistElement = document.querySelector('.white-player-playlist');

  /*
    Creates the playlist song element
  */
  var playlistSong = document.createElement('div');
  playlistSong.setAttribute('class', 'white-player-playlist-song amplitude-song-container amplitude-play-pause');
  playlistSong.setAttribute('data-amplitude-song-index', index);

  /*
    Creates the playlist song image element
  */
  var playlistSongImg = document.createElement('img');
  playlistSongImg.setAttribute('src', song.cover_art_url);

  /*
    Creates the playlist song meta element
  */
  var playlistSongMeta = document.createElement('div');
  playlistSongMeta.setAttribute('class', 'playlist-song-meta');

  /*
    Creates the playlist song name element
  */
  var playlistSongName = document.createElement('span');
  playlistSongName.setAttribute('class', 'playlist-song-name');
  playlistSongName.innerHTML = song.name;

  /*
    Creates the playlist song artist album element
  */
  var playlistSongArtistAlbum = document.createElement('span');
  playlistSongArtistAlbum.setAttribute('class', 'playlist-song-artist');
  playlistSongArtistAlbum.innerHTML = song.artist+' &bull; '+song.album;

  /*
    Appends the name and artist album to the playlist song meta.
  */
  playlistSongMeta.appendChild( playlistSongName );
  playlistSongMeta.appendChild( playlistSongArtistAlbum );

  /*
    Appends the song image and meta to the song element
  */
  playlistSong.appendChild( playlistSongImg );
  playlistSong.appendChild( playlistSongMeta );

  /*
    Appends the song element to the playlist
  */
  playlistElement.appendChild( playlistSong );
}

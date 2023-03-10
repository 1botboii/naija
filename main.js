/*==================== Menu sidebar ====================*/ 
const sidebar = document.querySelector('.sidebar');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');

function toggleSidebar() {
  sidebar.classList.toggle('active');
}

openBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 100) scrollUp.classList.add('show-scroll'); 
   else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)

/*==================== API ====================*/ 
const apiKey = "24b9c2cd";

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const moviesContainer = document.querySelector("#search-container");

function searchMovies(searchTerm) {
  moviesContainer.textContent = "";
  fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.Search) {
        data.Search.forEach((movie) => {
          const movieCard = `
          <div class="movie">
            <img src="${movie.Poster}" alt="${movie.Title}">      
            <div class="movie-info">
              <h3>${movie.Title}</h3>
              <p>${movie.Year}</p>
            </div>
          </div>
          `;
          moviesContainer.insertAdjacentHTML("beforeend", movieCard);  //http://www.omdbapi.com/?i=tt3896198&apikey=24b9c2cd
        });
      } else {
        const error = `
          <div class="error">
            <h3>No movies found....</h3>
          </div>
        `;
        moviesContainer.insertAdjacentHTML("beforeend", error);
      }
    });
}


// Load the YouTube API
/*let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: '3oIxZLUKYtI',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
function onPlayerReady(event) {
  event.target.playVideo();
}
function onPlayerStateChange(event) {
  // Do something when the player state changes
}

// Set up YouTube API
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// YouTube video ID
let videoID = "3oIxZLUKYtI";

// Create YouTube player object

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'qEVUtrk8_B4',
    playerVars: {
      'autoplay': 1,
      'controls': 0,
      'showinfo': 0,
      'rel': 0,
      'modestbranding': 1
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

// Pause video when mouse leaves
function onPlayerReady(event) {
  let playerElement = document.getElementById("player");
  let thumbnail = document.getElementById("thumbnail");
  thumbnail.addEventListener("mouseleave", function() {
    player.stopVideo();
    playerElement.style.display = "none";
    thumbnail.style.display = "block";
  });
}

// Play video when mouse enters
function onThumbnailHover(event) {
 let playerElement = document.getElementById("player");
 let thumbnail = document.getElementById("thumbnail");
  thumbnail.style.display = "none";
  playerElement.style.display = "block";
  player.playVideo();
}*/







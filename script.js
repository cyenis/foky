// Define an array of fortune cookie messages
let fortunes = [
  "You're the star of the cosmic show, honey. The universe is your stage, so strut your stuff!",
  "Like a vinyl record, you've got a side A and side B. Don't be afraid to flip the disc and surprise them all.",
  "Remember, even on your lowest days, you've still got that groove. Don't let the world mute your music.",
  "The rhythm of the universe is inside you. Dance to your own beat, not anyone else's.",
  "Like the brightest disco ball, your sparkle can light up any room. Don't let anyone dim your shine.",
  "Life's a dance floor. Sometimes you lead, sometimes you follow, but you always keep moving.",
  "You're a psychedelic masterpiece in a world of black and white. Keep those colors shining, baby.",
  "In the grand cosmic jukebox, your song is one of a kind. Play it loud, play it proud.",
  "Life can be a tough crowd, darling. But remember, you're here to sing your song, not to win applause.",
  "Even when you stumble on life's dance floor, make it part of your dance. Strut your stuff, baby!",
  "Like the best bass line, you're the heartbeat that keeps the world dancing. Keep the rhythm flowing.",
  "Your aura is a tie-dye rainbow. Radiate positivity and you'll color the world beautiful.",
  "When life turns down the volume, pump up the bass. Your music is worth hearing, baby.",
  "Your journey is a road trip through the stars. Enjoy the ride, even when the road gets bumpy.",
  "The universe is your dance partner. When it takes the lead, follow with grace and style.",
  "Keep your spirit funky and your heart full. Your vibe is a magnet for miracles.",
  "Disco queen, don't wait for the spotlight. Dance like the whole universe is your stage.",
  "Every day is a new track on the album of your life. Make it a hit, darling.",
  "In the DJ booth of life, you control the mix. Blend the highs and lows into your perfect groove.",
  "You're a cosmic melody in a symphony of stars. Keep playing your tune, the universe is listening.",
  "Dance to the beat of your dreams, not the noise of the world.",
  "You're the DJ of your life. Mix it up and keep it groovy, baby.",
  "Your vibe is a masterpiece, painted with the colors of the cosmos.",
  "Like a disco ball in the night, you're here to reflect light and spark joy.",
  "When you hit a sour note, don't stop the song. Make it part of your melody.",
  "Your life's a cosmic jam session. Play loud, play proud, and keep the rhythm.",
  "You're the star of your show. Don't let anyone steal your spotlight.",
  "When the world gives you a beat, dance. When it doesn't, make your own.",
  "Your spirit is a psychedelic rainbow. Let it shine, let it shine, let it shine!",
  "In the orchestra of life, you're the conductor. Make it a symphony, darling.",
  "You've got a groove that can't be silenced. Play your tune, baby!",
  "Life's a song, love's the lyrics. Keep the melody sweet, and the beat strong.",
  "When life turns down the lights, dance in the dark. Your glow can light up the world.",
  "In the cosmic dance of life, you've got the best moves. Strut your stuff!",
  "In the grand concert of the universe, your voice matters. Sing out, sing proud.",
  "You're not just a star, you're a whole galaxy. Shine on, darling, shine on.",
  "Like the finest vinyl, you're classic and cool. Keep spinning, baby.",
  "Life's a party, love's the guest of honor. Keep the celebration going, darling.",
  "You're a cosmic queen in a universe of royalty. Wear your crown with pride.",
  "Like the greatest hit, your life is a chart-topper. Keep the record spinning.",
  "Your groove is infectious, darling. Spread that vibe!",
  "Shine like the universe is your personal spotlight.",
  "Don't let life's hiccups throw off your rhythm. Keep the beat going!",
  "Your cosmic energy is a gift to the world. Keep on shining!",
  "Life is a song written by you. Make every note count, baby!",
  "You're a shining star in the vast cosmic disco. Never stop dancing.",
  "You're the leading act in the concert of life. Rock the stage!",
  "In life's grand jam, your solo makes all the difference. Play it loud!",
  "Let your love radiate like the brightest star in the cosmic dance.",
  "You've got the rhythm to turn any setback into a comeback. Dance on!",
  "Don't let the world dim your light. You're a star, baby!",
  "In the symphony of life, every instrument has its place. Play your part to perfection.",
  "Your vibe is like a tune that everyone wants to dance to. Keep the record spinning!",
  "Life's a cosmic boogie. Keep moving to your rhythm.",
  "The groove of your spirit is the song of your soul. Keep it funky!",
  "Remember, life's a disco and you're the queen. Rule with style!",
  "The rhythm of life is all around you. Tap into it, and dance your dance.",
  "Life's a stage, and you're the star. Shine bright, baby!",
  "Just like the grooviest tune, your spirit lights up any room.",
  "The universe is your dance floor. Get out there and strut your stuff!",
  "You're a cosmic disco queen. Keep the party going, darling!",
  "In the grand show of life, you're a headliner. Own it!",
  "Let your soul dance to the rhythm of the cosmos. You're a star!",
  "Life's a cosmic gig. Play your part with passion.",
  "Remember, you're the one who sets the groove. Keep it funky!",
  "You're a shooting star in the cosmos of life. Keep soaring!",
  "Life's a song. Make sure your part is worth remembering.",
  "In the universe's melody, your tune is unique. Play it with pride!",
  "Your rhythm is the heartbeat of the cosmos. Keep it steady, keep it strong.",
  "You're a bright light in the cosmic disco. Keep shining!",
  "Life may be a wild ride, but you're the one in the driver's seat. Steer with confidence.",
  "You're the main act in the gig of life. Rock on!",
  "Keep your vibe high and your groove steady. You're a cosmic superstar!",
  "In the universe's grand orchestra, your solo is a showstopper.",
  "Your rhythm is a cosmic beacon. Keep shining your light, baby!",
  "You're a shooting star in the cosmic dance. Keep dazzling, darling!",
  "In life's grand mix, your beat is unique. Keep it pumping!",
  "You're a cosmic melody in the grand symphony of life. Keep playing!",
  "Your groove is the soundtrack to life's best moments. Keep it playing!",
  "You're a disco queen in the grand dance of life. Keep spinning!"

];


// Get a random fortune from the array
function getRandomFortune() {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomIndex];
}

// Shake the cookie image for the given duration in milliseconds
function shakeCookie(duration) {
  const cookieImg = document.getElementById('cookie-img');
  cookieImg.classList.add('shake');

  setTimeout(() => {
      cookieImg.classList.remove('shake');
      showFortune();
  }, duration);
}

// Show the fortune and change the cookie image when clicked
function showFortune() {
  const fortuneText = document.getElementById('fortune-text');
  const cookieImg = document.getElementById('cookie-img');

  if (fortuneText.classList.contains('hidden')) {
      const randomFortune = getRandomFortune();
      fortuneText.textContent = randomFortune;
      fortuneText.classList.remove('hidden');
  } else {
      fortuneText.classList.add('hidden');
      const randomFortune = getRandomFortune();
      fortuneText.textContent = randomFortune;
  }
}

// Handle cookie click event
function handleCookieClick() {
  const cookieImg = document.getElementById('cookie-img');

  if (!cookieImg.classList.contains('shake')) {
      shakeCookie(1000);
  }
}

// Save the Instagram story as an image
function saveInstagramStory() {
  const storyContainer = document.querySelector('.instagram-story');

  html2canvas(storyContainer)
    .then(canvas => {
      const context = canvas.getContext('2d');

      // Save the canvas as an image
      const imageDataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imageDataUrl;
      link.download = 'instagram-story.png';
      link.click();
    })
    .catch(error => {
      console.error('Error generating Instagram story image:', error);
    });
}


// Attach event listeners
const cookieImg = document.getElementById('cookie-img');
const saveButton = document.getElementById('save-button');

cookieImg.addEventListener('click', handleCookieClick);
saveButton.addEventListener('click', saveInstagramStory);

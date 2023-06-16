// Define an array of fortune cookie messages
let fortunes = [
  "You're a mixtape of cosmic love. Keep spreading those feel-good vibes.",
  "Your spirit is like a psychedelic painting, full of unexpected twists and vibrant colors. Keep creating your masterpiece.",
  "Your heart beats in rhythm with the universe. Dance to your own drum and never miss a beat.",
  "On the stage of life, every prop matters, including you. Play your part and make it memorable.",
  "Your love is like a disco ball, scattering beautiful light in all directions. Keep on shining, darling!",
  "Life's a cosmic party, and you're the DJ. Mix it up and keep the crowd moving!",
  "The universe grooves to the beat of your drum. Keep on drumming, darling!",
  "Life might not always be a smooth ride, but remember, even roller coasters can be fun.",
  "Life's not about waiting for the storm to pass, it's about learning to dance in the rain. So go on, dance like no one's watching!",
  "Just like a funk record, the flip side of your challenges often holds a catchy tune. Keep spinning and stay open to the surprises.",
  "You're a tune that gets stuck in the universe's head. Keep playing and never go out of style.",
  "Just like a concert, life is about making beautiful music, not about avoiding the wrong notes.",
  "Like a classic album, your life has tracks of highs and lows. Every note adds to the symphony.",
  "Even when life gets offbeat, you have the power to bring back the rhythm. Stay groovy, darling!",
  "You're the universe's favorite track on repeat. Stay unique and never stop playing your tune.",
  "Keep spinning, even when life scratches the record. Your music is worth playing.",
  "You're a cosmic rhythm that the universe loves to dance to. Keep the party alive!",
  "Your life is a playlist of memorable moments. Cherish each one and keep adding new tracks.",
  "Your spirit is like a mixtape the universe can't stop playing. Keep adding new vibes.",
  "Life's like a jukebox: sometimes you have to insert a coin to play your favorite tune. Keep playing, darling!",
  "Don't let life's tempo rush you. It's okay to groove at your own pace.",
  "Just like a vinyl record, every spin you take in life adds to your unique music. Keep spinning!",
  "Your soul is like a disco, full of energy and vibrant colors. Keep the party going!",
  "Life may not always be a hit record, but every track adds to your story. Keep playing!",
  "Remember, even when the record skips, the music plays on. Stay strong and keep dancing!",
  "Life can be a roller disco - it might get shaky, but the key is to keep rolling and enjoy the ride.",
  "When life gets too heavy, let the rhythm lift you up. Dance like there's no tomorrow!",
  "Even the best mixtapes have a few sad songs. It's okay to feel the blues as long as you keep playing.",
  "When life feels like a broken record, remember you have the power to change the tune.",
  "Remember, even a silent pause is a part of the music. Embrace life's quiet moments too.",
  "Your energy is like a cosmic disco, illuminating the universe. Keep glowing!",
  "You're a radiant light in the disco of life. Don't let anyone dim your glow.",
  "When life tries to mute your music, turn up the volume. Your tune is worth listening to.",
  "Like a record player, life spins round and round. It's your choice to dance or sit this one out.",
  "Your spirit is a radiant melody. Sing it loud for the universe to hear.",
  "You're a groove that keeps the universe dancing. Stay vibrant and keep the rhythm alive.",
  "Life's a dance - it's not about the steps but about the joy of movement. Keep dancing!",
  "You're a cosmic star in life's grand disco. Shine bright and light up the dance floor.",
  "Remember, you're a vital part of the cosmic orchestra. Without your tune, the music wouldn't be complete.",
  "You're a symphony of stardust in the cosmic concert. Keep playing your unique notes.",
  "Your spirit is like a kaleidoscope - ever changing and always dazzling. Keep shining!",
  "Just like a concert ticket, life gives you access to a myriad of experiences. Savor each moment.",
  "Life's like a jam session - spontaneous, energetic, and full of improvisation. Keep on jamming!",
  "In the club of life, you're the main attraction. Keep the crowd entertained, darling!",
  "You're like the best improv jazz - unexpected, exciting, and totally unique.",
  "Remember, the best grooves are often unscripted. Stay spontaneous, baby!",
  "Your life is like a playlist - unique to you and always evolving. Keep adding new tunes.",
  "In life's grand orchestra, your part is vital. Make every note count!",
  "When life hands you a broken record, use it as a chance to write a new song.",
  "Just like a bass line, you add depth and rhythm to the song of life. Keep on grooving!",
  "Don't just join the cosmic dance - add your own unique moves.",
  "Your journey is like a road trip playlist - each song captures a moment. Savor the ride!",
  "You're the universe's favorite track. Keep playing and never fade out.",
  "When life gets offbeat, adjust your rhythm instead of losing your groove.",
  "In life's concert, your melody makes a difference. Keep strumming to your unique beat.",
  "You're a timeless classic in the jukebox of life. Keep on spinning, darling!",
  "Your life is like an improv jam - unexpected but harmonious. Keep making beautiful music!",
  "Life's not about getting the notes right, it's about enjoying the song. Play it loud and proud!",
  "Your life's melody is unique to you. Sing it loud, sing it proud!",
  "In life's grand opera, your aria is unique. Keep singing your song.",
  "Life's a cosmic concert and you're the star act. Shine on!",
  "Like a classic vinyl, your journey has its own unique grooves. Embrace each spin.",
  "Your vibe is a hit song that never gets old. Keep playing, the universe is listening.",
  "Remember, even a cosmic orchestra needs silence between the notes. Embrace life's quiet moments too.",
  "When life's rhythm gets chaotic, find your inner groove and dance to your own beat.",
  "Your journey is like a hit record - full of highs and lows but ultimately a masterpiece.",
  "You're the DJ of your life. Don't be afraid to remix your journey when you need to.",
  "Even when life gets scratchy, remember you have the power to smooth out the grooves.",
  "Your spirit is a cosmic melody that adds harmony to the universe. Keep playing your tune.",
  "You're a hit song in the universe's playlist. Keep spinning and never stop the music.",
  "Every step you take is a step towards becoming. Keep walking, keep growing.",
  "You're a seed turning into a giant tree. Your growth might be slow, but it's significant.",
  "Just like a river, you're always moving, always changing. Embrace the flow of growth.",
  "You're an explorer in the wilderness of life. Each new experience is a chance to learn and grow.",
  "Life is like a book and you're the author. Each chapter brings growth and change. Keep writing your story.",
  "You're a sculptor and life is your stone. With each stroke, you reveal more of your true self.",
  "Like a climber ascending a mountain, every step brings you closer to your peak. Keep climbing.",
  "You're a boat on the ocean of life. Even when the waters get rough, you're learning how to sail.",
  "You're a gardener in the garden of life. Each seed you plant is a step towards growth.",
  "Every sunrise is a chance for a fresh start and new growth. Seize the day!",
  "You're a traveler on the journey of life. Every mile you walk is a chance to grow.",
  "Like a butterfly, you're constantly evolving, constantly transforming. Embrace the change.",
  "Every challenge you face is like a wind that propels your sail. Keep sailing towards growth.",
  "Your journey is unique to you. Honor your path and acknowledge your growth.",
  "Life is like a puzzle, and every piece you fit adds to your picture. Keep growing.",
  "Like a tree, you're deeply rooted but reaching for the sky. Celebrate your growth.",
  "Remember, even when progress feels slow, you're still moving forward. Keep growing.",
  "Every lesson life throws at you is a stepping stone on the path of growth. Keep stepping.",
  "You're a hiker on the trail of life. Each step forward is progress. Keep moving.",
  "Like a vine, you're always reaching, always growing. Embrace your upward journey.",
  "Every day you grow is a day you glow. Keep shining on your path.",
  "Remember, growth comes in many forms. Not all progress is visible to the eye.",
  "Like a flower, you're unfolding and growing each day. Celebrate each moment of bloom.",
  "You're a masterpiece in progress. Each stroke on the canvas of life adds to your growth.",
  "Growth isn't always linear. It's okay to take a step back before leaping forward.",
  "Like a wave, you're part of the ocean of life. Each ebb and flow is a chance to grow.",
  "Remember, even the tallest tree started as a seed. Honor each stage of your growth.",
  "You're a star in the universe of life. Each twinkle is a moment of growth.",
  "Each challenge you overcome is a rung on the ladder of growth. Keep climbing.",
  "You're a student in the school of life. Every lesson learned is a step towards growth."
];


function getRandomFortune() {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomIndex];
}

function shakeCookie(duration) {
  const cookieImg = document.getElementById('cookie-img');
  cookieImg.classList.add('shake');

  setTimeout(() => {
    cookieImg.classList.remove('shake');
    showFortune();
  }, duration);
}

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

function handleCookieClick() {
  const cookieImg = document.getElementById('cookie-img');

  if (!cookieImg.classList.contains('shake')) {
    shakeCookie(1000);
  }
}

async function shareInstagramStory() {
  const storyContainer = document.querySelector('.instagram-story');

  const canvas = await html2canvas(storyContainer);
  canvas.toBlob(async function (blob) {
    const filesArray = [
      new File([blob], 'instagram-story.png', {
        type: 'image/png',
        lastModified: new Date().getTime(),
      }),
    ];

    const shareData = {
      title: 'My Instagram Story',
      files: filesArray,
    };

    if (navigator.canShare && navigator.canShare(shareData)) {
      await navigator.share(shareData).catch((error) => {
        console.log('Error sharing:', error);
      });
    } else {
      // Fallback to download image if sharing is not supported
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'instagram-story.png';
      link.click();
    }
  }, 'image/png');
}


const cookieImg = document.getElementById('cookie-img');
const saveButton = document.getElementById('save-button');

cookieImg.addEventListener('click', handleCookieClick);
saveButton.addEventListener('click', shareInstagramStory);

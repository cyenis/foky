// Define an array of fortune cookie messages
const fortunes = [
    "A journey of a thousand miles begins with a single step.",
    "You will find luck on your side today.",
    "All your hard work will soon pay off.",
    "An exciting opportunity is coming your way.",
    "Your future looks bright and promising."
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
  
  // Attach the handleCookieClick function to the cookie image click event
  const cookieImg = document.getElementById('cookie-img');
  cookieImg.addEventListener('click', handleCookieClick);
  
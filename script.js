let click = 0;
const nom = document.getElementById('name');

nom.addEventListener('click', () => {
  click++;
  if (click === 3) {
    window.location.href = "aboutme.html";
  }
  setTimeout(() => {
    click = 0;
  }, 1000);
});


// partie la plus galère a faire heuresement chat est la pour AIDER
const entry = document.getElementById('suprise-samourai');
const profilePic = document.getElementById('profile-picture'); 
let glitchActivated = false;

entry.addEventListener("input", () => {
  const value = entry.value.toLowerCase();

  if (value === "samourai" && !glitchActivated) {
    glitchActivated = true;
    document.body.classList.add("glitch-mode");

    // Changement de photo de profile
    if (profilePic) {
      profilePic.src = "img/persoNWAR.png"; 
    }

    const interval = setInterval(() => {
      const ninja = document.createElement("img");
      ninja.src = "img/de7hgfj-73351a4c-a268-4b17-912e-c1ef83ea61ad.webp";
      ninja.classList.add("glitch-img");

      ninja.style.left = `${Math.random() * 100}vw`;
      ninja.style.top = `-${Math.random() * 200}px`;
      ninja.style.transform = `rotate(${Math.random() * 360}deg)`;

      document.body.appendChild(ninja);

      setTimeout(() => ninja.remove(), 6000);
    }, 200);

    
    entry.dataset.intervalId = interval;

  } else if (value !== "samourai" && glitchActivated) {
    glitchActivated = false;
    document.body.classList.remove("glitch-mode");

    // Retour a photo de base 
    if (profilePic) {
      profilePic.src = "img/IMG_0568.JPG"; 
    }

    document.querySelectorAll(".glitch-img").forEach(img => img.remove());

    
    clearInterval(entry.dataset.intervalId);
    delete entry.dataset.intervalId;
  }
});













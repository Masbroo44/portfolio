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


const entry = document.getElementById('suprise-samourai');
const ghost = document.getElementById('ghost');

entry.addEventListener("input", () => {
  if (entry.value.toLowerCase().trim() === "samourai") {
    ghost.style.display = "block";
  } else {
    ghost.style.display = "none";
  }
});




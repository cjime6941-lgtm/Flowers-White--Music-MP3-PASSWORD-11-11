onload = () => {
  document.body.classList.add("container");
};

function unlock() {
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (pass === "11:11") {
    document.getElementById("lock-screen").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("lock-screen").remove();
      document.body.classList.remove("container");
      startSparkles();
      playMusic();
    }, 800);
  } else {
    error.style.display = "block";
  }
}
function startSparkles() {
  setInterval(() => {
    const spark = document.createElement("div");
    spark.className = "sparkle";
    spark.style.left = Math.random() * 100 + "vw";
    spark.style.bottom = "0";
    document.body.appendChild(spark);

    setTimeout(() => spark.remove(), 3000);
  }, 200);
}
function playMusic() {
  const music = document.getElementById("bg-music");
  music.volume = 0.4;
  music.play().catch(() => {});
}
const music = document.getElementById("bg-music");

music.addEventListener("timeupdate", () => {
  const beat = music.currentTime % 0.6;

  if (beat < 0.05) {
    document.querySelectorAll(".heart").forEach(h => {
      h.style.animation = "none";
      h.offsetHeight;
      h.style.animation = "heart-beat 0.6s ease-in-out";
    });
  }
});


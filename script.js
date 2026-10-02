const ids = [1, 2, 3, 4, 5, 6, 7, 8];

function go(n) {
  ids.forEach((i) => {
    document.getElementById("p" + i).classList.remove("active");
  });

  document.getElementById("p" + n).classList.add("active");

  if (n === 4) {
    spawn();
  }
}

/* PASSWORD */

function unlock() {
  const value = document.getElementById("pass").value;

  if (value.trim()) {
    go(2);
  } else {
    document.getElementById("msg").textContent =
      "A secret password first, my love 💗";
  }
}

function tease() {
  document.getElementById("msg").textContent =
    "That “No” is cute… but the birthday surprise is waiting 😌❤️";
}

/* CAKE */

function blow() {
  document.getElementById("cake").classList.add("off");

  setTimeout(() => {
    go(4);
  }, 900);
}

/* BALLOON WISHES */

function spawn() {
  const box = document.getElementById("balloons");

  box.innerHTML = "";

  const wishes = [
    "You are so precious 💗",

    "Your smile is my favorite ✨",

    "May your heart stay happy 🌷",

    "You deserve all the love 🫶",

    "Keep shining, beautiful 🌙",

    "May every dream come true 🤍",

    "You make life sweeter 🍓",

    "Sending you a warm hug 🫂",

    "You are deeply cared for ❤️",

    "Happy birthday, my love 🎂",
  ];

  wishes.forEach((wish, i) => {
    const balloon = document.createElement("span");

    balloon.className = "balloon";

    balloon.textContent = "🎈";

    balloon.style.left = 3 + i * 10 + "%";

    balloon.style.bottom = 8 + (i % 4) * 17 + "%";

    balloon.title = wish;

    balloon.addEventListener("click", () => {
      if (balloon.classList.contains("popped")) {
        return;
      }

      balloon.classList.add("popped");

      setTimeout(() => {
        balloon.remove();

        const remaining = box.querySelectorAll(".balloon").length;

        if (remaining === 0) {
          const note = document.createElement("div");

          note.className = "small";

          note.style.cssText =
            "position:absolute;" +
            "left:50%;" +
            "bottom:8%;" +
            "transform:translateX(-50%);" +
            "font-size:18px;" +
            "color:#ffd9e7;" +
            "width:90%;" +
            "z-index:4;";

          note.textContent = "All your little wishes have been opened. 💗✨";

          box.appendChild(note);
        }
      }, 300);
    });

    box.appendChild(balloon);
  });
}

/* FLOATING HEARTS */

setInterval(() => {
  if (Math.random() > 0.45) {
    const heart = document.createElement("div");

    heart.className = "heart";

    heart.textContent = "❤";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.bottom = "-20px";

    heart.style.fontSize = 14 + Math.random() * 25 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }
}, 900);

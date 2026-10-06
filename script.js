const button = document.getElementById("loveButton");
const surprise = document.getElementById("surprise");

button.addEventListener("click", () => {
    surprise.classList.toggle("show");

    button.textContent = surprise.classList.contains("show")
        ? "Close my little surprise ♡"
        : "Open my little surprise 💌";
});

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6500);
}

setInterval(createHeart, 900);

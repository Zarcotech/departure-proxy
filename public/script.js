document.getElementById("toggleBtn").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("collapsed");
    document.getElementById("content").classList.toggle("collapsed");
});

document.getElementById("panic").addEventListener("click", () => {
    window.location.href = "/panic";
});

document.addEventListener('DOMContentLoaded', () => {
    VANTA.NET({
        el: "#bg",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x1e90ff,
        backgroundColor: 0x000000
    });
});

document.getElementById("gamesTab").addEventListener("click", function () {
    document.getElementById("games").style.display = "block";
    document.getElementById("content").style.display = "none";

    document.getElementById("sidebar").classList.remove("collapsed");

    document.getElementById("games").classList.add("with-sidebar");
});

document.getElementById("departTab").addEventListener("click", function () {
    document.getElementById("content").style.display = "block";
    document.getElementById("games").style.display = "none";

    document.getElementById("sidebar").classList.remove("collapsed");
});
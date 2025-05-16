document.getElementById("panic").addEventListener("click", () => {
    window.location.replace("https://google.com");
});

document.getElementById("settingsTab").addEventListener("click", () => {
    document.getElementById("settings").style.display = "inline";
    document.getElementById("content").style.display = "none";
});

document.getElementById("homeTab").addEventListener("click", () => {
    document.getElementById("content").style.display = "flex";
    document.getElementById("settings").style.display = "none";
});

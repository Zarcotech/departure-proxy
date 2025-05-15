document.getElementById("panic").addEventListener("click", () => {
    window.location = "https://google.com";
});

document.getElementById("settingsTab").addEventListener("click", () => {
    document.getElementById("settings").style.display = "block";
    document.getElementById("content").style.display = "none";
})

document.getElementById("homeTab").addEventListener("click", () => {
    document.getElementById("content").style.display = "block";
    document.getElementById("settings").style.display = "none";
})

document.getElementById("toggleBtn").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("collapsed");
    document.getElementById("content").classList.toggle("collapsed");
});

document.getElementById("panic").addEventListener("click", () => {
    window.location.href = "https://google.com";
});

document.getElementById("settingsTab").addEventListener("click", function () {
    document.getElementById("settings").style.display = "block";
    document.getElementById("content").style.display = "none";

    document.getElementById("sidebar").classList.remove("collapsed");

    document.getElementById("settings").classList.add("with-sidebar");
});

document.getElementById("departTab").addEventListener("click", function () {
    document.getElementById("content").style.display = "block";
    document.getElementById("settings").style.display = "none";

    document.getElementById("sidebar").classList.remove("collapsed");
});

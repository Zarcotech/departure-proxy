document.getElementById("toggleBtn").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("collapsed");
    document.getElementById("content").classList.toggle("collapsed");
});

document.getElementById("panic").addEventListener("click", () => {
    window.location.href = "https://google.com";
});

document.getElementById("appsTab").addEventListener("click", function () {
    document.getElementById("apps").style.display = "block";
    document.getElementById("content").style.display = "none";

    document.getElementById("sidebar").classList.remove("collapsed");

    document.getElementById("apps").classList.add("with-sidebar");
});

document.getElementById("departTab").addEventListener("click", function () {
    document.getElementById("content").style.display = "block";
    document.getElementById("apps").style.display = "none";

    document.getElementById("sidebar").classList.remove("collapsed");
});

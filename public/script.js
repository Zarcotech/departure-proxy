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

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("proxyTab").addEventListener("click", () => {
        document.getElementById("proxy").style.display = "inline";
        document.getElementById("themes").style.display = "none";
        document.getElementById("credits").style.display = "none";
    })

    document.getElementById("themesTab").addEventListener("click", () => {
        document.getElementById("proxy").style.display = "none";
        document.getElementById("themes").style.display = "block";
        document.getElementById("credits").style.display = "none";
    })

    document.getElementById("creditsTab").addEventListener("click", () => {
        document.getElementById("proxy").style.display = "none";
        document.getElementById("themes").style.display = "none";
        document.getElementById("credits").style.display = "inline";
    })

    document.getElementById("saveBtn").addEventListener("click", showNotiSave);
})

function showNotiReset() {
    document.getElementById("notification").style.display = "flex";
}

function showNotiSave() {
    document.getElementById("notificationSave").style.display = "flex";
    document.body.classList.add("noscroll");
    setTimeout(() => {
        document.getElementById("notificationSave").style.display = "none";
        document.body.classList.remove("noscroll");
    }, 2000);
}

document.getElementById("close").addEventListener("click", () => {
    document.getElementById("notification").style.display = "none";
})

document.getElementById("closeSave").addEventListener("click", () => {
    document.getElementById("notificationSave").style.display = "none";
    document.body.classList.remove("noscroll");
});

function lightTheme(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#20242b";    
}

const sidebar2 = document.getElementById("settingsSidebar");
if (sidebar2) {
    sidebar2.addEventListener("mouseenter", () => {
        document.body.classList.add("noscroll");
    });
    sidebar2.addEventListener("mouseleave", () => {
        document.body.classList.remove("noscroll");
    });
}

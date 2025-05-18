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
        document.getElementById("themes").style.display = "flex";
        document.getElementById("credits").style.display = "none";
    })

    document.getElementById("creditsTab").addEventListener("click", () => {
        document.getElementById("proxy").style.display = "none";
        document.getElementById("themes").style.display = "none";
        document.getElementById("credits").style.display = "inline";
    })

    document.getElementById("saveBtn").addEventListener("click", showNotiSave);

    const defaultThemeBtn = document.getElementById("defaultThemeBtn");
    if (defaultThemeBtn) {
        defaultThemeBtn.addEventListener("click", defualtTheme);
    }
    const lightThemeBtn = document.getElementById("lightThemeBtn");
    if (lightThemeBtn) {
        lightThemeBtn.addEventListener("click", lightTheme);
    }
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
    document.body.classList.remove("noscroll");
});

function defualtTheme() {
    fetch('/themes')
        .then(response => response.json())
        .then(data => {
            if (data && Array.isArray(data.themes) && data.themes.length > 0) {
                const theme = data.themes[0];
                document.body.style.setProperty('--theme-bg', theme.background);
                document.body.style.setProperty('--theme-color', theme.color);
            }
        });
}

function lightTheme() {
    fetch('/themes')
        .then(response => response.json())
        .then((data) => {
            if (data && Array.isArray(data.themes) && data.themes.length > 1) {
                const theme = data.themes[1];
                document.body.style.setProperty('--theme-bg', theme.background);
                document.body.style.setProperty('--theme-color', theme.color);
            }
        });
}

function darkTheme() {
    fetch('/themes')
        .then(response => response.json())
        .then(data => {
            if (data && Array.isArray(data.themes) && data.themes.length > 0) {
                const theme = data.themes[0];
                document.body.style.setProperty('--theme-bg', theme.background);
                document.body.style.setProperty('--theme-color', theme.color);
            }
        });
}

darkTheme();

document.body.classList.add("noscroll");

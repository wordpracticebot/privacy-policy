const btn = document.getElementById("dark-theme-btn");
const body = document.body;

window.onload = function () {
    if (localStorage.getItem("theme") === "dark-theme") {
        body.className += " dark-theme";
        btn.innerHTML = "💡";
    }
};

btn.onclick = () => {
    const isDarkTheme = body.className.endsWith("dark-theme");
    const theme = isDarkTheme ? "" : "dark-theme";

    btn.innerHTML = isDarkTheme ? "🌙" : "💡";
    body.className = theme;

    localStorage.setItem("theme", theme);
};

const checkbox = document.getElementById("dark-mode");
const body = document.body;

function relayDarkModeEvent(event) {
    event.stopPropagation();
    const darkModeEvent = new CustomEvent("darkmode:toggle", {
        detail: { isChecked: event.target.checked }
    });
    body.dispatchEvent(darkModeEvent);
}

const label = checkbox.parentElement;
label.onchange = relayDarkModeEvent;

body.addEventListener("darkmode:toggle", (event) => {
    const isDarkMode = event.detail.isChecked;
    if (isDarkMode) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
});

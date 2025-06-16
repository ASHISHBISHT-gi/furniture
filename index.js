let counter = 0;
const user = document.querySelector(".user");
const clicked = document.querySelector(".clicked");
const parent = document.querySelector(".detail");
const button = document.querySelector("button");


// Define media queries
const mobileQuery = window.matchMedia("(max-width:73.0625em)");
const desktopQuery = window.matchMedia("(min-width:73.0625em)");

// Handler function
function handleDeviceChange(e) {
    if (mobileQuery.matches) {
        if (counter == 0) {
        e.stopPropagation();
        user.remove();
        parent.appendChild(clicked);
        clicked.appendChild(button);
        counter = 1;
    } else {
        e.stopPropagation();
        clicked.remove();
        parent.appendChild(user);
        user.appendChild(button);
        counter = 0;
    }
    }else if (desktopQuery.matches) {
        if (counter == 0) {
            e.stopPropagation();
            parent.appendChild(clicked);
            counter = 1;
        } else {
            e.stopPropagation();
            clicked.remove();
            counter = 0;
        }

    }
}

// Attach listeners
mobileQuery.addEventListener("change", handleDeviceChange);
desktopQuery.addEventListener("change", handleDeviceChange);
button.addEventListener("click", (e) => handleDeviceChange(e));
document.addEventListener("click", (e) => {
    counter = 0;
    clicked.remove();
})
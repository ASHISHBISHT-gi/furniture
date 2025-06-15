let counter = 0;
const user = document.querySelector(".user"); //user info
const clicked = document.querySelector(".clicked");
const parent = document.querySelector(".detail");
// const buttons = document.querySelectorAll('button');
const button = document.querySelector("button");

clicked.remove();
// function appear(e) {
//     if (counter == 0) {
//         // remove user container and add clicked container
//         user.remove();
//         parent.appendChild(clicked);
//         // add button in clicked container
//         clicked.appendChild(button);
//         counter = 1;
//     } else {
//         clicked.remove();
//         parent.appendChild(user);
//         user.appendChild(button);
//         counter = 0;
//     }
// }

// buttons.forEach(button => {
//     button.addEventListener('click', (e) => appear(e));
// });
// button.addEventListener("click", (e) => appear(e));

// Define media queries
const mobileQuery = window.matchMedia("(max-width:73.0625em)");
// const tabletQuery = window.matchMedia(
//     "(min-width: 601px) and (max-width: 1024px)"
// );
const desktopQuery = window.matchMedia("(min-width:73.0625em)");

// Handler function
function handleDeviceChange(e) {
    if (mobileQuery.matches) {
        if (counter == 0) {
        // remove user container and add clicked container
        e.stopPropagation();
        user.remove();
        parent.appendChild(clicked);
        // add button in clicked container
        clicked.appendChild(button);
        counter = 1;
    } else {
        e.stopPropagation();
        clicked.remove();
        parent.appendChild(user);
        user.appendChild(button);
        counter = 0;
    }
    }// else if (tabletQuery.matches) {
    //     console.log("Tablet view");
    //     document.body.style.backgroundColor = "lightgreen";
    // }
    else if (desktopQuery.matches) {
        if (counter == 0) {
            e.stopPropagation();
            // remove user container and add clicked container
            // user.remove();
            parent.appendChild(clicked);
            // add button in clicked container
            // clicked.appendChild(button);
            counter = 1;
        } else {
            e.stopPropagation();
            clicked.remove();
            // parent.appendChild(user);
            // user.appendChild(button);
            counter = 0;
        }

    }
}

// Attach listeners
mobileQuery.addEventListener("change", handleDeviceChange);
// tabletQuery.addEventListener("change", handleDeviceChange);
desktopQuery.addEventListener("change", handleDeviceChange);

// Initial check
// handleDeviceChange();
button.addEventListener("click", (e) => handleDeviceChange(e));

document.addEventListener("click", (e) => {
    counter = 0;
    clicked.remove();
})
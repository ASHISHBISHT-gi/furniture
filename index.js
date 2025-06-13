let counter = 0
const user = document.querySelector('.user');
const clicked = document.querySelector('.clicked');
const parent = document.querySelector('.detail')
const buttons = document.querySelectorAll('button');


clicked.remove();
function appear(e) {

    if (counter == 0) {
        user.remove();
        parent.appendChild(clicked);
        counter = 1;
    } else {
        clicked.remove();
        parent.appendChild(user);
        counter = 0;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => appear(e));
});



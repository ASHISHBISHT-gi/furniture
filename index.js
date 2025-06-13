let counter = 0
const user = document.querySelector('.user');
const clicked = document.querySelector('.clicked');
const parent = document.querySelector('.detail')
const buttons = document.querySelectorAll('button');


clicked.remove();
function appear(e) {

    if (counter == 1) {
        user.remove();
        parent.appendChild(clicked);
        counter = 0;
    } else {
        clicked.remove();
        parent.appendChild(user);
        counter = 1;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => appear(e));
});



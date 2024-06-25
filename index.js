const menu = document.getElementById(`nav-menu`);
const button = document.getElementById(`nav-btn`);
const disable = document.getElementById(`nav-disable`)
const checkbox = document.getElementById(`nav-checkbox`);

checkbox.addEventListener(`change`, () => {

    if (checkbox.checked == true) {

        // 1. Display the menu to the user
        menu.style.marginLeft = `0`;

        // 2. Enable the escape-touch area to disable the menu
        disable.style.display = `block`;

    } else {

        // 1. Disable the menu
        menu.style.marginLeft = `-25rem`;

        // 2. Display the escape-touch area
        disable.style.display = `none`;
    }
})

disable.addEventListener(`click`, (e) => { 
    
    // 1. Disable the menu
    menu.style.marginLeft = `-25rem`; 

    // 2. Restyle the hamburger
    checkbox.checked = false;

    // 3. Prevent the auto load
    e.preventDefault()

})
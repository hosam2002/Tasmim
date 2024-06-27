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

//

const cards = document.getElementById(`cards`)
const popup = document.getElementById(`popup`)
const popup_content = document.getElementById(`popup_content`)
const popup_close = document.getElementById(`popup_close`)

//

cards.addEventListener(`click`, (event) => {

    const target = event.target
    const id = target.id

    /*
    if (id) {

        const arr = id.split("-")
        const idNo = arr[1]

        document.getElementById(`reqbtn-${idNo}`).addEventListener(`click`, () => {

            popup.style.display = "flex";
            setTimeout(() => { popup_content.style.marginBottom = "0"; }, 400)
        })
    }
    */

    if (id == `reqbtn-0`) {

        popup.style.display = "flex";
        setTimeout(() => { popup_content.style.marginBottom = "0"; }, 400)

    } else if (id == `reqbtn-1`) {

        popup.style.display = "flex";
        setTimeout(() => { popup_content.style.marginBottom = "0"; }, 400) 

    } else if (id == `reqbtn-2`) {

        popup.style.display = "flex";
        setTimeout(() => { popup_content.style.marginBottom = "0"; }, 400)
        
    } else if (id == `reqbtn-3`) {

        popup.style.display = "flex";
        setTimeout(() => { popup_content.style.marginBottom = "0"; }, 400)
    }
})

//

popup.addEventListener(`click`, (event)=> {

    if (event.target.id == `popup`) {

        popup_content.style.marginBottom = "-400rem";
        setTimeout(() => { popup.style.display = `none`; }, 400)
    } 
})

//

popup_close.addEventListener(`click`, ()=> {
    
    popup_content.style.marginBottom = "-400rem";
    popup.style.display = `none`;
})
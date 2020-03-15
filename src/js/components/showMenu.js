export const showMenu = (idToggle,idMenu) => {
    const toggle = document.getElementById(idToggle)
    const menu = document.getElementById(idMenu)

    if(toggle && menu) {
        toggle.addEventListener('click', e => {
            menu.classList.toggle('show')
        })
    }
}
showMenu('main-toggle', 'main-menu')
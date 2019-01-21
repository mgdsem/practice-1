class Hamburger {
    constructor() {
        this.HamburgerIcon = document.getElementById('hamburger');
        this.HamburgerIcon.addEventListener('click', this.onClick);
        this.isOpen = false;
        console.log(this);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        const menu = document.getElementById('menu');
        console.log(this);
        if (!this.isOpen) {
            menu.classList.add('menu--is-visible');
            this.classList.add('menu__hamburger--is-menu-open');
            this.isOpen = true;
        } else {
            menu.classList.remove('menu--is-visible');
            this.classList.remove('menu__hamburger--is-menu-open');
            this.isOpen = false;
        }
    }
}

export default Hamburger;
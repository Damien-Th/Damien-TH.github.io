export class HamburgerDisplay {
    constructor()
    {
        this.hamburger()
    }

    hamburger()
    {

        let linkClicked = document.querySelectorAll('.navigation-mobile > ul > li');

        hamburger.onclick = () => toggle() 

        linkClicked.forEach(elt => elt.addEventListener("click", () => toggle()));

        function toggle() {
            hamburger.classList.toggle('open')
            navbar.classList.toggle('hide')
        }
    }
}
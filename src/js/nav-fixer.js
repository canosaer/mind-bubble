class NavFixer{
  constructor(){
    this.navMenu = document.querySelector('.menu')
    this.navLinks = document.querySelectorAll('.menu__link')

    this.setup()
  }

  setup = () => {
    window.onresize = this.fixNav;
  }

  fixNav = () => {
    if(window.innerWidth >= 1200){
      this.navMenu.style.width = '100%'
      let dimmerElement = document.querySelector('.dimmer')
      if(dimmerElement) dimmerElement.remove()
      if(this.navLinks[0].classList.contains('hide-link')){
        this.navLinks.forEach(link => {
          link.classList.toggle('hide-link')
        });
      }
    }
  }


}

new NavFixer
class Preloader{

  constructor(){
    this.preloader = document.querySelector('.preloader')

    this.setup()
  }

  setup = () => {
    window.addEventListener('load', this.fadeEffect)
  }

  fadeEffect = () => {
    setInterval(() => {
      // if we don't set opacity 1 in CSS, then
      // it will be equaled to "" -- that's why
      // we check it, and if so, set opacity to 1
      if (!this.preloader.style.opacity) {
        this.preloader.style.opacity = 1
      }
      if (this.preloader.style.opacity > 0) {
        if(!this.preloader.classList.contains('bring-to-front')){
          this.preloader.classList.add('bring-to-front')
        }
        this.preloader.style.opacity -= 0.1
      } else {
        clearInterval(this.fadeEffect)
        this.preloader.classList.remove('bring-to-front')
        this.preloader.classList.add('send-to-rear')
      }
    }, 100)
  }

}

class HeroMenu{

  constructor(){
    this.heroSection = document.querySelector('.hero')
    this.defaultMenu = this.heroSection.querySelector('.hero__menu_0')
    this.programMenu = this.heroSection.querySelector('.hero__menu_1')
    this.nameMenu = this.heroSection.querySelector('.hero__menu_2')
    this.emailMenu = this.heroSection.querySelector('.hero__menu_3')
    this.heroNav = this.heroSection.querySelector('.hero__button-row')

    this.parentButton = this.defaultMenu.querySelector('.hero__button')
    this.volunteerButton = this.defaultMenu.querySelector('.hero__last-button')
    this.heroNavContinue = this.heroSection.querySelector('.continue-button')
    this.heroNavContinueText = this.heroNavContinue.querySelector('.continue-button__text')
    this.heroNavBack = this.heroSection.querySelector('.back-button')

    this.setupListeners()
  }

  setupListeners = () => {
  
    this.parentButton.addEventListener('click', this.advanceMenu)
    this.volunteerButton.addEventListener('click', this.advanceMenu)
    this.heroNavContinue.addEventListener('click', this.advanceMenu)
    this.heroNavBack.addEventListener('click', this.returnMenu)
  }

  advanceMenu = (evt) => {
    if(!this.defaultMenu.classList.contains('hidden')){
      this.heroNav.classList.toggle('transparent')
      this.defaultMenu.classList.toggle('hidden')
      this.programMenu.classList.toggle('hidden')
    }
    else if(!this.programMenu.classList.contains('hidden')){
      this.programMenu.classList.toggle('hidden')
      this.nameMenu.classList.toggle('hidden')
    }
    else if(!this.nameMenu.classList.contains('hidden')){
      this.nameMenu.classList.toggle('hidden')
      this.emailMenu.classList.toggle('hidden')
      this.heroNavContinueText.textContent = 'Sign Up!'
    }
  }

  returnMenu = (evt) => {
    if(!this.emailMenu.classList.contains('hidden')){
      this.nameMenu.classList.toggle('hidden')
      this.emailMenu.classList.toggle('hidden')
      this.heroNavContinueText.textContent = 'Continue'
    }
    else if(!this.nameMenu.classList.contains('hidden')){
      this.programMenu.classList.toggle('hidden')
      this.nameMenu.classList.toggle('hidden')
    }
    else if(!this.programMenu.classList.contains('hidden')){
      this.defaultMenu.classList.toggle('hidden')
      this.programMenu.classList.toggle('hidden')
      this.heroNav.classList.toggle('transparent')
    }
  }

}

new Preloader
new HeroMenu

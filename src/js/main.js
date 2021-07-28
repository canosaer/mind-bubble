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
    this.lastMenu = this.heroSection.querySelector('.hero__menu_4')
    this.heroNav = this.heroSection.querySelector('.hero__button-row')

    this.parentButton = this.defaultMenu.querySelector('.hero__button')
    this.volunteerButton = this.defaultMenu.querySelector('.hero__last-button')
    this.heroNavContinue = this.heroSection.querySelector('.continue-button')
    this.heroNavContinueText = this.heroNavContinue.querySelector('.continue-button__text')
    this.heroNavBack = this.heroSection.querySelector('.back-button')

    this.programCheckboxes = this.heroSection.querySelectorAll('.hero__checkbox')
    this.nameInput = this.heroSection.querySelector('.hero__name-input')
    this.emailInput = this.heroSection.querySelector('.hero__email-input')
    this.programError = this.heroSection.querySelector('.hero__validation_program')
    this.nameError = this.heroSection.querySelector('.hero__validation_name')
    this.emailError = this.heroSection.querySelector('.hero__validation_email')

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
      this.heroNav.classList.toggle('invisible')
      this.defaultMenu.classList.toggle('hidden')
      this.programMenu.classList.toggle('hidden')
    }
    else if(!this.programMenu.classList.contains('hidden')){
      if(this.programCheckboxes[0].checked || this.programCheckboxes[1].checked){
        if(!this.programError.classList.contains('invisible')) this.programError.classList.toggle('invisible')
        this.programMenu.classList.toggle('hidden')
        this.nameMenu.classList.toggle('hidden')
      }
      else{
        if(this.programError.classList.contains('invisible')) this.programError.classList.toggle('invisible')
      }
      
    }
    else if(!this.nameMenu.classList.contains('hidden')){
      if(this.nameInput.value){
        if(!this.nameError.classList.contains('invisible')) this.nameError.classList.toggle('invisible')
        this.nameMenu.classList.toggle('hidden')
        this.emailMenu.classList.toggle('hidden')
        this.heroNavContinueText.textContent = 'Sign Up!'
      }
      else{
        if(this.nameError.classList.contains('invisible')) this.nameError.classList.toggle('invisible')
      }
    }
    else if(!this.emailMenu.classList.contains('hidden')){
      if(this.emailInput.value){
        let emailRE = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w{2,}([-.]\w{2,})*$/
        if(emailRE.test(this.emailInput.value)){
          if(!this.emailError.classList.contains('invisible')) this.emailError.classList.toggle('invisible')
          this.emailMenu.classList.toggle('hidden')
          this.lastMenu.classList.toggle('hidden')
          this.heroNavBack.classList.toggle('invisible')
          this.heroNavContinueText.textContent = 'Back to Start'
        }
        else{
          if(this.emailError.classList.contains('invisible')) this.emailError.classList.toggle('invisible')
        }
      }
      else{
        if(this.emailError.classList.contains('invisible')) this.emailError.classList.toggle('invisible')
      }
    }
    else if(this.heroNavContinueText.textContent === 'Back to Start'){
      this.heroNavContinueText.textContent = 'Continue'
      this.lastMenu.classList.toggle('hidden')
      this.defaultMenu.classList.toggle('hidden')
      this.heroNavBack.classList.toggle('invisible')
      this.heroNav.classList.toggle('invisible')
      this.programCheckboxes.forEach(checkbox => {
        checkbox.checked = false
      });
      this.nameInput.value = ''
      this.emailInput.value = ''
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
      this.heroNav.classList.toggle('invisible')
    }
  }

}

class MenuToggle{
  
  constructor(){
      this.toggle = document.querySelector(`.toggle`)
      this.siteNavigation = document.querySelector(`.menu`)
      this.siteNavigationItems = document.querySelectorAll(`.menu__item`)
      this.siteNavigationLinks = document.querySelectorAll(`.menu__link`)
      this.toggleLines = document.querySelectorAll(`.toggle__line`)

      this.setupListeners()
  }

  setupListeners() {

      this.toggle.addEventListener(`click`, this.handleToggleClick)
  }

  handleToggleClick = (evt) => {
      if(!this.siteNavigation.classList.contains(`menu_open`)){
          this.dimmer = document.createElement("div")
          this.dimmer.classList.add(`dimmer`)
          document.querySelector(`body`).appendChild(this.dimmer)
          document.querySelector(`body`).style.overflowX = `hidden`
          this.siteNavigation.classList.toggle(`menu_open`)
          this.toggleLines[0].classList.toggle(`toggle__line_open-1`)
          this.toggleLines[1].classList.toggle(`toggle__line_open-2`)
          this.siteNavigationItems.forEach(item => {
            item.classList.toggle(`menu__item_open`)
          });
          if(this.siteNavigationLinks[0].classList.contains('hide-link')){
            this.siteNavigationLinks.forEach(link => {
              link.classList.toggle(`hide-link`)
            });
          }
          
          setTimeout(() => { this.siteNavigation.style.width = `20.6rem` }, 10);
      }
      else{
          this.siteNavigation.style.width = `0`
          this.dimmer.remove()
          this.siteNavigationLinks.forEach(link => {
            link.classList.toggle(`hide-link`)
          });
          setTimeout(() => { 
              this.siteNavigation.classList.toggle(`menu_open`)
              this.toggleLines[0].classList.toggle(`toggle__line_open-1`)
              this.toggleLines[1].classList.toggle(`toggle__line_open-2`)
              this.siteNavigationItems.forEach(item => {
                item.classList.toggle(`menu__item_open`)
              });
              document.querySelector(`body`).style.overflowX = `visible`
          }, 200);                
      }
  }
}

class FAQ{
  constructor(){
    this.faqText = document.querySelector('.faq__text')
    this.accordion = document.querySelector('.faq__accordion')
    this.faqHeadings = this.accordion.querySelectorAll('.faq__heading')
    this.faqAnswers = this.accordion.querySelectorAll('.faq__answer')

    this.setupListeners()
  }

  setupListeners = () => {
    this.faqText.addEventListener('click', this.toggleFAQ)
    this.faqHeadings.forEach(heading => {
      heading.addEventListener('click', this.toggleAnswer)
    });
  }

  toggleFAQ = () => {
    this.accordion.classList.toggle('hidden')
    if(this.accordion.classList.contains('hidden')){
      let answerArrows = this.accordion.querySelectorAll('.faq__arrow')
      let answers = this.accordion.querySelectorAll('.faq__answer')
      answerArrows.forEach(arrow => {
        if(arrow.classList.contains('answer-arrow-rotate')){
          arrow.classList.remove('answer-arrow-rotate')
        }
      });
      answers.forEach(answer => {
        if(answer.classList.contains('answer-expander')){
          answer.classList.remove('answer-expander')
        }
        
      });
    }
  }

  toggleAnswer = (evt) => {
    let answer = evt.target.nextSibling.nextElementSibling;
    answer.classList.toggle('answer-expander')
    let arrow = evt.target.querySelector('.faq__arrow')
    arrow.classList.toggle('answer-arrow-rotate')
  }


}

new Preloader
new HeroMenu
new FAQ
new MenuToggle

const navMenu = document.querySelector('.menu')
const navLinks = document.querySelectorAll('.menu__link')

function fixNav() {

  if(window.innerWidth >= 1200){
    navMenu.style.width = '100%'
    let dimmerElement = document.querySelector('.dimmer')
    if(dimmerElement) dimmerElement.remove()
    if(navLinks[0].classList.contains('hide-link')){
      navLinks.forEach(link => {
        link.classList.toggle('hide-link')
      });
    }
  }
}

window.onresize = fixNav;
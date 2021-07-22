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
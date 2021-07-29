class FaqPage{
    constructor(){
      this.faqButtons = document.querySelectorAll('.faq-page__button')
  
      this.setupListeners()
    }
  
    setupListeners = () => {
      this.faqButtons.forEach(button => {
        button.addEventListener('click', this.toggleAnswer)
      });
    }
  
    toggleAnswer = (evt) => {
        evt.preventDefault()
        let answerID = evt.target.attributes[1].value
        let answer = document.querySelector(`#${answerID}`)
        answer.classList.toggle('collapsed')
        let ariaExpanded = evt.target.getAttribute('aria-expanded')
        if(ariaExpanded === 'false') ariaExpanded = 'true'
        else ariaExpanded ='false'
        evt.target.setAttribute('aria-expanded', ariaExpanded)
        let arrow = evt.target.querySelector('.faq-page__arrow')
        arrow.classList.toggle('answer-arrow-aria-rotate')
    }
  
  
}

new FaqPage
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

  new FAQ
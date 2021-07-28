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

new Preloader
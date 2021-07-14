const preloader = document.querySelector('.preloader')

const fadeEffect = setInterval(() => {
    // if we don't set opacity 1 in CSS, then
    // it will be equaled to "" -- that's why
    // we check it, and if so, set opacity to 1
    if (!preloader.style.opacity) {
      preloader.style.opacity = 1
    }
    if (preloader.style.opacity > 0) {
      if(!preloader.classList.contains('bring-to-front')){
        preloader.classList.add('bring-to-front')
      }
      preloader.style.opacity -= 0.1
    } else {
      clearInterval(fadeEffect)
      preloader.classList.remove('bring-to-front')
      preloader.classList.add('send-to-rear')
    }
  }, 100)

window.addEventListener('load', fadeEffect)

if(window.innerWidth >= 1200){
  Textblock([{
     target: ".site-navigation__link",
     minWidth: 344,
     maxWidth: 1180,
     minWidth_FontSize: 2.6,
     maxWidth_FontSize: 11,
     minWidth_LineHeight: 1.33,
     maxWidth_LineHeight: 1.25,
     minWidth_VariableGrade: 366,
     maxWidth_VariableGrade: 300,
     container: "self",
     fontSize_Units: "rem"
  }]);
}

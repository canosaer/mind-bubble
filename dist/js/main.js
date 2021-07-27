class Preloader{constructor(){this.preloader=document.querySelector(".preloader"),this.setup()}setup=()=>{window.addEventListener("load",this.fadeEffect)};fadeEffect=()=>{setInterval((()=>{this.preloader.style.opacity||(this.preloader.style.opacity=1),this.preloader.style.opacity>0?(this.preloader.classList.contains("bring-to-front")||this.preloader.classList.add("bring-to-front"),this.preloader.style.opacity-=.1):(clearInterval(this.fadeEffect),this.preloader.classList.remove("bring-to-front"),this.preloader.classList.add("send-to-rear"))}),100)}}class HeroMenu{constructor(){this.heroSection=document.querySelector(".hero"),this.defaultMenu=this.heroSection.querySelector(".hero__menu_0"),this.programMenu=this.heroSection.querySelector(".hero__menu_1"),this.nameMenu=this.heroSection.querySelector(".hero__menu_2"),this.emailMenu=this.heroSection.querySelector(".hero__menu_3"),this.heroNav=this.heroSection.querySelector(".hero__button-row"),this.parentButton=this.defaultMenu.querySelector(".hero__button"),this.volunteerButton=this.defaultMenu.querySelector(".hero__last-button"),this.heroNavContinue=this.heroSection.querySelector(".continue-button"),this.heroNavContinueText=this.heroNavContinue.querySelector(".continue-button__text"),this.heroNavBack=this.heroSection.querySelector(".back-button"),this.setupListeners()}setupListeners=()=>{this.parentButton.addEventListener("click",this.advanceMenu),this.volunteerButton.addEventListener("click",this.advanceMenu),this.heroNavContinue.addEventListener("click",this.advanceMenu),this.heroNavBack.addEventListener("click",this.returnMenu)};advanceMenu=e=>{this.defaultMenu.classList.contains("hidden")?this.programMenu.classList.contains("hidden")?this.nameMenu.classList.contains("hidden")||(this.nameMenu.classList.toggle("hidden"),this.emailMenu.classList.toggle("hidden"),this.heroNavContinueText.textContent="Sign Up!"):(this.programMenu.classList.toggle("hidden"),this.nameMenu.classList.toggle("hidden")):(this.heroNav.classList.toggle("transparent"),this.defaultMenu.classList.toggle("hidden"),this.programMenu.classList.toggle("hidden"))};returnMenu=e=>{this.emailMenu.classList.contains("hidden")?this.nameMenu.classList.contains("hidden")?this.programMenu.classList.contains("hidden")||(this.defaultMenu.classList.toggle("hidden"),this.programMenu.classList.toggle("hidden"),this.heroNav.classList.toggle("transparent")):(this.programMenu.classList.toggle("hidden"),this.nameMenu.classList.toggle("hidden")):(this.nameMenu.classList.toggle("hidden"),this.emailMenu.classList.toggle("hidden"),this.heroNavContinueText.textContent="Continue")}}class MenuToggle{constructor(){this.toggle=document.querySelector(".toggle"),this.siteNavigation=document.querySelector(".menu"),this.siteNavigationItems=document.querySelectorAll(".menu__item"),this.siteNavigationLinks=document.querySelectorAll(".menu__link"),this.toggleLines=document.querySelectorAll(".toggle__line"),this.setupListeners()}setupListeners(){this.toggle.addEventListener("click",this.handleToggleClick)}handleToggleClick=e=>{this.siteNavigation.classList.contains("menu_open")?(this.siteNavigation.style.width="0",this.dimmer.remove(),this.siteNavigationLinks.forEach((e=>{e.classList.toggle("hide-link")})),setTimeout((()=>{this.siteNavigation.classList.toggle("menu_open"),this.toggleLines[0].classList.toggle("toggle__line_open-1"),this.toggleLines[1].classList.toggle("toggle__line_open-2"),this.siteNavigationItems.forEach((e=>{e.classList.toggle("menu__item_open")})),document.querySelector("body").style.overflowX="visible"}),200)):(this.dimmer=document.createElement("div"),this.dimmer.classList.add("dimmer"),document.querySelector("body").appendChild(this.dimmer),document.querySelector("body").style.overflowX="hidden",this.siteNavigation.classList.toggle("menu_open"),this.toggleLines[0].classList.toggle("toggle__line_open-1"),this.toggleLines[1].classList.toggle("toggle__line_open-2"),this.siteNavigationItems.forEach((e=>{e.classList.toggle("menu__item_open")})),this.siteNavigationLinks[0].classList.contains("hide-link")&&this.siteNavigationLinks.forEach((e=>{e.classList.toggle("hide-link")})),setTimeout((()=>{this.siteNavigation.style.width="20.6rem"}),10))}}class FAQ{constructor(){this.faqText=document.querySelector(".faq__text"),this.accordion=document.querySelector(".faq__accordion"),this.faqHeadings=this.accordion.querySelectorAll(".faq__heading"),this.faqAnswers=this.accordion.querySelectorAll(".faq__answer"),this.setupListeners()}setupListeners=()=>{this.faqText.addEventListener("click",this.toggleFAQ),this.faqHeadings.forEach((e=>{e.addEventListener("click",this.toggleAnswer)}))};toggleFAQ=()=>{if(this.accordion.classList.toggle("hidden"),this.accordion.classList.contains("hidden")){let e=this.accordion.querySelectorAll(".faq__arrow"),t=this.accordion.querySelectorAll(".faq__answer");e.forEach((e=>{e.classList.contains("answer-arrow-rotate")&&e.classList.remove("answer-arrow-rotate")})),t.forEach((e=>{e.classList.contains("answer-expander")&&e.classList.remove("answer-expander")}))}};toggleAnswer=e=>{e.target.nextSibling.nextElementSibling.classList.toggle("answer-expander"),e.target.querySelector(".faq__arrow").classList.toggle("answer-arrow-rotate")}}new Preloader,new HeroMenu,new FAQ,new MenuToggle;const navMenu=document.querySelector(".menu"),navLinks=document.querySelectorAll(".menu__link");function fixNav(){if(window.innerWidth>=1200){navMenu.style.width="100%";let e=document.querySelector(".dimmer");e&&e.remove(),navLinks[0].classList.contains("hide-link")&&navLinks.forEach((e=>{e.classList.toggle("hide-link")}))}}window.onresize=fixNav;
//# sourceMappingURL=main.js.map
class MenuToggle{
  
    constructor(){
        this.toggle = document.querySelector(`.toggle`)
        this.siteNavigation = document.querySelector(`.menu`)
        this.siteNavigationItems = document.querySelectorAll(`.menu__item`)
        this.siteNavigationLinks = document.querySelectorAll(`.menu__link`)
        this.toggleLines = document.querySelectorAll(`.toggle__line`)
        this.toggleRadio = document.querySelector('.toggle__radio')
  
        this.setupListeners()
    }
  
    setupListeners() {
  
        // this.toggle.addEventListener(`click`, this.handleToggleClick)
        this.toggleRadio.addEventListener(`click`, this.handleToggleClick)
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

new MenuToggle
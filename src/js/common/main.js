

document.addEventListener('DOMContentLoaded', () => {

  const blur = document.querySelector('.blur')
  const anchors = document.querySelectorAll('a[href*="#"]')
  
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substring(1)
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
  
  
  
  window.addEventListener('resize', () =>  {
    if(window.innerWidth > 1024) {
      document.body.classList.remove(`lock`)
      document.querySelector(document.querySelector(`.burg`).dataset.target).classList.remove(`show`)
      document.querySelector(`.burg`).classList.remove(`open`)
      blur.classList.remove('blur_active')
    }
  });

  

  ///////////////////// read more

  const readmoreButtons = document.querySelectorAll('.read-more')
  readmoreButtons.forEach((e) => {
      e.addEventListener('click', (e) => {
      const target = document.getElementById(e.target.dataset.target)
      target.classList.add('show')})
    })
    




  /////////////////////  search

  const searchBtn = document.querySelector('.search')
  const headerForm = document.querySelector('.header__form-input-wrapper')
  const inputExitBtn = document.querySelector('.header__form-input-exit')

 

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault()

    headerForm.classList.add('header__form-input_active')
    blur.classList.add('blur_active')
    document.querySelector('.burg').style.zIndex = 1

    const hideInput = (e) => {
        if(!e.target.classList.contains('header__form-input')) {
            headerForm.classList.remove('header__form-input_active')
            document.removeEventListener('click', hideInput)
            document.removeEventListener('mousewheel', hideInput)
            inputExitBtn.removeEventListener('click', hideInput)
            blur.classList.remove('blur_active')
            document.querySelector('.burg').style.zIndex = 100
        }
    }
    
    setTimeout(() => {
        document.addEventListener('click', hideInput)
    }, 100);

    document.addEventListener('mousewheel', hideInput)
    inputExitBtn.addEventListener('click', hideInput)

  })
})





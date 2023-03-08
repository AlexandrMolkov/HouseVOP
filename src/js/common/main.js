

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

  

  AOS.init();
  
    





})





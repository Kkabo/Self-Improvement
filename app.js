//DECLARATIONS
const targets = document.querySelectorAll("img");

//FUNCTIONS
//Navigation Bar & Hamburger
function openMenu(){
  document.body.classList += " menu--open"
}

function closeMenu(){
  document.body.classList.remove('menu--open')
}

//Fade-In Animation
const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    
    entries.forEach(entry => {
      console.log('💩');

      if(entry.isIntersecting) {
        const img = entry.target ;
        const src = img.getAttribute('data-lazy');

        img.setAttribute('src', src);
        img.classList.add('fade');

        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

targets.forEach(lazyLoad);
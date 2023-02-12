console.log("hello world");
const navMenu = document.getElementById('nav-menu');
       navToggle = document.getElementById('nav-toggle');
       navClose = document.getElementById('nav-close');
    //    ======menu show =====
    //  validate if  constant exists

    if (navToggle){
        navToggle.addEventListener('click', ()=>{
            navMenu.classList.add('show-menu');
        });
    }
    //  ======menu hide =====
    //  validate if  constant exists
    if (navClose){
       navClose.addEventListener('click', ()=>{
            navMenu.classList.remove('show-menu');
        });
    }
    //  ======menu toggle =====
/*============ REMOVE MENU MOBILE =============*/
 
const  navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
 const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*=================SWIPER PROJECT ======================*/
var swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween:24,
 
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
     pagination: {
       el: ".swiper-pagination",
     },
     breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: -56,
      },
    },
     
   });

      // ===============SWIPER TESTIMONTAL ================ // 
    let swiper = new Swiper(".testimonial__container", {
      grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

const contactForm = document.getElementById('contact-from'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactProject = document.getElementById('contact-project'),
contactMassage = document.getElementById('contact-massage')
console.log(contactMassage.value)

const sendEmail = (e)=>{
e.preventDefault();
//============= chack if the field has a value ========== //
if(contactName.value==='' || contactEmail.value==='' || contactProject.value===''){
  //add the remove//
  contactMassage.classList.remove('color-blue')
  contactMassage.classList.add('color-red')
  //show message
  contactMassage.textContent = 'Write the input '
}else{
  emailjs.sendForm('service_q3cfrrm','template_ljpkd7f','#contact-from','tHMQJKreY88Cdkkyy')
  .then(()=>{
    contactMassage.classList.add('color-blue')
     contactMassage.textContent = 'Message sent successfully'
    //remove message after five second
    setTimeout(() => {
      contactMassage.textContent = "" 
    }, 5000);
  },(error)=>{
    alert('oops! somethink has failed.... ', error) 
  })
  //  To  clear the input field
  contactName.value = ''
  contactEmail.value = ''
  contactProject.value = ''

}
}
contactForm.addEventListener('submit',sendEmail)


//===============SCROL SECTION ACTIVE LINK =================  //

const section = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollY = window.pageYOffset
  
    section.forEach(current =>{
      const sectionHeight = current.offsetHeight,
       sectionTop = current.offsetTop - 58,
       sectionId = current.getAttribute('id')
       sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']') 
if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
  sectionsClass.classList.add('active-link')
}else{
  sectionsClass.classList.remove('active-link')
}
      
})
}

window.addEventListener('scroll', scrollActive)


// =============== SHOW SCROLL UP =====================  //



function scrollUpFunction() {
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >=350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')  
}
window.addEventListener('scroll', scrollUpFunction)



// DARK LIGHT THEME //



const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//  previously selected topic (if user selected) //


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtained the current theme that interface has by validathing the dark-theme class===//

const getCurrentTheme = () => document.body.classList.contains(darkTheme)? 'dark': 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)? 'ri-moon-line  ' : 'ri-sun-lines'

// we validate if the user previously chose a topic

if (selectedTheme) {
  //  if the validation is fulfilled we ask what the issu was to know  if we activated or deactivated the dark   //
  document.body.classList[selectedTheme === 'dark'? 'add' :'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line'? 'add' :'remove'](iconTheme)
}

// Activate / deactivate the theme  manually with the buttom//

themeButton.addEventListener('click', () => {
  //  we validate if the user previously chose a topic
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

    //  if the validation is fulfilled we ask what the issu was to know  if we activated or deactivated the dark   //
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
  
  })


// ==============change background header ================= //

const scrollHeader = () => {

  const header = document.getElementById('header');
  //when the scroll is greater then 50 viewport height, add the scroll-header class  to the header tag  //
  this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
};

window.addEventListener('scroll', scrollHeader);

//  ====================== SCROLL REVEAL ANIMATION ==============================  //

const sr =  ScrollReveal({

  origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:400,
   // reset:true // animations reapeat//
})

sr.reveal('.home__data, .projects__content, .testimonial__container')
sr.reveal('.home__info div', {delay: 600, origin:'bottom',interval:100 } )
sr.reveal('.skills__contect:nth-child(1), .contact__content:nth-child(1)', { origin:'left' } )
sr.reveal('.skills__contect:nth-child(2),  .contact__content:nth-child(2)', { origin:'right' } )
sr.reveal('.qualification__content, .service__card', { interval:100 } )
// sr.reveal('.qualification__content', { interval:100 } )



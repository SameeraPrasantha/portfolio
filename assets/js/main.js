/* ----- NAVIGATION BAR FUNCTION ----- */
    function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");

      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
      const navHeader =document.getElementById("header");

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

      } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

      }
    }


/* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed(".typedText",{
      strings : ["Freelancer","Software Developer Undergraduate"],
      loop : true,
      typeSpeed : 100, 
      backSpeed : 80,
      backDelay : 2000
   })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
   })

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  

  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  


/* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

      }  else {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

      }
    })
  }

  window.addEventListener('scroll', scrollActive)

  // new add js

      var currentSlide = 0;

    function openSlider() {
        var slider = document.getElementById("imageSlider");
        var slides = document.getElementsByClassName("sliderImage");

        // Show all images initially
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Show only the selected image
        showSlide(currentSlide);

        // Display the slider
        slider.style.display = "flex";
    }

    function closeSlider() {
        var slider = document.getElementById("imageSlider");
        slider.style.display = "none";
    }

    function changeSlide(n) {
        showSlide(currentSlide += n);
    }

    function showSlide(n) {
        var slides = document.getElementsByClassName("sliderImage");
        if (n >= slides.length) {
            currentSlide = 0;
        } else if (n < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = n;
        }

        // Hide all images
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Show the selected image
        slides[currentSlide].style.display = "block";
    }




 // 2 slide




 var currentSlide2 = 0;

 function openSlider2() {
     var slider2 = document.getElementById("imageSlider2");
     var slides2 = document.getElementsByClassName("sliderImage2");

     // Show all images initially
     for (var i = 0; i < slides2.length; i++) {
         slides2[i].style.display = "none";
     }

     // Show only the selected image
     showSlide2(currentSlide2);

     // Display the slider
     slider2.style.display = "flex";
 }

 function closeSlider2() {
     var slider2 = document.getElementById("imageSlider2");
     slider2.style.display = "none";
 }

 function changeSlide2(n) {
     showSlide2(currentSlide2 += n);
 }

 function showSlide2(n) {
     var slides2 = document.getElementsByClassName("sliderImage2");
     if (n >= slides2.length) {
         currentSlide2 = 0;
     } else if (n < 0) {
         currentSlide2 = slides2.length - 1;
     } else {
         currentSlide2 = n;
     }

     // Hide all images
     for (var i = 0; i < slides2.length; i++) {
         slides2[i].style.display = "none";
     }

     // Show the selected image
     slides2[currentSlide2].style.display = "block";
 }

 



 // 3 slide



 var currentSlide3 = 0;

 function openSlider3() {
     var slider3 = document.getElementById("imageSlider3");
     var slides3 = document.getElementsByClassName("sliderImage3");

     // Show all images initially
     for (var i = 0; i < slides3.length; i++) {
         slides3[i].style.display = "none";
     }

     // Show only the selected image
     showSlide3(currentSlide3);

     // Display the slider
     slider3.style.display = "flex";
 }

 function closeSlider3() {
     var slider3 = document.getElementById("imageSlider3");
     slider3.style.display = "none";
 }

 function changeSlide3(n) {
     showSlide3(currentSlide3 += n);
 }

 function showSlide3(n) {
     var slides3 = document.getElementsByClassName("sliderImage3");
     if (n >= slides3.length) {
         currentSlide3 = 0;
     } else if (n < 0) {
         currentSlide3 = slides3.length - 1;
     } else {
         currentSlide3 = n;
     }

     // Hide all images
     for (var i = 0; i < slides3.length; i++) {
         slides3[i].style.display = "none";
     }

     // Show the selected image
     slides3[currentSlide3].style.display = "block";
 }


  const loginPopup = document.querySelector(".login-popup");
  const close = document.querySelector(".close");
  const carouselImages = document.querySelector('.carousel__images');
  const images = document.querySelectorAll('.carousel__images img');
  const carouselButtons = document.querySelectorAll('.carousel__button');
  const numberOfImages = document.querySelectorAll('.carousel__images img').length;
  let imageIndex = 1;
  let translateX = 0;

  carouselButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      if (event.target.id === 'previous') {
        if (imageIndex !== 1) {
          imageIndex--;
          translateX += 250;
        }
      } else {
        if (imageIndex !== numberOfImages) {
          imageIndex++;
          translateX -= 250;
        }
      }
  
      carouselImages.style.transform = `translateX(${translateX}px)`;
      images.forEach((image, index) => {
        if (index === imageIndex - 1) {
          image.classList.add('active');
        } else {
          image.classList.remove('active');
        }
      });
    });
  });
  
  window.addEventListener("load",function(){

  showPopup();
   // setTimeout(function(){
   //   loginPopup.classList.add("show");
   // },5000)

  })

  function showPopup(){
        const timeLimit = 5 // seconds;
        let i=0;
        const timer = setInterval(function(){
        i++;
        if(i == timeLimit){
          clearInterval(timer);
          loginPopup.classList.add("show");
        } 
        console.log(i)
        },1000);
  }


  close.addEventListener("click",function(){
    loginPopup.classList.remove("show");
  })





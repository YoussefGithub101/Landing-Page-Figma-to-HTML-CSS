/* function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  } */


  $('.ggg').click (function(){
    $('.nav').toggleClass(' responsive');
    console.log("myTopnav")
  });
  document.addEventListener('scroll',()=>{
    const header =document.querySelector('header')
    if(window.scrollY > 0){
      header.classList.add('scrolled')
    }else{
      header.classList.remove('scrolled')
    }
  })
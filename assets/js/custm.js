let modalBtn = document.querySelector("button[ data-toggle='modal']");
let modal_body = document.querySelector(".modal-body");
let closeBtn = document.querySelector("button[ data-toggle='close-modal']");





// -------------------------------<< slider >>-------------------------------//

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // تغيير الصورة كل 3 ثواني
}

function changeSlide(n) {
    slideIndex += n;
    const slides = document.querySelectorAll(".slide");
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
showSlides(); // بدء عرض الشرائح






// --------------------- bars ------------------- //
let navs = document.querySelector(".navs");
let bars = document.querySelector(".bars");
let content = document.querySelector('#home');

bars.addEventListener('click', ()=>{
if (navs.clientHeight == 0){

navs.style.height = `${navs.scrollHeight}px`;
content.style.marginTop = '250px';
}else{
    navs.style.height = "";
    content.style.marginTop = "";
}
});







modalBtn.addEventListener("click", ()=>{
 modal = document.querySelector(modalBtn.dataset.target);
 modal.style.top = "12px";

});

closeBtn.addEventListener("click", ()=>{
    modal = document.querySelector(closeBtn.dataset.target);
     modal.style.top = "-100%";

})





//  ------------------------ << accordion >>---------------------//
let accordionBtns = document.querySelectorAll(".accordionBtn");
        let accordionBodies = document.querySelectorAll(".accordion-body");
        let accordionIcons = document.querySelectorAll(".accordionBtn i");

        accordionBtns.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                let currentBody = accordionBodies[index];
                let currentIcon = accordionIcons[index];

                if (currentBody.style.maxHeight) {
                    currentBody.style.maxHeight = null;
                    currentIcon.style.transform = "rotate(0deg)";
                    currentBody.classList.remove('open');
                } else {
                    accordionBodies.forEach((body, i) => {
                        body.style.maxHeight = null;
                        accordionIcons[i].style.transform = "rotate(0deg)";
                        body.classList.remove('open');
                    });
                    currentBody.style.maxHeight = `${currentBody.scrollHeight}px`;
                    currentIcon.style.transform = "rotate(180deg)";
                    currentBody.classList.add('open');
                }
            });
        });
//  ------------------------ << accordion >>---------------------//





// --------------------------- << spiner or load >> ----------------------------- //

let cover = document.querySelector(".cover");

window.addEventListener('load', ()=>{
    cover.classList.add('cover-hide')
    setTimeout( ()=>{
        cover.remove();

    }, 600);
});


// --------------------------- << spiner or load >> ----------------------------- //

//------------------ << scroll >> ------------------//

// الحصول على الزر
let scrollBtn = document.getElementById("scrollBtn");

// عند تمرير الصفحة، نفذ هذا الدالة
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  // حساب ارتفاع الصفحة بالكامل
  let pageHeight = document.documentElement.scrollHeight;
  // حساب منتصف الصفحة
  let halfPageHeight = pageHeight / 2;
  // إذا مر المستخدم منتصف الصفحة، أظهر الزر
  if (document.body.scrollTop > halfPageHeight || document.documentElement.scrollTop > halfPageHeight) {
    scrollBtn.style.display = "block";
  } else {
    // إذا كان المستخدم فوق منتصف الصفحة، أخفِ الزر
    scrollBtn.style.display = "none";
  }
}


scrollBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  


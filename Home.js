
$(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
        } else {
            $(".item").addClass("active");
        }
    });
});

document.getElementById('next').onclick = function(){
     let lists = document.querySelectorAll('.item');
     document.getElementById('slide').appendChild(lists[0]);     
 } 
 document.getElementById('prev').onclick = function(){
     let lists = document.querySelectorAll('.item');
     document.getElementById('slide').prepend(lists[lists.length - 1]);
     document.getElementById('next').onclick = function(){
         let lists = document.querySelectorAll('.item');
         document.getElementById('slide').appendChild(lists[0]);
     }
     document.getElementById('prev').onclick = function(){
         let lists = document.querySelectorAll('.item');
         document.getElementById('slide').prepend(lists[lists.length - 1]);
     }
 }

 let intervalId; 

 function nextSlide() {
     let lists = document.querySelectorAll('.item');
     document.getElementById('slide').appendChild(lists[0]);
 }
 
 function prevSlide() {
     let lists = document.querySelectorAll('.item');
     document.getElementById('slide').prepend(lists[lists.length - 1]);
 }
 
 function startAutoplay() {
     intervalId = setInterval(function() {
         nextSlide();
     }, 2000); 
 }
 
 function stopAutoplay() {
     clearInterval(intervalId);
 }
 
 document.getElementById('next').onclick = function() {
     nextSlide();
     stopAutoplay(); 
 };
 
 document.getElementById('prev').onclick = function() {
     prevSlide();
     stopAutoplay(); 
 };
 
 startAutoplay();
 
 document.getElementById('slide').addEventListener('mouseenter', function() {
     stopAutoplay();
 });
 
 document.getElementById('slide').addEventListener('mouseleave', function() {
     startAutoplay();
 });


 
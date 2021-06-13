/* This script will affect below mentioned pages 

    1.about.html
    2.products-list.html

    //// Modules added in this script page ////

    * Back to Top
    * OnScroll modules

*/
//computing the page height
var body = document.body,
    html = document.documentElement;

var pageheight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
//Get the button:
var mybutton = document.getElementsByClassName("back-to-top")[0];

// When the user scrolls down, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > pageheight/4 || document.documentElement.scrollTop > pageheight/4) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}




// When the user clicks on the button, scroll to the top of the document
$('.back-to-top').click(function() {
  $("html, body").animate({scrollTop: 0}, 500);
});  

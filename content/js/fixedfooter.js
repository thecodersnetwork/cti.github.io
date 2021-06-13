//Fixed footers and other scripts
var foo = document.getElementById('footer-wrapper');
 window.addEventListener('scroll',function(){
    var y = window.scrollY;
    var pHeight = window.innerHeight;
    var halfPage = pHeight/2;
    var stickyComp = document.getElementById('count');
    console.log(halfPage);
    if(y>=halfPage){
        foo.style.position = "fixed";
    }
    else{
       foo.style.position = "relative";
    }
}) 


// FOOTER HEIGHT SETTINGS
class _setParentHeight{
    constructor(wrapper){
        let element = document.getElementById(wrapper)
        let contentHeight = element.offsetHeight;
        let parentHeight = element.parentElement.offsetHeight;
        if(parentHeight<contentHeight){
          let wh = window.innerHeight;
          element.parentElement.style.height = wh+"px"
        }else{
          element.parentElement.style.height = contentHeight+"px"
        }
        document.addEventListener('resize',function(){
            console.log("initiated")
            if(parentHeight>contentHeight){
              let wh = window.innerHeight;
              element.parentElement.style.height = wh+"px"
            }else{
              element.parentElement.style.height = contentHeight+"px"
            }
        })
    }
}

// footer Initialization
footer_height = new _setParentHeight('footer-wrapper')


// footer on resize
document.addEventListener('resize',function(){
  footer_height = new _setParentHeight('footer-wrapper')
})
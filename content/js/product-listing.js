//dont touch
let expandProduct = function(obj,activeSelection){
  obj.classList.add('active');
  scroller.destroy();
  obj.style.overflowY ="scroll";
  let array = [0,1,2,3,4,5,6];
  const index = array.indexOf(activeSelection);
  if(index >-1){
    array.splice(index,1);
  }
  for(let i=0; i<array.length; i++){
    if(i>0){
      let otherSections = document.getElementById(array[i]);
      otherSections.style.display = "none";
    }
  }
  // reinitializing slick slider inside active section
  setTimeout(function(){
    $('.products-wrapper').slick('reinit');
  },1600)
}
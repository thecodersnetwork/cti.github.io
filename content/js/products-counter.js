class product_counter{
    constructor(counterID,activeIndicator, sectionName, totalId){
        let sections = document.getElementsByClassName(sectionName);
        let count = document.getElementById(counterID); 
        let sectionCount = sections.length;
        let total = document.getElementById(totalId);

        // Setting the total no of sections
        total.innerText = sectionCount;

        // Setting the offset Top height
        for (let i=0; i<sectionCount; i++){
            let x = sections[i].offsetTop;
            sections[i].setAttribute("data-scroll",x);
        }

       

        // Initializing the scroll function
        var scrolled = 0;
        document.addEventListener('scroll',function(){
            let activeCount = document.getElementById("counterRef");
            scrolled = window.scrollY;
           if(scrolled>sections[0].offsetTop -40 && scrolled< sections[1].offsetTop ){
            activeCount.innerText="1";
                // Resetting the active hinters
                let list = document.getElementsByTagName('li')
                for(let i=0; i< list.length; i++){
                    if(list[i].classList!=""){
                        list[i].classList.remove("pink-color")
                    }
                }
            let x = document.getElementById('menu-'+1)
            x.classList.add('pink-color');
           }
           else if(scrolled>sections[1].offsetTop -40 && scrolled< sections[2].offsetTop ){
            activeCount.innerText="2"
             // Resetting the active hinters
             let list = document.getElementsByTagName('li')
             for(let i=0; i< list.length; i++){
                 if(list[i].classList!=""){
                     list[i].classList.remove("pink-color")
                 }
             }
         let x = document.getElementById('menu-'+2)
         x.classList.add('pink-color');
           }
           else if(scrolled>sections[2].offsetTop -40 && scrolled< sections[3].offsetTop ){
            activeCount.innerText="3"
             // Resetting the active hinters
             let list = document.getElementsByTagName('li')
             for(let i=0; i< list.length; i++){
                 if(list[i].classList!=""){
                     list[i].classList.remove("pink-color")
                 }
             }
         let x = document.getElementById('menu-'+3)
         x.classList.add('pink-color');
           }
           else if(scrolled>sections[3].offsetTop -40 && scrolled< sections[4].offsetTop ){
            activeCount.innerText="4"
             // Resetting the active hinters
             let list = document.getElementsByTagName('li')
             for(let i=0; i< list.length; i++){
                 if(list[i].classList!=""){
                     list[i].classList.remove("pink-color")
                 }
             }
         let x = document.getElementById('menu-'+4)
         x.classList.add('pink-color');
           }
           else if(scrolled>sections[4].offsetTop -40 && scrolled< sections[5].offsetTop ){
            activeCount.innerText="5"
             // Resetting the active hinters
             let list = document.getElementsByTagName('li')
             for(let i=0; i< list.length; i++){
                 if(list[i].classList!=""){
                     list[i].classList.remove("pink-color")
                 }
             }
         let x = document.getElementById('menu-'+5)
         x.classList.add('pink-color');
           }
           else if(scrolled>sections[5].offsetTop -40){
            activeCount.innerText="6"
             // Resetting the active hinters
             let list = document.getElementsByTagName('li')
             for(let i=0; i< list.length; i++){
                 if(list[i].classList!=""){
                     list[i].classList.remove("pink-color")
                 }
             }
         let x = document.getElementById('menu-'+6)
         x.classList.add('pink-color');
           }
        })


           
        
    }
}
productScroll = new product_counter("counterRef","pink-color","section","total")

function showSection(id,e){
    let elt = document.getElementById('product-'+id);
    scrollTo(0,elt.offsetTop);  
}


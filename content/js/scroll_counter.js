
class _scrollFinder{
    constructor(elt,parent,selfHeight){
       let element = document.getElementById(elt);
       let parentElt = document.getElementById(parent);
       let listHeight = document.getElementById(selfHeight);

       let list_1 = document.getElementById('1')
       let list_2 = document.getElementById('2')
       let list_3 = document.getElementById('3')
       let list_4 = document.getElementById('4')
       let list_5 = document.getElementById('5')

       let ticker = document.getElementById('count')

       let list_1_top = list_1.offsetTop;//210
       let list_2_top = list_2.offsetTop;//367
       let list_3_top = list_3.offsetTop;//557
       let list_4_top = list_4.offsetTop;//747
       let list_5_top = list_5.offsetTop;//937

      

        document.addEventListener('scroll',function(){
            let y = window.scrollY;
            let o = parentElt.offsetTop;
            let h = element.offsetHeight;
            let lh = listHeight.offsetHeight;
            var i = 0;
            console.log(y+"_scrolled__"+o+"---parent--"+h+"---eleHeight--"+lh+"_listheight")
            if(y>=(h+o)){
                element.classList.add('active')
                element.classList.remove('inactive')
                element.classList.remove('bottom')
                element.classList.remove('top')
                if(y>=(h+o)){
                  list_1.parentElement.classList.add('active')
                  list_2.parentElement.classList.remove('active')
                  ticker.firstElementChild.innerText="01"
                }
                if(y>=(h+o+list_1_top) & y<=(h+o+list_2_top)){
                  list_1.parentElement.classList.remove('active')
                  list_2.parentElement.classList.add('active')
                  list_3.parentElement.classList.remove('active')
                  ticker.firstElementChild.innerText="02"
                }
                if(y>=(h+o+list_2_top) & y<=(h+o+list_3_top)){
                  list_2.parentElement.classList.remove('active')
                  list_3.parentElement.classList.add('active')
                  list_4.parentElement.classList.remove('active')
                  ticker.firstElementChild.innerText="03"
                }
                if(y>=(h+o+list_3_top) & y<=(h+o+list_4_top)){
                  list_3.parentElement.classList.remove('active')
                  list_4.parentElement.classList.add('active')
                  list_5.parentElement.classList.remove('active')
                  ticker.firstElementChild.innerText="04"
                  ticker.lastElementChild.innerText="05"
                  
                }
                if(y>=(h+o+list_4_top) & y<=(h+o+list_5_top)){
                  list_4.parentElement.classList.remove('active')
                  list_5.parentElement.classList.add('active')
                  ticker.firstElementChild.innerText="05"
                  ticker.lastElementChild.innerText=""
                }
            }
            if(y<=(h+o)){
                element.classList.remove('active')
                element.classList.add('inactive')
                element.classList.remove('bottom')
                element.classList.add('top')
            }
            if( y>(o+lh-(2*h))){
              element.classList.remove('active')
              element.classList.add('inactive')
              element.classList.add('bottom')
              element.classList.remove('top')
            }
        })
    }
}

process_scroll = new _scrollFinder('count','process','process-list');


// Scroll spy
function listActive(){
    let process = document.getElementById('process')
    let processlist = document.getElementById('process-list')
    let list_1 = document.getElementById('1')
    let list_2 = document.getElementById('2')
    let list_3 = document.getElementById('3')
    let list_4 = document.getElementById('4')
    let list_5 = document.getElementById('5')

    let processTop = process.offsetTop; //2198
    let processHeight = process.offsetHeight; //1338
    let processlistHeight = processlist.offsetHeight //934
    let listTop = processlist.offsetTop //159
    let list_1_top = list_1.offsetTop;//210
    let list_2_top = list_2.offsetTop;//367
    let list_3_top = list_3.offsetTop;//557
    let list_4_top = list_4.offsetTop;//747
    let list_5_top = list_5.offsetTop;//937
  }



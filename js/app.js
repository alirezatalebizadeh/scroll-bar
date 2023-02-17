let navContainer = document.querySelector('#mainNav')
let logo = document.querySelector('.logo img')
let linkElem = document.querySelectorAll('a')

let valueScrollTop = 0


//get value scrollTop and change background color and height with it 
function changeColorWithScroll() {

    valueScrollTop = document.documentElement.scrollTop;
    if (valueScrollTop > 0) {
        navContainer.style.backgroundColor = 'black'
        linkElem.forEach(a => {
            a.style.color = 'white'
        })
        logo.style.height = '65px'
    } else {
        navContainer.style.backgroundColor = 'white'
        linkElem.forEach(a => {
            a.style.color = 'black'
        })
        logo.style.height = '84px'
    }
}


//set event scroll on document
document.addEventListener('scroll', changeColorWithScroll)

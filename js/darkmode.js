let darkmode = document.querySelector('.darkmode')
let header__title = document.querySelector('.header__title')
let sky__title = document.querySelector('.sky__title')
let background = document.querySelector('body')
let headerBackground = document.querySelector('.header')
let itsme_title = document.querySelector('.itsme_title')
let about_box_list = document.querySelector('.about_box_list p')

let count = 0
darkmode.addEventListener('click',()=>{
    count++
    if(count%2 == 1){
        console.log(count)
        darkmode.innerHTML=`<i class="fa-solid fa-moon"></i>` 
        header__title.style.color = 'white'
        sky__title.style.color = 'white'
        background.style.background = 'black'
        headerBackground.style.background = 'black'
        itsme_title.style.color = 'white'
        about_box_list.style.color = 'white'
        
    } else {
        darkmode.innerHTML=`<i class="fa-solid fa-sun"></i>` 
        header__title.style.color = 'rgb(255, 175, 175)' 
        sky__title.style.color = 'black'
        background.style.background = 'white'
        headerBackground.style.background = 'white'
        itsme_title.style.color = 'black'
        about_box_list.style.color = 'black'

}})





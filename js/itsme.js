let love_btn = document.querySelector('.love_btn')
let song_btn = document.querySelector('.song_btn')
let love= document.querySelector('.love')
let song= document.querySelector('.song')


song_btn.addEventListener('click',()=>{
    song_btn.classList.remove('inverted')
    love_btn.classList.add('inverted')

    song.classList.remove('hidden')
    love.classList.add('hidden')

    love_btn.style.color ="gainsboro"
    song_btn.style.color ="black"
    

})

love_btn.addEventListener('click',()=>{
    love_btn.classList.remove('inverted')
    song_btn.classList.add('inverted')

    love.classList.remove('hidden')
    song.classList.add('hidden')

    song_btn.style.color ="gainsboro"
    love_btn.style.color ="black"
})


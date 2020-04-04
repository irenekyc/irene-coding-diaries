////////////////////Filter////////////////////////////////
const filterContainer = document.querySelector('.filter-container')
filterContainer.addEventListener('click', (e)=>{
    const actionPoint =  e.target.id
    if (actionPoint.includes('main')){
        return document.querySelector(`.${actionPoint}`).style.display="block"
    }
    if(e.target.id.includes('filter')){
       return console.log(e.target.id)
    }
    if (e.target.id.includes('sort')){
        return console.log(e.target.id)}
    
    if (e.target.id === "search-confirm"){
        return console.log(document.getElementById('searchKeyWords').value)
    } 
})

// Reveal on Scroll

const slideInItems = document.querySelectorAll('.reveal-items-slide')
const fadeInItems = document.querySelectorAll('.reveal-items')
const browserHeight = window.innerHeight

window.addEventListener('scroll', (e)=>{

//calculate when we should start calculating
    slideInItems.forEach((item)=>{
        calculateScroll(item, 'slideIn', 70)
    })
    fadeInItems.forEach((item)=>{
        calculateScroll(item, 'fadeIn', 95)
    })    
})

const calculateScroll = (item, effect, percentage)=>{
        let scrollPercentage = (item.getBoundingClientRect().y / browserHeight) *100
        if (scrollPercentage < percentage) {
            return item.classList.add(effect)
        }
    }

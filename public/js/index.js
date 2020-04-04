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

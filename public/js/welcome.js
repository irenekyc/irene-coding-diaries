
let subModalShown = false

const welcomeMsg = ()=>{
    if (!subModalShown){
    const welcomeModal = `
    <div class="modal">
    <div class="modal-inner">
    <div class="profile-pic"><img src="images/profile-thumbnail.jpg"></div>
    <div class="modal-description"> 
    <p> Hi My name is Irene! </p>
    <p> Please feel free to browse around! I hope you enjoy my site.</p>
    <a href="http://irene-k-message-board.herokuapp.com/" target="_blank" class="btn leave-message"> Leave me a message </a>
    <p class="btn continue-btn" id="close-modal"> Continue reading </p>
    </div>
    <span class="btn float-top" id="close-modal"> X </span>
    </div>`
    document.body.insertAdjacentHTML('beforeend', welcomeModal)
   
    closeModal()
}}

setTimeout(welcomeMsg, 6000)

const closeModal =()=>{
    document.body.addEventListener('click', (e)=>{
        if (e.target.id === "close-modal"){
       
           return document.querySelector('.modal').classList.add('closeModal')
        }
    })
    window.addEventListener('keydown',(e)=>{
        if (e.keyCode == 27){
            return document.querySelector('.modal').classList.add('closeModal')
        }
    })
}

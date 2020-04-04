let subModalShown = false
window.addEventListener('mousemove', (e)=>{
    if (e.y<5 && !subModalShown){
        console.log('Please show sub')
        const output = `<div class="modal">
        <div class="modal-inner">
        <div class="profile-pic"><img src="images/profile-thumbnail.jpg"></div>
        <div class="modal-description"> 
        <p> Thanks for stopping by!</p>
        <p> If you enjoy my site. You might wanna follow me on: </p>
        <div class="social-media">
        <ul>
        <li>
           <a href="https://www.youtube.com/channel/UC8AHif92m5CvePZDyhReejw/featured?view_as=subscriber" target="_blank"><i class="fab fa-youtube"></i></a>
       </li>
       <li>
            <a href="https://twitter.com/IreneK86090683" target="_blank"><i class="fab fa-twitter"></i></a>
       </li>
       <li>
            <a href="https://github.com/irenekyc" target="_blank"><i class="fab fa-github"></i></a>
       </li>
       <li>
           <a href="mailto:irenekayuc@gmail.com"><i class="fas fa-envelope"></i></a>
       </li>
  
   </ul>

        </div>
        <span class="btn float-top" id="close-modal"> X </span>
        </div>`
        document.body.insertAdjacentHTML('beforeend', output)
        subModalShown = true
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
})
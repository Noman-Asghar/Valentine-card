let yes = document.getElementById('btn-yes');
let no = document.getElementById('btn-no');
let img = document.getElementById('img');

  no.addEventListener('click', function(){
    
      if(no.innerText.includes('No')){
         no.innerHTML = "Are you sure"
         yes.style.width = "300px"
         yes.style.height = "300px"
         
      }

     else if(no.innerText.includes('Are you sure')){
         no.innerText = "plz accept my proposal"
         yes.style.width = "500px"
         yes.style.height = "500px"
  
      }

      else if(no.innerText.includes('plz accept my proposal')){
         yes.style.width = "800px"
         yes.style.height = "500px"
         no.innerText = "plzzz be be my Valentine"

      }

       else if(no.innerText.includes('plzzz be be my Valentine')){
         yes.style.width = "1000px"
         yes.style.height = "500px"
         no.innerText = "you are sure!!!"

      }
       else if(no.innerText.includes('you are sure!!!')){
        yes.style.width = "1200px"
         yes.style.height = "500px"
         no.innerText = "plzzzzzzzzzzzzzzzzzzzzzzz"
     }
     else if(no.className = "btn-no"){
         yes.style.width = "1800px"
        yes.style.height = "700px"
    }
  }) ;
 
 yes.addEventListener('click', function(){

    yes.style.width = "300px"
    yes.style.height ="100px"
    img.src = "/Assets/images/m.webp"
    img.style.width = "700px"
    yes.innerText ="Thanks my Love"
    no.style.display = "none"
 })


   
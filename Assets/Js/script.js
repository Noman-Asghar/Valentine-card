
let yes = document.getElementById('btn-yes');
let no = document.getElementById('btn-no');
let img = document.getElementById('img');

let width = ["300px","500px","800px","1000px","1200px","1800px"];
let height = ["300px","500px","500px","500px","700px"];
let array = ['No','Are you sure','plz accept my proposal','plzzz be be my Valentine','you are sure!!!',"plzzzzzzzzzzzzzzzzzzzzzzz"];
let i = 1;

no.addEventListener('click',function(){
 if (i<6) {
   
 
   no.innerHTML = array[i]
   no.style.width = width[i]
   no.style.height = height[i]

 i++;
 }

});


 yes.addEventListener('click', function(){

    yes.style.width = "300px"
    yes.style.height ="100px"
    img.src = "./Assets/images/m.webp"
    img.style.width = "700px"
    yes.innerText ="Thanks my Love"
    no.style.display = "none"
 });


   
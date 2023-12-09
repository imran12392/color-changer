let button=document.querySelectorAll(".box");
console.log(button);
let body=document.querySelector(".main");
button.forEach(function(button){
    
      button.addEventListener("click", function(e){
         
               if(e.target.id==="red"){
                body.style.backgroundColor=e.target.id
               }
               if(e.target.id==="green"){
                body.style.backgroundColor=e.target.id
               }
               if(e.target.id==="yellow"){
                body.style.backgroundColor=e.target.id
               }
               if(e.target.id==="pink"){
                body.style.backgroundColor=e.target.id
               }
      });
})
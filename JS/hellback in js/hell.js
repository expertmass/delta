let h1=document.querySelector("h1");
        
function changeColor(color, dealy , nextcolor){
  setTimeout(()=>{
     if(nextcolor) nextcolor();
      h1.style.color=color;
  },dealy);

 
}
changeColor("red",1000 , ()=>{
  changeColor("blue",1000 , () => {
      changeColor("green",1000);
  });
});
 
document.querySelector(".send__device").addEventListener("click", () => {
  document.querySelector(".send__modal").style.display = "block";
});


document.querySelector(".close").addEventListener("click",()=>{
  document.querySelector(".send__modal").style.display = "none";
})

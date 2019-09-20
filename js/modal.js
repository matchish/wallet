document.querySelector(".wallet-instructions-send-android").addEventListener("click", () => {
  document.querySelector(".wallet-instructions-send__modal-android").style.display = "block";
});


document.querySelector(".wallet-instructions-close-android").addEventListener("click",()=>{
  document.querySelector(".wallet-instructions-send__modal-android").style.display = "none";
})

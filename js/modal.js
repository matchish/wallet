document.querySelector(".wallet-instructions-send-android").addEventListener("click", () => {
  document.querySelector(".wallet-instructions-send__modal-android").style.display = "block";
});


document.querySelector(".wallet-instructions-close-android").addEventListener("click",()=>{
  document.querySelector(".wallet-instructions-send__modal-android").style.display = "none";
})


document.querySelector(".wallet-instructions-transactions-android").addEventListener("click", () => {
  document.querySelector(".wallet-instructions-transactions__modal-android").style.display = "block";
});


document.querySelector(".wallet-instructions-transactions__close-android").addEventListener("click",()=>{
  document.querySelector(".wallet-instructions-transactions__modal-android").style.display = "none";
})


document.querySelector(".wallet-instructions-privacy-android").addEventListener("click", () => {
  document.querySelector(".wallet-instructions-privacy__modal-android").style= "display:block;text-align:left;";
});


document.querySelector(".wallet-instructions-privacy__close-android").addEventListener("click",()=>{
  document.querySelector(".wallet-instructions-privacy__modal-android").style.display = "none";
})

document.querySelector(".wallet-instructions-receive-android").addEventListener("click", () => {
  document.querySelector(".wallet-instructions-receive__modal-android").style= "display:block;text-align:left;";
});


document.querySelector(".wallet-instructions-receive__close-android").addEventListener("click",()=>{
  document.querySelector(".wallet-instructions-receive__modal-android").style.display = "none";
})

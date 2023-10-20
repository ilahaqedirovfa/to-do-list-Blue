const nameInput=document.querySelector(".name-input");
const surnameInput=document.querySelector(".surname-input");
const emailInput=document.querySelector(".email-input");
const createButton=document.querySelector(".create");
const nameSpan=document.querySelector(".name-span");
const surnameSpan=document.querySelector(".surname-span");
const emailSpan=document.querySelector(".email-span");
const deleteButton=document.querySelector(".delete-button");



createButton.addEventListener("click", () =>{
    nameSpan.innerHTML=`<span>${nameInput.value}</span>`;
    surnameSpan.innerHTML=`<span>${surnameInput.value}</span>`;
    emailSpan.innerHTML=`<span>${emailInput.value}</span>`;
});


deleteButton.addEventListener("click",() =>{
    nameSpan.innerHTML=" "
    surnameSpan.innerHTML=" "
    emailSpan.innerHTML=" "
});





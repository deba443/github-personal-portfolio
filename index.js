const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

//about tab link
const var1=document.querySelector(".skill")
const var2=document.querySelector(".training")
const var3=document.querySelector(".education")
var1.addEventListener("click",function(){
    document.querySelector(".about__skill--content").style.display="block";
    document.querySelector(".about__training--content").style.display="none";
    document.querySelector(".about__education--content").style.display="none";
})
var2.addEventListener("click",function(){
    document.querySelector(".about__skill--content").style.display="none";
    document.querySelector(".about__training--content").style.display="block";
    document.querySelector(".about__education--content").style.display="none";
})
var3.addEventListener("click",function(){
    document.querySelector(".about__skill--content").style.display="none";
    document.querySelector(".about__training--content").style.display="none";
    document.querySelector(".about__education--content").style.display="block";
})

//contact form validation
// function nameValidation(){
//     let name=document.myform.name.value;
//     let regexName = /^[a-zA-Z ]{2,30}$/;
//     let nameValid=regexName.test(name.value);
//     if(nameValid){
//         return true
//     }
//     else{
//         document.querySelector('.validate').style.display="block";
//         return false
//     }
// }
// function emailValidation(){
//     const email=document.myform.email.value;
//     const regexEmail = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";
//     const emailValid=regexEmail.test(email.value);
//     if(emailValid){
//         return true
//     }
//     else{
//         document.querySelector('.validate').style.display="block";
//         return false
//     }

// }
// function numberValidation(){
//     const mob=document.myform.mob.value;
//     const regexMobile=/^(0|[+91]{3})?[7-9][0-9]{9}$/;
//     const mobValid=regexMobile.test(mob.value);
//     if(mobValid){
//         return true
//     }
//     else{
//         document.querySelector('.validate').style.display="block";
//         return false
//     }


// }

function validateform(){
    const nameValue=document.querySelector(".input--name").value;
    const emailValue=document.querySelector(".input--email").value;
    const numberValue=document.querySelector(".input--number").value;
    const nameCheck=/^[A-Za-z. ]{3,30}$/;
    const emailCheck=/^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    const numberCheck=/^[6789][0-9]{9}$/;
    if(nameCheck.test(nameValue)){
        document.querySelector(".name--error").innerHTML=""
    }
    else{
        document.querySelector(".name--error").innerHTML="*Username is not valid";
        return false;
    }
    if(emailCheck.test(emailValue)){
        document.querySelector(".email--error").innerHTML=""
    }
    else{
        document.querySelector(".email--error").innerHTML="*email is not valid";
        return false;
    }
    if(numberCheck.test(numberValue)){
        document.querySelector(".number--error").innerHTML=""
    }
    else{
        document.querySelector(".number--error").innerHTML="*number is not valid";
        return false;
    }
}
var nname=document.getElementById("name")
var email=document.getElementById("email")
var subject=document.getElementById("subject")
var phone=document.getElementById("phone")
var massage=document.getElementById("massage")
var btn=document.getElementById("btn")
//validation
nname.onkeyup=function(){
    pattern=/^[A-Z][a-z]{2,10}$/
    if(pattern.test(nname.value)){
        nname.classList.remove('is-invalid')
      nname.classList.add('is-valid')
    }
    
    else
    {
        nname.classList.remove('is-invalid')
        nname.classList.add('is-invalid')
    }
}
email.onkeyup=function(){
    pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(pattern.test(email.value)){
        email.classList.remove('is-invalid')
      email.classList.add('is-valid')
    }
    
    else
    {
        email.classList.remove('is-invalid')
        email.classList.add('is-invalid')
    }
}
subject.onkeyup=function(){
    pattern=/^[a-z]{2,10}$/
    if(pattern.test(email.value)){
        subject.classList.remove('is-invalid')
      subject.classList.add('is-valid')
    }
    
    else
    {
        subject.classList.remove('is-invalid')
        subject.classList.add('is-invalid')
    }
}
phone.onkeyup=function(){
    pattern=/^\d{10}$/;
    if(pattern.test(email.value)){
        phone.classList.remove('is-invalid')
      phone.classList.add('is-valid')
    }
    
    else
    {
        phone.classList.remove('is-invalid')
        phone.classList.add('is-invalid')
    }
}
massage.onkeyup=function(){
    pattern=/^[a-z]{2,50}/;
    if(pattern.test(email.value)){
        massage.classList.remove('is-invalid')
     massage.classList.add('is-valid')
    }
    
    else
    {
        massage.classList.remove('is-invalid')
        massage.classList.add('is-invalid')
    }
}
function clearInputs(){
    nname.value=''
         email.value=''
    phone.value=''
     subject.value=''
    massage.value=''
}

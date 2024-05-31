let passwordBox=document.querySelector('.password');
let upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCase='abcdefghijklmnopqrstuvwxyz';
let number='0123456789';
let symbol='!`@#$5^&*()[]{};,.<>?/\+_-~';
let button=document.querySelector('button');
let len=20;
let allChar=upperCase+lowerCase+number+symbol;
button.addEventListener('click',function(){
    let pass='';
    pass+=upperCase[Math.floor(Math.random()*upperCase.length)];
    pass+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    pass+=number[Math.floor(Math.random()*number.length)];
    pass+=symbol[Math.floor(Math.random()*symbol.length)];
    while(pass.length<len){
        pass+=allChar[Math.floor(Math.random()*allChar.length)];
    }
    passwordBox.value=pass;
})
let copy=document.querySelector('.fa-copy');
copy.addEventListener('click',function(){
    passwordBox.select();
    window.navigator.clipboard.writeText(passwordBox.value);
})
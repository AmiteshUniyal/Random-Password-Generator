const create = document.getElementById('create');
const easy = document.getElementById('easy');
const medium = document.getElementById('medium');
const hard = document.getElementById('hard');
const input = document.getElementById('input');
let password = '';
let weak = false;
let good = false;
let strong = false;

easy.addEventListener('click', () => {
    if(weak == false){
        weak = true;
        good = false;
        strong = false;
    }
});

medium.addEventListener('click', () => {
    if(good == false){
        weak = false;
        good = true;
        strong = false;
    }
});

hard.addEventListener('click', () => {
    if(strong == false){
        weak = false;
        good = false;
        strong = true;
    }
});

create.addEventListener('click', () => {
    if(weak == true){
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < char.length; i++){
        password += char.charAt(Math.random() * char.length);
    }
    password = password.slice(-6);
    }
    else if(good == true){
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < char.length; i++){
        password += char.charAt(Math.random() * char.length);
    }
    password = password.slice(-6);
    let num = Math.floor(Math.random()*100000);
    password += num;
    }   
    else if(strong == true){
        password = Math.random().toString(36).slice(-10);
    }
    input.value = password;
});
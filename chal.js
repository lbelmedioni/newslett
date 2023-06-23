var inp=document.querySelector('.inp'); 
const error=document.querySelector('#error');
const btn=document.querySelector('.btn');
const btn1=document.querySelector('.btn1');
var container1=document.querySelector('.container1');
var container2=document.querySelector('.container2');
const message=document.querySelector('#message');

function ValidEmail(){
    let  valid=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if(!inp.value.match( valid) ||inp.value==''){
    error.textContent='Valid email required';
    inp.style.borderColor='rgb(219, 104, 104)';
    inp.style.color='rgb(219, 104, 104)';
    inp.style.backgroundColor=' hsl(4, 45%, 76%)';
    return false;}
    else return true;
}


function subscribe(){
    if(!ValidEmail()){
        return;
    }
    error.textContent='';
    inp.style.borderColor='hsl(231, 7%, 60%)';
    inp.style.color='hsl(231, 7%, 60%)';
    inp.style.backgroundColor=' white';

container1.style.display='none';
container2.style.display='inline-block';
message.textContent=inp.value;

}

function dismiss(){
container2.style.display='none';
container1.style.display='grid';
}

btn.addEventListener('click',subscribe);
btn1.addEventListener('click',dismiss);


























    
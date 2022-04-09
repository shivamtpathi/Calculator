let screen = document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenDisplay= " "

for(i of buttons){
    i.addEventListener('click',(e)=>{
    buttonText=e.target.innerText;
    
if(buttonText=='X'){
    buttonText='*';

screenDisplay +=buttonText;
screen.value=screenDisplay;
}

else if(buttonText=='C'){

    screenDisplay=" ";
    screen.value=screenDisplay;
}
else if(buttonText=='='){
    screen.value=eval(screenDisplay);

}
else{
    screenDisplay +=buttonText;
    screen.value=screenDisplay;
}

}
)}
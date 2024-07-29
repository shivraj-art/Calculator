let output=document.querySelector(".display");
let buttons=document.querySelectorAll("button");
let str='';
let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            str=eval(str);
            output.value=str;
        }
        else if(e.target.innerHTML=='AC'){
            str='';
            output.value=str;
        }
        else if(e.target.innerHTML=='DEL'){
            str=str.substring(0,str.length-1);
            output.value=str;
        }
        else{
            str+=e.target.innerHTML;
            output.value=str;
        }
    })
})


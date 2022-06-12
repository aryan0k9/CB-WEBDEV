const btn = document.querySelectorAll('button');
const screen = document.querySelector('#screen');
for(let button of btn){
    button.addEventListener('click',(e)=>{
        const val = button.innerText;
        if(val === 'C'){
            screen.value = '';
        }
        else if(val === 'X'){
            screen.value += '*';
        }
        else if(val === '='){
            try {
                screen.value = eval(screen.value);
            } catch (e) {
                screen.value = ('invalid Operation');
            }
        }
        else{
            screen.value = screen.value + val;
        }
    })
    
}
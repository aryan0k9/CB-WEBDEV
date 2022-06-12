const arr =[];
function run(){
    const val = document.querySelector('input');
    const list = document.createElement('li');
    const mainEdit=document.createElement('div');
    const divEdit = document.createElement('div');
    const divDelete = document.createElement('div');
    const divUp = document.createElement('div');
    const divDown = document.createElement('div');
    const dive = document.querySelector('div');
    const g = val.value;
    arr.push(val.value);
    console.log(arr);
    
    list.classList.add('liststyle');
    // Color Generater
        const col1 = Math.floor(Math.random()*257);
        const col2 = Math.floor(Math.random()*257);
        const col3 = Math.floor(Math.random()*257);
        const randcolor= (`${col1}, ${col2}, ${col3}`);
        
    list.style.backgroundColor= `rgb(${randcolor})`;
    mainEdit.style.backgroundColor = `rgb(${randcolor})`;
    divEdit.style.backgroundColor = `rgb(${randcolor})`;
    divDelete.style.backgroundColor = `rgb(${randcolor})`;
    divUp.style.backgroundColor = `rgb(${randcolor})`;
    divDown.style.backgroundColor = `rgb(${randcolor})`;
    // End Color Generator
    dive.classList.add('divescroll');
    mainEdit.classList.add('mainEdit');
    divEdit.classList.add('edit');
    divDelete.classList.add('edit');
    divUp.classList.add('edit');
    divDown.classList.add('edit');
    divEdit.innerHTML = '<i class="fa-solid fa-pen"></i>';
    divDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    divUp.innerHTML ='<i class="fa-solid fa-angle-up"></i>';
    divDown.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
    list.innerText = g;
    list.append(mainEdit);
    mainEdit.append(divEdit);
    mainEdit.append(divDelete);
    mainEdit.append(divUp);
    mainEdit.append(divDown);
    dive.append(list);
    
    divDelete.addEventListener('click', function(){
        list.remove();
    })
    divEdit.addEventListener('click',function(){
        const value = window.prompt("Please Edit Todo List");
        list.innerText = (value);
        list.append(mainEdit);
    })

    
    // Hover On Button Start
    divDelete.addEventListener('mouseover',function(){
        this.style.backgroundColor='white';
        this.style.color = `rgb(${randcolor})`;
    })
    divDelete.addEventListener('mouseleave',function(){
        this.style.backgroundColor=`rgb(${randcolor})`;
        this.style.color = 'white';
    })
    divEdit.addEventListener('mouseover',function(){
        this.style.backgroundColor='white';
        this.style.color = `rgb(${randcolor})`;
    })
    divEdit.addEventListener('mouseleave',function(){
        this.style.backgroundColor=`rgb(${randcolor})`;
        this.style.color = 'white';
    })
    divUp.addEventListener('mouseover',function(){
        this.style.backgroundColor='white';
        this.style.color = `rgb(${randcolor})`;
    })
    divUp.addEventListener('mouseleave',function(){
        this.style.backgroundColor=`rgb(${randcolor})`;
        this.style.color = 'white';
    })
    divDown.addEventListener('mouseover',function(){
        this.style.backgroundColor='white';
        this.style.color = `rgb(${randcolor})`;
    })
    divDown.addEventListener('mouseleave',function(){
        this.style.backgroundColor=`rgb(${randcolor})`;
        this.style.color = 'white';
    })
    // Hover On Button End
    
}

const btn = document.querySelector('button');
const inputs = document.querySelector('input');

btn.addEventListener('click',()=>{
    inputs.value ='';
})


// hey
// const inp = document.querySelector('#inp');
// const bt = document.querySelector('#btn');
// const list = document.querySelector('#list');

// const data=["apple","ball","cat","dog","egg"];



//   const fun=()=>{arr.map((element)=>{
//       console.log(element);
//         const todoText = element;


//     if (todoText === "") {
//         alert('Empty Todo');
//         return;
//     }

//     const li = document.createElement('div');
//     let index=data.indexOf(todoText);

//     li.innerHTML=`${todoText}  <button id=${index} class='upBtn'>up</button>`


//     // li.innerText = todoText;
//     list.append(li);
//     upButton=document.getElementById(index);
//     upButton.addEventListener('click',()=>{
//         // console.log(`the index is ${index}`);
//         let temp=data[index];
//         data[index]=data[index-1];
//         data[index-1]=temp;
//         list.innerHTML="";
//         fun();
//     })
    

//   })
// }

// fun();

// divUp.addEventListener('click',()=>{
//     const text=inp.value;
//     data.push(text);
//     list.innerHTML="";
//     fun();
// })

// const divUp = document.createElement('div');
// divUp.addEventListener('click',function(){
//     const present = this.parentElement;
//     const prev = present.previousElementSibling;
//     if(prev){
//         prev.before(present);
//       }
//       return;
// })

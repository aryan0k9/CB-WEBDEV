const form = document.querySelector('form');
const section = document.querySelector('section');
const div = document.querySelector('div');
const BASE_URL = 'https://community-open-weather-map.p.rapidapi.com/weather?q=';
const h2 = document.createElement('h2');
const h3 = document.createElement('h3');
const h4 = document.createElement('h4');
const h32 = document.createElement('h3');
let month,weak;

const monthName = ['January','February','March','April','May','June','July','August','September','November','December'];
const weakName = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];

const date = new Date();

const monthInNumber = date.getUTCMonth();
for(let i=0; i<monthName.length; i++){
    if(monthInNumber === i){
        month = (monthName[i]);
    }
}

const weakInNumber = date.getDay();
for(let i =0; i<weakName.length; i++){
    if(weakInNumber === i){
        weak = weakName[i];
    }
}
const todayDate = date.getDate();
const year = date.getFullYear();

function celsius(temp){
   return ((temp - 32)*(5/9));
}

function weatherCall(val){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a279e48567mshe4ff62ee5a8598fp161812jsn7f8a3420949b',
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
        }
    };
    fetch(`${BASE_URL}${val}&units=imperial`, options)
        .then(response => response.json())
        .then((data)=>{
            try{
                const temp = (data.main.temp);
                section.append(h3);
                section.append(h2);
                h3.innerText = `${data.name},${data.sys.country}\n ${todayDate} ${month} (${weak}), ${year}`;
                h2.innerHTML = `${Math.round(celsius(temp))}&#176C`;
                const tempMin = data.main.temp_min;
                const tempMax = data.main.temp_max;
                section.append(h4);
                h4.innerHTML = `${Math.round(celsius(tempMin))}&#176C (Min)/${Math.round(celsius(tempMax))}&#176C (Max) <br> ${Math.round(data.wind.speed)}k/m`
                section.append(h32);
                h32.innerText = `${data.weather[0].main}`;
                
                if(h32.innerText === 'Mist'){
                    div.style.backgroundImage = "url('images/mist.jpg')";
                    div.classList.add('cover');
                }
                else if(h32.innerText === 'Clouds'){
                    div.style.backgroundImage = "url('images/clouds.jpg')";
                    div.classList.add('cover');
                }
                else if(h32.innerText === 'Clear'){
                    div.style.backgroundImage = "url('images/clear.jpg')";
                    div.classList.add('cover');
                }
                else if(h32.innerText === 'Haze'){
                    div.style.backgroundImage = "url('images/haze.jpg')";
                    div.classList.add('cover');
                }
                else if(h32.innerText === 'Rain'){
                    div.style.backgroundImage = "url('images/rain.jpg')";
                    div.classList.add('cover');
                }

                h3.classList.add('h3');
            }
            catch(err){
                alert("Enter City Name Correctly");
            }
        })
        .catch(err => console.error(err));
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const val = form.children[0].value;
    weatherCall(val);
    form.children[0].value = "";
});
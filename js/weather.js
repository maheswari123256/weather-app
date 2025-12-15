const APIKEY= API_KEY;/*open weather website*/
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.getElementById("city");
const searchBtn=document.getElementById("btn");

async function checkweather(city = "Tunisia") {
  const res = await fetch(URL + city + `&appid=${APIKEY}`);
  const data = await res.json();

  if (data.cod !== 200) {
    alert(data.message); // invalid key / city not found
    return;
  }

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.floor(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML =
    data.main.humidity + "%";
  document.querySelector(".wind").innerHTML =
    data.wind.speed + " km/h";
}

searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value)
})
searchBox.addEventListener("click",(e)=>{
   if(e.key=="Enter"){
     checkweather(searchBox.value)
   }
})
checkweather()
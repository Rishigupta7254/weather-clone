
    const apikey="b28a40c01c4c6f24bb2c5b505788fe4b"
    const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");



    async function checkweather(city){
        const response=await fetch(apiurl+ city+ `&appid=${apikey}`);
    var data= await response.json();
    

document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=math.round(data.main.temp) +"°c";
document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
document.querySelector(".wind ").innerHTML=data.wind.speed + " km/h";

if(data.weather[0].main=="clouds"){
    weatherIcon.src="clouds.png";
}
else if(data.weather[0].main=="clear"){
    weatherIcon.src="clear.png";
}
else if(data.weather[0].main=="Rain"){
    weatherIcon.src="rain.png";}


    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="drizzle.png";}


        else if(data.weather[0].main=="mist"){
            weatherIcon.src="mist.png";}


document.querySelector(".weather").style.display="block";

    }


    searchBtn.addEventListener("click",()=>{
        checkweather(searchBox.value);



    })
 
    
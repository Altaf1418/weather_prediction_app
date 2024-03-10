const button=document.getElementById("butt");
const inputValue=document.getElementById("Input");
const nameValue=document.getElementById("name");
const temperaturValue=document.getElementById("temperatur")
const Time=document.getElementById("Date");
const element=document.getElementById("image")
async function Data(value)
{
    const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=8849f07933c6465393d165625240603&q=${value}&aqi=yes`);
    return await promise.json();
}
button.addEventListener('click',async ()=>{
    const Value=inputValue.value;
    console.log(Value)
    const MainData=await Data(Value);
    nameValue.innerText=`${MainData.location.name},${MainData.location.region},${MainData.location.country}`
    temperaturValue.innerText=MainData.current.temp_c
    Time.innerText=`${MainData.location.localtime}`
    const currTemp=MainData.current.temp_c
    console.log(currTemp)
    //console.log("altaf")
    
     if(currTemp>30)
    {
       element.innerHTML ='<img src="summer-season.htm"width="1496px" height="696px" alt="Your Image">';
       //element.innerText="element";
       element.style.backgroundSize = "cover"; 
      element.style.backgroundRepeat = "no-repeat"; 
    }
    else if(currTemp>20 && currTemp<=30)
    {
        element.innerHTML ='<img src="weather.jpeg" width="1496px" height="696px" alt="bcc">';
         element.style.backgroundSize = "cover"; 
        element.style.backgroundRepeat = "no-repeat"; 
    }
    else if(currTemp>10 && currTemp<=20)
    {
        element.innerHTML ='<img src="rainy_seas.webp"width="1496px" height="696px" alt="Your Image">';
       element.style.backgroundSize = "cover"; 
       element.style.backgroundRepeat = "no-repeat";  
    }
    else{
        element.innerHTML ='<img src="Cold.jpg"width="1496px" height="696px" alt="Your Image">';
        element.style.backgroundSize = "cover"; 
        element.style.backgroundRepeat = "no-repeat";    
    }

    
})

import axios from 'axios';
const API_KEY = '860ac414c6b42de5dec224f563b51b9c';
const ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;  //ES6 way
export const FETCH_WEATHER = 'FETCH_WEATHER'; 
export function fetchWeather(city){

    if(!city){
        return alert('Enter Your City')
    }

    const url = `${ROOT_URL}&q=${city},IN`;
    const request = axios.get(url); //ajax request axios returns a promise, (request)

    // console.log('Request:',request);


    return{

        type:FETCH_WEATHER,  //referencing makes it easy to modify as we need to make changes
                            // at single location only  

        payload: request   //returning promise as a payload here  
       };
}                 





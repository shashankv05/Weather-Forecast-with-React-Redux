import React, {Component} from  'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_maps';
/* <Sparklines data={[5, 10, 5, 20]}>
      <SparklinesLine color="blue" />
  </Sparklines>
*/

class WeatherList extends Component{

    renderWeather(cityData){   // weather - array of objects and each object (CityData here) represents a city
        const name =cityData.city.name;
        const temps = cityData.list.map(weather=>weather.main.temp);
        const pressure = cityData.list.map(weather=>weather.main.pressure);
        const humidity = cityData.list.map(weather=>weather.main.humidity);

        const {lon, lat} = cityData.city.coord; // ES6
        //find the coord, grab lon and lat property and assign them to two new variables lon, lat

        // const lon = cityData.city.coord.lon;
        // const lat = cityData.city.coor.lat;


        // console.log(temps)
        // const temps_inCelsius = _.map(cityData.list.map(weather=>weather.main.temp), (temp)=>temp-273);
        return(
            <tr key = {name}>
               
               <td><GoogleMap lon = {lon} lat = {lat}/></td>
               
               
               <td>
                <Chart data = {temps} color = "orange" units=" K"/>
               </td>
               <td>
                <Chart data = {pressure} color = "green" units=" hPa"/>
               </td>
               <td>
                <Chart data = {humidity} color = "black" units=" %"/>
               </td>
            </tr>
        );

    }

    render(){
        return(
            <table className="table table-group">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
    
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>

            </table>
        );
    }

}

function mapStateToProps({weather}){  

    return {weather};    
}  

export default connect(mapStateToProps)(WeatherList);
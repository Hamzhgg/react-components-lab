import './WeatherForecast.css';
import WeatherLook from './WeatherLook.jsx'
import WeatherData from './WeatherData.jsx'
const WeatherForecast = ({forecast}) => {
    return(
        <div className="weather">
            <WeatherLook forecast={forecast} />
            <WeatherData forecast={forecast} />
        </div>
    );
};
export default WeatherForecast;
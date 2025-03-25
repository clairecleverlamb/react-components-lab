import './WeatherForecast.css';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherData from '../WeatherData/WeatherData';

const WeatherForecast = ({ forecast }) => {
    const {day, conditions, time, img, imgAlt} = forecast;
    return (
      <div className='weather'>
        <WeatherData day={day} conditions={conditions} time={time} />
        <WeatherIcon img={img} imgAlt={imgAlt} />
      </div>
    );
};

export default WeatherForecast;
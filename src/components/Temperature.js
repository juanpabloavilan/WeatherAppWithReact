import {TiWeatherCloudy, TiWeatherDownpour, TiWeatherPartlySunny, TiWeatherStormy, TiWeatherSnow, TiWeatherSunny} from 'react-icons/ti'

const Temperature = ({temperature, description}) => {
    const chooseIcon=()=>{
        switch(description){
            case "nuboso": return <TiWeatherCloudy/>
            default: return <TiWeatherSunny/>
        }
    }
    return (
        <div className="temperature-container">
            <h1>{temperature} <span className="weather-icon">{chooseIcon()}</span></h1>
            <p>{description}</p>
        </div>
    )
}

export default Temperature

import React from 'react'
import { HoursCards } from './HoursCards'
import { HomeMap } from './HomeMap'
import { OtherInfo } from './OtherInfo'
import { AddFavBtn } from './FavLocations/Buttons/AddFavBtn'
import { DelFavBtn } from './FavLocations/Buttons/DelFavBtn'
import Forecast from '../Forecast'
import { DaysCards } from './DaysCards'
import { Spinner } from './Spinner/Spinner'

const OtherLocationWeather = ({ currentWeatherData, city, showDays, handleSliders, handlePrevSlide, handleNextSlide, slide, formatLocalTime, corazonState, signedUser, toggleForecastCollapse, isForecastCollapsed, setCorazonState}) => {
    return (
        <div className="w-100">
            <div className="currentWeather">
                {
                   currentWeatherData !== undefined ? (
                        <div className="forecast_container">
                            <img src={currentWeatherData.forecast.forecastday[0].day.condition.icon}  alt="icon-forecast" className="icon_forecast"/>
                            <div className="d-flex justify-content-around w-50">
                                <h5>{formatLocalTime(currentWeatherData.location.localtime)}</h5>
                            </div>
                            <div> 
                                <h3>{currentWeatherData.location.name}, {currentWeatherData.location.region}</h3>
                            </div>
                            <div>
                                <h1>{currentWeatherData.current.temp_c} ºC</h1>
                            </div>
                            <p className="m-0 p-0">{currentWeatherData.forecast.forecastday[0].day.condition.text}</p>
                            <div className="d-flex flex-column m-0 p-0">
                                <p className="m-0 p-0">Máxima: {currentWeatherData.forecast.forecastday[0].day.maxtemp_c}ºC Mínima: {currentWeatherData.forecast.forecastday[0].day.mintemp_c}ºC</p>
                            </div>
                            <div className="corazon_container" onClick={()=>setCorazonState(!corazonState)}>
                                { corazonState ?
                                    <DelFavBtn
                                        uid={signedUser.uid}
                                        cityName={currentWeatherData.location.name}
                                    />
                                    :
                                    <AddFavBtn
                                        uid={signedUser.uid}
                                        cityName={currentWeatherData.location.name}
                                    />
                                } 
                            </div>
                        </div>
                ) : "No se encontro informacion"}   
            </div>
            <div className="days_arrows_container">
                <div className="days_container">
                    <span className={showDays ? "disable_days me-1" : "active_days"} onClick={handleSliders}>Hoy</span>
                    <span className={showDays ? "active_days me-1" : "disable_days"}  onClick={handleSliders}>10 dias</span>
                </div>
                <div className='arrows_container'>
                    <button onClick={handlePrevSlide} className='arrows'><img src="./iconos/left_arrow.png" alt="Deslizar a  la izquierda" /></button>
                    <button onClick={handleNextSlide} className='arrows'><img src="./iconos/right_arrow.png" alt="Deslizar a la derecha" /></button>
                </div>
            </div>
            <div className="lineHome"></div>
            <div className="w-75" style={{margin: "auto"}}>
                { showDays ? 
                    <DaysCards
                        city={currentWeatherData.location.name}
                        slide={slide}
                    />
                    :
                    <HoursCards
                        data={currentWeatherData}
                        slide={slide}
                    />
                }
                {currentWeatherData && currentWeatherData.location && (
                    <div className='collapseForecast'>
                        <button
                            className="btn btn-outline-dark buttonHover rounded-pill mt-3"
                            type="button"
                            onClick={toggleForecastCollapse}
                        >
                            Ver Pronóstico Extendido
                        </button>
                        <div className={`collapse ${isForecastCollapsed ? '' : 'show'}`} id="collapseExample">
                            <div className="card card-body forecastContainer">
                                <Forecast city={city} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="section_map_other">
                <HomeMap/> 
                <OtherInfo data={currentWeatherData} />
            </div>
        </div>
    )
}

export default OtherLocationWeather
import { Spinner } from "./Spinner/Spinner";

export const HoursCards = ({data,slide}) => {
    return (
      <div className='hoursCards_container container-fluid'>
        <div style={{ transform: `translateX(-${slide * 10}%)`, display: "flex", gap: "10px" }}>
          {data && data.forecast && data.forecast.forecastday && data.forecast.forecastday[0] && data.forecast.forecastday[0].hour ? (
            data.forecast.forecastday[0].hour.map((element, index) => (
              <div key={index} className='hoursCard_item m-2' style={{ height: "200px", width: "150px"}}>
                <h4>{element.time.slice(11, 13)} hs</h4>
                <img src={element.condition.icon} alt="" />
                <div>
                  <h4>{element.temp_c} ºC</h4>
                </div>
              </div>
            ))
          ) : (
            <Spinner/>
          )}
        </div>
      </div>
    );
  };
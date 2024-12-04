
// export default function WeatherDay(){}

import { FaUmbrella } from "react-icons/fa6";

function WeatherDay({ city }) {




  return (
    
     
                <div className="content">
                  {

                    city.weatherElement[0].time.map((time, index) => {
                      return (
                        <div className="item2" key={index}>
                          {/* <p>4日</p> */}
                          <p>
                            {
                              /* 擷取日期 */
                              new Date(time. startTime).toLocaleString(undefined,
                                { day: 'numeric' }
                              )

                            }
                          </p>
                          <p>
                            {/* 時間 */}
                            {
                              new Date(time. startTime).toLocaleString(undefined, {
                                hour: 'numeric',
                                minute: 'numeric'
                              })
                            }
                            <br />~<br />
                            {
                              new Date(time. endTime).toLocaleString(undefined, {
                                hour: 'numeric',
                                minute: 'numeric'
                              })
                            }
                          </p>
                          {/* 天氣 */}
                          {/* <img src="../public/weatherIcon/晴時多雲.svg" alt="" /> */}
                          <p><img src={`./weatherIcon/${time.parameter.parameterName}.svg`} alt="" /></p>
                          <p>{time.parameter.parameterName}</p>

                          {/* 降雨機率 */}

                          {/* <p>{<FaUmbrella />} 30% </p> */}
                          <p><FaUmbrella />
                            {
                              city.weatherElement[4].time[index].parameter.parameterName
                            }

                          </p>
                          <p>
                            {
                              city.weatherElement[4].time[index].parameter.parameterUnit
                            }
                          </p>

                        </div>

                      )

                    })

                  }
                </div>
            
              
    

  )

}
export default WeatherDay
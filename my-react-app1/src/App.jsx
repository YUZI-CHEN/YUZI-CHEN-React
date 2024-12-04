import { useEffect, useState } from "react";
import axios from 'axios';
import "./app.css";
import { FaUmbrella } from "react-icons/fa6";




function App() {
  const [weatherList, setWeatherList] = useState([]);

  useEffect(() => {

    (async () => {
      // json檔案要放在雲端上
      const data = await axios.get('https://yuzi-chen.github.io/YUZI-CHEN-React/json/F-C0032-001.json/');
      // console.log(data);
      //第一個data是上一行的data

      const { location } = data.data.cwaopendata.dataset;
      console.log(location);


      //locationName=>縣市名稱
      // elementName=>Wx=>天氣概況
      // elementName=>PoP=>降雨機率


    })()
  }, [])



  return (
    <>
      <div >
        <h2>36小時天氣預報</h2>
        {/* 一列二欄 */}
        <div className="container">
          {
            weatherList.map((city) => {
              return <div className="item" key={city.locationName}>

                <h3>{city.locationName}</h3>


              </div>


            })
          }
        </div>

        <div className="row">


        </div>


      </div>

      {/* <div className="card" >
        <div className="item">
          <p>臺北市</p>
        </div>
        <div className="counter">
          <p>2日</p>
          <p>上午6:00~下午6:00</p>
          <img src="" alt="" />
          <p>晴時多雲</p>
          <p>10%</p>
        </div>
        <div className="counter" >
          <p>2日</p>
          <p>上午6:00~下午6:00</p>
          <img src="" alt="" />
          <p>多雲時晴</p>
          <p>20%</p>
        </div>
        <div className="counter">
          <p>3日</p>
          <p>上午6:00~下午6:00</p>
          <img src="" alt="" />
          <p>多雲短暫雨 </p>
          <p>30%</p>
        </div>


      </div>
 */}

    </>
  )
}

export default App;

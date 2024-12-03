import { useEffect } from "react";
import axios from 'axios';
import "./app.css";
import { FaUmbrella } from "react-icons/fa6";




function App() {

  useEffect(() => {}, [])

   

  return (
    <>
      <div >
        <h2>36小時天氣預報</h2>
        {/* 一列二欄 */}
        <div className="row">

          <Weather/>
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

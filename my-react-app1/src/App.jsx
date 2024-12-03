import { useEffect } from "react";
import axios from 'axios';
import "./app.css";
import { FaUmbrella } from "react-icons/fa6";
function App() {

  useEffect(() => {

    (async () => {
      // json檔案要放在雲端上
      const data = await axios.get('https://yuzi-chen.github.io/https---github.com-YUZI-CHEN-React/json/F-C0032-001.json/');
      console.log(data);
      //第一個data是上一行的data

      // const { location } = data.data.cwaopendata.dataset;
      // console.log(location);
    })()
  }, [])

  return (
    <>
      <div >
        <h2>36小時天氣預報</h2>
        {/* 一列二欄 */}
        <div className="row">
          <div className="col">
            {/* 卡片樣式 */}
            <div className="card">
              {/* 標題 */}
              <div className="card-title">
                台北市

              </div>
              {/* 內容 */}
              <div className="card-body">
                {/* 一列三欄 */}
                <div className="row2">
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00
                      <br>

                      </br>下午6:00
                    </p>
                    <p>
                      <img src="./public/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>晴時多雲</p>
                    <p>{<FaUmbrella />} 10%</p>

                  </div>
                </div>
                <div className="row2">
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00
                      <br>

                      </br>下午6:00
                    </p>
                    <p>
                      <img src="./public/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>晴時多雲</p>
                    <p>{<FaUmbrella />} 10%</p>

                  </div>
                </div>
                <div className="row2">
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00
                      <br>

                      </br>下午6:00
                    </p>
                    <p>
                      <img src="./public/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>晴時多雲</p>
                    <p>{<FaUmbrella />} 10%</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            {/* 卡片樣式 */}
            <div className="card">
              {/* 標題 */}
              <div className="card-title">
                台北市

              </div>
              {/* 內容 */}
              <div className="card-body">
                {/* 一列三欄 */}
                <div className="row2">
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00
                      <br>

                      </br>下午6:00
                    </p>
                    <p>
                      <img src="./public/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>晴時多雲</p>
                    <p>{<FaUmbrella />} 10%</p>

                  </div>
                </div>
                <div className="row2">
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00
                      <br>

                      </br>下午6:00
                    </p>
                    <p>
                      <img src="./public/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>晴時多雲</p>
                    <p>{<FaUmbrella />} 10%</p>

                  </div>
                </div>
                <div className="row2">
                  <div className="col2">
                    <p>2日</p>
                    <p>
                      上午6:00
                      <br>

                      </br>下午6:00
                    </p>
                    <p>
                      <img src="./public/weatherIcon/晴時多雲.svg" alt="" />
                    </p>
                    <p>晴時多雲</p>
                    <p>{<FaUmbrella />} 10%</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
       
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

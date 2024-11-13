import "./app.css";

function App() {
  const textBox = {
    s1: {
      name: "教學影音",
      contents:
        " 誘導影片課程，來了解軟體的核心概念以及入門，並跟著範例練習以了解其中之應用方式",
    },
    s2: {
      name: "良性互動",
      contents:
        "學習過程中，若您得到任何問題或是您有任何想法都歡迎提出，我們會盡量的協助問題的解決",
    },
    s3: {
      name: "趨勢分享",
      contents: "分享目前時下所流行之趨勢，讓各位可隨時掌握新趨勢的發展",
    },
  }
const cardBox={
c1:{
item1:"Unity 5",
item2:"GameSalad 2D遊戲製作",
item3:"Google Web Designer",

},
c2:{
  img:"./images/unity.jpg",
img2:"./images/gamesalad.jpg",
},
c3:{

}
}

  const{name,contents}=textBox;
  

  return (
    <>
      <header>
        <div>
          <img src="./images/banner.jpg" />
        </div>
      </header>

      <main>
        {/*文字區 */}

        <div className="textBlock">
          <div>
            <h2>{textBox.s1.name}</h2>
            <p>
              {textBox.s1.contents}
            </p>
          </div>
          <div>
            <h2>{textBox.s2.name}</h2>
            <p>
              {textBox.s2.contents}
            </p>
          </div>
          <div>
            <h2>{textBox.s3.name}</h2>
            <p>{textBox.s3.contents}</p>
          </div>
        </div>

        {/* 主標 */}
        <div className="item">
          <h1>讓學習是一種習慣</h1>
        </div>

        {/* 課程 */}
        <div className="class">
          <h2>推薦課程</h2>
          <div className="classBox">
            <div className="content">
              <img src="./images/unity.jpg" alt="" />

              <h2>Unity 5</h2>
              <p className="p1">
                最新的Unity公開課程，讓你一步一步做出自己的心中理想的遊戲
              </p>
              <p>講師:xxx</p>
              <p>影音課程時數:4小時</p>
              <p>
                <span className="span1">原價NT$1600</span>
                <span className="span2">NT$1200</span>
              </p>

              <button>付款上課去</button>
            </div>

            <div className="content">
              <img src="./images/gamesalad.jpg" alt="" />

              <h2>GameSalad 2D遊戲製作</h2>
              <p className="p1">
                視覺化操作，2D遊戲快速開發，不會寫程式的你一樣可以寫遊戲
              </p>
              <p>講師:xxx</p>
              <p>影音課程時數:8小時</p>
              <p>
                <span className="span1">原價NT$3200</span>
                <span className="span2">NT$1600</span>
              </p>
              <button>付款上課去</button>
            </div>
            <div className="content">
              <img src="./images/gwd.jpg" alt="" />

              <h2>Google Web Designer</h2>
              <p className="p1">
                用於建立HTML5廣告動畫，編輯時間軸，
                將各種物件和事件以動畫方式呈現
              </p>
              <p>講師:xxx</p>
              <p>影音課程時數:8小時</p>
              <p>
                <span className="span1">原價NT$3200</span>
                <span className="span2">NT$1600</span>
              </p>
              <button>付款上課去</button>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div>
          <p>&copy;2024/11/12陳姿佑</p>
        </div>
      </footer>
    </>
  );
}

export default App;

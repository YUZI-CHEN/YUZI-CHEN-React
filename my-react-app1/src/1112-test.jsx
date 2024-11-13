import "./app.css";
// 文字區
function ShowContent({ arrData }) {
  return (
    <>
      {arrData.map((item) => {
        return (
          <>
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.contents}</p>
            </div>
          </>
        );
      })}
    </>
  );
}
// 課程
// 陣列資料放在function裡
// 方法三
function ShowCard() {
  const cardBox = [
    {
      id: 1,
      item: "Unity 5",
      img: "./images/unity.jpg",
      content: "最新的Unity公開課程，讓你一步一步做出自己的心中理想的遊戲",
      teacher: "講師:xxx",
      hour: "影音課程時數:4小時",
      oldM: "原價NT$1600",
      newM: "NT$1200",
      button: "付款上課去",
    },
    {
      id: 2,
      item: "GameSalad 2D遊戲製作",
      img: "./images/gamesalad.jpg",
      content: "視覺化操作，2D遊戲快速開發，不會寫程式的你一樣可以寫遊戲",
      teacher: "講師:xxx",
      hour: "影音課程時數:8小時",
      oldM: "原價NT$3200",
      newM: "NT$1600",
      button: "付款上課去",
    },
    {
      id: 3,
      item: "Google Web Designer",
      img: "./images/gwd.jpg",
      content:
        " 用於建立HTML5廣告動畫，編輯時間軸，將各種物件和事件以動畫方式呈現",
      teacher: "講師:xxx",
      hour: "影音課程時數:8小時",
      oldM: "原價NT$3200",
      newM: "NT$1600",
      button: "付款上課去",
    },
  ];
  return (
    <>
      {cardBox.map((item2) => {
        return (
          <>
            <div className="content" key={item2.id}>
              <img src={item2.img} alt="" />

              <h2>{item2.item}</h2>
              <p className="p1">{item2.content}</p>
              <p>{item2.teacher}</p>
              <p>{item2.hour}</p>
              <p>
                <span className="span1">{item2.oldM}</span>
                <span className="span2">{item2.newM}</span>
              </p>

              <button>{item2.button}</button>
            </div>
          </>
        );
      })}
    </>
  );
}
function App() {
  // 用陣列去弄成資料，裡面不需要名稱
  // 文字區資料
  const textBox = [
    {
      id: 1,
      name: "教學影音",
      contents:
        " 誘導影片課程，來了解軟體的核心概念以及入門，並跟著範例練習以了解其中之應用方式",
    },
    {
      id: 2,
      name: "良性互動",
      contents:
        "學習過程中，若您得到任何問題或是您有任何想法都歡迎提出，我們會盡量的協助問題的解決",
    },
    {
      id: 3,
      name: "趨勢分享",
      contents: "分享目前時下所流行之趨勢，讓各位可隨時掌握新趨勢的發展",
    },
  ];

  

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
          <ShowContent arrData={textBox} />
          {/* 方法一 */}
          {/* {textBox.map((item) => {
            return (
              <>
                <div key={item.id}>
                  <h2>{item.name}</h2>
                  <p>{item.contents}</p>
                </div>
              </>
            );
          })} */}
        </div>

        {/* 主標 */}
        <div className="item">
          <h1>讓學習是一種習慣</h1>
        </div>

        {/* 課程 */}
        <div className="class">
          <h2>推薦課程</h2>
          <div className="classBox">
            <ShowCard  />
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

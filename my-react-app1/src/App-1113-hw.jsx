import "./app.css";
import ShowContent from "./ShowContent.jsx";
import ShowCard from "./ShowCard.jsx";

function App() {
 

  

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
          <ShowContent  />
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

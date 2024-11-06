
//導入外部css檔案
import "./app.css"

//有新的元件請獨立出來或是在外面做
//建立新元件
//每個元件只能回傳一個元素
//return(<></>)=>不管是一個元素還是一個以上(<>=>空標籤Fragment)
//<div>因為會多空一格怕跑版沒必要就不要加
function MyComponent() {
  return (
    <>
      <h1>我是元件2</h1>
      <p>0000000000000000000</p>
    </>
  );
}

function App() {
  //建立變數
  //變數傳送
  const strName = "abc";
  return (
    <div>
      {/* JSX中在Javascript使用變數,前後加大括號{變數名稱} */}
      {/* toUpperCase英文字母轉成大寫 */}
      <h1 className="underLine"
        style={{
          color: "pink",
          backgroundColor: "purple",
          
        }}
      >
        {strName.toUpperCase()},午安
      </h1>

      {/* 屬性使用變數傳遞資料 */}
      <label className="underLine"  htmlFor="UserName">請輸入姓名:</label>
      {/*placeholder=>提示字  */}
      {/* 屬性裡面作使用 */}
      <input type="text" id="UserName" placeholder={strName} />
      {/* <MyComponent/> */}
    </div>
  );
}

export default App;

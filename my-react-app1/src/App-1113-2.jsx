import { useState } from "react";

function App() {
  // 定義更改變數name與setName方法
  // name預設值為useState('')裡面
  const [name, setName] = useState("喬瑟芬奴");
  const [name2, setName2] = useState("");
  function changeName(e) {
    setName2(e.target.value);
  }
  return (
    <>
      <h2>設計一個輸入名字的欄位，並且即時顯示出來</h2>
      <hr />
      <h3>目前文字方塊的內容:{name}</h3>
      {/*value屬性必須搭配onChange(是一個行為) */}
      {/* e=>事件參數event，習慣上打e */}
      請輸入姓名1:
      <input
        type="text"
        value={name}
        onChange={(e) => {
          // console.log(e);
          //文字輸入會同步
          setName(e.target.value);
        }}
      />
      {/*要及時反應把 {name2}寫在後面*/}
      請輸入姓名2:
      <input type="text" value={name2} onChange={changeName} />
      {name2}
    </>
  );
}

export default App;

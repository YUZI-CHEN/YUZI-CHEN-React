import { useState } from "react";

function App() {
  //常數=>不能變動的值
  // 執行中若要改變const值，必須要用useState方法
  // const num=0;
  // 建立useState
  // 打出useState會自動帶入import { useState } from "react";
  // const [變數名稱,更改變數的方法]=useState(初始值);
  const [num, setNum] = useState(0);
  function btnClick(){
    // 修改num值
    setNum(num+5);
  }
  return (
    <>
      <h1>react狀態-useState方法</h1>
      <h2>目前的值:{num}</h2>
      {/* 如果沒有要呼叫function就用箭頭函式 */}
      {/* 事件綁定:箭頭函式 */}
      <button
        onClick={() => {
          // num++;
          // console.log(num);
          // num=num+1，不能寫num++因為後面要放入做法(?)
          setNum(num + 1);
        }}>
        +1
      </button>
      {/* 事件綁定:呼叫函式 */}
      <button onClick={btnClick}>+5</button>
    </>
  );
}

export default App;

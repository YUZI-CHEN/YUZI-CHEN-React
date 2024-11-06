
function App() {
  // 建立方法1
  // 比較不繁瑣的時候使用

function sayHI(){
  alert("8888")
}
// 建立方法2
const sayHi2=()=>{
  alert("00000")
}
  return (
  //  事件處理1:在html標籤上綁定事件
  <div>
  <button onClick={
    // 匿名函式寫法
    function()
    {alert("我被按了")}
  }>我是按鈕</button>
  
  <button onClick={
    // 箭頭函式
    () => {
      alert("0000")
    }

  }>我是按鈕</button>


{/* 事件處理2:呼叫函式 */}
{/* 等待被呼叫的函式，函式名稱後面不可以加上() */}
  <button onClick={sayHI}>打招呼3</button>
  <button onClick={sayHi2}>打招呼3</button>
  </div>
  );
}

export default App;

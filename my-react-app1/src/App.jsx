

//有新的元件請獨立出來或是在外面做
//建立新元件
//每個元件只能回傳一個元素
//return(<></>)=>不管是一個元素還是一個以上(<>=>空標籤Fragment)
//<div>因為會多空一格怕跑版沒必要就不要加
function MyComponent2() {

  return(
  <>
  <h1>我是元件2</h1>
  <p>0000000000000000000</p>
  </>
  )
}

function App() {
  return (
    <div>
     
      <MyComponent2/>
    </div>
  )
}

export default App

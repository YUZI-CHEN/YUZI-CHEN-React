function App() {
  // 建立物件變數
  const person = {
    name: "王曉明",
    age: 10,
  }
{/* 物件解構寫法 */}
    const{name,age}=person;
    // console.log(name,age);
  

    // 不要再return裡做資料處理(return是用來渲染)
  return <>
  {/* 一般寫法 */}
  <div>姓名:{person.name}</div>
  <div>年齡:{person.age}</div>
  <hr/>
  <div>{`姓名:${person.name}`}</div>
  <div>{`年齡:${person.age}`}</div>
  <hr/>
  {/* 物件解構寫法 */}
  <div>解構後的姓名:{name}</div>
  <div>解構後的年齡:{age}歲</div>
    </>
    
}

export default App

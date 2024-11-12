
// 子組件props寫法
// function MyComponent(props){
//     console.log(props)
//     return <>
//     <div>我是子組件</div>
//     <div>{props.a}</div>
//     <div>{props.b}</div>
//     </>
// }

// 子組件使用物件結構賦值寫法
// 結構賦值的名稱必須一樣，順序可以不同
function MyComponent({a,b,c}){
  
   return <>
   <div>我是子組件</div>
   <div>{a}</div>
   <div>{b}</div>
   <div className="myFunC">{c}</div>

   </>
}

// 父組件
function App() {
 return (
   <>
   {/* 回調函式=callback function */}
  <MyComponent 
  a='我是屬性a'
  b='我是屬性b' 
  c={()=>{document.write("我是方法c")}}/>
  {/*
  props=properites(屬性)
  作用:從父組件傳遞到子組件(由上往下傳遞)
   // 撰寫react時，組件之間需要溝通時(也就是傳遞資料)
   props就可以做到這件事
   */}
   </>
 )
}

export default App

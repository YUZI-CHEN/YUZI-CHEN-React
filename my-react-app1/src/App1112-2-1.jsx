//傳遞組件
// 把組件放到另一個組件的內容裡面
// 這種寫法在react中叫做組合(composition)
// 此方法在不影響組件功能的基礎上，另外再給組件加入額外的功能
//建立一個新的組件
function SecondComponent() {
  return <h2>我是 SecondComponent</h2>;
}
function ThirdComponent(){
  return <h2>我是  ThirdComponent</h2>;
}

//子組件
function MyComponent({children}) {
  // return<>
  // {children}
  // </>

  // 兩個組件共同出現
  return (
    <>
      <h1>我是MyComponent</h1>
      
      {children}
      
    </>
  );
}
// 父組件
function App() {
  return (
    <>
      {/* 組件裡面呼叫組件 */}
      {/* <MyComponent children={<SecondComponent/>}/> =>原本的寫法，因為children是內建屬性所以可以不用這樣寫*/}

      {/* app父=>MyComponent子, MyComponent變成父使用(children屬性)=>SecondComponent子//(父傳子)*/}
      <MyComponent>
        <SecondComponent />
        <ThirdComponent/>
      </MyComponent>
    </>
  );
}

export default App;

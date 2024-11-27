import { useState } from "react";


function App() {
  const [inputUserName, setInputUserName] = useState('我是文字方塊');
  // 逐列寫法
  // const [selCity, setSelCity] = useState('台北市');
  // 陣列的寫法
  const [selCity, setSelCity] = useState('');
  //建立陣列
  const listCity = ['台北市','新北市','桃園市','台中市', '台南市', '高雄市', ]
  return (
    <>
      <h1>react-表單</h1>
      <hr />
      {/* input */}
      <label htmlFor="username"> 使用者名稱</label>
      <input type="text" id="username" value={inputUserName}
        onChange={(e) => {

          setInputUserName(e.target.value);

        }} />{inputUserName}
      <br />
      {/* select */}

      <label htmlFor="city">縣市名</label>
      {/* <select name="" id="city"
        value={selCity}
        onChange={(e) => {
          setSelCity(e.target.value);
        }}
      >
        {/* 逐行寫法 */}
      {/* <option value="台北市">台北市</option>
        <option value="新北市">新北市</option>
        <option value="桃園市">桃園市</option>
        <option value="台中市">台中市</option>
        <option value="台南市">台南市</option>
        <option value="高雄市">高雄市</option> */}
      {/* </select>{selCity} */}

      {/* 陣列寫法 */}
      <select name="" id="city"
        value={selCity}
        onChange={(e) => {
          setSelCity(e.target.value);
        }}
      >
        {/* disable=>無法使用(失效/失能) */}
        <option value="" disabled>請選擇</option>
        {listCity.map((city) => {
          return <option value={city} key={city} >{city}</option>


        })}


      </select>{selCity}

    </>
  )
}

export default App;

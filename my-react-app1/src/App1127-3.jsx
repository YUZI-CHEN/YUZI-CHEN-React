import { useState } from "react";


function App() {
  const [inputUserName, setInputUserName] = useState('我是文字方塊');
  // 逐列寫法
  // const [selCity, setSelCity] = useState('台北市');
  // 陣列的寫法
  const [selCity, setSelCity] = useState('');
  //建立陣列
  const listCity = ['台北市', '新北市', '桃園市', '台中市', '台南市', '高雄市',]


  // 閱讀確認
  const [check, setCheck] = useState(false);


  
  // 複選:多個核取方塊 
  const [chkList, setChkList] = useState([]);
  const  arrList = ['html','js','css']
  // 建立函式處理被勾選的項目
  const handleChkList = (e) => {
    // console.log(e.target.value)
    // 使用其餘運算子，保留之前已經被勾選的項目+目前被勾選的項目
    // setChkList([...chkList,e.target.value]);
    // 檢查是否被勾選

    if (e.target.checked) {
      // 是=>原本+新的
      setChkList([...chkList, e.target.value]);
    } else {
      // 否=>從原本被勾選的項目中，拿掉不要的(filter)
      setChkList(
        chkList.filter((list) => {
          return list !== e.target.value;
        })
      )

    }
  }
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
      <br />

      {/* 單一核取方塊 */}
      <label htmlFor="isCheck">已閱讀</label>
      <input type="checkbox" id="isCheck"
        value={check}
        onClick={(e) => {
          //處理勾選值得變化
          setCheck(e.target.checked);

        }} />{check.toString()}
      <br />
      {/* 複選:多個核取方塊 */}
      {
        arrList.map((list) => {
          return <div key={list} >
            <input type="checkbox" id={list} className="like"
              value={list}
               onChange={handleChkList} />
            <label htmlFor={list}>{list}</label>
          </div>
        })
      }

      {/* <input type="checkbox" id="chkList1" className="like" value='HTML' onChange={handleChkList} />
      <label htmlFor="chkList1">HTML</label>

      <input type="checkbox" id="chkList2" className="like" value='CSS' onChange={handleChkList} />
      <label htmlFor="chkList2">CSS</label>

      <input type="checkbox" id="chkList3" className="like" value='JS' onChange={handleChkList} />
      <label htmlFor="chkList3">JS</label> */}
      {chkList}



    </>
  )
}

export default App;

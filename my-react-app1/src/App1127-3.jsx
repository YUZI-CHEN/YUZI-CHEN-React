import { useEffect, useState } from "react";


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
  const arrList = ['html', 'js', 'css']
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
  /* 選項按鈕 */
  const [Q1Ans, setQ1Ans] = useState('');
  const [Q2Ans, setQ2Ans] = useState('');

  // 統計次數
  const [ansCount, setAnsCount] = useState(0);
  const [ansCount2, setAnsCount2] = useState(0);
  // useEffect(() => {
  //   const btn1 = document.getElementById('btn1');
  //   btn1.addEventListener('click', totCount);

  //   function totCount() {
  //     // 送出的時後將所有次數歸零

  //     setAnsCount(0);
  //     setAnsCount2(0);
  //     console.log(`Q1Ans=${Q1Ans}`);
  //     console.log(`Q2Ans=${Q2Ans}`);
  //     // 第一題統計次數
  //     if (Q1Ans == '美式咖啡') {

  //     }
  //   }
  // }, [Q1Ans, Q2Ans])

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

      <br />
      {/* 選項按鈕 */}


      {/* 同一個題目同一個選項name都要一樣 */}
      {/* 點選文字有點選的效果的話要用label的方法id跟htmlFor要一樣 */}

      1.請選擇最愛的飲料:
      <input type="radio" name='q1' value='美式咖啡' id='q1-1'
        onChange={(e) => { setQ1Ans(e.target.value) }}
      />
      <label htmlFor="q1-1">美式咖啡</label>

      <input type="radio" name='q1' value='拿鐵' id="q1-2"
        onChange={(e) => { setQ1Ans(e.target.value) }} />
      <label htmlFor="q1-2">拿鐵</label>
      <br />
      選擇:{Q1Ans}

      <br />
      2.請選擇討厭的食物:
      <input type="radio" name='q2' value='苦瓜' id='q2-1'
        onChange={(e) => { setQ2Ans(e.target.value) }} />
      <label htmlFor="q2-1">苦瓜</label>

      <input type="radio" name='q2' value='蘿蔔糕' id="q2-2"
        onChange={(e) => { setQ2Ans(e.target.value) }} />
      <label htmlFor="q2-2">蘿蔔糕</label>
      <br />
      選擇:{Q2Ans}
      <br />
      <button onClick={() => {
        // 送出的時後將所有次數歸零

        setAnsCount(0);
        setAnsCount2(0);
        // console.log(`Q1Ans=${Q1Ans}`);
        // console.log(`Q2Ans=${Q2Ans}`);




        // 再來統計次數
        // 第一題
        if(Q1Ans=='美式咖啡'||Q2Ans=='苦瓜'){
        setAnsCount(ansCount+1);
       
        }else if(Q1Ans=='拿鐵'||Q2Ans=='蘿蔔糕'){
          setAnsCount2(ansCount2+1);
        }
        // 第二題



        // const q1_1 = document.getElementById('q1-1');
        // if (q1_1.checked) {
        //   setAnsCount(ansCount + 1);
        // }
        // const q1_2 = document.getElementById('q1-2');
        // if (q1_2.checked) {
        //   setAnsCount(ansCount + 1);
        // }
        // // 第二題
        // const q2_1 = document.getElementById('q2-1');
        // if (q2_1.checked) {
        //   setAnsCount2(ansCount2 + 1);
        // }
        // const q2_2 = document.getElementById('q2-2');
        // if (q2_2.checked) {
        //   setAnsCount2(ansCount2 + 1);
        // }
      }}>送出統計結果</button>

      {/* 顯示統計結果 */}
      統計次數:

      <p>選項1:{ansCount}</p>
      <p>選項2:{ansCount2}</p>
    </>
  )
}

export default App;


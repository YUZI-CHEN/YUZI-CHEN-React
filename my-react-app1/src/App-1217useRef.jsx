import { useRef, useState } from "react";

export default function App() {
  // const [value, setValue] = useState('');
  //建立一個useRef變數
  //沒有即時行為使用useRef
  const inputRef = useRef(null);

  console.log('App render...');
  const submitHandler = () => {

    // console.log(value);
    // current.value查看資料
    console.log(inputRef.current.value);
    // 查看類型
    console.log(inputRef.current.type);
    //更改類型password
    inputRef.current.type = 'password';
    console.log(inputRef.current.type);
  }
  return (
    <>
      {/* <input type="text" onChange={(e) => setValue(e.target.value)} /> */}
      <input type="text" ref={inputRef} />
      <button onClick={submitHandler}>送出</button>
    </>
  )
}
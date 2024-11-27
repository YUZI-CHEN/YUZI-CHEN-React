import { useEffect } from "react";

function App() {

  // 建立變色函式
  // 情境相同的情況下useEffect只要寫一次就夠了
  useEffect(() => {
    const p1 = document.getElementById('p1');
    p1.addEventListener('mouseover', () => {
      p1.style.color = 'blue';
      p1.style.fontWeight = 'bold';
    })
    p1.addEventListener('mouseout', () => {
      p1.style.color = '';
      p1.style.fontWeight = '';
    })

    const p2 = document.getElementById('p2');
    p2.addEventListener('mouseover', () => {
      const p2 = document.querySelector('#p2');
      p2.textContent = '內容被改變';
    })
    p2.addEventListener('mouseout', () => {
      const p2 = document.querySelector('#p2');
      p2.textContent = '內容';
    })

// 任何一個事件只要有事件觸發都會有一個e(e=event回傳物件)
// e元素必須搭配target
    const h1 = document.getElementById('h1');
    let isClick=false;
    h1.addEventListener('click', (e) => {
      if(isClick==false){
        console.log(e.target.textContent);
        e.target.textContent='click事件被觸發';
        e.target.style.color='blue';
        isClick=true;
       
      }else{
        e.target.textContent='滑鼠事件';
        e.target.style.color='';
        isClick=false;
      }
     
    })


    // h1.addEventListener('click', () => {
  //   const h1Text = h1.textContent;
  //   console.log(h1Text);
  //   alert(h1Text);
  // })
  }, []);
  


  return (
    <>
      <h1 id='h1'>滑鼠事件</h1>
      <hr />
      <p id="p1"
      // 進入滑鼠事件
      // onMouseOver={() => {
      //   const p1 = document.getElementById('p1');
      //   p1.style.color = 'purple';
      //   p1.style.fontWeight = 'bold';
      //   p1.textContent='888';
      // }} 
      // 離開還原
      // onMouseOut={() => {
      //   const p1 = document.getElementById('p1');
      //   p1.style.color = '';
      //   p1.style.fontWeight = '';
      //   p1.textContent='變色';
      // }}

      > 變色</p>

      {/* <p id="p2" onMouseEnter={() => {
        const p2 = document.querySelector('#p2');
        p2.textContent = '內容被改變';
      }}
        onMouseLeave={() => {
          const p2 = document.querySelector('#p2');
          p2.textContent = '內容';
        }}>變色內容</p> */}
      <p id="p2">變色內容</p>

    </>
  );
}

export default App;

import { useEffect } from "react"
import { useState } from "react"

export default function App() {

  // 建立目前背景圖的變數
  const [currentImgIndex, setCurrentImgIndex] = useState(1)
  // 建立輪播圖片的陣列
  const slides = [
    { url: "./images/02.jpg", p: '1' },
    { url: "./images/03.jpg", p: '2' },
    { url: "./images/04.jpg", p: '3' },
    { url: "./images/05.jpg", p: '4' }

  ]

  useEffect(() => {
    // 每秒呼叫nextIndex改變時，會觸發useEffect
    const autoplay = setInterval(() => {
      nextSlider();
    }, 3000)
    // 每3秒後，自動移除autoplay，這樣才能取得最新的索引編號
    return () => clearInterval(autoplay);
  }, [currentImgIndex])


  //下一張
  const nextSlider = () => {
    // prevIndex變數名稱自己更改
    //方法立即被執行要小括號
    // 取得前一張索引編號，檢查是否為最後一個編號
    // 是=>回到第一張
    //否=>跳到下一張
    setCurrentImgIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }


  return (
    <>
      背景輪播
      {/* 最外層 */}
      <div className="wrapper" style={{
        // vw滿版
        maxWidth: '100vw',
        height: '100vw',
        margin: 'auto'
      }}>
        {/* 背景輪播區 */}
        <div

          style={{

            width: '100%',
            height: '100%',
            backgroundImage: `url(${slides[currentImgIndex].url})`,
            backgroundSize: "cover",
            margin: 'auto',

          }}>
          <p style={{
            color: '#fff',
            fontSize: '72px'

          }}>{slides[currentImgIndex].p}</p>
        </div>


      </div>
    </>
  )
}
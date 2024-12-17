import { useRef } from "react"

export default function App() {

  const yellowRef = useRef(null);
  const greenRef = useRef(null);

  const goGreen = () => {
    window.scrollTo({
      top: greenRef.current.offsetTop,
      //滑動效果
      behavior: 'smooth',

    })

  }
  const goYellow = () => {
    window.scrollTo({
      top: yellowRef.current.offsetTop,
      //滑動效果
      behavior: 'smooth',

    })

  }

  return (
    <>
      {/* offseTop */}
      <div ref={yellowRef} style={{ height: '100vh', backgroundColor: 'yellow' }}>

        <button onClick={goGreen}>green</button>
      </div>

      <div ref={greenRef} style={{ height: '100vh', backgroundColor: 'green', }}>

        <button onClick={goYellow}>yellow</button>
      </div>

    </>
  )
}

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
/* aos入徑不需要./ */

export default function App() {

  useEffect(() => {
    AOS.init();//初始化
  }, [])

  return (
    <>
      <h1 data-aos='fade-right' >AOS-fade-right</h1>
      <div className="box" data-aos='fade-up' data-aos-duration='1000'>
        <p>data-aos='fade-up'</p>
        <p>data-aos-duration='1000'</p>
      </div>
    </>
  )
}



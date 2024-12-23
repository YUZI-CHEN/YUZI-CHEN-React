
import { useState } from 'react';
import img1 from '/images/01.jpg';
import img2 from '/images/02.jpg';
import img3 from '/images/03.jpg';
import img4 from '/images/04.jpg';


export default function App() {
  const [currentImg, setCurrentImg] = useState(2)
  // 建立圖片陣列
  const arrPhotos = [img1, img2, img3, img4]
  return (
    <>
      <div className="wrapper">

        <section
          style={{
            display: 'flex',
            width: "auto",
            alignItems: 'center',
            justifyContent: 'center',
            height: "auto",

            flexDirection: 'column',

          }} >{/* 也可以div */}

          {/* 縮圖區*/}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: "20px 20px",
            height: '50px',
            width: '100px',
            order: 2,

          }}>
            {/* <img src={arrPhotos[0]} alt="photos" width={100} height={80} />
            <img src={arrPhotos[1]} alt="photos" width={100} height={80} />
            <img src={arrPhotos[2]} alt="photos" width={100} height={80} />
            <img src={arrPhotos[3]} alt="photos" width={100} height={80} /> */}
            {
              arrPhotos.map((photo, index) => {
                return (
                  <img ket={index} src={photo} alt='photo' width={100} height={80}
                    onClick={(e) => setCurrentImg(index)}
                    style={{
                      cursor: 'pointer',
                      marginLeft: '10px',
                    }}
                  />

                )
              })
            }
          </div>
          {/* 大圖區 */}
          <div><img src={arrPhotos[currentImg]} alt="photos" width={480} height={400} /></div>
        </section>
      </div>
    </>
  )

}
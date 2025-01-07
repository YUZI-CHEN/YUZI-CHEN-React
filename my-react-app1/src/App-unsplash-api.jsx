import axios from "axios"
import { div } from "motion/react-client";
import { useEffect, useState } from "react"

export default function App() {
  const api = "https://api.unsplash.com/search/photos"
  const access = "xUgMoPzcmNcPZkdyxMWX9tPL-O3UFNH6Th4LXHWZ_e8"
  const [filterString, setFilterString] = useState('cafe');
  const [jsonData, setJsonData] = useState([]);

  // 建立非同步方法，取得遠端資料
  // 避免重複
  useEffect(() => {

    const getPhotos = async () => {
      console.log(`${api}?client_id=${access}&query=${filterString}`);
      // 發出請求給遠端API，傳回結果
      const result = await axios.get(`${api}?client_id=${access}&query=${filterString}`);
      // 全部資料
      console.log(result);
      // 第一頁的十筆資料
      console.log(result.data.results);
      setJsonData(result.data.results);

      // setJsonData((preData)=>{
      //   return 
      // });
    }
    getPhotos();

  }, [])
  // 建立圖片元件
  const Card = ({ item }) => {
    return <img src={item.urls.regular} alt="" style={{ width: "400px", height: "350px", objectFit: 'cover' }}></img>
  }

  return (
    <>
      <div style={{ display: 'flex', flexWrap: "wrap" }}>
        {
          jsonData.map((item) => {
            return (
              <div key={item.id}>
                {/* <img src={item.urls.regular} alt="" style={{width:"400px" ,height:"350px",objectFit:'cover'}}></img> */}
                <Card item={item} />
              </div>
            )

          })
        }

      </div>

    </>
  )
}

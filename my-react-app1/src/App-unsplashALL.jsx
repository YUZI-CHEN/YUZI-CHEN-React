import axios from "axios";



import { useEffect, useRef, useState } from "react";

export default function App() {
  const api = "https://api.unsplash.com/search/photos"
  const accessKey = "xUgMoPzcmNcPZkdyxMWX9tPL-O3UFNH6Th4LXHWZ_e8"
  const [filterString, setFilterString] = useState('cafe');
  // 建立列表用的陣列
  const [jsonData, setJsonData] = useState([]);
  // 讀取變數
  const isLoading = useRef(false);
  // 頁數
  const currentPage = useRef(1);


  // 建立非同步方法，取得遠端資料
  const getPhotos = async (page = 1, isNew = true) => {
    //避免執行中錯誤，可以改用try(...)catch(...)
    try {
      //取得圖片前先寫入
      isLoading.current = true;
      // console.log(`${api}?client_id=${access}&query=${filterString}`);
      // 發出請求給遠端API，傳回結果
      const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString}&page=${page}`);
      // 全部資料
      // console.log(result);
      // 第一頁的十筆資料
      // console.log(result.data.results);
      // 只會保存當前頁的資料
      // setJsonData(result.data.results);
      // 若要保存不同頁的資料，就要加上...展開語法
      setJsonData((pre) => {
        // 是否為新的關鍵字，若為新的關鍵字，可覆蓋目前的關鍵字
        if (isNew) {
          return [...result.data.results]
        } else {
          // 先前的資料，當前的資料
          return [...pre, ...result.data.results];
        }


      });
      // 更新頁數
      currentPage.current = page;
      // 1秒鐘之後取消寫入
      setTimeout(() => {
        isLoading.current = false;
      }, 1000);

    } catch (error) {
      // 當錯誤發生時顯示訊息
      console.log(error);

    }
  }

  // 建立圖片元件
  const Card = () => {
    return (
      jsonData.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.urls.regular} alt="" style={{ width: "400px", height: "350px", objectFit: 'cover' }}></img>
          </div>
        )
      }

      )
    )
  }

  //建立搜尋列元件
  const SearchBox = ({ onSearchHandler, filterString }) => {
    return (
      <div style={{
        textAlign: "center",
        margin: "50px 0",
      }}

      >

        <label htmlFor="filter">請輸入搜尋文字</label>
        <input type="text" id="filter"
          defaultValue={filterString}
          onKeyDown={onSearchHandler}>
        </input>
      </div>
    )
  }
  // 按下enter鍵時，更改filterString資料的函式
  const onSearchHandler = (e) => {
    if (e.key === 'Enter') {
      setFilterString(e.target.value);
    }
  }
  // 列表高度
  const listRef = useRef(null);
  // 避免重複
  useEffect(() => {



    // setJsonData((preData)=>{
    //   return 
    // });

    getPhotos(1, true);
    // 滾動監聽函示
    const scrollEvent = () => {
      // console.dir(listRef.current);
      // 取得目前圖片列表的高度
      const height = (listRef.current.offsetHight + listRef.current.offsetTop) - window.innerHeight;
      // 
      if (!isLoading.current && window.scrollY >= height) {
        // 頁數+1
        currentPage.current++;
        // 同一個關鍵字的資料不用覆蓋，所以補上false
        getPhotos(currentPage.current, false);
      }
    }

    //滾動監聽
    window.addEventListener('scroll', scrollEvent);
    // 移除監聽
    return () => window.removeEventListener('scroll', scrollEvent);
  }, [filterString])








  // 渲染時使用jsx語法，諾要使用js語法，前後加{}
  return (
    <>
      <SearchBox onSearchHandler={onSearchHandler} filterString={filterString} />
      <div style={{ display: 'flex', flexWrap: "wrap" }} ref={listRef}>


        <Card />
      </div>

    </>
  )
}

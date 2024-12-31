import { useMemo, useState } from "react";

export default function App() {

  const prodData = [
    {
      id: 1,
      title: '商品1',
      price: 80,
      imgUl: '../public/images/01.jpg',

    },
    {
      id: 2,
      title: '乖乖',
      price: 20,

    },
    {
      id: 3,
      title: '栗子',
      price: 180,

    },
    {
      id: 4,
      title: '巧克力',
      price: 520,

    },
    {
      id: 5,
      title: '商品5',
      price: 220,

    }
  ];

  //建立表格元件

  const ProdTable = ({ filterProds }) => {
    return (
      <table style={{ width: '500px' }}>
        <tbody>
          {
            filterProds.map((prod) => {
              return (
                <tr key={prod.id}>
                  <td style={{
                    borderBottom:
                      '3px dashed #fff',
                    padding: '5px',
                    widows: '300px',
                  }}>{prod.title}</td>
                  <td
                    style={{
                      borderBottom:
                        '3px dashed #fff',
                      padding: '5px',
                      widows: '300px',
                    }}

                  >{prod.price}</td>
                  <td style={{
                    width: '100px',
                    height: "100px",
                  }}>
                    <img src={prod.imgUl} alt="" style={{

                      width: '100%',
                      height: 'auto',
                    }} />

                  </td>


                </tr>


              )

            })
          }
        </tbody>
      </table>
    )
  }
  // 陣列變數，預設為元商品陣列的資料
  const [prods, setProds] = useState(prodData);
  // 排序的變數，預設為遞增
  const [ascending, setAscending] = useState(true);
  // 搜尋變數
  const [search, setSearch] = useState('');

  //建立排序篩選的函式
  // [甚麼時候觸發useMemo]
  const filterProds = useMemo(() => {
    return [...prods]
      .sort((a, b) => {

        //ascending=true觸發a.price-b.price=遞增
        // ascending=false觸發b.price-a.price=遞減
        return ascending ? a.price - b.price : b.price - a.price

      })
      .filter((prod) => {
        return prod.title.match(search);
      })

  }, [ascending, search]);




  return (
    <>
      <h1>useMemo搜尋與排序</h1>
      升降幕:
      <input type="checkbox"
        checked={ascending}
        onChange={(e) => setAscending(e.target.checked)}
      />
      <br />
      搜尋
      <input type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}

      />
      {/* 呼叫表格元件 */}

      <table >
        <tbody>
          {/* 商品陣列的資料 */}
          <ProdTable filterProds={filterProds} />
        </tbody>
      </table>

    </>
  )

}
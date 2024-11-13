function ShowCard() {
    const cardBox = [
      {
        id: 1,
        item: "Unity 5",
        img: "./images/unity.jpg",
        content: "最新的Unity公開課程，讓你一步一步做出自己的心中理想的遊戲",
        teacher: "講師:xxx",
        hour: "影音課程時數:4小時",
        oldM: "原價NT$1600",
        newM: "NT$1200",
        button: "付款上課去",
      },
      {
        id: 2,
        item: "GameSalad 2D遊戲製作",
        img: "./images/gamesalad.jpg",
        content: "視覺化操作，2D遊戲快速開發，不會寫程式的你一樣可以寫遊戲",
        teacher: "講師:xxx",
        hour: "影音課程時數:8小時",
        oldM: "原價NT$3200",
        newM: "NT$1600",
        button: "付款上課去",
      },
      {
        id: 3,
        item: "Google Web Designer",
        img: "./images/gwd.jpg",
        content:
          " 用於建立HTML5廣告動畫，編輯時間軸，將各種物件和事件以動畫方式呈現",
        teacher: "講師:xxx",
        hour: "影音課程時數:8小時",
        oldM: "原價NT$3200",
        newM: "NT$1600",
        button: "付款上課去",
      },
    ];
    return (
      <>
        {cardBox.map((item2) => {
          return (
            
              <div className="content" key={item2.id}>
                <img src={item2.img} alt="" />
  
                <h2>{item2.item}</h2>
                <p className="p1">{item2.content}</p>
                <p>{item2.teacher}</p>
                <p>{item2.hour}</p>
                <p>
                  <span className="span1">{item2.oldM}</span>
                  <span className="span2">{item2.newM}</span>
                </p>
  
                <button>{item2.button}</button>
              </div>
            
          );
        })}
      </>
    );
  }
  //   回傳渲染檔案名稱
  export default ShowCard
function Component() {
  return <h1>react</h1>;
}
function App() {
  //建立陣列(可以式任何形式的資料=>元件)
  // 同一個陣列中key的屬性值不能重複
  // 在錯誤顯示中key代表陣列的意思
  const listItem = [
    <Component key="0" />,
    <Component key="1" />,
    <Component key="2" />,
  ];

  const listBooks = [
    // 陣列中的物件要呼叫就必須給予一個key
    { bookName: "Html", id: "book1" },
    { bookName: "css", id: "book2" },
    { bookName: "Javascript", id: "book3" },
  ];

  // 過濾出陣列中除了css的書本其他全都要
  const filterBooks = listBooks.filter((book) => {
    // if(book.bookName!=='css'){
    //   return true
    // }

    // 三元運算子的判斷式(只能用在單層判斷)
    // 判斷式(?條件成立)(:條件不成立)
    
    return book.bookName !== "css" ? true : false
  });
  return (
    <>
      {/*  {}呼叫js的語法 */}
      {/* 方法1 */}
      {listItem}
      <hr />
      {/* 使用陣列方法2=>此方法可以把一個陣列換成另一個陣列 */}
      {/*  陣列中的物件要呼叫就必須給予一個key */}
      {listBooks.map((book) => {
        return <div key={book.id}>{book.bookName}</div>;
      })}
      <hr />
      {/* 使用filter()過濾後的陣列的資料 */}
      {filterBooks.map((book) => {
        return <div key={book.id}>{book.bookName}</div>;
      })}
    </>
  );
}

export default App;

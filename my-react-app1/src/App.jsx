export default function App() {

  return (
    <>
      <h1>網頁儲存說明</h1>
      <hr />
      {

        console.log("123")
      }
      {
        window.localStorage.setItem('var1', '變數1')
      }
    </>
  )
}

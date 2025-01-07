import { useForm } from 'react-hook-form'
export default function App() {
  const {
    // 是一種狀態state，可以綁n個表單單位
    register,
    handleSubmit,//是一種方法
  } = useForm();

  // 建立一個自訂的方法，被表單觸發時，將register資料進來
  const onSubmit = (data) => {
    // 取得表單被綁定的全部欄位資料，以物件型態類型
    console.log(data);
    // 取得表單指定的欄位資料=>data.欄位名稱
    console.log(data.userName)
  }
  return (
    <>
      <h1>HookForm</h1><hr />

      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {/* 使用者名稱 */}
          <div>
            <label htmlFor="username">使用者名稱:</label>
            <input
              type="text" id="username"
              defaultValue='demo'
              // userName欄位名稱 ，欄位名稱自行定義
              {...register('userName')}//使用展開語法...register('欄位名稱')帶出所有被綁定的欄位
            />
          </div>

          <div>
            <label htmlFor="userpw">使用者密碼:</label>
            <input
              type="password" id="userpw"
              defaultValue='1234'
              // defaultValue='demo'
              // uName欄位名稱 ，欄位名稱自行定義
              {...register('userpw')}//使用展開語法...register('欄位名稱')帶出所有被綁定的欄位
            />
          </div>
          {/* 送出按鈕 */}
          <button type='submit'>送出</button>
        </form>




      </div>
    </>
  )
}

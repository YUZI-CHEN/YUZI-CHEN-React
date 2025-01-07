import { useForm } from 'react-hook-form'
export default function App() {
  const {
    // 是一種狀態state，可以綁n個表單單位
    register,
    handleSubmit,//是一種方法
    formState: { errors },//導入錯誤
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
              //使用展開語法...register('欄位名稱')帶出所有被綁定的欄位
              // {required:true}必須要輸入才會有結果(必填檢查)
              {...register('userName', { required: true })}

            />
            {/* // 當驗證成立時的訊息(沒有填寫欄位資料時) */}
            {/* &&條件檢查，檢查userName是否有符合條件 */}
            {errors.userName && <span>必須填寫使用者名稱</span>}

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
          <div>
            <label htmlFor="userAge">年齡</label>
            <input
              type="text" id="userAge"
              defaultValue=''
              //  pattern:/\d+/=>只能接受數值資料的驗證
              // 使用正規表達式
              {...register('userAge', { pattern: /\d+/ })}
              style={{ margin: "10px" }} />
            {errors.userAge && <span>請輸入數字</span>}
          </div>
          {/* 送出按鈕 */}
          <button type='submit'>送出</button>
        </form>




      </div>
    </>
  )
}

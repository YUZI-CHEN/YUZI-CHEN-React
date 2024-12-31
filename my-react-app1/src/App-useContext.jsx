
import { createContext, useContext, useState } from "react"

export default function App() {

  // 建立共用環境的區域
  // 共用的元素或方法要共用就要放在這裡
  const UserContext = createContext({});
  // 建立使用者變數
  const [username, setUsername] = useState('demo');
  // 建立登入鈕的控制
  const [isLogin, setIsLogin] = useState(false);
  //建立一個登入元件
  const LoginForm = () => {
    // 因為要被放在共用區，所以要搬到App元件內
    // const [username, setUsername] = useState('');
    //從共用區UserContext解構出username,setUsername
    const { username, setUsername, setIsLogin } = useContext(UserContext);
    return (
      < >
        <label htmlFor="username">使用者名稱</label>
        <input type="text"
          id="username"
          placeholder='請輸入使用者名稱'
          value={username}
          onChange={e => setUsername(e.target.value)}

        />
        <button type="button" onClick={() => { setIsLogin(true) }}>登入</button>
      </>
    )
  }

  // 登入後的歡迎元件
  const Greening = () => {
    // 從共用區取得UserContext取得username
    const { username } = useContext(UserContext);
    return (
      <div>
        {/* hi,{username} */}
        <ShowName />
      </div>
    )
  }

  // 建立一個不同元件來使用username
  const ShowName = () => {
    return <div>我是ShowName元件測試{username}</div>
  }
  <ShowName />
  return (

    <>
      <h1>useContext</h1><hr style={{ marginBottom: '50px' }} />
      <UserContext.Provider value={{ username, setUsername, setIsLogin }}>


        {/* <LoginForm/>
      <br />
      <Greening/> */}

        {/* 將原本的架構改成三元運算子 */}
        {
          // 放兩個元件要放一個空標籤
          // isLogin ?<><Greening /><br/><ShowName/> </> : <LoginForm />
          isLogin ? <Greening /> : <LoginForm />

        }
      </UserContext.Provider>
    </>
  )
}

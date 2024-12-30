import { signInWithPopup } from "firebase/auth/web-extension";
import { useNavigate } from "react-router-dom"
import { auth, provide } from "../config/firebase";

export default function Login() {
  // 登入成功後，使用hook可以切換到指定頁面
  const navgate = useNavigate();

  // async搭配await
  const login = async () => {

    const result = await signInWithPopup(auth, provide);
    console.log(result);
    // 登入成功後，切換到首頁

    // navgate('/');
    // 登入成功後到user
    navgate("/user");

  }

  return (
    <div>
      <button onClick={login} >登入</button>

    </div>
  )
}
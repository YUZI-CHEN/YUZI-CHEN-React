
import { auth } from "../config/firebase"

export default function User() {
  console.log(auth);
  return (
    <div>
    
  {/* 帶出登入者資料 */ }


    <p>{auth.currentUser.displayName}</p>
    <p>{auth.currentUser.email}</p>
    <p><img src={auth.currentUser.photoURL} alt="" /></p>

 

</div>
  )
}
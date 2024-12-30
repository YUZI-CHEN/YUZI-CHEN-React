import { Link } from "react-router-dom";

export default function Navbar() {
  return (

    <div>
      <ul>

        <li>
          <Link to='/'>首頁</Link>
        </li>
        <li>
          <Link to='/about'>關於我</Link>
        </li>
        <li>
          <Link to='/new'>最新消息</Link>
        </li>
        <li>
          <Link to='/login'>login</Link>
        </li>
        <li>
          <Link to='/user'>使用者資料</Link>
        </li>
      </ul>
    </div>

  )

} 
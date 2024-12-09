import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import New from "./pages/New";



export default function App() {
  return (


    <div className="wrap">
      <h1>導覽列</h1>
      {/* <Navbar/> */}
      <Navbar />
      <hr />
      {/* <Routes>
        <Route  path="/" element={<Home/>}></Route>
        <Route  path="/about" element={<About/>}></Route>
        <Route  path="/news" element={<New/>}></Route>
      </Routes> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/new" element={<New/>}></Route>
      </Routes>



    </div>

  )
}

import $ from 'jquery'//在react使用jQuery
import { useEffect } from 'react';


export default function App() {
  // 方法二


  // 結構渲染完畢，在執行所以要使用useEffect
  useEffect(() => {
    $('.cssAnima').on('mouseover', function () {
      $(this).addClass('imgScale');
    })


    $('.cssAnima').on('mouseout', function () {
      $(this).removeClass('imgScale');
    })

  }, [])
  // 方法一(過時)
  // useEffect(() => {
  //   $('.cssAnima').hover(function(){
  //     $(this).addClass('imgScale')
  // },function(){
  //   $(this).removeClass('imgScale')
  // }) 

  // }, [])



  return (
    <div className="wrapper">
      <h2>動態新增刪除類別</h2>
      <ul>
        <li>新增類別=>addClass()</li>
        <li>移除類別=>removeClass()</li>
      </ul>
      <hr />
      <a href="#" class="cssAnima">
        <img src="./image/02.jpg" alt="" />
      </a>
    </div>

  )
}



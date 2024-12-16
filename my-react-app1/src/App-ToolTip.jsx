
import { useEffect } from 'react';
import $ from 'jquery';

export default function App() {

  useEffect(() => {
    //滑鼠移入=>mouseover()
    //移出=>mouseout()
    //移動=>mousemove()
    //X、Y座標=pageX、pageY
    //取得HTML內容=>html()
    //淡入=>fadeIn()
    //淡出=>fadeOut()
    //速度=>毫秒=>(slow,normal,fast)(使用毫秒彈性大一點)
    //尋找指定的名稱=>has()
    //新增html=>append()
    // 取得子元素=>children()
    /* has=>去檢查這個超連結有沒有.tppShow這個部分*/
    $('a:has(.tppShow)').mouseover(function (e) {
      $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
      $('#ttpPanel').css({
        top: (e.pageY + 10) + 'px',
        left: (e.pageX + 10) + 'px'
      }).fadeIn('fast');
    }).mouseout(function (e) {
      $('#ttpPanel').remove();
    }).mousemove(function (e) {
      $('#ttpPanel').css({
        top: (e.pageY + 10) + 'px',
        left: (e.pageX + 10) + 'px'
      });
    })


  }, [])

  return (
    <>
      <h2>ToolTip顯示說明</h2>
      <p>Lorem ipsum dolor sit amet
        <a href='#'>consectetur
          <span id='ttpPanel' className='ttpShow'>consectetur內容說明</span>
        </a>
        adipisicing elit. Facere explicabo, eos officia accusamus qui porro excepturi quam sit accusantium, esse, officiis ut repudiandae. Cupiditate iusto recusandae, dolor iure animi rerum blanditiis nemo? Maxime praesentium beatae quae iure animi est mollitia distinctio tenetur alias, magni voluptate? Placeat temporibus ut repellat! Excepturi similique illo natus architecto rerum, enim veniam accusantium fugit necessitatibus assumenda porro ut id voluptates et, rem sit delectus corrupti atque dolores doloremque itaque dolor voluptas! Ab exercitationem culpa nam, similique molestias dolores, itaque inventore facilis odit eos libero velit recusandae sapiente veniam accusamus, veritatis molestiae voluptas! Aliquid laboriosam aperiam fugiat sequi quo veritatis fuga error aliquam quis laborum. Aliquam totam minus dicta eum qui, quisquam ducimus adipisci dolorem? Suscipit optio assumenda minus corrupti ipsum illo nesciunt, distinctio, mollitia necessitatibus vel maiores, odio minima. Iste fugit adipisci nam impedit delectus iure, numquam voluptas id in officia pariatur eum unde maxime maiores. Tempore, nihil distinctio. Animi adipisci inventore sequi? Assumenda ipsum incidunt quia, optio veniam nihil obcaecati tempora sint facilis amet fugiat nam enim blanditiis, recusandae temporibus molestias, tempore aperiam repudiandae atque est quis earum. Error doloribus consequuntur, dicta numquam autem ducimus inventore labore voluptatibus commodi nisi nihil molestiae at placeat saepe ab quis beatae dolore nemo voluptate odio? Est quis aliquid veniam excepturi molestiae corporis dicta blanditiis repellat officiis temporibus perferendis distinctio eum voluptas voluptatem quia nulla sed, provident numquam inventore! Ex iusto molestiae aliquid esse repellendus? Optio delectus id tenetur nam deserunt consequuntur neque aperiam error fuga voluptas adipisci laboriosam corrupti facilis sint doloremque deleniti distinctio tempore, suscipit eligendi accusantium a? Molestiae explicabo, ipsa dignissimos harum et obcaecati consequuntur odio sequi deserunt libero excepturi, totam ipsam dolorem temporibus deleniti eius fugit voluptate quas modi similique recusandae minus? Nisi, ipsum ad alias aliquid perspiciatis similique quos cumque. Pariatur, unde consectetur.</p>

      <span>
        <img src="./images/unity.jpg" alt="" style={{ width: '100px' }
        } />
      </span>
    </>
  )
}



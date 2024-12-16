import { useEffect } from "react"
import $ from 'jquery'

export default function App() {
  useEffect(() => {
    $('a:has(.ttpShow)').on('mouseover', function (e) {
      $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
      $('#ttpPanel').css({
        top: (e.pageY + 10) + 'px',
        left: (e.pageX + 10) + 'px'
      }).fadeIn('fast');
    }).on('mouseout', function () {
      $('#ttpPanel').remove();
    }).on('mousemove', function (e) {
      $('#ttpPanel').css({
        top: (e.pageY + 10) + 'px',
        left: (e.pageX + 10) + 'px'

      })

    })

  }, [])
  return (
    <>
      <p>
        <a href="#">
          toolTip
          <span className="ttpShow">
            Lorem ipsum dolor sit amet.
          </span>
        </a>
      </p>
    </>
  )
}
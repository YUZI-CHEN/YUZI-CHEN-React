import App from "./App";

// 文字區
function ShowContent() {
    const textBox = [
        {
          id: 1,
          name: "教學影音",
          contents:
            " 誘導影片課程，來了解軟體的核心概念以及入門，並跟著範例練習以了解其中之應用方式",
        },
        {
          id: 2,
          name: "良性互動",
          contents:
            "學習過程中，若您得到任何問題或是您有任何想法都歡迎提出，我們會盡量的協助問題的解決",
        },
        {
          id: 3,
          name: "趨勢分享",
          contents: "分享目前時下所流行之趨勢，讓各位可隨時掌握新趨勢的發展",
        },
      ];
    return (
      <>
        {textBox.map((item) => {
          return (
            //map迴圈 只有渲染一個元素(div)不需要空標籤，如果兩個<div>以上就要空標籤
              <div key={item.id}>
                <h2>{item.name}</h2>
                <p>{item.contents}</p>
              </div>
            
          );
        })}
      </>
    );
  }
  
//   回傳渲染檔案名稱
export default ShowContent
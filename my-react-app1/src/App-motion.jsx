import { AnimatePresence, motion } from "motion/react"

import { useState } from "react"
import { IoIosRemove, IoMdAdd } from "react-icons/io"
export default function App() {
  const [activeQuestionId, setActiveQuestionId] = useState(null);

  //摺疊資料
  const question = [
    {
      id: 1,
      question: '題目1',
      answer: '答案1',

    },
    {
      id: 2,
      question: '題目2',
      answer: '答案2',

    },
    {
      id: 3,
      question: '題目3',
      answer: '答案3',

    },]
  return (
    <>
      {/* 最外層 */}
      <div className="wrapper"
        style={{
          backgroundColor: 'black',
          maxWidth: '100vh',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: "center",
          color: 'white',
          margin: 'auto',
        }}>
        {/* FAQ區*/}
        <div className="faq" style={{
          backgroundColor: '#888',
          width: '80%',
          height: "auto",
          padding: "8px",
          borderRadius: "10px",

        }}>
          {/* 主題區 */}
          <h2 style={{
            textAlign: "center",
            marginBottom: '18px',
          }}>FAQ列表</h2>
          {
            //帶出資料
            question.map((q) => {
              return (
                <div key={q.id} style={{
                  marginBottom: "5px",


                }}>
                  {/* QA的按鈕 */}
                  <button style={{
                    width: '100%',
                    textAlign: 'left',
                    borderRadius: '5px',
                    border: 'none',
                    outline: 'none',
                    padding: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '20px',
                  }}
                    onClick={() => setActiveQuestionId(activeQuestionId === q.id ? null : q.id)}>

                    {/* 帶出題目 */}
                    {q.question}
                    {/* +,-號 */}
                    {
                      activeQuestionId === q.id ? <IoIosRemove /> : <IoMdAdd />

                    }
                  </button>
                  {/* 摺疊紐動畫:motion套件 */}

                  {/* &&判斷 */}
                  <AnimatePresence>
                    {
                      //作用中的id根被展開的id相同時
                      activeQuestionId === q.id && (
                        <motion.div
                          // 初始化 
                          initial={{ opacity: 0, height: 0 }}
                          // 展開的動畫
                          animate={{ opacity: 1, height: "auto" }}
                          // 摺起來動畫 
                          exit={{ opacity: 0, height: 0, color: 'red' }}
                          // 外觀樣式 
                          style={{ marginTop: '5px', color: 'white', fontSize: '18px' }}
                        >
                          {/* 答案 */}
                          {q.answer}
                        </motion.div >
                      )
                    }

                  </AnimatePresence>



                </div>
              )

            })
          }
        </div>
      </div>
    </>
  )
}

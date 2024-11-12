// 先有物件才能做物件解構
function App() {
  // 建立物件變數
  // const person = {
  //   // :等於=
  //   s1: {
  //     name: "同學1",
  //     age: 10,
  //   },
  //   s2: {
  //     name: "同學2",
  //     age: 20,
  //   },
  //   s3: {
  //     name: "同學3",
  //     age: 30,
  //   },

  // 多筆資料的物件解構寫法 方法一

  // const{s1,s2,s3}=person;
  // 方法二  解構+展開=>...(其餘運算值)
  // 解構s1，展開s2,s3
  // 呼叫了s1其他資料會在other裡
  // const { s1, ...other } = person;
  // // console.log(s1);
  // // console.log(other.s3);

  // 一般寫法
  // function showName(obj){
  //   console.log(obj);
  //   console.log(obj.name);//回傳undefined，因為是展開所以看不懂
  //   console.log(obj.age);//回傳undefined，因為是展開所以看不懂

  // }
  const person = {
    name: "同學1",
    age: 10,
  };
  //將物件屬性直接解構給函式參數
  function showName({ name, age }) {
    console.log(name);
    console.log(age);
  }
  showName(person);
  return (
    <>
      {/* 不能只單打s1，因為s1是物件不是名稱 */}
      {/* <div>第一位同學姓名:{s1.name}</div>
     <div>第一位同學年齡:{s1.age}</div>
     <hr/>
     <div>第二位同學姓名:{s2.name}</div>
     <div>第二位同學年齡:{s2.age}</div>
     <hr/>
     <div>第三位同學姓名:{s3.name}</div>
     <div>第三位同學年齡:{s3.age}</div> */}
      {/*.............................................  */}

      {/* <div>{`同學1姓名:${s1.name}`}</div>
      <div>{`同學3姓名:${other.s3.name}`}</div> */}
    </>
  );
}

export default App;

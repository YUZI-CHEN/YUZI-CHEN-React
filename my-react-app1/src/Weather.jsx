function Weather() {




  return (
    <>
      {

        (async () => {
          // json檔案要放在雲端上
          const data = await axios.get('https://yuzi-chen.github.io/YUZI-CHEN-React/json/F-C0032-001.json/');
          // console.log(data);
          //第一個data是上一行的data

          const { location } = data.data.cwaopendata.dataset;
          // console.log(location);


          //locationName=>縣市名稱
          // elementName=>Wx=>天氣概況
          // elementName=>PoP=>降雨機率


        })()

      }




    </>


  )


}

export default Weather
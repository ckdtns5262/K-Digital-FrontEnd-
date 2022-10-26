import React, { useEffect, useState, useRef } from 'react'
import './components/My06.css';





function App() {

  const [mv, setMv] = useState(); 
  const dRef = useRef();
  const mvLoad = (d)=>{
    const url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt='+ d
    // let p = fetch(url)
    // console.log(p)
  
    // p.then((response)=>{console.log(response)})
    // p.catch((error)=>{console.log(error)})
    
      fetch(url)  
      //성공이면 결과를 json으로 바꿈
      .then((response)=>response.json()) 
      .then((data)=>{ 
        console.log('data =>',data) //바꾼 결과를 데이터
        setMv(data.boxOfficeResult.dailyBoxOfficeList.map((m)=><li key={m.movieNm}>{m.movieNm}</li>))
      })
   
      // 실패면 에러를 띄움
      .catch((error)=>{console.log(error)})
  }

 useEffect(()=>{
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate() -1;
  console.log(year,month,day)
  mvLoad('20221025')
 },[])

 const handleChange =(e)=>{
  e.preventDefault()
  let dd = dRef.current.value.replaceAll('-','');
  console.log(dd)
  mvLoad(dd)
 }
  
  return (
    <>
    <h1>비동기 통신 연습 - fetch API</h1>
   <form>
    <input type='date' ref={dRef} name='d' onChange={handleChange}></input>
   </form>
    {mv}
 
    </>
  );
}

export default App;

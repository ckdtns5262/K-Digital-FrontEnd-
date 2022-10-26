import React, { useEffect, useRef, useState } from 'react'
import MyCom from '../components/MyCom';
import mvBoxoffice from '../jsonData/MvInfo2.json'




function MyItem() {
  
// const mvData = mvBoxoffice.map((m)=><MyCom key={m.movieCd} item={m}/>)
 
let mv = mvBoxoffice.boxOfficeResult.dailyBoxOfficeList;
// //useState 변수
 const [mvs, setMvs] = useState([]);   

// ref 변수 선언
const txtRef = useRef();
// useEffect
useEffect(()=>{
   txtRef.current.focus();
  setMvs(mv.map((m)=><MyCom key={m.movieCd} item={m}/>));  // 랜더링될때 나타나게끔 state변수에 담아서 useEffect사용

 }, []);

 useEffect(()=>{
   console.log('생성 => ', mvs)
 }, [mvs])

// 확인 버튼 처리
const handleClick =(e)=>{
  e.preventDefault();
  
  // let temp = [];
  // for(let i=0; i<mv.length; i++){
  //   if(mv[i].movieNm.includes(txtRef.current.value)){
  //     temp.push(mv[i])
  //   }
  //   setMvs(temp);
  // }

  let temp = mv.filter((m)=>m.movieNm.includes(txtRef.current.value));
   setMvs(temp.map((m)=><MyCom key={m.movieCd} item={m}/>))
 }


  return ( 
    <>
    <h1><a href="3"><p>박스오피스</p></a></h1>
      <form className='form1' >
        <span className="put">영화명입력</span>
        <input type="text" placeholder="영화명을 입력하세요" ref={txtRef}></input>
        <div className='but'>
        <button type="button" onClick={handleClick} className="btn btn-primary">확인</button>
        <button type='reset'className="btn btn-danger">취소</button>
        </div>
        <input type="date" name='d' ></input>
      </form>
   <div className=''>
    {mvs}
   </div>
    
    </>
   );
}

export default MyItem;
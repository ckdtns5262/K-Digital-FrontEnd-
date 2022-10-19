import React from 'react'
import MyCom from '../components/MyCom';
import Data from '../jsonData/MvInfo2.json'
import MyInfo from './MyInfo';


function MyItem() {
  
  
  const mvData = Data.map((m)=><MyCom key={m.movieCd} item={m}/>)
   

  return ( 
    <>
    <h1><a href="3"><p>박스오피스</p></a></h1>
      <form className='form1'>
        <span>영화명입력</span>
        <input type="text" placeholder="영화명"></input>
        <div className='but'>
        <button type="submit" className="btn btn-primary">등록</button>
        <button type='reset'className="btn btn-danger">취소</button>
        </div>
      </form>
   <div className=''>
      <li>{mvData}</li>
   </div>
   {/* <MyInfo/> */}
    </>
   );
}

export default MyItem;
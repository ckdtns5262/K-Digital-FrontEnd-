import React from 'react';
import Data from '../jsonData/MvInfo2.json'



function MyInfo() {
  const mvinfo = Data;

let myInfo ={};
const key1 = ['movieNm', 'salesAcc', "audiCnt", 'audiChange']

let myMv = {...Data}
const keys = {
  'movieNm':"영화명",
  'salesAcc':"매출액",
  "audiCnt" : "관객수",
  'audiChange' : "증감율"
}
for(let k of key1) {
  myInfo[keys[k]] = mvinfo[k];
  console.log(myInfo)
}


const lis = key1.map((e) => (
  <li><span>{myMv[e]}</span></li>
  ))

  

  
  return ( <>
    <h3>영화상세</h3>
    <ul>
    {lis}
    </ul>
    </>
   );
}

export default MyInfo;
import React from 'react';
import Data from '../jsonData/MvInfo2.json'



function MyInfo(props) {
  //const mvinfo = Data;

let myInfo ={};
const key1 = ['movieNm', 'salesAcc', "audiCnt", 'audiChange']

let myMv = {...Data}

const keys = {
  'movieNm':"영화명",
  'salesAcc':"매출액",
  "audiCnt" : "관객수",
  'audiChange' : "증감율"
}

// console.log(myMv[0])
for(let k of key1) {
   myInfo[keys[k]] = myMv[k];
  //  console.log(keys[k])
   
}

const lis =[];

for(let [k, v] of Object.entries(myInfo)){
  lis.push(<li><span>{k}</span> : {v}</li>)
}


  
  return ( <>
    <h3>영화상세</h3>
    <ul className='Datul'>
    {lis[0]}
    {lis[1]}
    {lis[2]}
    {lis[3]}

    </ul>
    </>
   );
}

export default MyInfo;
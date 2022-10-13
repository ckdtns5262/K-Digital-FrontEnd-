import React from 'react';

function MyHello(props) {
  // 이부분이 함수의 내용을 작성하는 부분
  //console.log(props.name)
  //console.log(props['name'])   
  console.log(props) 
  
  return (  
    // div -> h1, h2
    // JSX에서는 class선택자는 반드시 className으로 만들어야 함
    <div className='divHello'>
   <h1>Hello React!!   
   </h1>
   <h2>
   <span className='spanHello'>{props.name}</span> 
   {/* 조건부 랜더링 */}
   <span className='numHello'>{props.num % 2 === 1 ? '홀수' : '짝수' }</span>
   <span className='Hello'>{props.ck || '값없음'  }</span>  
   <span className='numHello'>{props.ck ? '😊':'😢'}</span> 
   </h2>
    </div>
  );
}

export default MyHello;
// 해당 컴포넌트에서만 사용하는 스타일 시트 정의
import { useState } from "react";
import "../components/My06.css";


function MyCom(props) {

  const [like, setLike] = useState(0);

  
  let myMv = { ...props.item };

  const keys = ["rank", "movieNm"];
  // 배열을 만들어서 value 값을 넣어줌
  const lis = keys.map((e) => (
    <li className="mvLi" key={e}><a href="1">
      <span className={e}>{myMv[e]}</span>
      </a></li>
  ));

  //순위 : rank
  //영화명 : movieNm
  //매출액 : salesAmt
  //관객수 : audicnt
  //관객수 증감 : audiInten
  //영화코드 : movieCd

  // map() 함수 : 배열의 항목을 가지면서 새로운 배열 생성
  // let arr = [ 1, 2, 3]
  // arr = arr.map((item)=>item * 2)
  // console.log(arr)

  // jsx에 들어갈 내용 생성
  // map()함수를 이용해서 생성

  // const lis = Object.entries(myMv).map((item)=>
  //   <li key={item[0]}>
  //     <span className="mvLi">{item[i]} : </span>
  //     <span className="mvLi">{item[0]}</span>

  //   </li>
  // )
  // console.log(Object.entries(myMv))


  return (
    <>
      <div className="box1">
        <ul>{lis}</ul>
        <div className="hart">
          <span onClick={()=>{setLike(like + 1)}}>💖</span>{like}
          </div>
      </div>
    </>
  );
}

export default MyCom;

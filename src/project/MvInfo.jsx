import mv from '../jsonData/MvInfo.json';
import '../project/MvInfo.css'

function MvInfo() {
  
  // json 데이터 가져오기
  const mvinfo = mv.movieInfoResult.movieInfo;
  
  // 화면에 출력할 정보를 오브젝트 생성
  let myInfo ={};
  const key1 = ['movieNm', 'movieCd', 'openDt', 'prdtStatNm','showTm']
  const key2 = ['audits', 'nations', 'directors','genres','companys']


  // key값을 바꾸려고 할 때 keys라는 object를 만듬 
  const keys ={
    'movieNm' : "영화명",
    'movieCd' : "영화코드",
    'openDt' : "개봉일",
    'prdtStatNm' : '제작상태',
    'showTm' : "상영시간",
    'audits' : "관람등급",
    'nations' : "제작국가",
    'directors' : "감독",
    'genres' : "장르",
    'companys' :"배급사"
  }



  // key1에 해당하는 값추출
  for(let k of key1) {
    myInfo[keys[k]] = mvinfo[k]; // key 값을 한글로 변환함
    console.log(myInfo)
  }

  // key2에 해당하는 값 추출 : 배열에서 추출
  for(let k of key2) {
    switch(k) {
      case 'audits' : 
        myInfo[keys[k]] = mvinfo[k].map((item)=>item.watchGradeNm);
        break;
      case 'nations' :
        myInfo[keys[k]] = mvinfo[k].map((item)=>item.nationNm)
        break;
      case 'directors' :
        myInfo[keys[k]] = mvinfo[k].map((item)=>item.peopleNm)
        break;
      case 'genres' :
        myInfo[keys[k]] = mvinfo[k].map((item)=>item.genreNm)
        break;
      case 'company' : 
      default :
        myInfo[keys[k]] = mvinfo[k].filter((item)=>item.companyPartNm === "배급사")
        .map((item)=>item.companyNm)
      break;
      
      }
  }



  // 화면에 출력할 내용을 JSX로 만들기
  const lis = [];

  for (let [k,v] of Object.entries(myInfo)) {
    lis.push( <li key={myInfo.movieCd + k}><span>{k}</span> : {v}</li>)
  }


  return (<>
      <h1>영화상세</h1>
    <ul>
      {/* <li><span>영화명</span> : {myInfo.movieNm}</li>
      <li><span>영화코드</span> : {mvinfo.movieCd}</li>
      <li><span>개봉일</span> : {mvinfo.openDt}</li>
      <li><span>제작상태</span> : {mvinfo.prdtStatNm}</li>
      <li><span>관람등급</span> : {}</li>
      <li><span>상영시간</span> :</li>
      <li><span>제작국가</span> :</li>
      <li><span>감독</span> :</li>
      <li><span>장르</span> :</li>
      <li><span>배급사</span> : </li> */}
      {lis}

    </ul>
  </>  );
}

export default MvInfo;
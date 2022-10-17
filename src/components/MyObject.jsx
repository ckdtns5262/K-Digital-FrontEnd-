import data from'../jsonData/MvInfo.json';

function MyObject() {

  //object 순회 : key값 가져오기
  // for(let a in data) {
  //   console.log('key :', a)   
  //   console.log('value :', data[a])
    
  // // 값이 오브젝트임으로 반복 순회  
  // for(let chk in data[a]){
  //   console.log('자식 key :', chk)   
  //   console.log('자식 value :',data[a][chk])
  //  }
  // }
 
  // 영화정보 추출
  const myInfo = data.movieInfoResult.movieInfo;
 

  //object 순회 : in key를 가져오는 것(배열X)
  // for(let a in myInfo){
  //   console.log("key :", a)
  // }

  //object.entries(오브젝트명) : 키와 값을 배열의 배열로 반환
  //console.log(Object.entries(myInfo))

  //배열 순회
  //for(let item of Object.entries(myInfo)) : item은 배열
    // for(let [k, v] of Object.entries(myInfo)){
    //   console.log(k,v)
    // }
  
  // 배열 생성
    const com = myInfo.companys;
    const act = myInfo.actors;
    // console.log(com)

  // map() : 배열의 항목을 가지고 와서 새로운 배열 생성
    const mcom = com.map((item) =>item.companyNm + '(' + item.companyPartNm + ')' )
    // console.log(mcom)

  //filter(()=>{}) : 배열의 항목을 가지고 와서 조건에 맞는 항목으로 새로운 배열 생성
    const fcom = com.filter((item)=>
      item.companyCd === "20188021" && item.companyPartNm === "배급사"
    )
    // console.log(fcom)

  //실습(배우이름과 캐스팅네임)
    const ac = act.map((act)=>
      <li key={act.peopleNm}> {act.cast} :: {act.peopleNm}</li>
    //<li key={act.cast.replace(' ' ,'') + {act.peopleNm}} 키값에 공백에 있어서 공백을 제거 하고 + peopleNm을 추가하여 key 에러 제거 
    )
    
  



  return (<>
  <h1>Object 연습</h1>
    
  <ul>
    {ac}
  </ul>
  </>

)}

export default MyObject;

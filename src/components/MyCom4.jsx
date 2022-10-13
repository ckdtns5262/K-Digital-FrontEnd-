import "../components/MyCom4.css";


function MyCom() {
  /* 스타일 object를 만들어서 사용 */
  const styleObj = {
    color: "skyblue",
    fontSize: "20px",
    backgroundColor: "beige",
    padding: "20px",
    textAlign: "center",
    fontWeight: "bold",
  };
  return (
    <>
      <h1>스타일 변경예제</h1>
      {/* 인라인 스타일은 object 타입으로
      바깥 {}는 JSX의 표현식을 위한 {}이고
      안쪽 {}는 자바스크립트의 object 타입 표시
    */}
      <p
        style={{
          color: "red",
          fontSize: "20px",
          fontWeight: "bold",
          backgroundColor: "skyblue",
          padding: "10px",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        리액트에서 스타일 변경 - 인라인형식으로
      </p>
      <p style={styleObj}>리액트에서 스타일 변경 - 인라인형식으로 변수</p>
      
      {/* CSS */}
      <p> 리액트에서 스타일 변경 - CSS 파일 적용</p>
    </>
  );
}

export default MyCom;

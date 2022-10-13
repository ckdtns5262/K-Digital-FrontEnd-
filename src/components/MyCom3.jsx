import React from "react";
import "../components/My.css";
import MyHello from "./MyHello";

function MyCom() {
  return (
    //root -> div -> h1, h2 재사용성을 위해 component를 만듬
    <>
     {/* 속성값을 만들수 있음 =>
          MyHello 컴포넌트에서 props 매개변수(object type)에 전달*/}
      <MyHello name="PNU" num ='1' ck=''/>
      <MyHello name="K-digital"num ='2' ck='1'/>
      <MyHello name="부산대" num= '3' ck=''/>
    </>
  );
}

export default MyCom;

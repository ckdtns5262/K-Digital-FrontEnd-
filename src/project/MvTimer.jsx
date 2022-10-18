import React, { useEffect } from "react";
import { useState } from "react";
import "../project/MvInfo.css";
function MvTimer() {
  const [Timer, setTimer] = useState(false);
  

  useEffect(() => {
    const t = setInterval(() => {
      setTimer(new Date().toLocaleTimeString());
    }, 1000);
  
  
    return () => {clearInterval(t)}
  }, []);

  return (
    //시간이 바껴서 나옴(setTimer로 인해서)
    <>
      <div>
        <span>{Timer}</span>
      </div>
    </>
  );
}

export default MvTimer;

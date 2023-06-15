import React, { useEffect, useState } from "react";

const Timer = () => {
  const [curTime, setCurTime] = useState("");

  useEffect(() => {
    // 컴포넌트가 마운트될 경우
    // 의존성배열의 변수중 하나라도 변경되었을 경우
    // 의존성배열이 빈 배열일 경우 처음 한번만 실행
    console.log("useEffect실행");
    const timer = setInterval(() => {
      let time = new Date();
      console.log(time.toLocaleDateString() + " " + time.toLocaleTimeString());
      setCurTime(time.toLocaleDateString() + " " + time.toLocaleTimeString());
    }, 1000);

    return () => {
      // 컴포넌트가 언마운트 될 때 실행
      console.log("useEffect 언마운트");
      clearInterval(timer);
      console.log("타이머 종료");
    };
  }, []);
  return (
    <div>
      <p>타이머가 시작되었습니다. 콘솔확인</p>
    </div>
  );
};

export default Timer;

import React from "react";
import { Navigate } from "react-router-dom";

const Mypage = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }
  return <div>Mypage 입니다!!</div>;
};

export default Mypage;

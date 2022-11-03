import React, { useEffect, useState } from 'react'
import { FadeLoader } from "react-spinners";
import MyPage from './MyPage';


function Exercise5() {
  return (
    <div>
      <React.Suspense fallback= {<FadeLoader color = {"lightblue"} size={150}/>}>
        <MyPage/>
      </React.Suspense>
    </div>
  )
}

export default Exercise5;
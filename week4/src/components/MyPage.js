import React, { useEffect, useState } from 'react'

const MyFeature = React.lazy(() => 
  Promise.all([
    import("./MyFeature"),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    })
  ]).then(([m]) => m)
)


function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      <MyFeature/>
    </div>
  )
}

export default MyPage;
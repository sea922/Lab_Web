import React, { useEffect, useState } from 'react'

export default function Lazy() {

  const [MyComponent, setMyComponent] = useState(()=> () => null);
  useEffect(() => {
    import("./MyComponent").then((module) => {
      setMyComponent(()=> module.default);
    })
  }, []);
  return (
    <MyComponent/>
  )
}

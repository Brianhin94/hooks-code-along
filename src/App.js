import React, { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(1)
  const [user, setUser] = useState({name: "Bear"})

  const increaseCount = () => {
    setCount(count+1)
  }

  useEffect(() => {
    // update "logged in" user
    setUser({name: "Anna"})

    // add title to my page
    document.title = `Hello, ${user.name}`
  }, [])

  return(
    <>
      <h1>The count is: {count}</h1>
      <button onClick={increaseCount}>Click Me!</button>
      <h2>The user is: {user.name}</h2>
    </>
  )
}

export default App;
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import IntervalTicker from './IntervalTicker'

function App() {
  const [count, setCount] = useState(1)
  const [user, setUser] = useState({name: "Bear"})
  const [pokeImg, setPokeImg] = useState("")
  const [message, setMessage] = useState("Hello, World!")
 
  const increaseCount = () => {
    setCount(count+1)
  }

  useEffect(() => {
    // update "logged in" user
    setUser({name: "Anna"})

    // add title to my page
    document.title = `Hello, ${user.name}`
  }, [])

  useEffect(() => {
    // call poke api and return poke img
    axios.get(`https://pokeapi.co/api/v2/pokemon/${count}`)
    .then(response => {
      setPokeImg(response.data.sprites.front_default)
    })
    .catch(err => {
      console.log(`The error is: ${err}`)
    })
  }, [count])

  return(
    <>
      <h1>The count is: {count}</h1>
      <button onClick={increaseCount}>Click Me!</button>
      <h2>The user is: {user.name}</h2>
      <img src={pokeImg} alt="pokemon" />
      <form>
        <h1>Send your Pokemon a message:</h1>
        <input type="text" value={message} onChange={(e) => {setMessage(e.target.value)}} />
      </form>
      <IntervalTicker message={message} />
    </>
  )
}

export default App;
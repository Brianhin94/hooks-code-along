import React, { useEffect, useState } from 'react'
import axios from 'axios'
import IntervalTicker from './IntervalTicker'

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({name: 'Taylor'})
  const [pokeId, setPokeId] = useState(1)
  const [pokeImg, setPokeImg] = useState(null)
  const [message, setMessage] = useState('Hello, world!')

  const increaseCount = () => {
    setCount(count+1)
  }
  
  const nextPoke = () => {
    setPokeId(pokeId+1)
  }

  // const changeMessage = (e) =>{
  //   setMessage(e.target.value)
  // }

  // runs on every render
  useEffect(() => {
    console.log('useEffect 1 running')
    document.title = `Hello, ${user.name}!`
  }, [])

  // runs on first render, and every render after that IF
  // count has changed
  useEffect(()=>{
    console.log('useEffect 2 running')
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    .then(response=>{
      setPokeImg(response.data.sprites.front_default)
    })
    .catch(err=>{
      console.log(err)
    })
  }, [pokeId])

  return(
    <>
      <h1>The count is: {count}</h1>
      <button onClick={increaseCount}>Click Me</button>
      <h2>The user is: {user.name}</h2>
      <img src={pokeImg} alt="poke"/>
      <button onClick={nextPoke}>Next Poke</button>
      <form>
        <h1>Give a message for the console:</h1>
        <input type='text' value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
      </form>
      <IntervalTicker message={message} />
    </>
  )
}

export default App;
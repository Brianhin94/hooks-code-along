import React, { useState, useEffect } from 'react'

function IntervalTicker(props) {
    const tick = () => {console.log(`Message is: ${props.message}`)}

    useEffect(() => {
        let messageInterval = setInterval(tick, 1000)

        return () =>  {
            console.log("phew this unmounted")
            clearInterval(messageInterval)
        }
    })

    return (
      <h1>{props.message}</h1>
    )
}

export default IntervalTicker
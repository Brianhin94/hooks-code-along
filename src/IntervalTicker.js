import React, { useEffect, useState } from 'react'

function IntervalTicker(props) {

    const tick = () => {console.log(props.message)}

    useEffect(()=>{
        let messageInterval = setInterval(tick, 1000)
        return () => {
            console.log('unmounting')
            clearInterval(messageInterval)
        }
    })

    return (
        <div>
            <em>pssstt.... check the console for some interval action</em>
        </div>
    )
}

export default IntervalTicker
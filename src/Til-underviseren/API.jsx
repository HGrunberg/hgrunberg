import React, { useEffect, useState } from 'react'

function API() {

    const [joke, setJoke] = useState([])

    useEffect(() => {
        async function getJoke() {
            const url = "https://api.chucknorris.io/jokes/random"
            const response = await fetch(url)
            const data = await response.json()

            console.log(data.value)
            setJoke(data.value)
        }
        getJoke()
    }, [])


    return (
        <>
            <div className='bg-light'>
               {joke}
            </div>
        </>
    )
}

export default API
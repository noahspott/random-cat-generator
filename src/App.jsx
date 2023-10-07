import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const baseUrl = 'https://cataas.com/'
  const [cat, setCat] = useState(baseUrl + 'cat')
  
  // Request a random cat from server and set cat state variable
  function getCat() {
    axios.get('http://localhost:3000/getCat')
      .then(response => {
        console.log(response.data)

        setCat(baseUrl + response.data.url)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <h1>Random Cat Generator</h1>
      <div className="card">
        <button onClick={getCat}>
          GIVE ME CAT
        </button>
        <div className='card'>
          <img src={cat} alt="Theoretically a cute cat." />
        </div>
      </div>
    </>
  )
}

export default App

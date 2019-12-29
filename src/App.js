import React, { useState, useEffect } from 'react'
import axios from 'axios'
import logo from './logo.svg'

import './App.css'
import { PageWrapper } from './styled'

const App = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('/search?length=32')
        setProfiles(result.data.items)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  console.log(profiles)
  return (
    <PageWrapper>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </PageWrapper>
  )
}

export default App

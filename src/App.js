import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { PageWrapper } from './styled'
import ProfileTile from './components'

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
      {profiles.map((person) => (
        <ProfileTile
          name={person.name}
          imageSrc={person.picture?.url}
          imageAlt={person.picture?.comment}
          onlineStatus={person.online_status}
        />
      ))}
    </PageWrapper>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import _ from 'lodash'

import ProfileTile from './components'
import { PageWrapper } from './styled'

const App = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('/search?length=32&sorting=DISTANCE')
        setProfiles(result.data.items)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <PageWrapper>
      {profiles.map(person => (
        <ProfileTile
          age={person.personal?.age}
          name={_.startCase(person.name)}
          // Use placeholder image if no image is provided
          imageSrc={
            person.picture?.url ? person.picture?.url : 'https://placedog.net/300/300?random'
          }
          imageAlt={person.picture?.comment}
          onlineStatus={person.online_status}
          key={person.name}
        />
      ))}
    </PageWrapper>
  )
}

export default App

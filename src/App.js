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
        const resBasicData = await axios('/search?length=32')
        const basicData = resBasicData.data.items
        const ids = resBasicData.data.items.map(el => el.id)

        let url = '/profiles?'

        ids.forEach(el => (url = url.concat(`ids=${el}&`)))

        const resDetailedData = await axios(url)
        const detailedData = resDetailedData.data

        // https://stackoverflow.com/questions/38612972/how-to-merge-two-arrays-of-objects-by-id-using-lodash

        const mergedData = _.map(basicData, item => _.merge(item, _.find(detailedData, { id: item.id })))

        setProfiles(mergedData)
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

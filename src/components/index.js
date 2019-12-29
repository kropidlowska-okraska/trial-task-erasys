// @flow
import React from 'react'

const ProfileTile = props => (
  <article>
    <img src={props.imageSrc} alt={props.imageAlt} />
    <span>
      {props.name} <span>{props.onlineStatus === 'ONLINE' ? 'green' : 'red'} </span>
    </span>
  </article>
)

export default ProfileTile

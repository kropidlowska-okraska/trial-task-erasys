// @flow
import React from 'react'
import moment from 'moment'
import { TileWrapper, Image, Caption, StatusMark } from './styled'

const ProfileTile = props => (
  <TileWrapper>
    <Image src={props.imageSrc} alt={props.imageAlt} />
    <Caption>
      <div>
        {props.age} | {props.name}
      </div>
      <StatusMark onlineStatus={props.onlineStatus} />
    </Caption>
    <Caption>
      {props.location} - {props.distance} m ➹
    </Caption>
    <Caption>Headline: {props.headline}</Caption>
    <Caption>Last login: {moment(props.lastLogin).fromNow()}</Caption>
  </TileWrapper>
)

export default ProfileTile

// @flow
import React from 'react'
import { TileWrapper, Image, Caption, StatusMark } from './styled'

const ProfileTile = props => (
  <TileWrapper>
    <Image src={props.imageSrc} alt={props.imageAlt} />
    <Caption>
      <div>{props.name}</div> <StatusMark onlineStatus={props.onlineStatus} />
    </Caption>
  </TileWrapper>
)

export default ProfileTile

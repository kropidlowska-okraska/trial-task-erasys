import styled from 'styled-components'

export const TileWrapper = styled.article`
  padding: 10px;
  margin: 10px
  width: 300px;
  background-color: white;
`

export const Image = styled.img`
  width: 100%;
`

export const Caption = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 5px 10px 5px;
`

export const StatusMark = styled.div`
  background-color: ${props => (props.onlineStatus === 'ONLINE' ? 'red' : 'green')};
  width: 16px;
  height: 16px;
  border-radius: 50%;
`

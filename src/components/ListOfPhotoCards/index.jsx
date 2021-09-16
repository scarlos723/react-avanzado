import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { List } from './styles'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => { // it has a objetc prop.  in props.data.photos is the info photos
  return (
    <List>
      {photos.map(item => (
        <PhotoCard key={item.id} id={item.id} {...item} />
      ))}
    </List>
  )
}

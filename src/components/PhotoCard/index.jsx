import React from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
const DEFAULT_IMAGE = 'https://picsum.photos/500/500'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const keyLike = `like-${id}`
  const [liked, setLiked] = useLocalStorage(keyLike, false)
  // custom hook for use storage

  const Icon = liked ? MdFavorite : MdFavoriteBorder // seleccionar que icono mostrar

  return ( // se debe agregar un min-height al componente Article para que al principio sea 0 y simpre este en el viewport
    <Article ref={element}>
      {
      show && // si su estado es mostrar, se renderiza, de lo contrario no se hace nada
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size='30px' />  {likes} Likes!
          </Button>
        </>
      }

    </Article>
  )
}

import React, { useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://picsum.photos/500/500'
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(function () {
    Promise.resolve(typeof window.IntersectionObserver !== 'undefined' // verifica si el window.IntersectionObserver es soportado por el navegador.
      ? window.IntersectionObserver
      : import('intersection-observer'))
      .then(() => {
        const observer = new window.IntersectionObserver(function (entries) { // observar, recibe una funcion con las entradas del viewport
          console.log(entries[0].isIntersecting)

          if (entries[0].isIntersecting) { // si se esta viendo en el view port, se cambia el estado
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(element.current)
      })
  }, [element])

  return ( // se debe agregar un min-height al componente Article para que al principio sea 0 y simpre este en el viewport
    <Article ref={element}>
      {
      show && // si su estado es mostrar, se renderiza, de lo contrario no se hace nada
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size='30px' />  {likes} Likes!
          </Button>
        </>
      }

    </Article>
  )
}

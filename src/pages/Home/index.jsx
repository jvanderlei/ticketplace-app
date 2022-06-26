import React from 'react'
import { Slider } from '../../components'
import { images } from '../../mocks/images'
import { Esportes, Music, Populares } from '../../mocks/homeCards'
import { Card } from '../../components'
import * as S from './styles'

const Home = () => {
  return (
    <>
      <Slider images={images} />
      <section>
        <S.Title>Populares</S.Title>
        <S.Populares>
          {Populares.map(({ eventID, image, eventName, price, category }) => (
            <Card
              eventID={eventID}
              image={image}
              eventName={eventName}
              price={price}
              category={category}
            />
          ))}
        </S.Populares>
      </section>
      <section>
        <S.Title>Esportes</S.Title>
        <S.Populares>
          {Esportes.map(({ eventID, image, eventName, price, category }) => (
            <Card
              eventID={eventID}
              image={image}
              eventName={eventName}
              price={price}
              category={category}
            />
          ))}
        </S.Populares>
      </section>
      <section>
        <S.Title>Music</S.Title>
        <S.Populares>
          {Music.map(({ eventID, image, eventName, price, category }) => (
            <Card
              eventID={eventID}
              image={image}
              eventName={eventName}
              price={price}
              category={category}
            />
          ))}
        </S.Populares>
      </section>
    </>
  )
}

export default Home
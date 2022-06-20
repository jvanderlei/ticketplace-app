import React from 'react'
import { Slider } from '../../components'
import { images } from '../../mocks/images'
import { Card } from '../../components'
import * as S from './styles'

const Home = () => {
  return (
    <>
      <Slider images={images} />
      <section>
        <S.Title>Populares</S.Title>
        <S.Populares>
          <Card 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqYGGPbhDhXAEsSOgJ3F3m4SnGBbQl5UfMcp_yk292g&s=10"
            eventName="Avril Lavigne - São Paulo"
            price="R$ 300,00"
            category="music"
            />
          <Card 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqYGGPbhDhXAEsSOgJ3F3m4SnGBbQl5UfMcp_yk292g&s=10"
            eventName="Avril Lavigne - São Paulo"
            price="R$ 300,00"
            category="music"
            />
          <Card 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqYGGPbhDhXAEsSOgJ3F3m4SnGBbQl5UfMcp_yk292g&s=10"
            eventName="Avril Lavigne - São Paulo"
            price="R$ 300,00"
            category="music"
            />
          <Card 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqYGGPbhDhXAEsSOgJ3F3m4SnGBbQl5UfMcp_yk292g&s=10"
            eventName="Avril Lavigne - São Paulo"
            price="R$ 300,00"
            category="music"
            />
          <Card 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqYGGPbhDhXAEsSOgJ3F3m4SnGBbQl5UfMcp_yk292g&s=10"
            eventName="Avril Lavigne - São Paulo"
            price="R$ 300,00"
            category="music"
            />
        </S.Populares>
      </section>
      <section>
        <S.Title>Esportes</S.Title>
        <S.Populares>
          <Card 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqYGGPbhDhXAEsSOgJ3F3m4SnGBbQl5UfMcp_yk292g&s=10"
            eventName="Avril Lavigne - São Paulo"
            price="R$ 300,00"
            category="music"
            />
          <Card 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqYGGPbhDhXAEsSOgJ3F3m4SnGBbQl5UfMcp_yk292g&s=10"
            eventName="Avril Lavigne - São Paulo"
            price="R$ 300,00"
            category="music"
            />
          <Card 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqYGGPbhDhXAEsSOgJ3F3m4SnGBbQl5UfMcp_yk292g&s=10"
            eventName="Avril Lavigne - São Paulo"
            price="R$ 300,00"
            category="music"
            />
          <Card 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqYGGPbhDhXAEsSOgJ3F3m4SnGBbQl5UfMcp_yk292g&s=10"
            eventName="Avril Lavigne - São Paulo"
            price="R$ 300,00"
            category="music"
            />
          <Card 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqYGGPbhDhXAEsSOgJ3F3m4SnGBbQl5UfMcp_yk292g&s=10"
            eventName="Avril Lavigne - São Paulo"
            price="R$ 300,00"
            category="music"
            />
        </S.Populares>
      </section>
      <section>
        <S.Title>Music</S.Title>
        <S.Populares>
          <Card 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqYGGPbhDhXAEsSOgJ3F3m4SnGBbQl5UfMcp_yk292g&s=10"
            eventName="Avril Lavigne - São Paulo"
            price="R$ 300,00"
            category="music"
            />
          <Card 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqYGGPbhDhXAEsSOgJ3F3m4SnGBbQl5UfMcp_yk292g&s=10"
            eventName="Avril Lavigne - São Paulo"
            price="R$ 300,00"
            category="music"
            />
          <Card 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqYGGPbhDhXAEsSOgJ3F3m4SnGBbQl5UfMcp_yk292g&s=10"
            eventName="Avril Lavigne - São Paulo"
            price="R$ 300,00"
            category="music"
            />
          <Card 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqYGGPbhDhXAEsSOgJ3F3m4SnGBbQl5UfMcp_yk292g&s=10"
            eventName="Avril Lavigne - São Paulo"
            price="R$ 300,00"
            category="music"
            />
          <Card 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqYGGPbhDhXAEsSOgJ3F3m4SnGBbQl5UfMcp_yk292g&s=10"
            eventName="Avril Lavigne - São Paulo"
            price="R$ 300,00"
            category="music"
            />
        </S.Populares>
      </section>
    </>
  )
}

export default Home
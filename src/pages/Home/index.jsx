import React from 'react'
import { Slider } from '../../components'
import { images } from '../../mocks/images'

const Home = () => {
  return (
    <Slider images={images}/>
  )
}

export default Home
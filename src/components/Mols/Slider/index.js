import React, { useState, useEffect } from 'react'
import * as S from './styles'
import { IoMdClose, IoIosArrowForward } from 'react-icons/io'

const Slider = ({ images }) => {

  const [visible, setVisible] = useState(true)
  const [current, setCurrent] = useState(0)
  const length = images.length

  const handleVisibility = () => setVisible(false)

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const previousImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  
  return (
    <S.SliderWrapper visible={visible}>
      <S.CloseBtn onClick={handleVisibility}>
        <IoMdClose />
      </S.CloseBtn>
      <S.Controls direction="left" onClick={previousImage}>
        <IoIosArrowForward />
      </S.Controls>
      <S.Controls direction="right" onClick={nextImage}>
        <IoIosArrowForward />
      </S.Controls>
      <S.ImageContainer transform={current}>
        {images.map(({ url, alt }, index) => <S.Image src={url} alt={alt} key={index} />)}
      </S.ImageContainer>
    </S.SliderWrapper>
  )
}

export default Slider
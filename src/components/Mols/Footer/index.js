import React from 'react'
import * as S from './styles'
import { RiFacebookFill, RiInstagramFill, RiLinkedinFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <S.Footer>
      <S.Flex>
        <S.SocialIcon href="https://www.facebook.com/" target="_blank">
          <RiFacebookFill
            color='current-color'
          />
        </S.SocialIcon>
        <S.SocialIcon href="https://instagram.com/" target="_blank">
          <RiInstagramFill
            color='current-color'
          />
        </S.SocialIcon>
        <S.SocialIcon href="https://linkedin.com/" target="_blank">
          <RiLinkedinFill
            color='current-color'
          />
        </S.SocialIcon>
      </S.Flex>
      <S.UtilsLinksWrapper>
        <S.Flex>
          <S.UtilsLinks>Info</S.UtilsLinks>
          <S.UtilsLinks>Support</S.UtilsLinks>
          <S.UtilsLinks>Marketing</S.UtilsLinks>
        </S.Flex>
        <S.Flex>
          <S.UtilsLinks>Terms of Use</S.UtilsLinks>
          <S.UtilsLinks>Policy Privacy</S.UtilsLinks>
        </S.Flex>
      </S.UtilsLinksWrapper>
      <S.Copyright>
        &copy; All rights reserved - TicketPlace - João Vanderlei and Pedro Lima
      </S.Copyright>
    </S.Footer>
  )
}

export default Footer
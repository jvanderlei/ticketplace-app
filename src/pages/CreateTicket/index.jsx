import React, { useState, useEffect } from 'react'
import * as S from './style'
import Blank from '../../assets/images/png/No-Image-Placeholder.svg.png'
import { ButtonAtom, InputAtom } from '../../components/Atoms/'
import { GET, PATCH } from '../../services/apiconnect'


const Ticket = (eventID) => {

    const [inputValue, setInputValue] = useState({
        eventName: "",
        imageUrl: "",
        category: "",
        address: "",
        description: "",
        price: ""
    });

    const { eventName, imageUrl, category, address, description, price, } = inputValue;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    
    const submitRegistration = (e) => {
        e.preventDefault();
        if (false) {
          setInputValue({
            name: "",
            email: "",
            username: "",
            password: "",
            confirmPassword: ""
          });
        }
      }


    const moneyFormat = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    return (
        <S.Container>
            <S.ImageWrapper>
                <S.Image src={imageUrl || Blank} ></S.Image>
            </S.ImageWrapper>
            <S.FormWrapper>
                <h4>Criar Evento</h4>
                <S.Form onSubmit={submitRegistration}>
                    <InputAtom
                        type="text"
                        placeholder="Name"
                        name="eventName"
                        value={eventName}
                        onChange={handleChange}
                        required
                    />
                     <InputAtom
                        type="text"
                        placeholder="Endereço da Imagem"
                        name="imageUrl"
                        value={imageUrl}
                        onChange={handleChange}
                        required
                    />
                    <InputAtom
                        type="text"
                        placeholder="Categoria"
                        name="category"
                        value={category}
                        onChange={handleChange}
                        required
                    />
                    <InputAtom
                        type="text"
                        placeholder="Endereço"
                        name="address"
                        value={address}
                        onChange={handleChange}
                        required
                    />
                    <InputAtom
                        type="text"
                        placeholder="Preço"
                        name="price"
                        value={price}
                        onChange={handleChange}
                        required
                    />
                      <InputAtom
                        type="message"
                        placeholder="Descrição do Evento"
                        name="description"
                        value={description}
                        onChange={handleChange}
                        required
                    />
                    <ButtonAtom
                        type="submit"
                        title='Cria Evento'
                        backgroundColor='#2877ee'
                        fullWidth
                    />
                </S.Form>
            </S.FormWrapper>
        </S.Container>
    )
}

export default Ticket
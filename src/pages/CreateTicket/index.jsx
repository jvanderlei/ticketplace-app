import React, { useState, useEffect } from 'react'
import * as S from './style'
import Blank from '../../assets/images/png/No-Image-Placeholder.svg.png'
import { ButtonAtom, InputAtom } from '../../components/Atoms/'
import { GET, PATCH, POST } from '../../services/apiconnect'
import { useParams } from 'react-router-dom'



const CreateTicket = () => {
	let { ticketId } = useParams();

	const [inputValue, setInputValue] = useState({
		eventName: "",
		ticketImage: "",
		categoryId: "",
		address: "",
		date: "",
		time: "",
		description: "",
		price: ""
	});

	useEffect(() => {
		if (ticketId) {
			GET(`/tickets/${ticketId}`)
				.then(ticket => {
					setInputValue({
						eventName: ticket.eventName,
						ticketImage: ticket.ticketImage,
						categoryId: ticket.categoryId,
						address: ticket.address,
						date: ticket.date,
						time: ticket.time,
						description: ticket.description,
						price: ticket.value
					})
				})
		}
	})


	const { eventName, categoryId, ticketImage, address, date, time, description, price } = inputValue;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputValue((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const submitTicket = (e) => {
		e.preventDefault();
		let recObj = {
			eventName,
			categoryId,
			ticketImage,
			address,
			date,
			time,
			value: price,
			description
		}
		recObj = JSON.stringify(recObj)
		if (ticketId) {
			PATCH(`/tickets/${ticketId}`, recObj)
				.then(data => {
					console.log(data)
				})
		} else {
			POST("tickets", recObj)
				.then(data => {
					console.log(data);
				})
		}
		setInputValue({
			eventName: "",
			categoryId: "",
			ticketImage: "",
			address: "",
			date: "",
			time: "",
			description: "",
			price: ""
		});
	}


	const moneyFormat = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	})

	return (
		<S.Container>
			<S.CreateTicketWrapper>

				<S.ImageWrapper>
					<S.Image src={ticketImage || Blank} ></S.Image>
				</S.ImageWrapper>
				<S.FormWrapper>
					<h4>Criar Evento</h4>
					<S.Form onSubmit={submitTicket}>
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
							name="ticketImage"
							value={ticketImage}
							onChange={handleChange}
							required
						/>
						<InputAtom
							type="select"
							name="categoryId"
							onChange={handleChange}
							value={categoryId}
						>
							<option value="">Selecione uma categoria</option>
							<option value="1">Music</option>
							<option value="2">Sport</option>
							<option value="3">Culture</option>
							<option value="4">Party</option>
						</InputAtom>
						<InputAtom
							type="text"
							placeholder="Endereço"
							name="address"
							value={address}
							onChange={handleChange}
							required
						/>
						<InputAtom
							type="date"
							placeholder="Data"
							name="date"
							value={date}
							onChange={handleChange}
							required
						/>
						<InputAtom
							type="text"
							placeholder="Horario"
							name="time"
							value={time}
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
							title={ticketId?"Atualiza Evento":'Cria Evento'}
							backgroundColor='#2877ee'
							fullWidth
						/>
					</S.Form>
				</S.FormWrapper>
			</S.CreateTicketWrapper>
		</S.Container>
	)
}

export default CreateTicket
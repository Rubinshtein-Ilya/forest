import './SendOk.scss'
import React from 'react'
import logo from '/icons/logo.svg'
import Icon from '../Icon/Icon'
import Overlay from '../Overlay/Overlay'

const SendOk = ({ changeIsSubmited, send }) => {
	return (
		<>
			<Overlay />
			<div className='send-ok'>
			<div data-close class="modal__close" onClick={() => changeIsSubmited(false)}>&times;</div>
				<a className='logo' href='/'>
					<img src={logo} alt='logo' />
				</a>

				<div className='send-ok__descriptions'>
					<h3 className='send-ok__descriptions-title'>
						{send
							? 'Мы свяжемся с вами в ближайшее время!'
							: 'Произошла ошибка, данные не отправлены'}
					</h3>
					<p className='send-ok__descriptions-text'>
						А пока Вы можете посетить наши социальные сети:
					</p>
					<div className='send-ok__descriptions-socials'>
						{Icon('inst')}
						{Icon('vk-send')}
					</div>
				</div>
			</div>
		</>
	)
}

export default SendOk

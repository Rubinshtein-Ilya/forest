import { useState } from 'react'
// import './Header.scss'
import '../../App.css'
import logo from '/icons/logo.svg'
import phone from '/icons/phone.svg'
import wa from '/icons/wa.svg'
import tg from '/icons/tg.svg'
import mail from '/icons/mail.svg'
import inst from '/icons/inst.svg'
import vk from '/icons/vk.svg'
import phoneFooter from '/icons/phone-footer.svg'
import waFooter from '/icons/wa-footer.svg'
import tgFooter from '/icons/tg-footer.svg'
import vkSend from '/icons/vk-send.svg'

import './Icon.scss'

function Icon(props) {
	return (
		<>
			{props === 'phone' && (
				<a href='tel:+79226152393' className='social social-phone'>
					<img src={phone} alt='phone' />
				</a>
			)}
			{props === 'tg' && (
				<a href='https://t.me/@MaryBoyarskikh' className='social social-tg'>
					<img src={tg} alt='telegram' />
				</a>
			)}
			{props === 'tg-footer' && (
				<a href='https://t.me/@MaryBoyarskikh' className='social social-tg'>
					<img src={tgFooter} alt='telegram' />
				</a>
			)}
			{props === 'wa' && (
				<a href='https://wa.me/+79226152393' className='social social-wa'>
					<img src={wa} alt='whatsapp' />
				</a>
			)}

			{props === 'wa-footer' && (
				<a href='https://wa.me/+79226152393' className='social social-wa'>
					<img src={waFooter} alt='whatsapp' />
				</a>
			)}

			{props === 'mail' && (
				<a href='mailto:vremya.lesa@mail.ru' className='social social-mail'>
					<img src={mail} alt='mail' />
				</a>
			)}

			{props === 'inst' && (
				<a href='#' className='social social-inst'>
					<img src={inst} alt='inst' />
				</a>
			)}

			{props === 'vk' && (
				<a href='#' className='social social-vk'>
					<img src={vk} alt='vk' />
				</a>
			)}

			{props === 'vk-send' && (
				<a href='#' className='social social-vk'>
					<img src={vkSend} alt='vk' />
				</a>
			)}

			{props === 'phone-footer' && (
				<a href='tel:+79226152393' className='social social-phone'>
					<img src={phoneFooter} alt='phone' />
				</a>
			)}
		</>
	)
}

export default Icon

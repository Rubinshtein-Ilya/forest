import { useState } from 'react'
import './Header.scss'
import '../../App.css'
import logo from '/icons/logo.svg'
import Icon from '../Icon/Icon'

function Header() {
	const [count, setCount] = useState(0)
	const [showMenuBurger, setShowMenuBurger] = useState(false)

	return (
		<>
			<header className='header' id='header'>
				{showMenuBurger && (
					<div className='overlay' onClick={() => setShowMenuBurger('')}></div>
				)}

				<div className='container'>
					<nav className={`menu-768 ${showMenuBurger}`}>
						<ul>
							<li>
								<a href='#home' onClick={() => setShowMenuBurger('')}>
									О доме
								</a>
							</li>
							<li>
								<a href='#prices' onClick={() => setShowMenuBurger('')}>
									Цена
								</a>
							</li>
							<li>
								<a href='#location' onClick={() => setShowMenuBurger('')}>
									О локации
								</a>
							</li>
							<li>
								<a
									href='#location__found'
									onClick={() => setShowMenuBurger('')}
								>
									Как добраться
								</a>
							</li>
							<li>
								<a href='#exclusive' onClick={() => setShowMenuBurger('')}>
									Дополнительные услуги
								</a>
							</li>
							<li>
								<a href='#footer' onClick={() => setShowMenuBurger('')}>
									Контакты
								</a>
							</li>
						</ul>
						<div className='menu-768__right'>
							<div className='menu-768__contact'>
								<p>Свяжитесь с нами прямо сейчас!</p>
								<div className='menu-768__icons'>
									{Icon('phone')}
									{Icon('tg')}
									{Icon('wa')}
								</div>
							</div>
							<div className='menu-768__socials'>
								<p>Мы в социальных сетях:</p>
								<div className='menu-768__items'>
									{Icon('inst')}
									{Icon('vk-send')}
								</div>
							</div>
						</div>
						<div
							className='menu-768__close'
							onClick={() => setShowMenuBurger('')}
						>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M18 6L6 18'
									stroke='#AFAFAF'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M6 6L18 18'
									stroke='#AFAFAF'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
					</nav>
					<div className='header__wrapper'>
						<a href='/' className='logo'>
							<img src={logo} alt='logo' />
						</a>
						<nav className='menu'>
							<ul>
								<li>
									<a href='#home'>О доме</a>
								</li>
								<li>
									<a href='#prices'>Цена</a>
								</li>
								<li>
									<a href='#location'>О локации</a>
								</li>
								<li>
									<a href='#location__found'>Как добраться</a>
								</li>
								<li>
									<a href='#exclusive'>Дополнительные услуги</a>
								</li>
								<li>
									<a href='#footer'>Контакты</a>
								</li>
							</ul>
						</nav>

						<div className='socials'>
							{Icon('phone')}
							{Icon('tg')}
							{Icon('wa')}
						</div>
						<div
							className='burger'
							onClick={() => {
								setShowMenuBurger('active')
							}}
						>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header

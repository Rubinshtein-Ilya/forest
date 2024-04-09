import { useState } from 'react'
import './Footer.scss'
import '../../App.css'
import logoFooter from '/icons/logo-footer.svg'
import Icon from '../Icon/Icon'

function Footer() {
	const [count, setCount] = useState(0)
	

	

	return (
		<>
			<footer className='footer' id='footer'>
				<div className='container'>
					<div className='footer__wrapper'>
						<div className='footer__top'>
							<a href='/' className='logo'>
								<img src={logoFooter} alt='logo' />
							</a>

							<nav className='footer__menu'>
								<ul>
									<li>
										<a href='#home'>О доме</a>
									</li>
									<li>
										<a href='#location__found'>Как добраться</a>
									</li>
									<li>
										<a href='#prices'>Цена</a>
									</li>
									<li>
										<a href='#exclusive'>Дополнительные услуги</a>
									</li>
									<li>
										<a href='#location'>О локации</a>
									</li>

									<li>
										<a href='#footer'>Контакты</a>
									</li>
								</ul>
							</nav>

							<div className='footer__contacts'>
								<h4 className='footer__contacts-title'>Связаться с нами:</h4>
								<div className='footer__contacts-items'>
									{Icon('phone-footer')}
									{Icon('tg-footer')}
									{Icon('wa-footer')}
									{Icon('mail')}
								</div>
							</div>

							<div className='footer__socials'>
								<h4 className='footer__socials-title'>
									Мы в социальных сетях:
								</h4>
								<div className='footer__socials-items'>
									{Icon('inst')}
									{Icon('vk')}
								</div>
								<p className='footer__socials-address'>
									ООО "Усадьба" <br></br> <br></br>ИНН 6678119830 ОГРН
									1226600027092 <br></br>
									<br></br>
									Свердловская область, г. Березовский, ул. Старателей, д. 2-21
								</p>
							</div>
						</div>
						<div className='footer__bottom'>
							<img className='footer__usov' src="/images/usov.jpg" alt="logo" />
							<p className='footer__it-products' href='#'>Создаём и продвигаем <br />ваши it продукты </p>
							<a className='footer__conf' href="/documents/Политика_конфиденциальности_Время_Леса_1.pdf" download>Политика конфиденциальности</a>
						</div>

						
						
							<div className="footer__modal-container">
								<div className="footer__modal-top">
									<p className="footer__modal-text">Мы создаём веб-сайты сервисы, которые превращают ваш
									бренд в мощную онлайн-платформу, раскрывая его полный
									потенциал  </p>
									{/* <div data-close className="footer__modal-close" >&times;</div> */}
								</div>
								
								<div className="footer__modal-row">
									{Icon('phone-footer')}
									<a href="tel:+79226152393">+7 911 719-71-92</a>
									<a href="">usov.site</a>
								</div>
								<div className="footer__modal-row">
										{Icon('tg-footer')}
										{Icon('wa-footer')}
										{Icon('mail')}
								</div>
								<div className="footer__modal-row">
									<img className='footer__usov' src="/images/usov..svg" alt="logo" />
									<p className='footer__it-products' href='#'>Создаём и продвигаем <br />ваши it продукты </p>
								</div>
							
							</div>
						
						
			
						

					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer

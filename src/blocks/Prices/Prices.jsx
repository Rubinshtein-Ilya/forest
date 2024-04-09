import Title from '../../components/Title/Title'
import './Prices.scss'
import { useState } from 'react'
import prices from '../../constants/prices'
import priceImage from '/images/price.png'
import priceBG from '/images/price-bg.jpg'
import okImage from '/icons/ok.svg'
import notImage from '/icons/not.svg'
import ScrollAnimation from 'react-animate-on-scroll';

const Prices = (props) => {
	return (
		<>
			<div className='prices' id='prices'>
				<div className='container'>
					<div className='prices__wrapper'>
						<div className='prices__blocks'>
							<div className='prices__include'>
								<h3 className='prices__subtitle subtitle subtitle_black'>
									Включено в стоимость
								</h3>
								<ul className='prices__services'>
									{prices.map((price, id) => (
										<li key={id}>{price.name}</li>
									))}
								</ul>
							</div>
							<div className='prices__bathhouse'>
								<div className='prices__addservices'>
									<h3 className='prices__subtitle subtitle subtitle_black'>
										Оплачивается отдельно
									</h3>
									<ul className='prices__addservices-list'>
										<li>Банный чан</li>
										<li>
											<a href='#exclusive'>Дополнительные услуги</a>
										</li>
									</ul>
								</div>
								<div className='prices__addservices-image'>
									<img src='/images/swiper-promo/slide2.jpeg' alt='forest' />
								</div>
							</div>
						</div>

						<div className='prices__prices'>
							<h3 className='prices__subtitle subtitle subtitle_black'>Цена</h3>
							<div className='prices__contain'>
								<div className='prices__day'>
									<div className='prices__day-top'>
										<p className='prices__day-title'>Посуточная аренда</p>
										<ul>
											<li>
												Вс-Чт<span>20 000<span className='ruble'>₽</span>/сут.</span>
											</li>
											<li>
												Пт-Вс<span>30 000 <span className='ruble'>₽</span>/сут.</span>
											</li>
										</ul>
										<p className='prices__day-text'>
											*Скидка 30 % на второй и последующие дни при бронировании
											от 2х и более суток с пн по пт
										</p>
									</div>
									<div className='prices__special'>
										<div className='prices__special-title'>
											<svg
												width='22'
												height='22'
												viewBox='0 0 22 22'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z'
													stroke='#F7FDFB'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
											<p>Специальное предложение</p>
										</div>
										<p className='prices__special-text'>
											А ещё больше выгоды ждёт вас при бронировании на выходные!
											<br />
											<br />
											Бронируйте проживание на 2-е суток с пятницы по
											воскресенье, всего<br className='prices-break'/> за <span>45 000 <span className='ruble'>₽</span></span>.
										</p>
									</div>
								</div>
								<div className='prices__hour'>
									<div className='prices__hour-title'>Почасовая аренда</div>
									<div className='prices__hour-two'>
										<p className='prices__hour-price'>2 000  <span className='ruble ruble-white'>₽</span>/сут. </p>
										<p className='prices__hour-time'>от 4 часов</p>
									</div>
									<p className='prices__hour-text'>
										*Для фотосъёмок только в дневное время без ночёвки
									</p>
								</div>
								<div className='prices__vat'>
									<div className='prices__vat-title'>Банный чан</div>
									<p className='prices__vat-price'>от 5 000  <span className='ruble ruble-white' >₽</span>/топка</p>
									<p className='prices__vat-text'>
										*Бронируется заранее, так как для его подготовки необходимо
										время. Подробности уточняйте у администратора
									</p>
								</div>
								<div className='prices__image'>
									<img src={priceImage} alt='price' />
								</div>
							</div>
						</div>
						<div className='prices__bottom'>
							<div className='prices__rules'>
								<div className='prices__rules-top'>
									<h3 className='subtitle subtitle_black'>
										Правила бронирования
									</h3>
									<ul className='prices__rules-list'>
										<li>
											Предоплата <strong>5 000 </strong><span className='ruble'>₽</span>
										</li>
										<li>
											Предоплата не возвращается при отмене бронирования менее,
											чем за 72 часа <span className='break'></span>до даты заезда
										</li>
										<li>
											При заезде необходимо внести залог{' '}
											<strong>10 000 </strong><span className='ruble'>₽</span>
											<br />
											Залог возвращается при условии сохранности имущества в
											доме
										</li>
									</ul>
								</div>
								<div className='prices__rules-bottom'>
									<img src={priceBG} alt='bg' />
								</div>
							</div>
							<div className='prices__comfort'>
								<h2 className='subtitle subtitle_black'>
									Условия комфортного проживания
								</h2>
								<ul className='prices__comfort-list prices__comfort-list-ok'>
									<li>
										<img src={okImage} alt='ok' />
										<p>Можно шуметь</p>
									</li>
									<li>
										<img src={okImage} alt='ok' />
										<p>Можно курить на террасе и территории</p>
									</li>
									<li>
										<img src={okImage} alt='ok' />
										<div className='prices__comfort-block'>
											<p>Заезд после 15:00</p>
											<p>Выезд строго до 12:00</p>
											<p className='prices__comfort-small-text'>
												*Сообщайте точное время прибытия заранее, чтобы мы
												смогли вас встретить
											</p>
										</div>
									</li>
									<li>
										<img src={notImage} alt='not' />
										<p>Не оставлять мусор на территории</p>
									</li>
									<li>
										<img src={notImage} alt='not' />
										<p>
											У нас в доме не курят. Штраф<span className='prices-break'></span> <strong>10 000 </strong><span className='ruble'>₽</span>
										</p>
									</li>
									<li>
										<img src={notImage} alt='not' />
										<p>
											Лапкам вход закрыт. К сожалению, у нас нельзя с животными
										</p>
									</li>
									<li>
										<img src={notImage} alt='not' />
										<p>
											На всей территории запрещены салюты, фейерверки и любая
											пиротехника
										</p>
									</li>
								</ul>
							</div>

							{props.isNavClicked && (
								<ScrollAnimation duration={0.3} offset={100} animateIn='animate__fadeIn'>
									<a href="#header">
										<button className='exlusive-button prices-btn'>
											
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='12'
												height='26'
												viewBox='0 0 12 26'
												fill='none'
											>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M5.29289 0.292893C5.68342 -0.0976311 6.31658 -0.0976311 6.70711 0.292893L10.7071 4.29289C11.0976 4.68342 11.0976 5.31658 10.7071 5.70711C10.3166 6.09763 9.68342 6.09763 9.29289 5.70711L6 2.41421L2.70711 5.70711C2.31658 6.09763 1.68342 6.09763 1.29289 5.70711C0.902369 5.31658 0.902369 4.68342 1.29289 4.29289L5.29289 0.292893Z'
													fill='#F7FDFB'
												/>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M6 4C6.55228 4 7 4.44772 7 5L7 25C7 25.5523 6.55228 26 6 26C5.44772 26 5 25.5523 5 25L5 5C5 4.44772 5.44772 4 6 4Z'
													fill='#F7FDFB'
												/>
											</svg>
											
										</button>
									</a>
								</ScrollAnimation>
							)}
						</div>
						
					</div>
				</div>
			</div>
		</>
	)
}

export default Prices

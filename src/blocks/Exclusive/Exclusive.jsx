import Title from '../../components/Title/Title'
import './Exclusive.scss'
import exclusiveImage1 from '/images/exclusive/1.jpeg'
import exclusiveImage2 from '/images/exclusive/2.jpeg'
import exclusiveImage3 from '/images/exclusive/3.jpeg'
import ScrollAnimation from 'react-animate-on-scroll';

const Exclusive = (props) => {
	return (
		<>
			<div className='exclusive' id='exclusive'>
				<div className='container'>
					<div className='exclusive__wrapper'>
						<Title>Эксклюзивные услуги для вашего удовольствия</Title>
						<h3 className='subtitle exclusive__subtitle'>
							Стоимость услуг обговаривается индивидуально
						</h3>
						<div className='exclusive__items'>
							<div className='exclusive__item'>
								<div className='exclusive__image'>
									<img src={exclusiveImage1} alt='exclusive' />
								</div>
								{/* <div className="exclusive__content"> */}
									<div className='exclusive__title'>Оформление фуршета</div>
									<p className='exclusive__text'>
										Мы создаем атмосферу изысканности и элегантности благодаря
										нашему искусству оформления фуршета. <br></br>
										<br></br>
										Каждая деталь заботливо продумана, чтобы ваше мероприятие
										оставило незабываемые впечатления и вызвало восторг у гостей.
									</p>
								{/* </div> */}
								
							</div>
							<div className='exclusive__item'>
								<div className='exclusive__image'>
									<img src={exclusiveImage2} alt='exclusive' />
								</div>
								<div className='exclusive__title'>Декор для дома и участка</div>
								<p className='exclusive__text'>
									Мы создаём атмосферу уюта и эстетики на любую тематику
									мероприятий. <br></br> <br></br>Индивидуальный подход и
									внимание к деталям придают нашему дому и окружающей его
									территории уникальный характер и шарм.
								</p>
							</div>
							<div className='exclusive__item'>
								<div className='exclusive__image'>
									<img src={exclusiveImage3} alt='exclusive' />
								</div>
								<div className='exclusive__title'>десерты на заказ</div>
								<p className='exclusive__text'>
									Мы предлагаем эксклюзивные десерты, созданные с любовью и
									творчеством. <br></br> <br></br>Каждый десерт уникален и
									превосходен, придавая вашему мероприятию неповторимый штрих
									вкуса и наслаждения.
								</p>
							</div>
						</div>
						{props.isNavClicked && (
							<ScrollAnimation duration={1.5} offset={200} animateIn='animate__fadeIn'>
								<a href="#prices">
									<button className='exlusive-button'>
										
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
		</>
	)
}

export default Exclusive

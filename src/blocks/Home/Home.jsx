import Title from '../../components/Title/Title'
import './Home.scss'
import { useState, useRef } from 'react'
import photo1 from '/images/active-photo/1.png'
import photo2 from '/images/active-photo/2.png'

const Home = () => {
	const [activePhoto, setActivePhoto] = useState(photo1)

	return (
		<>
			<div className='home' id='home'>
				<div className='container'>
					<div className='home__bg'></div>
					<div className='home__wrapper'>
						<Title classAdd='title_black'>Что предлагает наш уютный дом:</Title>
						<div className='home__block'>
							<div className='home__description'>
								<div className='home__icons'>
									<div className='home__icon'>
										<div className='home__icon-photo'>
											<img src='/icons/home-icon1.svg' alt='home' />
										</div>
										<p className='home__icon-text'>180 м<sup className='sup'>2</sup></p>
									</div>
									<div className='home__icon'>
										<div className='home__icon-photo'>
											<img src='/icons/home-icon2.svg' alt='home' />
										</div>
										<p className='home__icon-text'>4 спальни</p>
									</div>
									<div className='home__icon'>
										<div className='home__icon-photo'>
											<img src='/icons/home-icon3.svg' alt='home' />
										</div>
										<p className='home__icon-text'>2 санузла </p>
									</div>
									<div className='home__icon'>
										<div className='home__icon-photo'>
											<img src='/icons/home-icon4.svg' alt='home' />
										</div>
										<p className='home__icon-text'>Банный чан</p>
									</div>
								</div>
								<div className='home__text'>
									Погружение в уникальный мир комфорта и роскоши – наш
									загородный дом, где каждый момент пропитан неповторимой
									гармонией.
									<br />
									<br />
									Наш просторный дом общей площадью 180 м<sup className='sup'>2</sup> создан для
									комфортного размещения до 10 человек. Огороженная территория
									обеспечивает частную и безопасную обстановку, а наличие
									парковки делает пребывание удобным для всех гостей.
									<br />
									<br />
									<p className='home__text-1'>
										Изысканная терраса площадью 60 м<sup className='sup'>2</sup> предлагает просторное
										пространство для отдыха. Здесь вы обнаружите уютный
										4-метровый стол, идеальное место для семейных
										ужинов или вечерних посиделок с друзьями.
									</p>
									<br />
									<p className='home__text-2'>
										Гриль-зона и банный чан добавляют шарма, создавая атмосферу
										праздника на природе.
									</p>
								</div>
							</div>
							<div className='home__active-photo'>
								<div className='home__top'>
									<img
										onClick={() =>
											setActivePhoto(activePhoto === photo1 ? photo2 : photo1)
										}
										src={activePhoto}
										alt='slide'
									/>
								</div>
								<div className='home__bottom'>
									<div className='home__images'>
										<img
											src={photo1}
											alt='slide'
											onClick={() => setActivePhoto(photo1)}
											className={activePhoto === photo1 ? 'active' : ''}
										/>
										<img
											src={photo2}
											alt='slide'
											onClick={() => setActivePhoto(photo2)}
											className={activePhoto === photo2 ? 'active' : ''}
										/>
									</div>
									<div className='home__buttons'>
										<div
											onClick={() => setActivePhoto(photo1)}
											className={`home__button home__button-prev ${
												activePhoto === photo1 ? 'disabled' : ''
											}`}
										>
											<svg
												width='26.000000'
												height='11.000000'
												viewBox='0 0 26 11'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
												xmlnsXlink='http://www.w3.org/1999/xlink'
											>
												<path
													id='Vector (Stroke)'
													d='M0.292969 6.20703C-0.0976562 5.81641 -0.0976562 5.18359 0.292969 4.79297L4.29297 0.792969C4.68359 0.402344 5.31641 0.402344 5.70703 0.792969C6.09766 1.18359 6.09766 1.81641 5.70703 2.20703L2.41406 5.5L5.70703 8.79297C6.09766 9.18359 6.09766 9.81641 5.70703 10.207C5.31641 10.5977 4.68359 10.5977 4.29297 10.207L0.292969 6.20703Z'
													fill='#F7FDFB'
													fillOpacity='1.000000'
													fillRule='evenodd'
												/>
												<path
													id='Vector (Stroke)'
													d='M4 5.5C4 4.94775 4.44727 4.5 5 4.5L25 4.5C25.5527 4.5 26 4.94775 26 5.5C26 6.05225 25.5527 6.5 25 6.5L5 6.5C4.44727 6.5 4 6.05225 4 5.5Z'
													fill='#F7FDFB'
													fillOpacity='1.000000'
													fillRule='evenodd'
												/>
											</svg>
										</div>
										<div
											onClick={() => setActivePhoto(photo2)}
											className={`home__button home__button-next ${
												activePhoto === photo2 ? 'disabled' : ''
											}`}
										>
											<svg
												width='26.000000'
												height='11.000000'
												viewBox='0 0 26 11'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
												xmlnsXlink='http://www.w3.org/1999/xlink'
											>
												<path
													id='Vector (Stroke)'
													d='M25.707 6.20703C26.0977 5.81641 26.0977 5.18359 25.707 4.79297L21.707 0.792969C21.3164 0.402344 20.6836 0.402344 20.293 0.792969C19.9023 1.18359 19.9023 1.81641 20.293 2.20703L23.5859 5.5L20.293 8.79297C19.9023 9.18359 19.9023 9.81641 20.293 10.207C20.6836 10.5977 21.3164 10.5977 21.707 10.207L25.707 6.20703Z'
													fill='#F7FDFB'
													fillOpacity='1.000000'
													fillRule='evenodd'
												/>
												<path
													id='Vector (Stroke)'
													d='M22 5.5C22 4.94775 21.5527 4.5 21 4.5L1 4.5C0.447266 4.5 0 4.94775 0 5.5C0 6.05225 0.447266 6.5 1 6.5L21 6.5C21.5527 6.5 22 6.05225 22 5.5Z'
													fill='#F7FDFB'
													fillOpacity='1.000000'
													fillRule='evenodd'
												/>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home

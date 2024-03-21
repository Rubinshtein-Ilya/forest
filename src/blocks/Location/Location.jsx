import Title from '../../components/Title/Title'
import './Location.scss'

import air from '/icons/location/air.svg'
import forest from '/icons/location/forest.svg'
import insulation from '/icons/location/insulation.svg'
import lake from '/icons/location/lake.svg'
import { useState } from 'react'
import { message } from 'antd'
import copyIcon from '/icons/copy.svg'
import copy from 'clipboard-copy'
import autoImage from '/icons/auto.svg'
import Button from '../../components/Button/Button'

const Location = () => {
	const [isCopied, setIsCopied] = useState(false)

	const copyToClipboard = text => {
		copy(text)
		setIsCopied(true)

		setTimeout(() => {
			setIsCopied(false)
		}, 2000)

		// Stop the event propagation
		event.stopPropagation()
	}

	const scrollToTarget = id => {
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}

	const [messageApi, contextHolder] = message.useMessage()

	const success = () => {
		messageApi.open({
			type: 'success',
			content: 'Координаты скопированы',
		})
	}
	return (
		<>
			<div className='location' id='location'>
				<div className='container'>
					<div className='location__bg'></div>
					<div className='location__wrapper'>
						<Title>Уникальная локация</Title>
						<p className='location__description'>
							Наш загородный дом расположен в окружении природной красоты,
							прекрасно укрытый от городской суеты. Он предлагает уединение и
							умиротворение в сердце природы, создавая идеальное место
							для отдыха и восстановления.
						</p>

						<div className='location__items'>
							<div className='location__item'>
								<div className='location__item-image'>
									<img src={forest} alt='forest' />
									<p>Лесные тропы</p>
								</div>
								<p className='location__item-text'>
									Насладитесь бескрайним разнообразным лесом, где великолепно
									сочетаются хвойные, лиственные и различные другие породы
									деревьев. <br /> Это идеальное место для прогулок и насыщения
									организма свежим кислородом, на фоне уникального аромата
									лесной зелени.
								</p>
							</div>

							<div className='location__item'>
								<div className='location__item-image'>
									<img src={air} alt='air' />

									<p>Чистый воздух</p>
								</div>
								<p className='location__item-text'>
									Здесь вы будете наслаждаться чистым и свежим воздухом,
									благоприятным для вашего здоровья и благополучия. Отдыхая
									здесь, вы почувствуете освежающую разницу.
								</p>
							</div>

							<div className='location__item'>
								<div className='location__item-image'>
									<img src={lake} alt='lake' />

									<p>Озеро шитовское</p>
								</div>
								<p className='location__item-text'>
									Всего в 10-15 мин. пешком располагается удивительное оз.
									Шитовское. Его спокойная вода, окруженная живописными
									пейзажами, станет вашим убежищем, где можно наслаждаться
									умиротворением и водными развлечениями.
								</p>
							</div>

							<div className='location__item'>
								<div className='location__item-image'>
									<img src={insulation} alt='insulation' />

									<p>Полная изоляция</p>
								</div>
								<p className='location__item-text'>
									Это уединенное место, где природа предоставляет спокойствие
									и приватность, даруя возможность наслаждаться миром вдали
									от городской суеты и шума. Здесь вы не только окунетесь
									в атмосферу умиротворения, но и можете встретить множество
									лесных жителей, которые разделят с вами этот уголок природы.
								</p>
							</div>
						</div>

						<p className='location__items-text'>
							Эти уникальные особенности локации делают это место идеальным для
							тех, кто ищет уединение, природную красоту и возможность
							насладиться чистотой и спокойствием загородной жизни.
						</p>

						<div className='location__found' id='location__found'>
							<Title>Как нас найти</Title>

							<div className='location__blocks'>
								<div className='location__auto'>
									<div className='location__auto-top'>
										<div className='location__auto-image'>
											<img src={autoImage} alt='auto' />
										</div>
										<div className='location__auto-title'>на машине</div>
									</div>
									<p className='location__auto-text'>
										Направляйтесь по Верхотурскому тракту через поселок
										Половинный до указателя оз. Шитовское. <br></br> Поверните
										на оз. Шитовское, двигайтесь 6 км. до указателя «Время
										леса».
									</p>
									<div className='location__auto-geo'>
										{contextHolder}
										<p>57.122785 60.511281</p>
										<div
											className='location__copy'
											onClick={event => {
												event.preventDefault()
												event.stopPropagation()
												copyToClipboard('57.122785 60.511281')
												success()
											}}
										>
											<svg
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M20 8H10C8.89543 8 8 8.89543 8 10V20C8 21.1046 8.89543 22 10 22H20C21.1046 22 22 21.1046 22 20V10C22 8.89543 21.1046 8 20 8Z'
													stroke='#AFAFAF'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
												<path
													d='M4 16C2.9 16 2 15.1 2 14V4C2 2.9 2.9 2 4 2H14C15.1 2 16 2.9 16 4'
													stroke='#AFAFAF'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</div>
									</div>
								</div>

								<div className='location__map'>
									<div
										style={{
											position: 'relative',
											overflow: 'hidden',
											height: '100%',
											display: 'block',
											borderRadius: '24px',
										}}
									>
										<a
											href='https://yandex.ru/maps/org/vremya_lesa/191238425384/?utm_medium=mapframe&utm_source=maps'
											style={{
												color: '#eee',
												fontSize: '12px',
												position: 'absolute',
												top: '0px',
											}}
										>
											Время леса
										</a>
										<a
											href='https://yandex.ru/maps/11162/sverdlovsk-oblast/category/resort/184106400/?utm_medium=mapframe&utm_source=maps'
											style={{
												color: '#eee',
												fontSize: '12px',
												position: 'absolute',
												top: '14px',
											}}
										>
											База, дом отдыха в Свердловской области
										</a>
										<iframe
											src='https://yandex.ru/map-widget/v1/?ll=60.508322%2C57.121875&mode=poi&poi%5Bpoint%5D=60.511310%2C57.122775&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D191238425384&z=11.38'
											width='100%'
											height='100%'
											frameBorder='0'
											allowFullScreen={true}
											style={{ position: 'relative' }}
										></iframe>
									</div>
								</div>
							</div>

							<a
								className='button location__button button__green'
								onClick={() => scrollToTarget('booking-form')}
							>
								Забронировать
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Location

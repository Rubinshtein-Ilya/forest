import Title from '../../components/Title/Title'
import './Atmosphere.scss'
import { useState } from 'react'
import atmosphereImage from '/images/swiper-promo/slide4.jpeg'

const Atmosphere = () => {
	return (
		<>
			<div className='atmosphere'>
				<div className='container'>
					<div className='atmosphere__wrapper'>
						<div className='atmosphere__bg'></div>
						<div className='atmosphere__bg-1'></div>
						<div className='atmosphere__bg-2'></div>
						<div className='atmosphere__bg-3'></div>

						<div className='atmosphere__block'>
							<div className='atmosphere__image'>
								<img src={atmosphereImage} alt='atmosphere' />
							</div>

							<div className='atmosphere__description'>
								<h3 className='atmosphere__subtitle subtitle subtitle_black'>
									Насладитесь особенной атмосферой в спальне на втором этаже,
									где ванная прямо в комнате!
								</h3>
								<p className='text text_black'>
									Это уникальное решение позволяет создавать запоминающиеся
									моменты и неповторимые фотосессии. Вы сможете наслаждаться
									комфортом и интимностью, оставаясь в уютной обстановке своего
									приватного уголка.
									<br />
									<br />
									Наш дом предлагает удивительные возможности для отдыха
									и проведения времени, обеспечивая комфорт и элегантность
									в каждой детали.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Atmosphere

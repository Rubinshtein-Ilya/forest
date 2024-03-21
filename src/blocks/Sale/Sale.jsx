import Title from '../../components/Title/Title'
import './Sale.scss'

const Sale = () => {
	return (
		<div className='sale'>
			<div className='container'>
				<div className='sale__wrapper'>
					{/* Используем SVG прямо в коде в качестве маски */}
					<div className='sale__bg sale__bg-1366'>
						<svg
							className='mask-svg'
							width='1366'
							height='756'
							viewBox='0 0 1366 756'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<defs>
								<mask id='mask-1'>
									<path
										d='M0 159V24C0 10.7452 10.7452 0 24 0H765C778.255 0 789 10.7452 789 24V132C789 145.255 799.745 156 813 156H1342C1355.25 156 1366 166.745 1366 180V537V731.978C1366 745.241 1355.24 755.99 1341.98 755.978L846.978 755.522C833.732 755.51 823 744.768 823 731.522V561C823 547.745 812.255 537 799 537H24C10.7452 537 0 526.255 0 513V159Z'
										fill='#ffffff'
										fillOpacity='1'
									/>
								</mask>
							</defs>
							<image
								href='/images/coffee1.jpg'
								width='100%'
								height='100%'
								// height='100%'
								mask='url(#mask-1)'
								preserveAspectRatio='xMidYMid slice'
							/>
						</svg>
					</div>

					<div className='sale__bg sale__bg-1000'>
						<svg
							className='mask-svg'
							width='960'
							height='761'
							viewBox='0 0 960 761'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<defs>
								<mask id='mask-2'>
									<path
										d='M0 164V24C0 10.7452 10.7452 0 24 0H550.389C563.644 0 574.389 10.7452 574.389 24V150C574.389 163.255 585.135 174 598.389 174H936C949.255 174 960 184.745 960 198V542V736.956C960 750.228 949.228 760.98 935.956 760.956L710.141 760.544C696.903 760.52 686.185 749.782 686.185 736.544V656C686.185 642.745 675.439 632 662.185 632H24C10.7452 632 0 621.255 0 608V164Z'
										fill='#ffffff'
										fillOpacity='1'
									/>
								</mask>
							</defs>
							<image
								href='/images/coffee.jpg'
								width='100%'
								height='100%'
								// height='100%'
								mask='url(#mask-2)'
								preserveAspectRatio='xMidYMid slice'
							/>
						</svg>
					</div>

					<div className='sale__bg sale__bg-768'>
						<svg
							className='mask-svg'
							width='728'
							height='881'
							viewBox='0 0 728 881'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<defs>
								<mask id='mask-3'>
									<path
										d='M0 284V24C0 10.7452 10.7452 0 24 0H329.929C343.184 0 353.929 10.7452 353.929 24V118C353.929 131.255 364.674 142 377.929 142H704C717.255 142 728 152.745 728 166V662V856.867C728 870.174 717.174 880.94 703.868 880.867L661.224 880.632C648.021 880.559 637.357 869.835 637.357 856.632V776C637.357 762.745 626.611 752 613.357 752H24C10.7451 752 0 741.255 0 728V284Z'
										fill='#ffffff'
										fillOpacity='1'
									/>
								</mask>
							</defs>
							<image
								href='/images/coffee.jpg'
								width='100%'
								height='100%'
								// height='100%'
								mask='url(#mask-3)'
								preserveAspectRatio='xMidYMid slice'
							/>
						</svg>
					</div>

					<div className='sale__bg sale__bg-480'>
						<svg
							className='mask-svg'
							width='440'
							height='379'
							viewBox='0 0 440 379'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<defs>
								<mask id='mask-4'>
									<path
										d='M0 114C0 105.163 7.16344 98 16 98H252C260.837 98 268 90.8366 268 82V16C268 7.16344 275.163 0 284 0H424C432.837 0 440 7.16344 440 16V117.107V278.076V362.948C440 371.804 432.805 378.976 423.948 378.947L385.163 378.821C376.347 378.793 369.215 371.638 369.215 362.821V335.551C369.215 326.715 362.052 319.551 353.215 319.551H16C7.16343 319.551 0 312.388 0 303.551V114Z'
										fillOpacity='1'
										fill='#ffffff'
									/>
								</mask>
							</defs>
							<image
								href='/images/coffee.jpg'
								width='100%'
								height='100%'
								// height='100%'
								mask='url(#mask-4)'
								preserveAspectRatio='xMidYMid slice'
							/>
						</svg>
					</div>

					<div className='sale__bg sale__bg-320'></div>

					{/* Вставляем изображение */}
					{/* <div className='mask-image'>
						<img src={forest} alt='Forest' className='forest-image' />
					</div> */}

					<Title>Скидка 30 %</Title>

					<h3 className='sale__subtitle'>
						<span>На второй и последующие дни</span> при бронировании
						от 2х и более суток <br />с понедельника по пятницу
					</h3>
				</div>
			</div>
		</div>
	)
}

export default Sale

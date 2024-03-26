import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import Promo from './blocks/Promo/Promo'
import Booking from './blocks/Booking/Booking'
import Home from './blocks/Home/Home'
import Atmosphere from './blocks/Atmosphere/Atmosphere'
import Cosiness from './blocks/Cosiness/Cosiness'
import Prices from './blocks/Prices/Prices'
import Rest from './blocks/Rest/Rest'
import Location from './blocks/Location/Location'
import Exclusive from './blocks/Exclusive/Exclusive'
import Questions from './blocks/Questions/Questions'
import Sale from './blocks/Sale/Sale'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import Footer from './components/Footer/Footer'
import CosinesSlider from './components/Sliders/Cosines-slider'
import HomeSlider from './components/Sliders/Home-slider'

function App() {
	const [isLoading, setIsLoading] = useState(true)
	const [isNavClicked, setIsNavClicked] = useState(false)
	const [isCosinesSlider, setCosinesIsSlader] = useState(false)
	const [isOverlay, setIsOverlay] = useState(false)
	const [isHomeSlader,setIsHomeSlader] = useState(false)
	// useEffect(() => {
	// 	// Функция, которая будет вызвана при загрузке всех ресурсов страницы
	// 	const handleLoad = () => {
	// 		setIsLoading(false) // Устанавливаем isLoading в false после загрузки
	// 	}

	// 	// Добавляем обработчик события для события загрузки
	// 	window.addEventListener('load', handleLoad)

	// 	// Убираем обработчик события при размонтировании компонента
	// 	return () => {
	// 		window.removeEventListener('load', handleLoad)
	// 	}
	// }, [])

	return (
		<>
			{isOverlay && (
				<div className="overlay"></div>
			)}
			
			<Header isNavClicked={isNavClicked} setIsNavClicked={setIsNavClicked}/>
			<Promo />
			<Booking />
			<Home setIsHomeSlader={setIsHomeSlader} setIsOverlay={setIsOverlay}/>
			<Atmosphere />
			<Cosiness setCosinesIsSlader={setCosinesIsSlader} setIsOverlay={setIsOverlay}/>
			<Prices isNavClicked={isNavClicked}/>
			<Rest />
			<Sale />
			<Location />
			<Exclusive isNavClicked={isNavClicked}/>
			<Questions />
			<Footer />
			{isCosinesSlider && (
				<CosinesSlider setCosinesIsSlader={setCosinesIsSlader} setIsOverlay={setIsOverlay}/>
			)}
			{isHomeSlader && (
				<HomeSlider setIsHomeSlader={setIsHomeSlader} setIsOverlay={setIsOverlay}/>
			)}
			

		</>
	)
}

export default App

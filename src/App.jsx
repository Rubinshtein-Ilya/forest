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

function App() {
	const [isLoading, setIsLoading] = useState(true)

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
			<Header />
			<Promo />
			<Booking />
			<Home />
			<Atmosphere />
			<Cosiness />
			<Prices />
			<Rest />
			<Sale />
			<Location />
			<Exclusive />
			<Questions />
			<Footer />
		</>
	)
}

export default App

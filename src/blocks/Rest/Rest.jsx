import { useState, useEffect } from 'react'
import './Rest.scss'
import '../../App.css'
import Booking from '../Booking/Booking'

function Rest() {
	const [count, setCount] = useState(0)
	const [widthDesc, setWidthDesc] = useState(
		typeof window !== 'undefined' ? window.innerWidth : 0
	)

	// useEffect(() => {
	// 	const handleResize = () => {
	// 		setWidthDesc(window.innerWidth)
	// 	}

	// 	// Add event listener for window resize
	// 	window.addEventListener('resize', handleResize)

	// 	// Cleanup the event listener on component unmount
	// 	return () => {
	// 		window.removeEventListener('resize', handleResize)
	// 	}
	// }, []) // Empty dependency array ensures the effect runs only once, similar to componentDidMount

	// console.log(widthDesc)

	return (
		<>
			<div className='rest'>
				<div className='container'>
					<div className='rest__bg'>
						<svg
							width='1366'
							height='594'
							viewBox='0 0 1366 594'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M0 0V0C9.5746 0 9.5 0 9.5 0H1366V0V0V568C1366 582.359 1354.36 594 1340 594H855C840.64 594 829 582.359 829 568V457C829 442.64 817.359 431 803 431H26C11.6406 431 0 419.413 0 405.054C0 237.039 0 0 0 0Z'
								fill='#3B3B3B'
							/>
						</svg>
					</div>
					<div className='rest__wrapper'>
						<h2 className='title'>Забронируйте свой отдых</h2>
						<Booking />
					</div>
				</div>
			</div>
		</>
	)
}

export default Rest

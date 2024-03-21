import './Overlay.scss'
const Overlay = ({ onClick }) => {
	return (
		<>
			<div className='overlay' onClick={onClick} />
		</>
	)
}

export default Overlay

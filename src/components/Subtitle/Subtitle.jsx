import './Subtitle.scss'

const Subtitle = props => {
	return (
		<>
			<h3 className={`${props.addClass} subtitle`}>{props.children}</h3>
		</>
	)
}

export default Subtitle

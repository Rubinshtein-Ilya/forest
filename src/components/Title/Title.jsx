import './Title.scss'

const Title = props => {
	return (
		<>
			<h2 className={`title ${props.classAdd}`}>{props.children}</h2>
		</>
	)
}

export default Title

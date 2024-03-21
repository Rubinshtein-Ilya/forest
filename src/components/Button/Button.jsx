import './Button.scss'

const Button = props => {
	return (
		<>
			<button className={`button ${props.classAdd}`}>{props.children}</button>
		</>
	)
}

export default Button

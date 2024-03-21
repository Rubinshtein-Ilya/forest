import Form from '../../components/Form/Form'
import Icon from '../../components/Icon/Icon'
import Title from '../../components/Title/Title'
import './Questions.scss'

const Questions = () => {
	return (
		<>
			<div className='questions' id='questions'>
				<div className='container'>
					<div className='questions__wrapper'>
						<div className='questions__left'>
							<Title>Остались вопросы?</Title>
							<p className='questions__subtitle'>
								Оставьте контакты, и мы свяжемся с Вами в ближайшее время
							</p>
							<div className='questions__form'>
								<Form />
							</div>
							<p className='questions__personal'>
								Нажимая на кнопку «Свяжитесь со мной», я принимаю условия
								пользовательского соглашения и даю согласие на обработку своих
								персональных данных.
							</p>
							<div className='questions__socials'>
								<div className='questions__socials-title'>
									Или свяжитесь с нами прямо сейчас!
								</div>
								<div className='questions__icons'>
									{Icon('phone')}
									{Icon('tg')}
									{Icon('wa')}
								</div>
							</div>
						</div>
						<div className='questions__image'>
							<img src='/images/question.jpeg' alt='family' />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Questions

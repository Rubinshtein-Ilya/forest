import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import Button from '../Button/Button'
import { useEffect, useState, useRef } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IMaskInput } from 'react-imask'
import { useId } from 'react'
import './Form.scss'
import errorImage from '/icons/error.svg'
import penOk from '/icons/pen.svg'
import SendOk from '../SendOk/SendOk'

const Form = () => {
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [isErrorSubmitted, setIsErrorSubmitted] = useState(false)
	const [addNameClass, setAddNameClass] = useState('')
	const [addPhoneClass, setAddPhoneClass] = useState('')
	const [addTextAreaClass, setAddTextAreaClass] = useState('')
	const [selectedOption, setSelectedOption] = useState('#afafaf !important')
	const [showPhoneMask, setShowPhoneMask] = useState(false)
	const [isFocused, setIsFocused] = useState(false)
	const [isEmail, setIsEmail] = useState(false)
	const [phone, setPhone] = useState('');

	const handleFocus = () => {
		setIsFocused(true)
	}

	const handleBlur = () => {
		setIsFocused(false)
	}

	const selectClass = () => {
		setSelectedOption('#f7fdfb !important')
	}

	const handleNameClassChange = () => {
		setAddNameClass('input-form-ok')
	}

	const removeNameClassChange = () => {
		setAddNameClass('')
	}

	const handlePhoneClassChange = () => {
		setAddPhoneClass('input-form-ok')
	}

	const removePhoneClassChange = () => {
		setAddPhoneClass('')
	}

	const handleTextAreaClassChange = () => {
		setAddTextAreaClass('textarea-form-ok')
	}

	const removeTextAreaClassChange = () => {
		setAddTextAreaClass('')
	}

	const [showMask, setShowMask] = useState(false)
	//отправка данных
	const onSubmit = async data => {
		try {
			const response = await fetch(
				`https://api.telegram.org/bot${
					import.meta.env.VITE_TELEGRAM_TOKEN
				}/sendMessage`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						chat_id: import.meta.env.VITE_CHAT_ID, // Идентификатор чата или канала
						text: `Новое сообщение из формы:\nИмя: ${data.firstName}\nТелефон: ${data.phone}\nПредпочтительный способ связи: ${data.select.value}\nКомментарий: ${data.textarea}`,
					}),
				}
			)

			if (!response.ok) {
				throw new Error('Ошибка отправки сообщения')
			}

			// Обработка успешной отправки сообщения
			console.log('Сообщение успешно отправлено в телеграм-канал')
			setIsSubmitted(true)
			setTimeout(() => {
				setIsSubmitted(false)
			}, 4000) // 120000 миллисекунд = 2 минуты
		} catch (error) {
			console.error('Ошибка отправки сообщения:', error)
			setIsErrorSubmitted(true)
			setTimeout(() => {
				setIsErrorSubmitted(false)
			}, 4000)
		}
	}

	const schema = yup
		.object()
		.shape({
			firstName: yup.string().required('Обязательно для ввода').max(20).min(2),
			phone: yup
				.string()
				.matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Неверно введен номер')
				.required('Обязательно для ввода'),
			select: yup.object().shape({
				value: yup.string().required('Обязательно для ввода'),
				label: yup.string(),
			}),
			textarea: yup.string().max(30, 'Максимум 30 символов'),
		})
		.required()

	const ref = useRef(null)

	const {
		control,
		handleSubmit,
		formState: { errors },
		register,
		watch,
	} = useForm({
		defaultValues: {
			firstName: '',
			phone: '',
			guests: '', // Добавляем значение по умолчанию для текстовой области
		},
		resolver: yupResolver(schema),
	})

	const firstNameValue = watch('firstName')
	const phoneValue = watch('phone')
	const selectValue = watch('select')

	const [hasMounted, setHasMounted] = useState(false)

	useEffect(() => {
		setHasMounted(true)
	}, [])

	const inputRef = useRef(null)

	// const onSubmit = data => console.log(data)

	return (
		hasMounted && (
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='input__wrapper'>
					<input
						{...register('firstName')}
						aria-invalid={errors.firstName ? 'true' : 'false'}
						placeholder='Имя*'
						className={`input-form ${addNameClass}`}
						// onFocus={
						// 	errors.firstName ? removeNameClassChange : handleNameClassChange
						// }
						onBlur={() => {
							errors.firstName || firstNameValue.length < 2
								? removeNameClassChange()
								: handleNameClassChange()
						}}
						// onChange={errors.firstName ? removeClassChange : handleClassChange}
					/>
					{errors.firstName && (
						<img className='error-icon' src={errorImage} alt='error' />
					)}
				</div>

				<Controller
					name='phone'
					control={control}
					render={({ field }) => (
						
						<div className='input__wrapper'>
							<IMaskInput
								mask={showPhoneMask ? '+{7} (000) 000-00-00' : ''}
								definitions={{
									0: /[0-9]/,
								}}
								
								placeholder={!isEmail? (isFocused ? '+7 (___) ___-__-__' : 'Телефон*'): (isFocused ? '' : 'Email*')}
								
								
								value={!isEmail? field.value: ''}
								onAccept={value => field.onChange(value)}
								inputRef={input => {
									field.ref(input)
									if (errors.phone) {
										input.focus()
									}
								}}
								className={`input-form input__phone-white ${addPhoneClass}`}
								onFocus={() => {
									setShowPhoneMask(!isEmail)
									handleFocus()
									console.log(field)
									// errors.phone
									// 	? removePhoneClassChange()
									// 	: handlePhoneClassChange()
								}}
								onBlur={() => {
									setShowPhoneMask(false)
									handleBlur()
									errors.phone || phoneValue.length < 18
										? removePhoneClassChange()
										: handlePhoneClassChange()
								}}
								aria-invalid={errors.phone ? 'true' : 'false'}
							/>
							{errors.phone ? (
								<img className='error-icon' src={errorImage} alt='error' />
							) : (
								<img />
							)}
						</div>
					)}
				/>

				<Controller
					name='select'
					control={control}
					render={({ field }) => (
						<div className='input__wrapper'>
							<Select
								{...field}
								options={[
									{ value: 'Phone', label: 'Телефонный звонок' },
									{ value: 'Whatsapp', label: 'Whatsapp' },
									{ value: 'Telegram', label: 'Telegram' },
									{ value: 'Email', label: 'Почта' },
								]}
								placeholder='Предпочтительный способ связи*'
								instanceId={useId()}
								className='react-select-container'
								classNamePrefix={'react-select'}
								onChange={selectedOption => {
									field.onChange(selectedOption)
									
									selectedOption.value === 'Email'? setIsEmail(true): setIsEmail(false);
					
									selectClass() // Вызов функции при выборе элемента
								}}
								styles={{
									control: (baseStyles, { isFocused }) => ({
										...baseStyles,
										borderColor: errors.select
											? '#eb394f !important'
											: selectedOption,
									}),
									placeholder: (baseStyles, { isFocused }) => ({
										...baseStyles,
										color: errors.select
											? '#eb394f !important'
											: '#afafaf !important',
										opacity: errors.select ? '1' : '0.5',
									}),
									dropdownIndicator: provided => ({
										...provided,
										svg: {
											fill: errors.select ? '#eb394f' : selectedOption,
										},
									}),
								}}
							/>

							{errors.select && (
								<img className='error-icon' src={errorImage} alt='error' />
							)}
						</div>
					)}
				/>

				<div className='input__wrapper'>
					<textarea
						{...register('textarea')}
						aria-invalid={errors.textarea ? 'true' : 'false'}
						placeholder='Комментарий (необязательное поле)'
						className={`textarea-form ${addTextAreaClass}`}
						onBlur={
							errors.textarea || watch('textarea')?.length < 1
								? removeTextAreaClassChange
								: handleTextAreaClassChange
						}
					/>

					{errors.textarea && (
						<img className='error-icon' src={errorImage} alt='error' />
					)}
				</div>

				<Button type='submit'>Свяжитесь со мной</Button>
				{isSubmitted && <SendOk send={true} />}
				{isErrorSubmitted && <SendOk send={false} />}
			</form>
		)
	)
}

export default Form

import { useState, useEffect, useMemo, useRef } from 'react'
import axios from 'axios'
import { parse, format } from 'date-fns'
import ru from 'date-fns/locale/ru'
import dynamic from 'next/dynamic'
import Overlay from '../../components/Overlay/Overlay'
import './Booking.scss'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from '../DatePicker/DatePicker'
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IMaskInput } from 'react-imask'
import { useId } from 'react'
import errorImage from '/icons/error.svg'
import Icon from '../../components/Icon/Icon'
import SendOk from '../../components/SendOk/SendOk'

const DynamicDatePicker = dynamic(() => import('react-datepicker'), {
	ssr: false,
})

const Booking = () => {
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [isErrorSubmitted, setIsErrorSubmitted] = useState(false)
	const [addNameClass, setAddNameClass] = useState('')
	const [addSelectClass, setAddSelectClass] = useState('')
	const [addDateClass, setAddDateClass] = useState('')
	const [addPhoneClass, setAddPhoneClass] = useState('')
	const [selectedOption, setSelectedOption] = useState('#afafaf !important')
	const [showPhoneMask, setShowPhoneMask] = useState(false)
	const [startDate, setStartDate] = useState('')
	const [endDate, setEndDate] = useState('')
	const [startFormattedDate, setStartFormattedDate] = useState('')
	const [endFormattedDate, setEndFormattedDate] = useState('')
	const [initialStartDate, setInitialStartDate] = useState('')
	const [initialEndDate, setInitialEndDate] = useState('')
	const [isFocused, setIsFocused] = useState(false)

	const handleFocus = () => {
		setIsFocused(true)
	}

	const handleBlur = () => {
		setIsFocused(false)
	}

	const schema = yup
		.object()
		.shape({
			dates: yup.string().required(),
			firstName: yup.string().required('Обязательно для ввода').max(20).min(2),
			phone: yup
				.string()
				.matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Неверно введен номер')
				.required('Обязательно для ввода'),
			select: yup.object().shape({
				value: yup.string().required('Обязательно для ввода'),
				label: yup.string(),
			}),
		})
		.required()

	const ref = useRef(null)

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

	const handleDateClassChange = () => {
		setAddDateClass('input-form-ok')
	}

	const removeDateClassChange = () => {
		setAddDateClass('')
	}

	const changeIsSubmited = (val) => {
		setIsSubmitted(val);
		setIsErrorSubmitted(val);
	}

	const {
		control,
		handleSubmit,
		formState,
		formState: { errors, isValid },
		register,
		watch,
		setValue,
		getFieldState,
		clearErrors,
	} = useForm({
		defaultValues: {
			dates: '',
			firstName: '',
			phone: '',
			select: '', // Добавляем значение по умолчанию для текстовой области
		},
		resolver: yupResolver(schema),
	})

	const firstNameValue = watch('firstName')
	const datesValue = watch('dates')
	const phoneValue = watch('phone')
	const selectValue = watch('select')

	const handleDatePickerSubmit = data => {
		setInitialStartDate(data.startDate)
		setInitialEndDate(data.endDate)

		const startDay = format(data.startDate, 'dd MMM yyyy г.', { locale: ru })
		const endDay = format(data.endDate, 'dd MMM yyyy г.', { locale: ru })

		setStartFormattedDate(format(data.startDate, 'dd-MM-yyyy'))
		setEndFormattedDate(format(data.endDate, 'dd-MM-yyyy'))

		setStartDate(startDay)
		setEndDate(endDay)
		setValue('dates', `${data.startDate} - ${data.endDate}`)

		setOpenCalendar(false)

		handleDateClassChange()
	}

	const [openCalendar, setOpenCalendar] = useState(false)

	const [hasMounted, setHasMounted] = useState(false)

	useEffect(() => {
		setHasMounted(true)
	}, [])

	const inputRef = useRef(null)

	// const handleKeyDown = e => {
	// 	if (e.key === 'Enter') {
	// 		e.preventDefault()
	// 	}
	// }

	const onSubmit = async data => {
		const formattedData = {}
		Object.keys(data).map(key => {
			if (key === 'dates') {
				formattedData.startDay = startFormattedDate
				formattedData.endDay = endFormattedDate
			} else if (key === 'select') {
				formattedData.guests = data.select.value
			} else {
				formattedData[key] = data[key]
			}
		})

		console.log(formattedData)

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
						text: `Новое сообщение из формы:\nИмя: ${formattedData.firstName}\nТелефон: ${formattedData.phone}\nКоличество людей: ${formattedData.guests}\nДата заезда: ${formattedData.startDay}\nДата выезда: ${formattedData.endDay}`,
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
			}, 10000) // 120000 миллисекунд = 2 минуты
			
		} catch (error) {
			console.error('Ошибка отправки сообщения:', error)
			setIsErrorSubmitted(true)
			setTimeout(() => {
				setIsErrorSubmitted(false)
			}, 10000)
		}
	}

	return (
		<div className='booking'>
			{openCalendar && (
				<DatePicker
					onSubmitCallback={handleDatePickerSubmit}
					initialDates={{ initialStartDate, initialEndDate }}
				/>
			)}
			{openCalendar && <Overlay onClick={() => setOpenCalendar(false)} />}
			<div className='container'>
				<div className='booking__wrapper'>
					<div className='booking__bg'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='1007'
							height='392'
							viewBox='0 0 1007 392'
							fill='none'
						>
							<path
								d='M0 24C0 10.7452 10.7452 0 24 0H983C996.255 0 1007 10.7452 1007 24V368C1007 381.255 996.255 392 983 392H659C645.745 392 635 381.255 635 368V258C635 244.745 624.255 234 611 234H210H24C10.7452 234 0 223.255 0 210V24Z'
								fill='#3B3B3B'
							/>
						</svg>
					</div>
					{hasMounted && (
						<form
							className='booking__form'
							id='booking-form'
							onSubmit={handleSubmit(onSubmit)}
							// onKeyDown={openCalendar ? handleKeyDown : null}
						>
							<div className='input__wrapper booking__input-wrapper'>
								<input
									{...register('dates')}
									aria-invalid={errors.dates ? 'true' : 'false'}
									placeholder='Даты пребывания'
									className={`input-form ${addDateClass}`}
									// onFocus={
									// 	errors.dates ? removeDateClassChange : handleDateClassChange
									// }
									onBlur={() => {
										errors.dates || !(startDate && endDate)
											? removeDateClassChange()
											: handleDateClassChange()
									}}
									onClick={() => {
										// setError('dates', false) // Сброс ошибки
										clearErrors('dates')
										errors.dates
											? removeDateClassChange()
											: handleDateClassChange()
										setOpenCalendar(!openCalendar)
									}}
									onChange={event => {
										setValue('dates', event.target.value) // Обновляем значение в контролируемом компоненте react-hook-form
										if (errors.dates) {
											removeDateClassChange()
										} else {
											handleDateClassChange()
										}
									}}
									value={
										startDate && endDate ? `${startDate} - ${endDate}` : ''
									}
									autoComplete='off'
								/>
								<div className='booking__input-arrow'>
									<svg
										height='20'
										width='20'
										viewBox='0 0 20 20'
										aria-hidden='true'
										focusable='false'
										fill='#afafaf'
										
									>
										<path d='M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z' stroke='#3B3B3B' ></path>
									</svg>
								</div>
								{errors.dates && (
									<img className='error-icon' src={errorImage} alt='error' />
								)}
							</div>
							<Controller
								name='select'
								control={control}
								render={({ field }) => (
									<div className='input__wrapper booking__input-wrapper'>
										<Select
											{...field}
											options={[
												{ value: '1', label: '1' },
												{ value: '2', label: '2' },
												{ value: '3', label: '3' },
												{ value: '4', label: '4' },
												{ value: '5', label: '5' },
												{ value: '6', label: '6' },
												{ value: '7', label: '7' },
												{ value: '8', label: '8' },
												{ value: '9', label: '9' },
												{ value: '10', label: '10' },
											]}
											placeholder='Количество гостей'
											instanceId={useId()}
											className='react-select-container'
											classNamePrefix={'react-select'}
											onMenuClose={() => {
												if (selectValue.value === undefined) {
													selectClass()
												}
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
											<img
												className='error-icon'
												src={errorImage}
												alt='error'
											/>
										)}
									</div>
								)}
							/>

							<div className='input__wrapper booking__input-wrapper'>
								<input
									{...register('firstName')}
									aria-invalid={errors.firstName ? 'true' : 'false'}
									placeholder='Имя*'
									className={`input-form ${addNameClass}`}
									// onFocus={
									// 	errors.firstName
									// 		? removeNameClassChange
									// 		: handleNameClassChange
									// }
									onBlur={() => {
										errors.firstName || firstNameValue.length < 2
											? removeNameClassChange()
											: handleNameClassChange()
									}}
									// onChange={
									// 	errors.firstName
									// 		? removeNameClassChange
									// 		: handleNameClassChange
									// }
								/>
								{errors.firstName && (
									<img className='error-icon' src={errorImage} alt='error' />
								)}
							</div>

							<Controller
								name='phone'
								control={control}
								render={({ field }) => (
									<div className='input__wrapper booking__input-wrapper '>
										<IMaskInput
											mask={showPhoneMask ? '+{7} (000) 000-00-00' : ''}
										
										

												
											definitions={{
												0: /[0-9]/,
											}}
											placeholder={
												isFocused ? '+7 (___) ___-__-__' : 'Телефон*'
											}
											value={field.value}
											onAccept={value => field.onChange(value)}
											inputRef={input => {
												field.ref(input)
												if (errors.phone) {
													input.focus()
												}
											}}
											className={`input-form phone-input ${addPhoneClass}`}
											onFocus={() => {
												setShowPhoneMask(true)
												handleFocus()
												
												
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
											<img
												className='error-icon'
												src={errorImage}
												alt='error'
											/>
										) : (
											<img />
										)}
									</div>
								)}
							/>

							{isValid && (
								<div className='booking__price'>
									Сумма предоплаты: <p>5 000 ₽</p>
								</div>
							)}

							<button className='button'>Забронировать</button>

							<div className='booking__socials'>
								<p className='booking__socials-text'>
									Или свяжитесь с нами прямо сейчас!
								</p>
								<div className='booking__socials-items'>
									{Icon('phone')}
									{Icon('tg')}
									{Icon('wa')}
								</div>
							</div>
							{isSubmitted && <SendOk changeIsSubmited={changeIsSubmited} send={true} />}
							{isErrorSubmitted && <SendOk changeIsSubmited={changeIsSubmited}  send={false} />}
						</form>
					)}
				</div>
			</div>
		</div>
	)
}

export default Booking

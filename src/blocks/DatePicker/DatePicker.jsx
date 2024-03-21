import axios from 'axios'
import { format, parse, differenceInDays, isValid } from 'date-fns'
import ru from 'date-fns/locale/ru'
import dynamic from 'next/dynamic'
import './DatePicker.scss'
import 'react-datepicker/dist/react-datepicker.css'
import { useForm, Controller } from 'react-hook-form'
import { useState, useRef, useEffect } from 'react'
import * as yup from 'yup'
import { IMaskInput } from 'react-imask'
import { yupResolver } from '@hookform/resolvers/yup'
import errorImage from '/icons/error.svg'

const DynamicDatePicker = dynamic(() => import('react-datepicker'), {
	ssr: false,
})

const DatePicker = ({ onSubmitCallback, initialDates }) => {
	const schema = yup.object().shape({
		startDate: yup
			.string()
			.required('Обязательно для ввода')
			.test(
				'is-future-date',
				'Дата въезда не может быть в прошлом',
				function (value) {
					const startDate = parse(value, 'dd-MM-yyyy', new Date())
					return isValid(startDate) && startDate >= new Date()
				}
			),
		endDate: yup.string().required('Обязательно для ввода'),
	})

	const [startDate, setStartDate] = useState(
		initialDates.initialStartDate || null
	)
	const [endDate, setEndDate] = useState(initialDates.initialEndDate || null)
	const [startFormattedDate, setStartFormattedDate] = useState('')
	const [endFormattedDate, setEndFormattedDate] = useState('')

	const onChange = dates => {
		const [start, end] = dates
		setStartDate(start)
		setEndDate(end)
		setValue('startDate', start ? format(start, 'dd-MM-yyyy') : null)
		setValue('endDate', end ? format(end, 'dd-MM-yyyy') : null)
		updateFormattedDates(start, end)
	}

	const onSubmit = data => {
		// const endDateParsed = parse(endDate, 'dd-MM-yyyy', new Date())
		onSubmitCallback({ startDate, endDate })
	}

	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors },
		clearErrors,
	} = useForm({
		defaultValues: {
			startDate: null,
			endDate: null,
		},
		resolver: yupResolver(schema),
	})

	const handleResetDates = () => {
		setStartDate(null)
		setEndDate(null)
		setValue('startDate', null)
		setValue('endDate', null)
		setStartFormattedDate('')
		setEndFormattedDate('')
		clearErrors()
	}

	const getNightLabel = () => {
		const selectedDaysCount =
			startDate && endDate ? differenceInDays(endDate, startDate) : ''

		if (selectedDaysCount === 0) {
			return <div className='date-picker__title'>Ночей нет</div>
		}

		const lastDigit = selectedDaysCount % 10

		if (selectedDaysCount > 10 && selectedDaysCount < 20) {
			return <div className='date-picker__title'>{selectedDaysCount} ночей</div>
		}

		if (lastDigit === 1) {
			return <div className='date-picker__title'>{selectedDaysCount} ночь</div>
		}

		if (lastDigit >= 2 && lastDigit <= 4) {
			return <div className='date-picker__title'>{selectedDaysCount} ночи</div>
		}

		return <div className='date-picker__title'>{selectedDaysCount} ночей</div>
	}

	const updateFormattedDates = (startDate, endDate) => {
		clearErrors()
		if (startDate && endDate) {
			const formattedStartDate = format(startDate, 'dd MMM yyyy г.', {
				locale: ru,
			})
			const formattedEndDate = format(endDate, 'dd MMM yyyy г.', { locale: ru })
			setStartFormattedDate(formattedStartDate)
			setEndFormattedDate(formattedEndDate)
		} else {
			setStartFormattedDate('')
			setEndFormattedDate('')
		}
	}

	return (
		<form className='date-picker__wrapper' onSubmit={handleSubmit(onSubmit)}>
			<div className='date-picker__top'>
				{endDate && startDate ? (
					<div className='date-picker__period'>
						<h3 className='date-picker__title'>{getNightLabel()}</h3>
						<div className='date-picker__dates'>
							{startFormattedDate} - {endFormattedDate}
						</div>
					</div>
				) : (
					<h3 className='date-picker__title'>
						Выберите даты <br /> планируемого отдыха
					</h3>
				)}
				<div className='date-picker__inputs'>
					<Controller
						name='startDate'
						control={control}
						render={({ field }) => (
							<div className='date-picker__input-start'>
								<label>Прибытие</label>
								<IMaskInput
									autoFocus
									mask='00-00-0000'
									value={field.value || ''}
									placeholder='Укажите дату'
									aria-invalid={errors.startDate ? 'true' : 'false'}
									onAccept={value => {
										const date = parse(value, 'dd-MM-yyyy', new Date())
										if (!isNaN(date) && date > new Date()) {
											setStartDate(date)
											setValue('startDate', format(date, 'dd-MM-yyyy'))
											clearErrors('startDate')
											setStartFormattedDate(
												format(startDate, 'dd MMM yyyy г.', {
													locale: ru,
												})
											)
										}
										console.log(errors)
									}}
									style={{ border: 'none' }}
									className='date-picker__input'
								/>
								{errors.startDate && (
									<img
										className='error-icon date-picker__error-start'
										src={errorImage}
										alt='error'
									/>
								)}
							</div>
						)}
					/>

					<Controller
						name='endDate'
						control={control}
						render={({ field }) => (
							<div className='date-picker__input-end'>
								<label>Выезд</label>
								<IMaskInput
									mask='00-00-0000'
									aria-invalid={errors.endDate ? 'true' : 'false'}
									value={field.value || ''}
									placeholder='Укажите дату'
									onAccept={value => {
										const date = parse(value, 'dd-MM-yyyy', new Date())
										if (!isNaN(date) && date > startDate) {
											setEndDate(date)
											setValue('endDate', format(date, 'dd-MM-yyyy'))
											console.log(errors)
											clearErrors('endDate')
											setEndFormattedDate(
												format(date, 'dd MMM yyyy г.', {
													locale: ru,
												})
											)
										}
									}}
									style={{ border: 'none' }}
									className='date-picker__input'
								/>

								{errors.endDate && (
									<img
										className='error-icon date-picker__error-end'
										src={errorImage}
										alt='error'
									/>
								)}
							</div>
						)}
					/>
				</div>
			</div>

			<div className='date-picker__calendar'>
				<Controller
					name='dates'
					control={control}
					render={({ field }) => (
						<DynamicDatePicker
							{...field}
							selected={startDate}
							onChange={onChange}
							startDate={startDate}
							endDate={endDate}
							monthsShown={2}
							inline
							locale={ru}
							minDate={new Date()}
							selectsRange
						/>
					)}
				/>
			</div>
			<div className='date-picker__bottom'>
				<div className='date-picker__clear' onClick={handleResetDates}>
					Сбросить даты
				</div>
				<button type='submit' className='button' onClick={console.log(errors)}>
					Выбрать
				</button>
			</div>
		</form>
	)
}

export default DatePicker

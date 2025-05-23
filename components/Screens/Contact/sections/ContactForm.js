'use client';
import React, { useState } from 'react';
import { HOST } from '@/utils/static';

const ContactForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [number, setNumber] = useState('');
	const [message, setMessage] = useState('');
	const [success, setSuccess] = useState();

	const sendQuery = (e) => {
		e.preventDefault();

		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: name,
				email: email,
				number: number,
				query: message, // sending message as the main query
			}),
		};

		fetch(`${HOST}query/send-mail/query-by-customer`, options)
			.then((response) => response.json())
			.then((response) => {
				if (response?.baseResponse?.status === 1) {
					setSuccess(true);
					window.open(
						`https://wa.me/+919015704448?text=${encodeURIComponent(message)}!`,
						'__blank'
					);
				} else {
					setSuccess(false);
				}
			})
			.catch((err) => {
				console.error(err);
				setSuccess(false);
			});
	};

	return (
		<div className='contact-form_main'>
			<h2 className='mb-3'>Leave a message</h2>
			<form
				className='contact-form'
				onSubmit={sendQuery}
				id='contact-form'>
				<div className='row'>
					<div className='col-sm-6'>
						<input
							type='text'
							className='form-control'
							placeholder='Name'
							name='name'
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className='col-sm-6'>
						<input
							type='email'
							className='form-control'
							placeholder='Email'
							name='email'
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='col-sm-6'>
						<input
							type='tel'
							className='form-control'
							placeholder='Phone'
							name='phone'
							required
							value={number}
							onChange={(e) => setNumber(e.target.value)}
						/>
					</div>

					<div className='col-sm-12'>
						<textarea
							name='message'
							cols='40'
							rows='10'
							className='form-control'
							placeholder='Message'
							required
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
					<div className='col-sm-12'>
						<button
							className='pbmit-btn'
							type='submit'>
							<span className='pbmit-button-text'>Submit</span>
						</button>
					</div>
					{success && (
						<div className='col-12 mt-3 text-success'>
							✅ Message sent successfully!
						</div>
					)}
					{success === false && (
						<div className='col-12 mt-3 text-danger'>
							❌ Failed to send message. Please try again.
						</div>
					)}
				</div>
			</form>
		</div>
	);
};

export default ContactForm;

import React from 'react';

const ContactForm = () => {
	return (
		<div class='contact-form_main'>
			<h2 class='mb-3'>Leave a massage</h2>
			<form
				class='contact-form'
				method='post'
				id='contact-form'>
				<div class='row'>
					<div class='col-sm-6'>
						<input
							type='text'
							class='form-control'
							placeholder='Name'
							name='name'
							required
						/>
					</div>
					<div class='col-sm-6'>
						<input
							type='email'
							class='form-control'
							placeholder='Email'
							name='email'
							required
						/>
					</div>
					<div class='col-sm-6'>
						<input
							type='tel'
							class='form-control'
							placeholder='Phone'
							name='phone'
							required
						/>
					</div>
					<div class='col-sm-6'>
						<input
							type='text'
							class='form-control'
							placeholder='Subject'
							name='subject'
							required
						/>
					</div>
					<div class='col-sm-12'>
						<textarea
							name='message'
							cols='40'
							rows='10'
							class='form-control'
							placeholder='Message'
							required>
							{' '}
						</textarea>
					</div>
					<div class='col-sm-12'>
						<button class='pbmit-btn'>
							<span class='pbmit-button-text'>Submit</span>
						</button>
					</div>
					<div class='col-md-12 col-lg-12 message-status'></div>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;

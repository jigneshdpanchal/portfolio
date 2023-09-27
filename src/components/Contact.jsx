import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ThankYou from './ThankYou';

const Contact = () => {
	const form = useRef();
	const [submitted, setSubmitted] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_mqibtxm', 'template_i4v8l6b', form.current, 'wHmj56lWkBwIlicHD')
			.then((result) => {
				console.log(result.text);
				console.log('Message sent successfully')
				setSubmitted(true);
			}, (error) => {
				console.log(error.text);
			});
	};

	return (
		<>
		<div className='max-w-md w-full shadow-xl mx-auto p-6 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg'>
			<h2 className='text-3xl text-center text-white font-bold mb-6'>Contact Me</h2>
			{submitted ? (<ThankYou />) : (
				<form ref={form} onSubmit={sendEmail}>
					<div className='mb-4'>
						<label className='block text-white text-sm font-semibold mb-2' htmlFor='name'>Name</label>
						<input placeholder='First & Name' name='name' required className='w-full px-3 py-2 border-[1px] rounded-lg bg-white focus:border-purple-500 focus:outline-none' id='name' autoComplete="given-name" type='text' />
					</div>
					<div className='mb-4'>
						<label className='block text-white text-sm font-semibold mb-2' htmlFor='email'>Email</label>
						<input placeholder='name@company.com' name='email' required className='w-full px-3 py-2 border-[1px] rounded-lg bg-white focus:border-purple-500 focus:outline-none' id='email' autoComplete="off" type='text' />
					</div>
					<div className='mb-4'>
						<label className='block text-white text-sm font-semibold mb-2' htmlFor='message'>Message</label>
						<textarea rows={4} placeholder='Type Your Message Here' name='message' required className='w-full px-3 py-2 border-[1px] rounded-lg bg-white focus:border-purple-500 focus:outline-none' autoComplete="off" id='message' type='text' />
					</div>
					<div className='flex justify-center'>
						<button className='bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold px-4 py-2 rounded-lg shadow-lg focus:outline-white' type='submit'>Send Message</button>
					</div>
				</form>
			)}
		</div>
		</>
	)
}

export default Contact
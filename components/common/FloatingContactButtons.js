'use client';

import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const FloatingContactButtons = () => {
	const phoneNumber = '919015704448';
	const whatsappUrl = `https://wa.me/${phoneNumber}`;
	const callUrl = `tel:+${phoneNumber}`;

	return (
		<div className='floating-contact-container'>
			<a
				href={whatsappUrl}
				target='_blank'
				rel='noopener noreferrer'
				className='floating-btn whatsapp-btn'
				aria-label='Chat on WhatsApp'>
				<FaWhatsapp size={24} />
				<span className='pulse'></span>
			</a>
			<a
				href={callUrl}
				className='floating-btn call-btn'
				aria-label='Call Us'>
				<FaPhoneAlt size={20} />
				<span className='pulse'></span>
			</a>

			<style jsx>{`
				.floating-contact-container {
					position: fixed;
					right: 30px;
					bottom: 120px;
					display: flex;
					flex-direction: column;
					gap: 15px;
					z-index: 9999;
				}

				.floating-btn {
					width: 55px;
					height: 55px;
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					color: white;
					text-decoration: none;
					box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
					position: relative;
					transition: all 0.3s ease;
					backdrop-filter: blur(5px);
				}

				.whatsapp-btn {
					background: linear-gradient(45deg, #25d366, #128c7e);
					border: 1px solid rgba(255, 255, 255, 0.2);
				}

				.call-btn {
					background: linear-gradient(45deg, #3147f3, #14193c);
					border: 1px solid rgba(255, 255, 255, 0.2);
				}

				.floating-btn:hover {
					transform: scale(1.1) translateY(-5px);
					box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
				}

				.pulse {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					border-radius: 50%;
					background: inherit;
					z-index: -1;
					animation: pulse-animation 2s infinite;
					opacity: 0.6;
				}

				@keyframes pulse-animation {
					0% {
						transform: scale(1);
						opacity: 0.6;
					}
					100% {
						transform: scale(1.6);
						opacity: 0;
					}
				}

				@media (max-width: 768px) {
					.floating-contact-container {
						right: 20px;
						bottom: 100px;
					}
					.floating-btn {
						width: 50px;
						height: 50px;
					}
				}
			`}</style>
		</div>
	);
};

export default FloatingContactButtons;

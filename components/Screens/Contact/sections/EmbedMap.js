import React from 'react';

const MapEmbed = () => {
	return (
		<div className='mapouter'>
			<div className='gmap_canvas'>
				<iframe
					title='Shree Security Camera - CCTV Installation'
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.314732505928!2d77.2760456!3d28.6279535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38b952f853d%3A0x56d328a91b7870ba!2sShree%20Security%20Camera%20-%20Cctv%20Installation!5e0!3m2!1sen!2sin!4v1716205263039!5m2!1sen!2sin'
					width='100%'
					height='450'
					style={{ border: 0 }}
					allowFullScreen=''
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'></iframe>
			</div>
		</div>
	);
};

export default MapEmbed;

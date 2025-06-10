import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata = {
	title: 'Shree Security Camera',
	description: ' Shree Security Camera',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<link
				href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
				rel='stylesheet'
			/>
			<script
				type='text/javascript'
				src='//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'
				async></script>
			<script
				async
				src='https://www.googletagmanager.com/gtag/js?id=AW-16712967012'></script>
			<script>
				{`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
                    
            gtag('config', 'AW-16712967012');`}
			</script>

			<script>
				{`function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-16712967012/57KYCMvIztcZEOTGrqE-',
      'event_callback': callback
  });
  return false;
`}
			</script>

			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				{children}
			</body>
		</html>
	);
}

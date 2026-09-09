import React from 'react';

const TitleBar = ({ link, page }) => {
	return (
		<div className='pbmit-title-bar-wrapper'>
			<div className='container'>
				<div className='pbmit-title-bar-content'>
					<div className='pbmit-title-bar-content-inner container'>
						<div className='pbmit-tbar'>
							<div className='pbmit-tbar-inner'>
								<h1 className='pbmit-tbar-title'>{page}</h1>
							</div>
						</div>
						<div className='pbmit-breadcrumb'>
							<div className='pbmit-breadcrumb-inner'>
								<span>
									<a title='' href='#' className='home'>
										<span>{link}</span>
									</a>
								</span>
								{' / '}
								<span>
									<span className='post-root post post-post current-item'>
										{page}
									</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TitleBar;

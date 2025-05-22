import React from 'react';

const TitleBar = ({ link, page }) => {
	return (
		<div class='pbmit-title-bar-wrapper'>
			<div class='container'>
				<div class='pbmit-title-bar-content'>
					<div class='pbmit-title-bar-content-inner container'>
						<div class='pbmit-tbar'>
							<div class='pbmit-tbar-inner'>
								<h1 class='pbmit-tbar-title'>{page}</h1>
							</div>
						</div>
						<div class='pbmit-breadcrumb'>
							<div class='pbmit-breadcrumb-inner'>
								<span>
									<a
										title=''
										href='#'
										class='home'>
										<span>{link}</span>
									</a>
								</span>{' '}
								/{' '}
								<span>
									<span class='post-root post post-post current-item'>
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

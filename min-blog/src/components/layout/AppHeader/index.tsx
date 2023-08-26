import React from 'react';
import Link from 'next/link';
import * as a from './style';

const AppHeader = () => {
	return (
		<a.HeaderContainer>
			<a.AppHeaderBox>
				<Link href="/">
					<a>
						<img src="avatar.svg" alt="blog_icon" />
					</a>
				</Link>
				<a.HeaderButtonBox>
					<a.HeaderButton>
						<img src="" alt="posting_icon" />
					</a.HeaderButton>
					<Link href="">
						<a.HeaderButton>
							<img src="search.svg" alt="search_icon" />
						</a.HeaderButton>
					</Link>
					<a.HeaderButton target="_blank" href="https://github.com/wlals1126">
						<img src="/github.svg" alt="github_link_button_img" />
					</a.HeaderButton>
					<a.HeaderButton href="" target="_blank">
						<img src="" alt="fortpolio_link_button" />
					</a.HeaderButton>
				</a.HeaderButtonBox>
			</a.AppHeaderBox>
		</a.HeaderContainer>
	);
};

export default AppHeader;

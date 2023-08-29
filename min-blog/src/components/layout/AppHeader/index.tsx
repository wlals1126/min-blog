import React from 'react';
import Link from 'next/link';
import * as a from './style';

const AppHeader = () => {
	return (
		<a.HeaderContainer>
			<a.AppHeaderBox>
				<Link href="/" legacyBehavior>
					<a>
						<img src="avatar.svg" alt="blog_icon" />
					</a>
				</Link>
				<a.HeaderButtonBox>
					<a.HeaderButton>
						<Link href="https://m1n-log.vercel.app/" legacyBehavior>
							<img src="social.png" alt="posting_icon" />
						</Link>
					</a.HeaderButton>
					<Link href="" legacyBehavior>
						<a.HeaderButton>
							<img src="search.svg" alt="search_icon" />
						</a.HeaderButton>
					</Link>
					<a.HeaderButton target="_blank" href="https://github.com/wlals1126">
						<img src="/github.svg" alt="github_link_button_img" />
					</a.HeaderButton>
					<a.HeaderButton href="https://www.notion.so/52e2cb003c0d4ca7959a487b7a18db15?pvs=4" target="_blank">
						<img src="Notion-logo.svg" alt="fortpolio_link_button" />
					</a.HeaderButton>
				</a.HeaderButtonBox>
			</a.AppHeaderBox>
		</a.HeaderContainer>
	);
};

export default AppHeader;

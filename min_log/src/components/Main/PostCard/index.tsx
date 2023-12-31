import React from 'react';
import { UCategory } from '@/typings/data';
import Categories from '@/containers/share/Categories';
import Link from 'next/link';
import dayjs from 'dayjs';
import styled from 'styled-components';

const PostCard = styled.div`
	width: 290px;
	border-radius: 0.5rem;
	box-shadow: 0 0.06875rem 0.1875rem rgba(90, 97, 105, 0.1), 0 0.0375rem 0.40625rem rgba(90, 97, 105, 0.1);
	margin: 20px;
	overflow: hidden;
	transition: 0.3s;
	background: #fff;

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 0.46875rem 1.1875rem rgba(90, 97, 105, 0.1), 0 0.9375rem 0.90625rem rgba(90, 97, 105, 0.1),
			0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12), 0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);

		img {
			transform: scale(1.05);
		}
	}

	@media screen and (max-width: 1000px) {
		width: calc(50% - 40px);
	}

	@media screen and (max-width: 700px) {
		width: calc(100% - 40px);
	}
`;

const Thumbnail = styled.a`
	& > div {
		width: 100%;
		position: relative;
		overflow: hidden;

		& > div {
			padding-top: 70%;
		}
		& > img {
			position: absolute;
			top: 0px;
			left: 0px;
			width: 100%;
			height: 100%;
			display: block;
			object-fit: cover;
			transition: 0.3s;
		}
	}
`;

interface ContentsProps {
	thumbnail?: boolean;
}

const Contents = styled.div<ContentsProps>`
	width: 100%;
	padding: 1rem;

	& > a {
		& > h4,
		& > p {
			margin-bottom: 10px;
		}

		& > h4 {
			${(props) => !props.thumbnail && 'margin-top : 1rem;'}
			font-size: 1.125rem;
			line-height: 1.5;
			word-break: break-word;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}

		& > p {
			color: #495057;
			line-height: 1.8;
			height: ${(props) => (props.thumbnail ? '4.5rem' : '16rem')};
			display: -webkit-box;
			-webkit-line-clamp: ${(props) => (props.thumbnail ? '3' : '12')};
			-webkit-box-orient: vertical;
			text-overflow: ellipsis;
			overflow: hidden;

			&.date {
				height: 1rem;
				font-size: 12px;
			}
		}
	}
`;


interface PostProps {
	post: {
		id: number;
		title: string;
		thumbnail: string | null;
		description: string;
		createdAt?: string;
		categoryPosts: UCategory[];
	};
}

const PostCardComponent = ({ post }: PostProps) => {
	return (
		<PostCard>
			{post.thumbnail && (
				<Link href={`/post/${post.id}`}>
					<Thumbnail>
						<div>
							<div />
							<img src={post.thumbnail} alt="thumbnail photo" />
						</div>
					</Thumbnail>
				</Link>
			)}
			<Contents thumbnail={post.thumbnail ? true : false}>
				<Link href={`/post/${post.id}`}>
					<a>
						<h4>{post.title}</h4>
						<p className="date">{dayjs(post.createdAt).format('YYYY년 MM월 DD일')}</p>
						<p>{post.description}</p>
					</a>
				</Link>
				<Categories categories={post.categoryPosts} style={{ height: '28px' }} aflg={false} />
			</Contents>
		</PostCard>
	);
};

export default PostCardComponent;

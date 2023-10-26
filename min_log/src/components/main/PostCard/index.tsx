import React from 'react';
import { UCategory } from '@/typings/data';
import * as p from "./style";
import Categories from '@/containers/share/Categories';
import Link from 'next/link';
import dayjs from 'dayjs';

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
		<p.PostCard>
			{post.thumbnail && (
				<Link href={`/post/${post.id}`}>
					<p.Thumbnail>
						<div>
							<div />
							<img src={post.thumbnail} alt="thumbnail photo" />
						</div>
					</p.Thumbnail>
				</Link>
			)}
			<p.Contents thumbnail={post.thumbnail ? true : false}>
				<Link href={`/post/${post.id}`}>
					<a>
						<h4>{post.title}</h4>
						<p className="date">{dayjs(post.createdAt).format('YYYY년 MM월 DD일')}</p>
						<p>{post.description}</p>
					</a>
				</Link>
				<Categories categories={post.categoryPosts} style={{ height: '28px' }} aflg={false} />
			</p.Contents>
		</p.PostCard>
	);
};

export default PostCardComponent;

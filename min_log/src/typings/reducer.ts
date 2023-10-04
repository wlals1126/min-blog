import { UUser, UPost, UCategory, ULinkedPosts } from "./data";

export interface UUserState {
  user: UUser | null;
  loginErrorReason: string;
}

export interface UPostState {
	post: UPost | null;
	linkedPosts: ULinkedPosts[];
	writeSuccess: number;
	isEditedPost: boolean;
	isRemovedPost: boolean;
	loadErrorReason: string | null;
	writeErrorReason: string | null;
	removeErrorReason: string | null;
}

export interface UPostsState {
	Category: UCategory[] & { postCount: number }[];
	posts: UPost[];
	isLoaddingPosts: boolean;
	loadPostsErrorReason: string | null;
	EndOfPosts: boolean;
	numberOfPosts: number;
	findPostCount: number;
}

export interface RootReducerProps {
	post: UPostState;
	posts: UPostsState;
	user: UUserState;
}
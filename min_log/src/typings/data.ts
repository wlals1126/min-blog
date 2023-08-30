export interface UCategory {
	id: number;
	name: string;
	num?: number;
}

export interface actionProps {
	type?: any;
	data?: any;
	payload?: any;
}

export interface reducerProps {
	state: any;
	action: any | actionProps;
}

export interface UPost {
	id: number;
	title: string;
	thumbnail: string;
	description: string;
	createAt: string;
	body: string;
	Category: UCategory[];
}

export interface UUser {
	id: number;
	username: string;
}

export interface UUserState {
	user: UUser | null;
	isLoggedIn: boolean;
	isLoggingIn: boolean;
	isLoggingOut: boolean;
	loginErrorReason: string;
}

export interface UPostState {
	post: UPost | null;
	isLoadingPost: boolean;
	isWritingPost: boolean;
	isRemovingPost: boolean;
	writeErrorReason: string;
	removeErrorReason: string;
}

export interface UPostsState {
	posts: UPost[] | [];
	isLoaddingPosts: boolean;
	isLoadedPosts: boolean;
	loadPostsErrorReason: string;
}

export interface RootReducerProps {
	post: UPostState;
	posts: UPostsState;
	user: UUserState;
}
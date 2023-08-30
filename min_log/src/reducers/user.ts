import { UUserState } from '@/typings/data';

const initialState = {
	user: null,
	isLoggedIn: false,
	isLoggingIn: false,
	isLoggingOut: false,
	loginErrorReason: '',
};

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

const userReducer = (state: UUserState = initialState, action: any) => {
	switch (action.type) {
		default: {
			return { ...state };
		}
		case LOGIN_REQUEST: {
			return {
				...state,
				isLoggingIn: true,
			};
		}
		case LOGIN_SUCCESS: {
			return {
				...state,
				isLoggingIn: false,
				isLoggedIn: true,
			};
		}
		case LOGIN_FAILURE: {
			return {
				...state,
				isLoggingIn: false,
				loginErrorReason: '로그인 실패',
			};
		}

		case LOGOUT_REQUEST: {
			return {
				...state,
				isLoggingOut: true,
			};
		}
		case LOGOUT_SUCCESS: {
			return {
				...state,
				isLoggingOut: false,
				user: null,
			};
		}
		case LOGOUT_FAILURE: {
			return {
				...state,
				isLoggingOut: false,
				loginErrorReason: '로그아웃 실패',
			};
		}
	}
};

export default userReducer;
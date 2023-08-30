import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { reducerProps } from '@/typings/data';
import posts from './posts';
import post from './post';
import user from './user';

const rootReducer = (state: any, action: any) => {
	switch (action.type) {
		case HYDRATE:
			return action.payload;
		default: {
			const combinedReducer = combineReducers({
				posts,
				post,
				user,
			});
			return combinedReducer(state, action);
		}
	}
};

export default rootReducer;
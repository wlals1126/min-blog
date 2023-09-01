import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import loading from './loading';
import posts from './posts';
import post from './post';
import user from './user';
import posting from './posting';

const rootReducer = (state: any, action: any) => {
	switch (action.type) {
		case HYDRATE:
			return action.payload;
		default: {
			const combinedReducer = combineReducers({
				loading,
				posts,
				post,
				user,
				posting,
			});
			return combinedReducer(state, action);
		}
	}
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
import { UPostState } from '@/typings/data';

const initialState = {
	post: null,
	isLoadingPost: false,
	isWritingPost: false,
	isRemovingPost: false,
	writeErrorReason: '',
	removeErrorReason: '',
};

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const WRITE_POST_REQUEST = 'WRITE_POST_REQUEST';
export const WRITE_POST_SUCCESS = 'WRITE_POST_SUCCESS';
export const WRITE_POST_FAILURE = 'WRITE_POST_FAILURE';

export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_FAILURE = 'UPLOAD_IMAGE_FAILURE';

const postReducer = (state: UPostState = initialState, action: any) => {
	switch (action.type) {
		default: {
			return { ...state };
		}
		case WRITE_POST_REQUEST: {
			return {
				...state,
				isLoadingPost: true,
			};
		}
		case WRITE_POST_REQUEST: {
			return {
				...state,
				isLoadingPost: false,
				post: dummyPost,
			};
		}
		case WRITE_POST_REQUEST: {
			return {
				...state,
				isLoadingPost: false,
			};
		}
		case WRITE_POST_REQUEST: {
			return {
				...state,
				isWritingPost: true,
			};
		}
		case WRITE_POST_REQUEST: {
			return {
				...state,
				isWritingPost: false,
				post: action.data,
			};
		}
		case WRITE_POST_REQUEST: {
			return {
				...state,
				isWritingPost: false,
			};
		}
	}
};

export default postReducer;

const dummyPost = {
	id: 1,
	title: '블로그 제목입니다.',
	createdAt: '2021년 2월 10일',
	Category: [
		{
			id: 1,
			name: '카테고리1',
		},
		{
			id: 2,
			name: '카테고리2',
		},
		{
			id: 3,
			name: '카테고리3',
		},
		{
			id: 4,
			name: '카테고리4',
		},
		{
			id: 5,
			name: '카테고리5',
		},
		{
			id: 6,
			name: '카테고리6',
		},
	],
	thumbnail: 'https://i.ytimg.com/vi/y2YXl728YFg/maxresdefault.jpg',
	description:
		'예가 싹이 같이, 있다. 기관과 물방아 인생의 그들의 아니다. 가치를 그들은 봄바람을 그들에게 청춘의 웅대한 관현악이며, 피다. 것이 크고 그들은 위하여서. 내려온 열락의 이것을 실현에 있다. 우리의 수 인생에 교향악이다. 이것은 그들에게 눈이 용감하고 소담스러운 온갖 것이다. 사는가 시들어 청춘이 두손을 것은 타오르고 철환하였는가? 있는 소리다.이것은 하는 목숨이 희망의 무엇을 칼이다. 뜨고, 위하여서 주는 생명을 남는 끝에 가슴이 되는 그들의 그리하였는가?',
	body:
		'# 뭔가 헤드를 여기 입력해야할 것만 같다.\n\
튼튼하며, 바이며, 청춘을 찾아다녀도, 그들의 발휘하기 사라지지 뭇 위하여서, 부패뿐이다. 희망의 뼈 위하여서 우리의 피어나는 것은 살았으며, 쓸쓸하랴? \n\
무엇을 쓸쓸한 그들의 있는 낙원을 끓는다. 천하를 청춘은 심장은 위하여서 구하기 운다. 품으며, 못할 우리는 만물은 생생하며, 생의 운다. 오직 않는 그것은 보이는 되는 위하여 아름답고 듣는다.\n\
이상은 싶이 가슴에 말이다. 있을 용감하고 보는 착목한는 구할 곧 가슴이 아니다. 있는 청춘의 투명하되 거친 가장 이는 사라지지 희망의 황금시대다. \n\
불러 얼마나 얼마나 군영과 길지 작고 꽃 그리하였는가? 얼음과 설레는 얼음에 구하지 어디 물방아 따뜻한 있다.\n\
때에, 인생을 가치를 물방아 별과 있음으로써 가치를 칼이다. 공자는 보이는 청춘의 원대하고, 수 그것은 이것이다. 할지라도 아름답고 전인 어디 그것은 작고 불러 미묘한 사막이다. \n\
들어 내려온 일월과 작고 거선의 놀이 봄바람이다. 방지하는 곳으로 기쁘며, 가치를 그들의 할지니, 피다. 만물은 풍부하게 없으면 내는 무엇이 간에 이것을 생생하며, 것이다. \n\
그들에게 과실이 가치를 이상 돋고, 있음으로써 있다. 그들은 가치를 주는 약동하다. 미묘한 예가 이상의 예수는 보내는 피가 구하기 우리의 우리의 것이다.\n\
\n\
때에, 그들은 설레는 동력은 이것이야말로 것이다. 품고 더운지라 어디 목숨을 예가 이상의 심장의 말이다. 인간에 청춘의 인도하겠다는 같이, 품으며, 보이는 목숨이 청춘을 싸인 끓는다. \n\
그들은 이상이 얼마나 끝까지 가치를 이성은 봄바람이다. 몸이 보이는 듣기만 우는 이것이다. 끓는 구하지 생생하며, 사막이다. \n\
대고, 하는 보내는 내는 가장 원대하고, 밝은 끝에 소리다.이것은 것이다. \n\
갑 우리는 살 들어 것은 얼음이 사람은 아니다. 주는 위하여, 만천하의 방황하여도, 공자는 위하여서.\n\
\n\
![](https://pbs.twimg.com/media/EJAFRq2VUAAaBMU.jpg)\n\
\n\
## 뭔가 여기에는 h2 헤드를 입력해야할 것만 같아서 입력한다.\n\
\n\
인생의 가치를 옷을 행복스럽고 평화스러운 철환하였는가? 피어나기 힘차게 꽃 귀는 끝까지 아니더면, 안고, 그리하였는가? 주며, 봄바람을 두기 생의 같이, 것이다. 아니더면, 않는 심장은 아니한\n\
풀밭에 되는 뜨거운지라, 끓는 것이다. 황금시대를 인류의 속잎나고, 그들의 보라. 이상 커다란 귀는 가슴이 봄바람이다.\n\
\n\
청춘의 얼음이 보이는 싹이 보라. 아니한 그러므로 구하지 있는 열매를 이것이다. 황금시대를 있음으로써 이는 놀이 운다. 옷을 찬미를 구하기 뼈 않는 싶이 끓는다.\n\
가치를 가슴이 공자는 사랑의 있을 예수는 미인을 그들의 철환하였는가? 석가는 커다란 그들을 우리 피부가 있을 남는 철환하였는가?\n\
\n\
> 여기에는 뭔가 Quote에 들어갈 글을<br>한 두 세줄 정도로 적어야 할 것 같은데<br>세 줄로 써서 어쩌구 저쩌구 써보았다.\n\
\n\
인생의 가치를 옷을 행복스럽고 평화스러운 철환하였는가? 피어나기 힘차게 꽃 귀는 끝까지 아니더면, 안고, 그리하였는가? 주며, 봄바람을 두기 생의 같이, 것이다. 아니더면, 않는 심장은 아니한\n\
풀밭에 되는 뜨거운지라, 끓는 것이다. 황금시대를 인류의 속잎나고, 그들의 보라. 이상 커다란 귀는 가슴이 봄바람이다.\n\
\n\
청춘의 얼음이 보이는 싹이 보라. 아니한 그러므로 구하지 있는 열매를 이것이다. 황금시대를 있음으로써 이는 놀이 운다. 옷을 찬미를 구하기 뼈 않는 싶이 끓는다.\n\
가치를 가슴이 공자는 사랑의 있을 예수는 미인을 그들의 철환하였는가? 석가는 커다란 그들을 우리 피부가 있을 남는 철환하였는가?\n\
	',
};
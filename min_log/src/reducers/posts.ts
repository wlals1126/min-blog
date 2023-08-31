import { UPostsState } from "@/typings/data";

const dummyPost = [
  {
    id: 1,
    thumbnail: "",
    title: "포스트 제목",
    description:
      "인생은 마치 계절과 같아요. 봄에는 새로운 시작과 기대로 가득 차 있을 때도 있지만, 때로는 어느새 더운 여름이 되어 스트레스와 불안이 느껴질 때도 있죠.",
    createAt: "2023년 8월 30일",
    Category: [
      {
        id: 1,
        name: "카테고리1",
        num: 1,
      },
      {
        id: 2,
        name: "카테고리2",
        num: 1,
      },
    ],
  },
  {
    id: 2,
    thumbnail:
      "https://media.vlpt.us/images/minsgy/post/8e1e5456-4a4b-4d42-b4bd-29040fc879bc/about_img.png",
    title: "포스트 제목",
    description:
      "인생은 마치 계절과 같아요. 봄에는 새로운 시작과 기대로 가득 차 있을 때도 있지만, 때로는 어느새 더운 여름이 되어 스트레스와 불안이 느껴질 때도 있죠.",

    createAt: "2023년 8월 30일",
    Category: [
      {
        id: 1,
        name: "카테고리1",
        num: 1,
      },
      {
        id: 2,
        name: "카테고리2",
        num: 1,
      },
    ],
  },
  {
    id: 3,
    thumbnail:
      "https://media.vlpt.us/images/minsgy/post/8e1e5456-4a4b-4d42-b4bd-29040fc879bc/about_img.png",
    title: "포스트 제목",
    description:
      "인생은 마치 계절과 같아요. 봄에는 새로운 시작과 기대로 가득 차 있을 때도 있지만, 때로는 어느새 더운 여름이 되어 스트레스와 불안이 느껴질 때도 있죠.",

    createAt: "2023년 8월 30일",
    Category: [
      {
        id: 1,
        name: "카테고리1",
        num: 1,
      },
      {
        id: 2,
        name: "카테고리2",
        num: 1,
      },
    ],
  },
  {
    id: 4,
    thumbnail:
      "https://media.vlpt.us/images/minsgy/post/8e1e5456-4a4b-4d42-b4bd-29040fc879bc/about_img.png",
    title: "포스트 제목",
    description:
      "인생은 마치 계절과 같아요. 봄에는 새로운 시작과 기대로 가득 차 있을 때도 있지만, 때로는 어느새 더운 여름이 되어 스트레스와 불안이 느껴질 때도 있죠.",

    createAt: "2023년 8월 30일",
    Category: [
      {
        id: 1,
        name: "카테고리1",
        num: 1,
      },
      {
        id: 2,
        name: "카테고리2",
        num: 1,
      },
    ],
  },
];

const initialState = {
	posts: [],
	isLoaddingPosts: false,
	isLoadedPosts: false,
	loadPostsErrorReason: '',
};

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

const postsReducer = (state: UPostsState = initialState, action: any) => {
	switch (action.type) {
		default: {
			return { ...state };
		}
		case LOAD_POSTS_REQUEST: {
			return {
				...state,
				isLoaddingPosts: true,
			};
		}
		case LOAD_POSTS_SUCCESS: {
			return {
				...state,
				isLoaddingPosts: false,
				posts: [...dummyPost],
			};
		}
		case LOAD_POSTS_FAILURE: {
			return {
				...state,
				isLoaddingPosts: false,
				loadPostsErrorReason: '불러오기 실패',
			};
		}
	}
};

export default postsReducer;
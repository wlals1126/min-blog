import { UPostState } from "@/typings/data";

const initialState = {
  post: null,
  isLoadingPost: false,
  isWritingPost: false,
  isRemovingPost: false,
  writeErrorReason: "",
  removeErrorReason: "",
};

export const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
export const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
export const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";

export const WRITE_POST_REQUEST = "WRITE_POST_REQUEST";
export const WRITE_POST_SUCCESS = "WRITE_POST_SUCCESS";
export const WRITE_POST_FAILURE = "WRITE_POST_FAILURE";

export const UPLOAD_IMAGE_REQUEST = "UPLOAD_IMAGE_REQUEST";
export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
export const UPLOAD_IMAGE_FAILURE = "UPLOAD_IMAGE_FAILURE";

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
  title: "블로그 제목입니다.",
  createdAt: "2021년 2월 10일",
  Category: [
    {
      id: 1,
      name: "카테고리1",
    },
    {
      id: 2,
      name: "카테고리2",
    },
    {
      id: 3,
      name: "카테고리3",
    },
    {
      id: 4,
      name: "카테고리4",
    },
    {
      id: 5,
      name: "카테고리5",
    },
    {
      id: 6,
      name: "카테고리6",
    },
  ],
  thumbnail: "https://i.ytimg.com/vi/y2YXl728YFg/maxresdefault.jpg",
  description: "呪術廻戦  渋谷事変",
  body: "# 뭔가 헤드를 여기 입력해야할 것만 같다.\n\
        인생은 마치 계절과 같아요. 봄에는 새로운 시작과 기대로 가득 차 있을 때도 있지만, 때로는 어느새 더운 여름이 되어 스트레스와 불안이 느껴질 때도 있죠. 가을에는 변화와 이별의 감정이 느껴질 수 있고, 겨울에는 추운 바람에 힘들어할 때도 있어요. 하지만 그런 변화와 불편함도 결국은 지나가고, 다시 봄이 오듯이 행복과 평화가 찾아오는 법이죠. 우리의 감정과 상태도 이렇게 변화하며 흐르는 것이고, 그 모든 변화를 인생의 일부로 받아들이면 조금 더 평화로운 마음을 갖게 될 것입니다. ",
};

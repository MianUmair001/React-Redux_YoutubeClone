import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
  SELECTED_VIDEO_FAIL,
  RELATED_VIDEO_REQUEST,
  RELATED_VIDEO_SUCCESS,
  RELATED_VIDEO_FAIL,
  SEARCH_VIDEO_REQUEST,
  SEARCH_VIDEO_SUCCESS,
  SEARCH_VIDEO_FAIL,
  SUBSCRIPTION_CHANNEL_REQUEST,
  SUBSCRIPTION_CHANNEL_SUCCESS,
  SUBSCRIPTION_CHANNEL_FAIL,
  CHANNEL_VIDEOS_REQUEST,
  CHANNEL_VIDEOS_SUCCESS,
  CHANNEL_VIDEOS_FAIL,
} from "../actionTypes";

export const homeVideosReducer = (
  prevState = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: "All",
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case HOME_VIDEOS_SUCCESS:
      return {
        ...prevState,
        videos:
          prevState.activeCategory === payload.category
            ? [...prevState.videos, ...payload.videos]
            : payload.videos,
        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
      };
    case HOME_VIDEOS_FAIL:
      return {
        ...prevState,
        loading: false,
        error: payload,
      };
    case HOME_VIDEOS_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    default:
      return prevState;
  }
};

export const selectedVideoReducer = (
  prevState = { loading: true, video: null },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case SELECTED_VIDEO_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case SELECTED_VIDEO_SUCCESS:
      return {
        ...prevState,
        loading: false,
        video: payload,
      };
    case SELECTED_VIDEO_FAIL:
      return {
        ...prevState,
        loading: false,
        video: null,
        error: payload,
      };

    default:
      return prevState;
  }
};

export const relatedVideoReducer = (
  prevState = { loading: true, videoS: [] },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case RELATED_VIDEO_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case RELATED_VIDEO_SUCCESS:
      return {
        ...prevState,
        loading: false,
        videos: payload,
      };
    case RELATED_VIDEO_FAIL:
      return {
        ...prevState,
        loading: false,
        error: payload,
      };

    default:
      return prevState;
  }
};

export const searchedVideosReducer = (
  prevState = { loading: true, videos: [] },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_VIDEO_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case SEARCH_VIDEO_SUCCESS:
      return {
        ...prevState,
        loading: false,
        videos: payload,
      };
    case SEARCH_VIDEO_FAIL:
      return {
        ...prevState,
        loading: false,
        error: payload,
      };

    default:
      return prevState;
  }
};

export const subscriptionsChannelReducer = (
  prevState = { loading: true, videos: [] },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case SUBSCRIPTION_CHANNEL_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case SUBSCRIPTION_CHANNEL_SUCCESS:
      return {
        ...prevState,
        loading: false,
        videos: payload,
      };
    case SUBSCRIPTION_CHANNEL_FAIL:
      return {
        ...prevState,
        loading: false,
        error: payload,
      };

    default:
      return prevState;
  }
};







export const channelVideosReducer = (
  prevState = { loading: true, videos: [] },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case CHANNEL_VIDEOS_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case CHANNEL_VIDEOS_SUCCESS:
      return {
        ...prevState,
        loading: false,
        videos: payload,
      };
    case CHANNEL_VIDEOS_FAIL :
      return {
        ...prevState,
        loading: false,
        error: payload,
      };

    default:
      return prevState;
  }
};


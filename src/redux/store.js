import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from "./reducers/auth.reducer";
import {
  channelVideosReducer,
  homeVideosReducer,
  relatedVideoReducer,
  searchedVideosReducer,
  subscriptionsChannelReducer,
} from "./reducers/videos.reducer";
import { selectedVideoReducer } from "./reducers/videos.reducer";

import { channelDetailsReducer } from "./reducers/channel.reducer";
import { commentListReducer } from "./reducers/comments.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailsReducer,
  commentsList: commentListReducer,
  relatedVideos: relatedVideoReducer,
  searchedVideos: searchedVideosReducer,
  subscriptionChannel: subscriptionsChannelReducer,
  channelVideos: channelVideosReducer,
});
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;

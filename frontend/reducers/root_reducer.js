import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import PhotosReducer from './photos_reducer';
import UsersReducer from './users_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotosReducer,
  profileDetail: UsersReducer
});

export default rootReducer;

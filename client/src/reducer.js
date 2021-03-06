import { combineReducers } from 'redux';
import userReducer from './features/userSlice';
import listingReducer from './features/listingSlice';
import bandsReducer from './features/bandsSlice';
import reviewsReducer from './features/reviewSlice';
import gigApplicationsReducer from './features/gigApplicationsSlice';

const rootReducer = combineReducers({
    user: userReducer,
    listings: listingReducer,
    bands: bandsReducer,
    reviews: reviewsReducer,
    gigApplications: gigApplicationsReducer
})

export default rootReducer
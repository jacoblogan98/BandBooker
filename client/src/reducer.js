import { combineReducers } from 'redux';
import userReducer from './features/userSlice';
import listingReducer from './features/listingSlice';
import bandsReducer from './features/bandsSlice';

const rootReducer = combineReducers({
    user: userReducer,
    listings: listingReducer,
    bands: bandsReducer
})

export default rootReducer
import { combineReducers } from 'redux';
import userReducer from './features/userSlice';
import listingReducer from './features/listingSlice';

const rootReducer = combineReducers({
    user: userReducer,
    listings: listingReducer
})

export default rootReducer
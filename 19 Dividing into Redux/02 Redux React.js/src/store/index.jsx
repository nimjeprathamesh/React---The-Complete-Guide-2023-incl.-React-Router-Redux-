import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth.jsx';
import counterReducer from './counter.jsx';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    }
});

export default store;
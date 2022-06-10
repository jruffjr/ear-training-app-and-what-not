import { configureStore } from '@reduxjs/toolkit';
import startmenuReducer from './Start_Menu-slice';
import musicdataReducer from './Music_Data-slice'







const store = configureStore({
    reducer: { startmenu: startmenuReducer, musicdata: musicdataReducer },
});



export default store;
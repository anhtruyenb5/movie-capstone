import { configureStore } from '@reduxjs/toolkit'
import phimSlice from "./slice/phimSlice"
import loadingSlice from "./slice/loadingSlice"
import editPhimSlice from './slice/editPhimSlice'

export const store = configureStore({
    reducer: {
        // hoTen: () => {
        //     return "CyberSoft"
        // }
        phimSlice,
        loadingSlice,
        editPhimSlice
    }
})
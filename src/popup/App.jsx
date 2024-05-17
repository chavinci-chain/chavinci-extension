import React from "react";
import store from "../store";
import { Provider } from "react-redux";
import { HashRouter, Route, Routes } from 'react-router-dom';
import MainLayout from "../layouts/main-layout";
import { Home } from "../pages";
import ErrorPage from "../pages/error-page";
export default function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </HashRouter>
        </Provider>
    )
}
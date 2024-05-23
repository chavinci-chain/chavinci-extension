import React from "react";
import store from "../store";
import { Provider } from "react-redux";
import { HashRouter, Route, Routes } from 'react-router-dom';
import MainLayout from "../layouts/main-layout";
import { ErrorPage, Home, Settings } from "../pages";
export default function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
                        <Route index element={<Home />} />
                        <Route path="settings" index element={<Settings />} />
                    </Route>
                </Routes>
            </HashRouter>
        </Provider>
    )
}
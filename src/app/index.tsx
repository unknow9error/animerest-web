import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimePage, LoginPage, MainPage } from 'src/pages';
import { ROUTES } from 'src/utils/constants/routes.constants';
import './index.css';

export const App: FC = () => {
    return (
        <Routes>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.MAIN} element={<MainPage />} />
            <Route path={ROUTES.ANIME} element={<AnimePage />} />
        </Routes>
    )
}
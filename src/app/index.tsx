import { Col, Row } from 'antd';
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AnimePage, LoginPage, MainPage } from 'src/pages';
import { Chat } from 'src/shared/Chat/Chat';
import { Header } from 'src/shared/Layout/Header/Header';
import { ROUTES } from 'src/utils/constants/routes.constants';
import './index.css';
import styles from 'src/hoc/Three/withBackground.module.scss';

export const App: FC = () => {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* <Chat /> */}
            <Row
                justify="center"
                className={styles.backgroundWrapper}
            >
                <Col
                    span={14}
                >
                    <Header />
                    <Routes>
                        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
                        <Route path={ROUTES.MAIN} element={<MainPage />} />
                        <Route path={ROUTES.ANIME} element={<AnimePage />} />
                    </Routes>
                </Col>
            </Row>
        </>
    )
}
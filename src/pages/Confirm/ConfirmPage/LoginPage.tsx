import { Col, Row } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { withBackground } from "src/hoc/Three/withBackground";
import { LoginForm } from "../ConfirmForm/LoginForm";
import styles from './LoginPage.module.scss';

const LoginPage: FC = () => {
    const navigate = useNavigate()

    const handleSuccess = () => {
        navigate("/")
    }

    return (
        <Row
            justify="center"
            align="middle"
            className={styles.loginPageRow}
        >
            <Col
                span={7}
                className={styles.loginPageCol}
            >
                <h1>AnimeRest</h1>
                <LoginForm onSuccess={handleSuccess} />
            </Col >
        </Row >
    )
}

export default withBackground(LoginPage);
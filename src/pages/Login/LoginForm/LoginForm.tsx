import { Button, Form, Input } from "antd";
import jwtDecode from "jwt-decode";
import { FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useScript } from "src/hooks/Scripts/useScript.hook";
import { useLoginMutation } from "src/services/Authentication/Authentication.service";
import { setCookie } from "src/services/Cookie/Cookie.service";
import { CONFIG } from "src/utils/constants/config.constants";
import styles from './LoginForm.module.scss';

interface LoginFormInterface {
    onSuccess?: () => void;
}

export const LoginForm: FC<LoginFormInterface> = ({ onSuccess }) => {
    const [login, loginMeta] = useLoginMutation();
    const googleButtonRef = useRef(null);

    useEffect(() => {
        let script = document.createElement('script');

        script.src = CONFIG.GOOGLE_CLIENT_API;
        script.onload = () => {
            (window as Window & { google?: any }).google.
                accounts.id.initialize({
                    client_id: CONFIG.GOOGLE_CLIENT_ID,
                    auto_select: false,
                });

            (window as Window & { google?: any }).google.
                accounts.id.renderButton(googleButtonRef.current, {
                    theme: "outline",
                    width: 300
                });

            (window as Window & { google?: any }).google.
                accounts.id.prompt();
        };

        document.head.appendChild(script);

        // return () => {
        //     document.removeChild(script);
        // }
    }, []);

    useEffect(() => {
        if (loginMeta.data) {
            const { data: token } = loginMeta.data;
            setCookie("token", token, 1);

            if (typeof onSuccess === 'function' && typeof onSuccess !== 'undefined')
                onSuccess();
        }
    }, [loginMeta.data]);

    return (
        <>
            <Form
                layout="vertical"
                onFinish={login}
                className={styles.form}
            >
                <Form.Item
                    label="Логин"
                    name="login"
                    required
                >
                    <Input placeholder="Имя пользователя" />
                </Form.Item>
                <Form.Item
                    label="Пароль"
                    name="password"
                    required
                >
                    <Input.Password placeholder="Пвроль" />
                </Form.Item>
                <Form.Item>
                    <Button
                        className={styles.loginBtn}
                        type="primary"
                        htmlType="submit"
                    >
                        Войти
                    </Button>
                </Form.Item>
                <div
                    className={styles.googleLoginBtn}
                    ref={googleButtonRef}
                />
            </Form>
        </>
    )
}
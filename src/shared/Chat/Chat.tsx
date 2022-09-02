import { WechatOutlined } from "@ant-design/icons";
import { Button, Row } from "antd";
import { FC, useEffect } from "react";
import styles from './Chat.module.scss';

export const Chat: FC = () => {
    return (
        <Row className={styles.chatContainer}>
            <Button icon={<WechatOutlined />} />
        </Row>
    )
}
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Notification.module.scss';

interface NotificationProps {
    title: string;
}

export const Notification: FC<NotificationProps> = ({ title }) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(`/profile?achivement=${title.split(" ").join("+")}`)
    }

    return (
        <div
            onClick={handleRedirect}
            className={styles.notificationContainer}
        >
            <p>Новая ачивка!</p>
            <span>{title}</span>
        </div>
    )
}
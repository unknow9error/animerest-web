import { Radio } from "antd";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store/rootReducer";
import styles from './MainTabs.module.scss';

export const MainTabs: FC = () => {
    const isAuth = useSelector((state: RootState) => state.authentication.isAuth)

    return (
        <div
            className={styles.tabsWrapper}
        >
            <Radio.Group
                optionType="button"
            >
                <Radio value="Profile">
                    Профиль
                </Radio>
                <Radio value="Friends">
                    Друзья
                </Radio>
                <Radio value="Notification">
                    Уведомления
                </Radio>
                <Radio value="Quit">
                    Выйти
                </Radio>
            </Radio.Group>
        </div>
    )
}
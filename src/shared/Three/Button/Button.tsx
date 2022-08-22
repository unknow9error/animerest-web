import { Button } from "antd";
import { FC, PropsWithChildren } from "react";
import styles from './Button.module.scss';

export interface ThreeButtonInterface {
    onClick?: () => void;
    visible?: boolean;
    className?: string;
    is3D?: boolean;
}

export const ThreeButton: FC<PropsWithChildren<ThreeButtonInterface>> = ({ onClick, visible, className, is3D }) => {
    return (
        <Button
            className={className || styles.floatedButton}
            onClick={onClick}
        >
            {is3D ?
                "Использовать обычную версию" :
                "Использовать 3D"
            }
        </Button>
    )
}
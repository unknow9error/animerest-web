import React, { FC, ReactElement, useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThreeBackground, ThreeButton } from "src/shared/Three";
import { RootState } from "src/store/rootReducer";
import { set3D } from "src/store/Three/Three.slice";
import styles from './withBackground.module.scss'

export const withBackground = (Component: FC) => ({ ...props }) => {
    return (
        <WithBackground Component={Component} />
    )
}

const WithBackground: FC<{ Component: FC }> = ({ Component }) => {
    const three = useSelector((state: RootState) => state.three);
    const dispatch = useDispatch();
    const key = useId();

    const handleButtonClick = () => {
        dispatch(set3D());
    }

    return (
        <div
            // className={styles.backgroundWrapper}
            // style={{
            //     backgroundImage: `url(${three.image})`,
            //     backgroundRepeat: "no-repeat",
            //     backgroundPosition: "center top",
            //     backgroundSize: "cover"
            // }}
        >
            {three.is3D ?
                <ThreeBackground
                    image={three.image}
                    children={
                        <Component key={key} />
                    }
                />
                :
                <Component key={key} />
            }
            {/* <ThreeButton is3D={three.is3D} onClick={handleButtonClick} /> */}
        </div>
    )
}
import React, { FC } from "react";
import ReactPlayer from "react-player";
import styles from './Player.module.scss';
import { motion } from 'framer-motion';
import { Col, Row } from "antd";

interface PlayerProps {
    poster?: string;
    url?: string;
    videoQuality?: {
        fhd: string;
        hd: string;
        sd: string;
    };
    series?: {
        start?: number;
        end?: number;
    };
    onSerieClick?: (serie: number) => void
}

export const Player: FC<PlayerProps> = ({
    url,
    poster,
    videoQuality,
    series,
    onSerieClick
}) => {
    return (
        <div
            className={styles.playerWrapper}
        >
            <ReactPlayer
                url={url || videoQuality?.fhd}
                controls
                config={{
                    file: {
                        attributes: {
                            poster
                        }
                    }
                }}
            />
            {series && <motion.div
                initial={{
                    opacity: 1
                }}
                whileHover={{
                    opacity: 1
                }}
            >
                <div className={styles.playerSeriesContainer}>
                    {new Array(series.end).fill(undefined).map((serie, index) => {
                        const normalizeSerie = (serie || 1) + index;
                        
                        const handleClick = () =>
                            (typeof onSerieClick !== "undefined" && typeof onSerieClick === "function")
                            && onSerieClick(normalizeSerie);

                        return (
                            <div
                                key={`serie_${serie}`}
                                onClick={handleClick}
                            >
                                {normalizeSerie} серия
                            </div>
                        )
                    })}
                </div>
            </motion.div>}
        </div>
    )
}
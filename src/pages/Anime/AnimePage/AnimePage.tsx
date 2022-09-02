import { Col, Divider, Image, Row } from "antd";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { withBackground } from "src/hoc/Three/withBackground";
import { AnilibriaAnimeVm } from "src/models";
import { useLazyGetByIdQuery } from "src/services/Anime/Anime.service";
import { Player } from "src/shared/Video";
import styles from './AnimePage.module.scss';

const AnimePage: FC = () => {
    const [getById, { data, isError }] = useLazyGetByIdQuery();
    const [animeData, setAnimeData] = useState<AnilibriaAnimeVm>();
    const [activeSerie, setActiveSerie] = useState(1);

    const params = useParams();

    useEffect(() => {
        if (params.id) {
            getById(params.id);
        }
    }, []);

    useEffect(() => {
        setAnimeData(data);
    }, [data]);

    const handleSelectSerie = (serie: number) => {
        setActiveSerie(serie)
    }

    return (
        <Row>
            <Col span={24}>
                {data &&
                    <Row
                        justify="center"
                    >
                        <Col span={14}>
                            <Row
                                gutter={[50, 10]}
                                className={styles.animeWrapper}
                            >
                                <Col
                                    span={7}
                                    className={styles.animeContainer}
                                >
                                    <div>
                                        <Image src={data.poster} />
                                    </div>
                                </Col>
                                <Col
                                    span={17}
                                    className={styles.animeContainer}
                                >
                                    <h1>
                                        {data.names.ru} <br />
                                        ({data.year} года)
                                    </h1>
                                    <h4>{data.names.en}</h4>
                                    <h2>Об аниме</h2>
                                    {/* <Divider
                                        type="horizontal"
                                        className={styles.divider}
                                    /> */}
                                    <Row gutter={40}>
                                        <Col span={3}>
                                            <span>Жанры</span>
                                            <span>Серии</span>
                                            <span>Озвучка</span>
                                            <span>Декор</span>
                                            <span>Озвучка</span>
                                            <span>Описание</span>
                                        </Col>
                                        <Col span={21}>
                                            <span>{data.genres.join(", ")}</span>
                                            <span>{data.series}</span>
                                            <span>{data.voiceOver}</span>
                                            <span>{data.team.decor.join(", ")}</span>
                                            <span>{data.team.voice.join(", ")}</span>
                                            <span>{data.description}</span>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col
                                    span={24}
                                    className={styles.animePlayerWrapper}
                                >
                                    <Player
                                        activeSerie={activeSerie}
                                        poster={data.player.playlist[activeSerie].preview}
                                        videoQuality={data.player.playlist[activeSerie].hls}
                                        series={{
                                            start: Number(data.series.split("-")[0]),
                                            end: Number(data.series.split("-")[1]),
                                        }}
                                        onSerieClick={handleSelectSerie}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                }
            </Col>
        </Row>
    )
}

export default withBackground(AnimePage);
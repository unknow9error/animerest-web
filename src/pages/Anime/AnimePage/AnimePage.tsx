import { Col, Image, Row, Tabs } from "antd";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { withBackground } from "src/hoc/Three/withBackground";
import { useLazyGetByIdQuery } from "src/services/Anime/Anime.service";
import styles from "./AnimePage.module.scss";
import { Player } from "src/shared/Video";

const AnimePage: FC = () => {
    const [getById, { data, isError }] = useLazyGetByIdQuery();
    const [activeSerie, setActiveSerie] = useState<string>();

    const [activeVoiceover, setActiveVoiceover] = useState("");

    const params = useParams();

    useEffect(() => {
        if (data) {
            const voiceover = Object.keys(data.playlist)[0];

            if (voiceover) {
                setActiveVoiceover(voiceover);
            }
        }
    }, [data]);

    useEffect(() => {
        if (activeVoiceover && data && data.playlist[activeVoiceover]) {
            setActiveSerie(data.playlist[activeVoiceover][0].episode);
        }
    }, [activeVoiceover]);

    useEffect(() => {
        if (params.id) {
            getById(params.id);
        }
    }, []);

    const handleSelectSerie = (serie: number) => {
        setActiveSerie(String(serie));
    };

    const handleActvieKeyChange = (activeKey: string) => {
        setActiveVoiceover(activeKey);
    };

    return (
        <Row>
            <Col span={24}>
                {data && (
                    <Row justify="center">
                        <Col span={24}>
                            <Row
                                gutter={[50, 10]}
                                className={styles.animeWrapper}
                            >
                                <Col span={7} className={styles.animeContainer}>
                                    <div>
                                        <Image src={data.poster} />
                                    </div>
                                </Col>
                                <Col
                                    span={17}
                                    className={styles.animeContainer}
                                >
                                    <h1>
                                        {data.name.ru} <br />
                                        {/* ({data.year} года) */}
                                    </h1>
                                    <h4>{data.name.en}</h4>
                                    <h2>Об аниме</h2>
                                    {/* <Divider
                                        type="horizontal"
                                        className={styles.divider}
                                    /> */}
                                    <Row gutter={40}>
                                        <Col span={3}>
                                            {/* <span>Жанры</span>
                                            <span>Серии</span>
                                            <span>Озвучка</span>
                                            <span>Декор</span>
                                            <span>Озвучка</span> */}
                                            <span>Описание</span>
                                        </Col>
                                        <Col span={21}>
                                            {/* <span>
                                                {data.genres.join(", ")}
                                            </span>
                                            <span>{data.series}</span>
                                            <span>{data.voiceOver}</span>
                                            <span>
                                                {data.team.decor.join(", ")}
                                            </span>
                                            <span>
                                                {data.team.voice.join(", ")}
                                            </span> */}
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
                                    <Tabs
                                        className={styles.voiceOver}
                                        activeKey={activeVoiceover}
                                        onChange={handleActvieKeyChange}
                                    >
                                        {Object.keys(data.playlist).map(
                                            (voiceover) => {
                                                const activePlaylist =
                                                    data.playlist[
                                                        activeVoiceover
                                                    ];
                                                const serie =
                                                    activePlaylist?.find(
                                                        (x) =>
                                                            String(
                                                                x.episode
                                                            ) ===
                                                            String(activeSerie)
                                                    );

                                                if (activePlaylist) {
                                                    const start = Number(
                                                        activePlaylist[
                                                            activePlaylist.length -
                                                                1
                                                        ].episode
                                                    );

                                                    const end = Number(
                                                        activePlaylist[0]
                                                            .episode
                                                    );
                                                    debugger

                                                    if (
                                                        !isNaN(start) &&
                                                        !isNaN(end)
                                                    )
                                                        return (
                                                            <Tabs.TabPane
                                                                tab={voiceover}
                                                                key={voiceover}
                                                            >
                                                                <Player
                                                                    activeSerie={Number(
                                                                        activeSerie
                                                                    )}
                                                                    poster={
                                                                        serie?.preview
                                                                    }
                                                                    videoQuality={
                                                                        serie?.hls
                                                                    }
                                                                    series={{
                                                                        start,
                                                                        end:
                                                                            start -
                                                                            end,
                                                                    }}
                                                                    onSerieClick={
                                                                        handleSelectSerie
                                                                    }
                                                                />
                                                            </Tabs.TabPane>
                                                        );
                                                }
                                            }
                                        )}
                                    </Tabs>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                )}
            </Col>
        </Row>
    );
};

export default withBackground(AnimePage);

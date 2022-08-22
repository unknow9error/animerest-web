import { Col, Image, Row } from "antd";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyGetListQuery } from "src/services/Anime/Anime.service";
import styles from './AnimeList.module.scss';

export const AnimeList: FC = () => {
    const [getAll, { data }] = useLazyGetListQuery();
    const navigate = useNavigate();

    useEffect(() => {
        const query = getAll({
            page: 1,
            size: 100
        })

        return () => {
            query.abort();
        }
    }, []);

    const handleRedirect = (animeId: number) => {
        return () => {
            navigate("/anime/" + animeId);
        }
    }

    return (
        <Row
            gutter={[0, 0]}
            className={styles.animeListWrapper}
        >
            {data?.map(anime => {
                return (
                    <Col
                        onClick={handleRedirect(anime.id)}
                        span={4}
                        key={anime.id}
                        className={styles.animeListContainer}
                    >
                        <span>{anime.names.ru}</span>
                        <Image src={anime.poster} />
                    </Col>
                )
            })}
        </Row>
    )
}
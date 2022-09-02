import { ArrowLeftOutlined, ArrowRightOutlined, ClockCircleOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Carousel, Col, Image, Popover, Row } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AnilibriaAnimeVm } from "src/models";
import { useActionMutation } from "src/services/Anime/Anime.service";
import { rtkQueryException } from "src/utils/helpers/rtkQuery";
import styles from './AnimeList.module.scss';

interface AnimeListProps {
    data?: AnilibriaAnimeVm[];
    title?: string;
}

export const AnimeList: FC<AnimeListProps> = ({ 
    data,
    title
 }) => {
    const navigate = useNavigate();
    const [addAction] = useActionMutation();

    const handleRedirect = (animeId: number) => {
        return () => {
            navigate("/anime/" + animeId);
        }
    }

    const handleAction = (action: string, anime: AnilibriaAnimeVm) => {
        return () => {
            addAction({
                action,
                code: anime.code,
                id: anime.id,
                genres: anime.genres.join(", "),
                names: `${anime.names.ru}, ${anime.names.en}, ${anime.names.kz}`,
                poster: anime.poster,
                serie: anime.series,
                team: JSON.stringify(anime.team),
                voiceover: anime.voiceOver,
                year: anime.year
            }).then(res => {
                toast.success("Добавлено");
            }).catch(error => {
                const data = rtkQueryException(error);
                if (data?.reason)
                    toast.error(data.reason);
            })
        }
    }

    return (
        <Row
            gutter={[0, 0]}
            className={styles.animeListWrapper}
        >
            <Col
                span={24}
            >
                <p>{title}:</p>
                <Carousel
                    arrows
                    prevArrow={
                        <ArrowLeftOutlined color="white" />
                    }
                    nextArrow={
                        <ArrowRightOutlined color="white" />
                    }
                    autoplay
                    slidesToShow={7}
                    dots={false}
                    slidesPerRow={1}
                >
                    {data?.map(anime => {
                        return (
                            <div
                                key={anime.id}
                                className={styles.animeListContainer}
                            >
                                <Popover
                                    placement="right"
                                    trigger="contextMenu"
                                    content={
                                        <div
                                            className={styles.popoverContent}
                                        >
                                            <p>{anime.names.ru}</p>
                                            <Button
                                                type="ghost"
                                                icon={<MenuUnfoldOutlined />}
                                                onClick={handleAction("favourites", anime)}
                                            >
                                                Добавить в избранное
                                            </Button>
                                            <Button
                                                type="ghost"
                                                icon={<ClockCircleOutlined />}
                                                onClick={handleAction("watchLater", anime)}
                                            >
                                                Посмотреть позже
                                            </Button>
                                        </div>
                                    }
                                >
                                    <div
                                        onClick={handleRedirect(anime.id)}
                                        className={styles.animeListImage}
                                    >
                                        {/* <span>{anime.names.ru}</span> */}
                                        <Image
                                            src={anime.poster}
                                            preview={false}
                                        />
                                    </div>
                                </Popover>
                            </div>
                        )
                    })}
                </Carousel>
            </Col>
        </Row>
    )
}
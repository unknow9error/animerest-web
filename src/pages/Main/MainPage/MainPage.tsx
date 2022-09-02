import { Col, Row } from "antd";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { withBackground } from "src/hoc/Three/withBackground";
import { AnimeSearchTitleVm } from "src/models/Anime/Anime.model";
import { useLazyGetListQuery } from "src/services/Anime/Anime.service";
import { RootState } from "src/store/rootReducer";
import { AnimeFilter } from "../AnimeFilter/AnimeFilter";
import { AnimeList } from "../AnimeList/AnimeList";

const MainPage: FC = () => {
    const [getAll, { data }] = useLazyGetListQuery();
    const [_, setFilters] = useState<AnimeSearchTitleVm>();
    const searchData = useSelector((state: RootState) => state.animeService)

    useEffect(() => {
        const query = getAll({
            page: 1,
            size: 100
        })

        return () => {
            query.abort();
        }
    }, []);


    const handleFilter = ({ name, value }: { name: keyof AnimeSearchTitleVm, value: string }) => {
        setFilters(prev => prev ? ({
            ...prev,
            [name]: value
        }) : ({ [name]: value }));
    }

    return (
        <Row>
            <Col span={24}>
                <AnimeList
                    title="Новинки"
                    data={
                        Array.isArray(searchData) && searchData.length > 0 ?
                            searchData :
                            data
                    }
                />
                <AnimeFilter onFilter={handleFilter} />
                <AnimeList
                    title="Лучшие"
                    data={
                        Array.isArray(searchData) && searchData.length > 0 ?
                            searchData :
                            data
                    }
                />
            </Col>
            {/* <MainTabs /> */}
        </Row>
    )
}

export default withBackground(MainPage);

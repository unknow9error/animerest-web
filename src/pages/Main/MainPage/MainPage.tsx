import { Col, Row } from "antd";
import { FC } from "react";
import { useSelector } from "react-redux";
import { withBackground } from "src/hoc/Three/withBackground";
import { AnimeList } from "../AnimeList/AnimeList";

const MainPage: FC = () => {
    return (
        <Row>
            <Col span={24}>
                <AnimeList />
            </Col>
        </Row>
    )
}

export default withBackground(MainPage);

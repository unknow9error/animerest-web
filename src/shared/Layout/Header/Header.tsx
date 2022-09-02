import { Divider, Layout, Menu, Select } from "antd";
import { FC } from "react";
import { useLazySearchQuery } from "src/services/Anime/Anime.service";
import styles from "./Header.module.scss";

export const Header: FC = () => {
    const [search] = useLazySearchQuery();

    const handleSearch = (value: string) => {
        search({
            search: value
        });
    }

    return (
        <Layout
            className={styles.headerLayout}
        >
            <Layout.Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    items={[
                        {
                            label: "Аниме",
                            key: "anime"
                        },
                        {
                            label: "Манга",
                            key: "manga",
                            disabled: true
                        },
                    ]}
                />
                <Select
                    showSearch
                    onSearch={handleSearch}
                    className={styles.headerSearch}
                    filterOption={false}
                    showArrow={false}
                    notFoundContent={null}
                    defaultActiveFirstOption={false}
                />
            </Layout.Header>
            <Divider
                className={styles.headerDivider}
                type="horizontal"
            />
        </Layout>
    )
}
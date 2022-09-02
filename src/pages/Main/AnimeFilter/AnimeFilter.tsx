import { Form, Input, Select } from "antd";
import { FieldData } from "rc-field-form/lib/interface";
import { FC, useEffect } from "react";
import { AnimeSearchTitleVm } from "src/models/Anime/Anime.model";
import { useLazyGetGenresQuery } from "src/services/Anime/Anime.service";
import styles from './AnimeFilter.module.scss';

interface AnimeFilterProps {
    onFilter?: ({ name, value }: { name: keyof AnimeSearchTitleVm, value: string }) => void;
}

export const AnimeFilter: FC<AnimeFilterProps> = ({ onFilter }) => {
    const [getGenres, { data: genres, isLoading }] = useLazyGetGenresQuery();

    useEffect(() => {
        getGenres(null);
    }, []);

    const handleChange = (changedFields: FieldData[], allFields: FieldData[]) => {
        if (typeof onFilter !== "undefined" && typeof onFilter === "function") {
            changedFields.forEach(field => {
                let fieldName: keyof AnimeSearchTitleVm | null = null;

                if (typeof field.name === "string" && isTrustlyFilterName(field.name)) {
                    fieldName = field.name
                }

                if (Array.isArray(field.name) && isTrustlyFilterName(field.name[0])) {
                    fieldName = field.name[0];
                }

                if (fieldName)
                    onFilter({
                        name: fieldName,
                        value: field.value
                    })
            })
        }
    }

    const isTrustlyFilterName = (name: string | number): name is keyof AnimeSearchTitleVm => {
        return Boolean(String(name));
    }

    return (
        <div
            className={styles.formFilterWrapper}
        >
            <Form
                layout="inline"
                className={styles.formFilterForm}
                onFieldsChange={handleChange}
            >
                {/* <Form.Item
                    name="name"
                >
                    <Input placeholder="Наименование аниме" />
                </Form.Item>
                <Form.Item
                    name="genres"
                >
                    <Select
                        allowClear
                        mode="multiple"
                        placeholder="Жанры"
                        optionLabelProp="label"
                        loading={isLoading}
                    >
                        {genres &&
                            genres.map(genre => {
                                return (
                                    <Select.Option key={genre}>
                                        {genre}
                                    </Select.Option>
                                )
                            })
                        }
                    </Select>
                </Form.Item> */}
            </Form>
        </div>
    )
}
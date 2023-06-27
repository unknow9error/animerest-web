export interface AnimeVm {}

export interface AnimeActionVm {
    action: string;
    code: string;
    genres: string;
    id: number;
    names: string;
    poster: string;
    serie: string;
    team: string;
    voiceover: string;
    year: string;
}

export interface AnimeSearchTitleVm {
    // name
    search?: string;
    year?: string;
    seasonCode?: string;
    genres?: string;
    voice?: string;
    translator?: string;
    editing?: string;
    decor?: string;
    timing?: string;
}

export interface AnimeDto {
    id: number;
    code: string;
    animeId: number;
    name: AnimeName;
    description: string;
    series: string;
    playlist: AnimePlaylistDto;
    poster: string;
}

export type AnimePlaylistDto = Record<string, AnimePlaylistDataDto[]>;

export interface AnimePlaylistDataDto {
    kind: AlternativeFilterKind;
    preview?: string;
    name: Partial<AnimeName> | null;
    episode: string;
    hls: AnilibriaHLS;
}

export interface AnilibriaHLS {
    fhd: string;
    hd: string;
    sd: string;
}

export enum AlternativeFilterKind {
    Raw = "оригинал",
    Dubs = "озвучка",
    Subs = "субтитры",
}

export interface AnilibriaAnimeVm {
    id: number;
    code: string;
    animeId: number;
    name: AnimeName;
    kind: AlternativeFilterKind;
    poster: string;
    url: string;
    voiceover: string;
}

export interface AnimeName {
    ru: string;
    en: string;
}

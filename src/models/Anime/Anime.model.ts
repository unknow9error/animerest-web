export interface AnimeVm {

}

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

export interface AnilibriaAnimeVm {
    code: string;
    createdDate: Date;
    description: string;
    genres: string[];
    team: {
        voice: string[];
        editing: string[]
        decor: string[];
        translator: string[];
    };
    voiceOver: string;
    id: number;
    names: {
        ru: string;
        kz: string;
        en: string;
    };
    poster: string;
    year: string;
    series: string;
    player: {
        host: string;
        playlist: {
            [key in string]: {
                created_timestamp: Date;
                hls: {
                    fhd: string;
                    hd: string;
                    sd: string;
                };
                preview: string;
                serie: string;
                skips: {
                    ending: string[];
                    opening: string[];
                };
            }
        }
    }
}
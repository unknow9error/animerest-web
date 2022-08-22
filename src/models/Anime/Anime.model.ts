export interface AnimeVm {

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
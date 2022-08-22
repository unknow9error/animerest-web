import { AnimeVm } from "../Anime/Anime.model";

export interface UserVm {
    uid: number;
    userName: string;
    firstName: string;
    lastName: string;
    middleName: string;
    rating: number;
    favorites: AnimeVm[];
    watchLater: AnimeVm[];
    achievments: string;
    email: string;
    friends: UserVm[];
    role: string;
    chats: null;
}
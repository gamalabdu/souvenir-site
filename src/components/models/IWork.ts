import { IAsset } from "./IAsset";

export interface IWork {
    name: string,
    title: string,
    names: string[],
    year: string,
    color: string[],
    description: string,
    time: string,
    type: string,
    thumbnail: IAsset,
    vimeo: string,
    videos: string[],
    videoSrc: IAsset,
}
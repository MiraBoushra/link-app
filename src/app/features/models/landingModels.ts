export interface BannerModel {
    id: number;
    brief: string;
    image: string;
    order: number;
    title: string;
    category: string;
    colorCode: string;
}
export interface Banners {
    banners: BannerModel[]
}

export interface Gallery {
    Slider: GalleryModel[]
}
export interface GalleryModel {
    id: number,
    image: string
}
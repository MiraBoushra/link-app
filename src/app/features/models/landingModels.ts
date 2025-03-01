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
export interface Course {
    Courses: CourseModel[]
  }
  
  export interface CourseModel {
    id?: string
    hours?: number
    image?: string
    level?: string
    price?: number
    title?: string
    author?: string
    category?: string
    discount?: number
    lectures?: number
    addToCart?: boolean
    categoryID?: number
    description?: string
    ratingCount?: number
    showOnHomepage?: boolean
  }
  
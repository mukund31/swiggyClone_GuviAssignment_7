export interface Dish {
    id: number;
    name: string;
    imageUrl: string;
    restaurants: { name: string; restImageURL: string; rating: string; time: string; location: string; price: number }[];
}
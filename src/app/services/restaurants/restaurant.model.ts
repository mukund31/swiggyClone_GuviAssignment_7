export interface Restaurant {
    id: number;
    name: string;
    imageUrl: string;
    rating: string;
    time: string;
    details: string;
    location: string;
    dishes: { name: string; restImageURL: string; price: number }[];
} 
import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDataService {
  private restaurants: Restaurant[] = [
    {
      id: 1,
      name: 'Jai Ganesh Bhojnalaya',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yzgqriufpzmloogcn2vl',
      rating: '3.9',
      time: '40-45 mins',
      details: 'North Indian, South Indian',
      location: 'Chitoor Bus Stand',
      dishes: [
        {name: 'Paneer Butter Masala', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/16400d2141cb4bc16ac6b79edfb89298', price: 199 },
        {name: 'Paneer Tikka', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/8144bf37947c161953f656308d1bfc30', price: 419 },
        {name: 'Noodles', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/cf91af0ad62b20612678a67b324401b3', price: 349 },
        {name: 'Pizza', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/20/0cd1ecae-cebd-446b-bae8-e2f9a2e855e9_944455.jpg', price: 359 },
        {name: 'Veg Meal', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/15/237b4381-ed64-4577-a0c8-c38fd09af1db_887003.jpg', price: 289 },
      ]
    },
    {
      id: 2,
      name: 'Thikana Special',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/6adf18b9-0a2e-45ad-b587-3f714762f7bd_898044.jpg',
      rating: '4.5',
      time: '40-45 mins',
      details: 'North Indian, Chinese, Biryani',
      location: 'Chhindwara City',
      dishes: [
        {name: 'Paneer Butter Masala', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/16400d2141cb4bc16ac6b79edfb89298', price: 199 },
        {name: 'Pizza', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/20/0cd1ecae-cebd-446b-bae8-e2f9a2e855e9_944455.jpg', price: 359 },
        {name: 'Noodles', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/cf91af0ad62b20612678a67b324401b3', price: 349 },
        {name: 'Veg Meal', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/15/237b4381-ed64-4577-a0c8-c38fd09af1db_887003.jpg', price: 289 },
        {name: 'Paneer Tikka', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/8144bf37947c161953f656308d1bfc30', price: 419 },
      ]
    },
    {
      id: 3, 
      name: 'Dev International',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enj3srsnhbltbom2ovvh',
      rating: '4.1',
      time: '50-55 mins',
      details: 'North Indian, Chinese, Fast Food',
      location: 'Mohan Nagar',
      dishes: [
        {name: 'Special Masala Dosa', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/6cb71be534c0e484006c6a1a2e2e48cb', price: 139 },
        {name: 'YLB Special Thali', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/28/9271ff60-0ee6-4486-a4b2-6f323a05deb5_bde19c5c-5075-4802-8fd4-1083a88ef610.jpg', price: 279 },
        {name: 'Special Thali', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/e8738af35cb447ae4b850e9d123bc6a7', price: 269 },
        {name: 'Special Blackforest Eggless Cake (Half Kg)', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/5/29/60bf128a-302c-4538-bab7-7193ca9f117d_02e38b61-1684-4f60-9816-abc66d02671d.jpg', price: 399 },
        {name: 'Special Thali', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/dxjkqgb3wfnwa9ygna8t', price: 199 },
      ]
    },
    {
      id: 4,
      name: 'Rangla Panjab',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hxxasn2kf8g9eyi9eonq',
      rating: '3.6',
      time: '30-35 mins',
      details: 'North Indian, South Indian',
      location: 'Prasia Road',
      dishes: [
        {name: 'Soya Chaap', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/pnnca81lznmi2njh1ci9', price: 399 },
        {name: 'Kadhai Paneer', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/bb5b77dd315c71f62b013d8eba935b9d', price: 449 },
        {name: 'Lunch Box', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/e1cf3aff-8444-41dc-a439-dff7a104fb23_361086.jpg', price: 129 },
        {name: 'Special Thali', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/oyutmi5dtiobarm5fo9s', price: 119 },
        {name: 'Biryani Mastani', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/qxdfnvvzk7unfdsjt6jb', price: 169 },
      ]
    },
    {
      id: 5,
      name: 'Apni Rasoi Family Dhaba',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sidigb8zqjfrfpkrtqgl',
      rating: '4.3',
      time: '40-55 mins',
      details: 'North Indian, Indian, South Indian',
      location: 'Prasia Road',
      dishes: [
        {name: 'Fried Rice', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/342b15885477bf0b9351d369255c3719', price: 299 },
        {name: 'Aloo Paratha', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/edf7faef3a2a7cd17fa65385e3d76ed8', price: 149 },
        {name: 'Paneer Paratha', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/0d224e9e-6070-4651-ac37-6a04d68d44ed_912307.jpg', price: 119 },
        {name: 'Dal Maharani', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/0d224e9e-6070-4651-ac37-6a04d68d44ed_912307.jpg', price: 329 },
        {name: 'Paneer Korma', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0d69c740c6279ca0f60c7c3b3152e72', price: 349 },
      ]
    },
    {
      id: 6,
      name: 'Theobroma',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/12d431f6-7a30-4d33-b14a-9ab94204f8a8_913948.jpg',
      rating: '3.9',
      time: '40-45 mins',
      details: 'Cakes, Bakery',
      location: 'Chitoor Bus Stand',
      dishes: [
        {name: 'Black Forest Cake', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/16/da853906-73b9-4176-ac06-0e0c9eb65b1b_f3b48d48-5345-4bf1-a4ad-d4425c4bf935.jpg', price: 599 },
        {name: 'German Forest Cake', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/16/b4697009-19c9-4424-bfe4-081ea9510d58_8bc6d937-5d88-4a18-a60b-3b95baabb40a.jpg', price: 699 },
        {name: 'Red Velvet Cake', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/16/ef4312f3-5ad8-4930-bcb7-a9f3ddcff4e5_9b6b6195-18bf-4cb5-984a-feb3f4748862.jpg', price: 299 },
        {name: 'BlueBerry Cheese Cake', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/f532ecd6ffae5ca5b75cf0f18c1123ac', price: 599 },
        {name: 'Chocolate Jar Cake', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/16/267b53e3-ca48-461c-a9cc-cacf2a02878d_1325764d-bbf7-4a7e-80ba-7c048e87d115.jpg', price: 499 },
      ]
    },
    {
      id: 7,
      name: 'Chinese Wok',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/f532ecd6ffae5ca5b75cf0f18c1123ac',
      rating: '4.5',
      time: '40-45 mins',
      details: 'North Indian, Chinese',
      location: 'Chhindwara City',
      dishes: [
        {name: 'Non Veg Combo', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/440c06ace44b931b729d9b6a090aba07', price: 199 },
        {name: 'Veg Combo', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/3e4f7ca32bf517b390f1cb3205b892e4', price: 179 },
        {name: 'Human Paneer Dry', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/7/a05bf8ea-ee68-4fd8-be01-1ac10f940fa5_c8e1a500-cd36-4f60-a771-1e5cf22e73c4.jpg_compressed', price: 119 },
        {name: 'Schezwan Paneer Dry', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/7/e3d760e8-a686-446b-887e-0a3256b077f4_1d4af440-1e94-440e-8e46-762968fb77a1.jpg_compressed', price: 149 },
        {name: 'Human Chicken Dry', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/1/437b789a-adb8-4e75-8eff-e189113ffb30_6c98fe7d-1a74-4c71-8119-42b7993ab602.jpg_compressed', price: 149 },
      ]
    },
    {
      id: 8, 
      name: 'KFC',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/85e0b538-e34f-4f24-b769-984d9851ec6b_786613.JPG',
      rating: '4.1',
      time: '50-55 mins',
      details: 'Fast Food, Chicken',
      location: 'Mohan Nagar',
      dishes: [
        {name: 'Craving Meal', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/1/437b789a-adb8-4e75-8eff-e189113ffb30_6c98fe7d-1a74-4c71-8119-42b7993ab602.jpg_compressed', price: 299 },
        {name: 'Party Bucket Meal', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/11/6c1b2981-60c2-4bcf-8566-002519dccca1_67401533-ea91-49bd-9320-e55d22ae31f3.jpg', price: 349 },
        {name: 'Insta Reel Meal', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/11/a1ef4f33-ccae-4da1-b14e-d898046e4d8a_90e183d8-2b73-4edc-9fb1-1e70ea37df70.jpg', price: 399 },
        {name: 'Night Owl Roll', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/11/eb4bf183-297e-4c7a-82db-6d2e0f787472_324a0669-3780-43d0-bfb3-2ff3483188c3.jpg', price: 369 },
        {name: 'Rice Krunch Bowl', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/11/b328f1b1-ed4e-4a95-9a8f-f02b071f7388_d001011b-08b5-469d-8d8e-0bb9643002e7.jpg', price: 449 },
      ]
    },
    {
      id: 9,
      name: 'La Pinoz Pizza',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/oeep8b6afbcw6eczqkf8',
      rating: '3.6',
      time: '30-35 mins',
      details: 'Pizza, Fast Food, Snacks',
      location: 'Prasia Road',
      dishes: [
        {name: 'Regular Margherita + Cheese Garlic Bread + Soft Drink', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/11/b328f1b1-ed4e-4a95-9a8f-f02b071f7388_d001011b-08b5-469d-8d8e-0bb9643002e7.jpg', price: 299 },
        {name: 'Slice Spring Fling + Cheese Garlic Bread + Soft Drink', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ilbmgj5jnqxkwuhgzybg', price: 359 },
        {name: 'Cheesy 7 + Cheese Garlic Bread + Soft Drink', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ghowms66wd6bibgir5re', price: 219 },
        {name: 'Slice Exotic Bbq+ Cheese Garlic Bread + Soft Drink', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/jjugm3fmyktbz8e6a5b1', price: 459 },
        {name: 'Slice Chicago Delight + Cheese Garlic Bread + Soft Drink', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/j58djukm5m7jue2ihxik', price: 279 },
      ]
    },
    {
      id: 10,
      name: 'Burger King',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/c71429ea-c943-43be-8964-b21c750e7835_221897.jpg',
      rating: '4.3',
      time: '40-55 mins',
      details: 'Fast Food, Snacks',
      location: 'Prasia Road',
      dishes: [
        {name: 'Classic Family Feast for 4 - Veg', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/4/6bd5ee8a-ee15-4647-a6ff-64c73da5398f_a6938e55-0190-42de-bae8-2c05615d25bf.jpg', price: 199 },
        {name: 'Premium Family Feast for 4 - Chicken', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/4/360ad5e4-756d-41dc-b7f7-d77012b16477_a9716f71-56ef-4f9f-8beb-4fb5bce3ac0f.jpg', price: 199 },
        {name: 'Crispy Veg Burger', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg', price: 199 },
        {name: 'Crispy Chicken Burger', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/03972ff7-ca47-4b34-a777-bec55c47869e_8944b667-7b9c-418b-88f3-df885ddadd6b.jpg', price: 199 },
        {name: 'Crispy Veg Double Patty Burger', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/9cd490f9-f191-49c2-9043-6dc3e7e58166_34badbda-4128-45d4-87e2-e9c580e8db43.jpg', price: 199 },
      ]
    },
    {
      id: 11,
      name: 'Mithas Sweets',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d9f30a479c2f2fe86049b4f2e91cc92e',
      rating: '4.6',
      time: '20-25 mins',
      details: 'Sweets, Fast Food, Snacks',
      location: 'Kidwai Nagar',
      dishes: [
        {name: 'Badam Ladoo', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/20/06cdbba7-9dc7-4b03-b15e-e18594f64d9c_c1e953b4-8bad-4726-ac6d-7cd94bc11e2a.jpg', price: 404 },
        {name: 'Mango Dry Fruit Ladoo', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/20/ef833484-e7f7-4f90-aa29-3779bcb9eacb_990d9cdc-7319-402f-924e-d8e0afa9779d.jpg', price: 375 },
        {name: 'Anjeer Roll', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/a6qij33kusavsv70t77t', price: 404 },
        {name: 'Chola Bhatura', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/tserb55sjjeaypmisbdy', price: 242 },
        {name: 'Samosa', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/dienb1yclog0b60m0im7', price: 125 },
      ]
    },
    {
      id: 12,
      name: 'Subway',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/25/223d484f-b568-4869-ba87-b0c69dd9bc13_454951.jpg',
      rating: '4.3',
      time: '35-45 mins',
      details: 'Burgers',
      location: 'Mall Road',
      dishes: [
        {name: 'Cheesy Paneer Tikka', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/9/8986ce99-f597-4b94-95c5-6a3312e91f97_37e36c09-278a-4ff5-b9a5-d9cc6537567b.png', price: 309 },
        {name: 'Cheesy Chicken Tikka', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/9/4c1cdf2a-e6ac-47c7-8200-c9f85d1425dd_c0946eae-b0fd-436b-92bf-b0cecc1b5246.png', price: 369 },
        {name: 'Potato Chilli Cheese', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/9/476ccea0-9c5a-4c0d-a357-286ff6b90b50_8c43ba23-5a16-4ff9-9921-34ec2b3025e5.png', price: 269 },
        {name: 'Cheesy American BBQ', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/9/4718095a-49f3-4187-bf43-399f691ab36e_c981dc74-f278-4d81-a1fb-a23ff33da533.png', price: 289 },
        {name: 'Cheesy Mexican', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/9/e911b705-4934-422f-903e-67b3ee5d9345_55ea1b8b-3482-4aaa-9614-3c988f165372.png', price: 289 },
      ]
    },
  ]
  constructor() { }

  getRestaurants(): Restaurant[] {
    return this.restaurants;
  }

  getRestaurantById(id: number): Restaurant | undefined {
    return this.restaurants.find(restaurant => restaurant.id === id);
  }
}

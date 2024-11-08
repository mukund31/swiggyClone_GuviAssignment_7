import { Injectable } from '@angular/core';
import { Dish } from './dish.model';

@Injectable({
  providedIn: 'root'
})
export class DishDataService {
  private dishes: Dish[] = [
    {
      id: 1,
      name: 'Pizzas',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
      restaurants: [
        { name: 'Urban Cafe', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/3ac249d5f0a25a7b61f69e93614ed09d', rating: '4.2', time:'40-45 mins', location: 'Kidwai Nagar', price: 279 },
        { name: 'Pizza Box', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/21/dbe91f1f-b400-4f4b-a78d-c6b99bdc61c5_912754.JPG', rating: '4.3', time:'40-45 mins', location: 'Chitoor Bus Stand',  price: 399 },
        { name: 'Dominos Pizza', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/b9808ec8-1713-4d8c-bd08-a2de419fbb97_74507.JPG', rating: '4.4', time:'20-25 mins', location: 'Kidwai Nagar Market',  price: 699 },
        { name: 'Pizza Store', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ada8234d43c269920d03974f5effbc71', rating: '4.2', time:'30-35 mins', location: 'Kakadeo',  price: 399 },
        { name: 'Talk of the Town', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/7/2f5039fe-fc87-46ac-9cbc-aa00667b2835_905499.jpg', rating: '3.6', time:'20-25 mins', location: 'Goinpuri',  price: 499 },
        { name: 'The Pizzeria Deck', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1f69857f4863aac09be6aabbe2bbb125', rating: '3.9', time:'25-30 mins', location: 'Katpadi',  price: 359 },
        { name: 'Daily dose Cafe', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/8/7/5003a197-71ac-4ef4-8dd8-e013ffd9649d_a0ffcb80-aa21-4c75-ba61-72a8cc5517c3.jpg', rating: '4.1', time:'45-50 mins', location: 'Harsh Nagar',  price: 329 },
        { name: 'Pizza Night Out', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/8/24/cf2bd0ac-a977-4440-999b-5e8c58de2c8f_da9efda1-ea73-4f99-ba42-a36ea6262ca6.jpg', rating: '3.8', time:'15-20 mins', location: 'Saket Nagar',  price: 619 },
        { name: 'Baked N Ice', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ivcjwdrjuyzpacgmdty1', rating: '4.4', time:'35-40 mins', location: 'Indira Nagar',  price: 509 },
        { name: 'Model Coffee Corner', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/57fb8f3e9a4283b0caeb5e7078f33011', rating: '4.2', time:'40-45 mins', location: 'Triveni Market',  price: 199 },
      ]
    },
    {
      id: 2,
      name: 'Burgers',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png',
      restaurants: [
        { name: 'Urban Cafe', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/10/9/3d7c69fd-856d-4f21-a9c4-da0fd3df9b76_07503ff6-b3b0-41e3-b18a-42b5da315ede.JPG', rating: '4.9', time:'40-45 mins', location: 'Kidwai Nagar',  price: 109 },
        { name: 'MCDonalds', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/22/ffa09e8e-e2ac-4ae1-ba80-9e25568744bb_253763.JPG', rating: '4.5', time:'40-45 mins', location: 'Tilak Nagar',  price: 159 },
        { name: 'Pizza Store', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/20/0cd1ecae-cebd-446b-bae8-e2f9a2e855e9_944455.jpg', rating: '4.1', time:'25-30 mins', location: 'Chawla Market',  price: 205 },
        { name: 'Daily dose cafe', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/6/22/271f5228-f22d-4fe9-a2cc-b676ae4cf087_3ae8ea61-76ec-4396-a928-a93bb2a5e732.jpg_compressed', rating: '4.5', time:'30-35 mins', location: 'Chawla Market',  price: 109 },
        { name: 'Pizza King', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/9/10/fec23c08-94fc-44ee-9f20-2d044258382b_e5aefa21-267f-4ad1-8b54-1d84335c6c28.jpeg', rating: '3.8', time:'15-20 mins', location: 'Kanpur Nagar',  price: 89 },
        { name: 'Burger King', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/c71429ea-c943-43be-8964-b21c750e7835_221897.jpg', rating: '3.5', time:'40-45 mins', location: 'Kidwai Nagar',  price: 39 },
        { name: 'Scoops Fast Food', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/10/9/3d7c69fd-856d-4f21-a9c4-da0fd3df9b76_07503ff6-b3b0-41e3-b18a-42b5da315ede.JPG', rating: '4.8', time:'40-45 mins', location: 'Harsh Nagar',  price: 89 },
        { name: 'Naughty blenders', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/htviweh6jkoprosmve7s', rating: '4.6', time:'35-40 mins', location: 'Kidwai Nagar Market',  price: 209 },
        { name: 'KFC', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/4/13/d6b9be59-10a4-420d-9ff6-44f91b87c7c0_4f367b42-73b8-428c-a801-8f0cf51021b3.jpg', rating: '4.8', time:'45-50 mins', location: 'Kidwai Nagar',  price: 199 },
        { name: 'Star Pizza', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/28/4c4fc0b6-1466-4af8-b54b-e1e20cc8180a_948961.JPG', rating: '3.1', time:'25-30 mins', location: 'Chawla Market',  price: 99 },
      ]
    },
    {
      id: 3,
      name: 'Cakes',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png',
      restaurants: [
        { name: 'Bakery World', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mt2aggiscfl3yviatwng', rating: '4.2', time:'40-45 mins', location: 'Kidwai Nagar',  price: 1099 },
        { name: 'The Belgium Waffle Co.', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5116a385bac0548e06c33c08350fbf11', rating: '4.2', time:'40-45 mins', location: 'Kidwai Nagar',  price: 599 },
        { name: 'The Cake Club', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/db7b3eb788170a0cad3d9d9b4f011143', rating: '4.8', time:'30-35 mins', location: 'Swaroop Nagar',  price: 399 },
        { name: 'Cake Home', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mlfyv3n3tv2ryjfi4esn', rating: '3.7', time:'35-40 mins', location: 'Kakadeo',  price: 899 },
        { name: 'Cake Cafe', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ihrip2xxifvyatypzzo0', rating: '4.5', time:'45-50 mins', location: 'Keshav Nagar',  price: 799 },
        { name: 'Pandit Bakery', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xtccfkpxq4nxomagfsq9', rating: '4.2', time:'50-55 mins', location: 'Harsh Nagar',  price: 999 },
        { name: 'Bikanerwala', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/db7b3eb788170a0cad3d9d9b4f011143', rating: '3.6', time:'25-35 mins', location: 'Chawla Market',  price: 1099 },
        { name: 'WarmOven', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/29/992e30aa-a27f-47b1-826c-f7c776dc18ef_642013.JPG', rating: '4.3', time:'45-50 mins', location: 'Kidwai Nagar',  price: 699 },
        { name: 'Vadilal IceCreme', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/3fb0b5c56d29759520d69213ba4fef8f', rating: '3.6', time:'35-45 mins', location: 'Govind Nagar',  price: 599 },
        { name: 'Cake House', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ga9ciwfrtmves1x9mckh', rating: '4.3', time:'45-455 mins', location: 'Juhi Kalan',  price: 759 },
      ]
    },
    {
      id: 4,
      name: 'Momos',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Momos.png',
      restaurants: [
        { name: 'WOW Momos', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/6/10/245e2274-ddd2-4ab3-8c1a-63bee769b6d7_ccd02d30-6618-4afb-834e-aacc0bbed853.jpeg', rating: '4.2', time:'40-45 mins', location: 'Kidwai Nagar',  price: 149 },
        { name: 'BABA Chains', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/8/8/eaf1fbf5-96b4-4dcc-be13-e21b2c45412b_2526fd85-0313-4498-8b27-4066ccaf4631.jpg', rating: '4.2', time:'40-45 mins', location: 'Kidwai Nagar',  price: 139 },
        { name: 'Khadak Singh ka Dhabba', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/455bfe72e4a979370683b460b7de54e9', rating: '3.5', time:'35-40 mins', location: 'Lajpat Nagar',  price: 79 },
        { name: 'Momo Shommo', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/6/14/aa3bd387-22cd-42aa-95ff-b0436ddb3cdd_be581c66-dd27-4f5a-8577-15881ba93e06.jpg', rating: '4.1', time:'45-50 mins', location: 'Kakadeo',  price: 69 },
        { name: 'Ganesh Bhojnalaya', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/4/22/f674aafd-8e31-4b19-845c-da212d42f0c9_56ec2671-248c-48eb-a931-6d27842aa55c.jpg', rating: '3.5', time:'50-55 mins', location: 'Karrai',  price: 49 },
        { name: 'Chaap De Phatte', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fcahkhf5l2odvhs5tfn3', rating: '3.2', time:'45-50 mins', location: 'Chawla Market',  price: 59 },
        { name: 'King of Spices', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/5/2/a53b6ca4-c694-4d7d-bdf1-abd3e8932bb3_207b7130-78c0-4f66-a923-7e9a2aa9c14a.jpg', rating: '4.5', time:'55-60 mins', location: 'Naveen Market',  price: 109 },
        { name: 'Kake Di Hatti', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/is8zufx7a1ozgbjnbstk', rating: '3.2', time:'35-40 mins', location: 'Swaroop Nagar',  price: 219 },
        { name: 'Kitchen Xpress', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/10/4cb97287-efd9-4104-9eaf-ccdf58dd1019_970948.JPG', rating: '4.6', time:'45-50 mins', location: 'Civil Lines',  price: 89 },
        { name: 'Pizza Company', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/9/7/4dd2f589-b017-4c3c-a3fb-22e6637e5929_3dd15a17-35fb-431b-af67-a4025e77a57a.JPG', rating: '3.1', time:'35-40 mins', location: 'Kakadeo',  price: 99 },
      ]
    },
    {
      id: 5,
      name: 'North Indian',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
      restaurants: [
        { name: 'Jai Ganesh Bhojnalaya', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/6/10/245e2274-ddd2-4ab3-8c1a-63bee769b6d7_ccd02d30-6618-4afb-834e-aacc0bbed853.jpeg', rating: '4.2', time:'40-45 mins', location: 'Kidwai Nagar',  price: 75 },
        { name: 'The Fusion Lounge', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/10/2/954c2491-fd38-41a4-96be-bcb7cc06e4c0_e8698216-0c28-408b-af67-ba741d1a102c.JPG', rating: '4.2', time:'40-45 mins', location: 'Kidwai Nagar',  price: 79 },
        { name: 'Biryani By kilo', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/17/73718e77-ac8e-4f5e-b17e-f33428b6159c_241296.jpg', rating: '3.7', time:'35-40 mins', location: 'Fazalganj',  price: 109 },
        { name: 'Chisti Foods', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/16400d2141cb4bc16ac6b79edfb89298', rating: '4.2', time:'40-45 mins', location: 'Chamanganj',  price: 149 },
        { name: 'Khadak Singh Ka Dhabba', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/8144bf37947c161953f656308d1bfc30', rating: '3.1', time:'30-40 mins', location: 'Lajpat Nagar',  price: 129 },
        { name: 'Dera Restaurant', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6b9e0f568107cf4b15318c8b2f0ffad4', rating: '4.4', time:'25-30 mins', location: 'Lal Bangla',  price: 119 },
        { name: 'Chai Garam Packet Cafe', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fcee676df41abe3fa8b474ece9d2b77d', rating: '4.7', time:'30-40 mins', location: 'Kakadeo',  price: 159 },
        { name: 'Anandeshwaram Cafe', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/kjjgtixp2kraa18a0yf9', rating: '3.5', time:'20-30 mins', location: 'Kakadeo',  price: 129 },
        { name: 'Royan Bites', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tyfo6zpqx15xnnjvkmmz', rating: '4.7', time:'35-40 mins', location: 'Shastri Nagar',  price: 179 },
        { name: 'Food Box', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mdj2nw5enfflhmzy1uqf', rating: '3.6', time:'25-30 mins', location: 'Swaroop Nagar',  price: 129 },
      ]
    },
    {
      id: 6,
      name: 'Poori',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poori.png',
      restaurants: [
        { name: 'Indian Coffee House', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar', rating: '4.2', time:'40-45 mins', location: 'Kidwai Nagar',  price: 176 },
        { name: 'Hotel Sai', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yzgqriufpzmloogcn2vl', rating: '4.2', time:'40-45 mins', location: 'Kidwai Nagar',  price: 198 },
        { name: 'Agarwal Foods', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6a13f6db2fbd7485ceba7199ae0c9f57', rating: '3.5', time:'30-45 mins', location: 'Chawla Market',  price: 139 },
        { name: 'Radhika Restaurant', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/16b5d313-31b1-4dde-8236-ba97b934fafa_882101.jpg', rating: '4.4', time:'30-45 mins', location: 'Ghantaghar',  price: 159 },
        { name: 'Swaad Foods', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/17/5a7edb99-553e-4de2-a5e1-589d186d213c_714691.jpg', rating: '4.3', time:'40-55 mins', location: 'Kidwai Nagar',  price: 169 },
        { name: 'Swad Fast Food', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mucna0mwtcovckxmnuip', rating: '3.1', time:'30-40 mins', location: 'Kidwai Nagar',  price: 119 },
        { name: 'Dawaat Food Express', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wrcnutkgydaybgluqgkz', rating: '2.6', time:'30-40 mins', location: 'Govind Nagar',  price: 139 },
        { name: 'Mahadev Foods', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qguec4a9srkoqidb7eu7', rating: '3.2', time:'20-30 mins', location: 'Dhanta Ghar',  price: 179 },
        { name: 'Chandani Sweets', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bbityvepfouutdofjnwq', rating: '4.6', time:'40-50 mins', location: 'Naveen Market',  price: 109 },
        { name: 'Shri Bhojnalaya', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/af8349c33cc194911e3870097f79b0d5', rating: '4.3', time:'20-30 mins', location: 'Vijaya Nagar',  price: 129 },
      ]
    },
    {
      id: 7,
      name: 'Pav Bhaji',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav%20Bhaji.png',
      restaurants: [
        { name: 'Shreenath Paao Bhaji', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fm3rs3g6z7ibfhesmxnu', rating: '4.2', time:'40-45 mins', location: 'Kidwai Nagar',  price: 134 },
        { name: 'Chai Point', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jqmzpcpabvfmnvavqao5', rating: '4.2', time:'40-45 mins', location: 'Kidwai Nagar',  price: 165 },
        { name: '', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fcee676df41abe3fa8b474ece9d2b77d', rating: '4.7', time:'30-35 mins', location: 'Kakadeo',  price: 259 },
        { name: '', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tyfo6zpqx15xnnjvkmmz', rating: '4.5', time:'45-50 mins', location: 'Shastri Nagar',  price: 209 },
        { name: '', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/5/2/3a4a0efe-4233-4dee-a3e7-0f9bd2375446_4283cbca-e468-4259-ac62-a0e06fbe7c3a.jpg', rating: '3.7', time:'30-35 mins', location: 'Naveen Market',  price: 159 },
        { name: '', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wa8a7irojeoame4wv9yi', rating: '3.2', time:'35-40 mins', location: 'Arya Nagar',  price: 289 },
        { name: '', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/at1pduh21u4efpsdyz8o', rating: '4.8', time:'30-35 mins', location: 'Tilak Nagar',  price: 299 },
        { name: '', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rapta3n3zlsuig8zgjrg', rating: '3.9', time:'35-40 mins', location: 'Shastri Nagar',  price: 159 },
        { name: '', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/10/11/abc04c9a-8d8e-4cf8-b9d3-11d536bd2957_381775f2-a330-4da4-a9c8-2bb9a375dd66.jpg', rating: '3.7', time:'30-35 mins', location: 'Yashoda Nagar',  price: 459 },
        { name: '', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/7/11/cec6842b-340a-4f6e-998e-65a296d99458_25817e32-f19b-40ff-ae2b-06f670482fda.jpg', rating: '3.7', time:'35-40 mins', location: 'Kidwai Nagar',  price: 259 },
      ]
    },
    {
      id: 8,
      name: 'Coffee',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_coffee.png',
      restaurants: [
        { name: 'Cafe 4 you', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2469fa88ee9b0b5d1366ba88f2a7fa7f', rating: '4.2', time:'40-45 mins', location: 'Kidwai Nagar',  price: 259 },
        { name: 'Indian Coffee House', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/csydbpxxnzheyxer7rcl', rating: '4.2', time:'40-45 mins', location: 'Kidwai Nagar',  price: 309 },
        { name: 'Namaste India', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/622b005dea0df685cca0a3b6e20ed643', rating: '3.6', time:'35-40 mins', location: 'Kakadeo',  price: 149 },
        { name: 'Keventers', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/4/18/bb12ccc5-0ad2-4c4e-a735-ef2bf178dd41_097e5854-40bb-416f-a108-078184baa3ad.jpg', rating: '4.6', time:'45-50 mins', location: 'Shastri Nagar',  price: 129 },
        { name: 'Baskin Robin', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e1d8067cfdf3d59c6c5f2cd07aac89f8', rating: '4.6', time:'20-35 mins', location: 'Naveen Market',  price: 119 },
        { name: 'Havmor', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ikee7lxhresbvr5ljmgr', rating: '3.8', time:'35-40 mins', location: 'Arya Nagar',  price: 159 },
        { name: 'Vadilal', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/awinnk9epdtoynpzzfeo', rating: '4.4', time:'20-35 mins', location: 'Chawla Market',  price: 129 },
        { name: 'Pizza Place', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/19/a9203687-9d15-447c-8be9-a64439f837be_928357.jpg', rating: '3.2', time:'35-40 mins', location: 'Shastri Nagar',  price: 169 },
        { name: 'GetAWay', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/5/92053949-5c37-4fac-85d7-378c16bd6047_580615.jpg', rating: '4.1', time:'30-40 mins', location: 'Kidwai Nagar',  price: 129 },
        { name: 'NIC Ice Cream', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85825a6d74b1059a63a9b688de9f67ce', rating: '3.5', time:'40-45 mins', location: 'Ratan lal Nagar',  price: 169 },
      ]
    },
    {
      id: 9,
      name: 'Kebabs',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Kebabs.png',
      restaurants: [
        { name: 'Rajbaagh Restaurant', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/10/9/03ada52c-3948-4c44-82a4-3eff390ee400_e087a733-6611-4ff0-9518-01bca6742f02.JPG', rating: '4.2', time:'40-45 mins', location: 'Kidwai Nagar',  price: 199 },
        { name: 'Infinity By Scoops', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xdcnqddemgovxihdpetk', rating: '4.2', time:'40-45 mins', location: 'Kidwai Nagar',  price: 189 },
        { name: 'Biryani By Kilo', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/17/73718e77-ac8e-4f5e-b17e-f33428b6159c_241296.jpg', rating: '3.4', time:'40-55 mins', location: 'Fazalganj',  price: 359 },
        { name: 'Dera restaurant', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/3/16/913f83eb-c3cd-47f0-a682-4bbf4923477d_c436659b-0467-4b4f-8dac-519a84101fc6.jpg', rating: '4.6', time:'35-40 mins', location: 'Lal Bangla',  price: 449 },
        { name: 'Amritrari Haveli', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/10/16/254d6611-ffdb-41a2-93a4-93001d2effed_df25d427-956d-45dd-a7db-7ec3bc20e999.jpg', rating: '3.4', time:'40-55 mins', location: 'Ashok Nagar',  price: 519 },
        { name: 'Desi Palette', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lulygeogw85nvjumfyh5', rating: '4.7', time:'25-30 mins', location: 'Tilak Nagar',  price: 439 },
        { name: 'Butter Boy', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1f55e098ef47d4f5e286c471793371ad', rating: '4.6', time:'45-50 mins', location: 'Swaroop Nagar',  price: 549 },
        { name: 'Pintu Egg Corner', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/10/14/26bd63e4-6772-42f9-95cd-c0073a104306_b949e851-4589-41ba-94db-71492106e980.jpg', rating: '3.4', time:'30-45 mins', location: 'Arya Nagar',  price: 449 },
        { name: 'Food Carnival', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wa8a7irojeoame4wv9yi', rating: '4.3', time:'25-30 mins', location: 'Arya Nagar',  price: 369 },
        { name: 'Tequilla Terrace', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/7/4/23d1e264-3fbf-440a-9f1c-48f9c9a34626_f5b4b454-1e3d-4eba-85a8-39e5092586f2.jpg', rating: '3.4', time:'40-45 mins', location: 'Kakadeo',  price: 359 },
      ]
    },
    {
      id: 10,
      name: 'Gulab Jamun',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Gulab%20jamun.png',
      restaurants: [
        { name: 'Satkar Restaurant', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zibx2nvhjqws0qaph4k3', rating: '4.2', time:'40-45 mins', location: 'Kidwai Nagar',  price: 29 },
        { name: 'Sriji Corner', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/4/9/370b6b18-8ff2-487a-b2c7-f57f2350168b_7079038a-77fc-41df-b97b-3047f6270d54.JPG', rating: '4.2', time:'40-45 mins', location: 'Kidwai Nagar',  price: 29 },
        { name: 'Biryani By Kilo', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pbocjplbelzvijyzx1aw', rating: '3.1', time:'20-30 mins', location: 'Ashok Nagar',  price: 39 },
        { name: 'New Mogli Sweets', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/hu1rrm6n0fkbxhnbo62d', rating: '4.3', time:'30-35 mins', location: 'Swaroop Nagar',  price: 29 },
        { name: 'Gyan Vaishnav Restaurant', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/f3hrrjnxfti0seobivpl', rating: '3.3', time:'20-40 mins', location: 'Kidwai Nagar',  price: 39 },
        { name: 'Shri Bhojnalaya', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/11/6b65a96a-fdfd-4e90-925b-1eeb966f0044_2895113e-37b9-48c6-b76e-c9983842a5ec.jpg', rating: '4.6', time:'30-35 mins', location: 'Chawla Market',  price: 29 },
        { name: 'Ganesh Shankar Bhojnalaya', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/mz5jrcginlovfu82rcf4', rating: '4.2', time:'35-40 mins', location: 'Sanjay Van',  price: 39 },
        { name: 'YLB Foods', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/11/92bfde2c-16bd-4699-b1bd-600be4d8ae24_8afb6568-88c9-4867-bf1a-2de9100dfbd3.jpg', rating: '3.6', time:'20-35 mins', location: 'Kailash Parbat',  price: 29 },
        { name: 'MVR Hotel', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/28/25cf2fae-8c03-4fd9-b655-0d6071fd1f85_a1a37ccb-f662-42e1-881b-e37e573433a8.png', rating: '4.7', time:'25-30 mins', location: 'Zaitoon',  price: 39 },
        { name: 'WOW Momo', restImageURL: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/20/8077652f-66b8-4f11-96f2-a3f9a9c607e0_69e67a0e-3f54-4d08-aefe-de3c23122023.jpg', rating: '3.2', time:'30-40 mins', location: 'Chillers',  price: 29 },
      ]
    },
  ];

  constructor() { }

  getDishes(): Dish[] {
    return this.dishes;
  }

  getDishById(id: number): Dish | undefined {
    return this.dishes.find(dish => dish.id === id);
  }
}
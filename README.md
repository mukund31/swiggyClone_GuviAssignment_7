# Swiggy Clone Project GUVI Assignment 7

## Overview
This project is a Swiggy clone built using Angular and Tailwind CSS, aimed at providing a seamless food ordering experience similar to the popular food delivery service, Swiggy. The application features a modern user interface with functionalities like browsing dishes and restaurants, adding items to the cart, managing favorites, placing orders, and viewing order history.

## Features
- **Home Page**: Displays featured dishes and popular restaurants.
- **Search Functionality**: Allows users to search for dishes and view them in a new component.
- **Dish and Restaurant Details**: Detailed information about individual dishes and restaurants. Data is stored in angular services.
- **Cart Management**: Add, update, and remove items from the cart; place orders and clear the cart on successful order placement. Data is stored in local storage.
- **Favorites Management**: Add and remove items from the favorites section, stored in local storage.
- **Order History**: View past orders, fetched from a mock API. (Login required)
- **Responsive Design**: Implemented using Tailwind CSS for a mobile-friendly layout.
- **User Authentication**: Simple authentication service integrated for login checks using mockAPI.

## Technologies Used
- **Angular**: For building a dynamic, single-page application.
- **Tailwind CSS**: For quick and responsive UI design.
- **TypeScript**: For type safety and enhanced development experience.
- **Local Storage**: For persisting cart and favorites data.
- **Angluar Services**: For storing restaurant and dishes data.
- **Mock API**: Used to simulate server interaction for fetching order data.

## Project Structure
```plaintext
src
│
├── app                           # Main folder containing the application logic
│   ├── components                # Reusable UI components for different parts of the application
│   │   ├── dish                  # Component for displaying an individual dish
│   │   ├── dish-details          # Component to show detailed information about a dish
│   │   ├── dishes-section        # Component for showcasing a section of multiple dishes
│   │   ├── footer                # Footer component for the bottom section of the page
│   │   ├── navbar                # Navigation bar component containing links and branding
│   │   ├── restaurant            # Component for displaying an individual restaurant item
│   │   ├── restaurant-details    # Component for showing detailed information about a restaurant
│   │   ├── restaurant-section    # Component displaying a section of restaurants
│   │
│   ├── pages                     # Pages that represent different views or routes of the application
│   │   ├── cart-page             # Page showing the user's shopping cart
│   │   ├── favourites-page       # Page for displaying favorite dishes or restaurants
│   │   ├── home                  # The home page, typically the landing page of the application
│   │   ├── order-history-page    # Page displaying the user's past orders
│   │
│   ├── services                  # Services to handle business logic and API interactions
│   │   ├── authservice           # Service managing authentication (e.g., login, registration)
│   │   ├── dishes                # Service managing dish-related data and API calls
│   │   ├── restaurants           # Service managing restaurant-related data and API calls
│
│   ├── app.component.html        # HTML template for the root component of the app
│   ├── app.component.scss        # Styles for the root component
│   ├── app.component.ts          # TypeScript logic for the root component
│   ├── app.config.ts             # Configuration file for the app (settings, constants, etc.)
│   ├── app.routes.ts             # Routing configuration for the app's navigation and routes
│
├── index.html                    # Main HTML entry point for the Angular application
├── main.ts                       # Main entry file for bootstrapping the Angular app
├── styles.scss                   # Global styles for the entire application, includes Tailwind setup

```

## Usage
- **Sign Up**: Create Login Credentials. Entered credentials are store in mockAPI.
- **Login**: Use pre created credentials to login. The details entered are checked with mockAPI users data to allow login.
- **Search**: Enter a keyword in the search bar and click the search button to view matching dishes.
- **Add to Cart/Favorites**: Click on dishes or restaurants to add them to your cart or favorites (Login Required).
- **Order Placement**: Once items are in the cart, proceed to place an order by selecting appropriate delivery address and the details for order are sent to mockAPI. (Login Required)
- **View Order History**: Access past orders on the order history page. Data is stored and fetched from mockAPI.

---
## Project Screenshots
### Landing Page
![image](https://github.com/user-attachments/assets/88b524dd-d546-420a-8dcb-dd964d30f8f9)

### Login Screen
![image](https://github.com/user-attachments/assets/bd8b7b0a-890c-45e5-b7df-77e056f9e0fb)

### Sign Up Screen
![image](https://github.com/user-attachments/assets/36bd3f96-9011-45a9-8466-8d4ace39b742)

### Users Login Credentials in mockAPI
![image](https://github.com/user-attachments/assets/2f4cd65e-cc75-4416-8766-397612456d44)

### Logged in user Homepage
![image](https://github.com/user-attachments/assets/f63e6699-f830-4df1-8520-76e6871cb23f)

### Restaurant List Page for each dish 
![image](https://github.com/user-attachments/assets/f588a270-dd6c-4a8f-94f3-ac43dce71c36)

### Available dishes page for each restaurant
![image](https://github.com/user-attachments/assets/d1da7bcf-7a25-43ca-b102-735892da58c1)

### Search Item
![image](https://github.com/user-attachments/assets/6b9083b1-b240-44a0-973f-3f8b67430de3)
![image](https://github.com/user-attachments/assets/d0719347-bbc5-46a8-afb9-c6ac58c73e0f)

### Favourities Page
![image](https://github.com/user-attachments/assets/bec686a4-6f5d-4bdd-9e73-6d2ae3a9c637)

### Cart Page
![image](https://github.com/user-attachments/assets/4f7b8935-add9-47d8-8d8e-868e258baf60)

### Orders Data sent to mock API
![image](https://github.com/user-attachments/assets/4e5fd798-9abb-4f20-be19-ad462c125bdd)

### Order History
![image](https://github.com/user-attachments/assets/3772e2fc-9b73-4cb9-bbd9-3458a0367b6a)

### Footer Section
![image](https://github.com/user-attachments/assets/79bf75de-043d-49f2-812d-7c4599cd1e68)

---
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
#

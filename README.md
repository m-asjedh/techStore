# 🛒 **Tech Store E-commerce App**

A simple React-based e-commerce app that includes user authentication, a shopping cart, and the ability to checkout. This app uses **Vite** as the build tool and **Tailwind CSS** for styling. All authentication and cart data is stored in **local storage** for persistence across page reloads. **GSAP** is used for animations to enhance the user experience. The **useContext** hook is utilized for managing the login state and cart details throughout the application, making it easy to handle user authentication and the shopping cart across different pages.

---

## 🚀 **Tech Stack**
- **React**: Frontend library
- **Vite**: Build tool
- **Tailwind CSS**: For styling
- **React Router**: Client-side routing for navigation between pages
- **Local Storage**: Persists cart and authentication state across page reloads
- **Search & Filter**: Allows searching products by name or price
- **React Pagination**: Paginate product listings
- **GSAP**: Animation library for smooth transitions and effects

---

## 🧑‍💻 **Features**

### **User Authentication** 🔐
- **Sign Up**: Users can register with a name, email, and password.
- **Login**: After signing up, users can log in with the same credentials.

### **Product Management** 🛍️
- **Product List**: View a list of products with details such as name, price, and description.
- **Add to Cart**: 
  - Click the "Add to Cart" button to add products directly to the cart.
  - Or click on the product image to view more details, select the quantity, and add to cart.

### **Shopping Cart** 🛒
- **View Cart**: View all the products added to the cart, including quantity and price.
- **Update Quantity**: Increase or decrease the quantity of items.
- **Remove Items**: Remove products from the cart. The total price updates automatically based on the quantity and removed items.

### **Checkout** 💳
- **Proceed to Checkout**: Click on the "Checkout" button to navigate to the checkout page.
- **Select Payment Type**: Choose your preferred payment method during the checkout process.

### **Account Management** 👤
- **Sign Out**: Log out from your account and redirect to the sign-in page.

### **Persistence** 📦
- **Local Storage**: The login state and cart details are stored in local storage, ensuring data persists even after page reloads.

---

## 🛠️ **Getting Started**

Follow the instructions below to get the app up and running on your local machine:

1. ### `git clone https://github.com/m-asjedh/techStore.git`
2. ### `cd techStore`
3. ### `npm install`
4. ### `npm run dev`


## 🛠️ **Video of Using the application**
https://github.com/user-attachments/assets/768f0489-6453-4b7d-bf55-94b10d73696d



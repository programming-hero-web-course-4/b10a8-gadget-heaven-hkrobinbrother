# GadgetHeaven✨

**Your go-to destination for the latest and greatest gadgets!**

Welcome to **GadgetHeaven**, a responsive e-commerce platform for gadget lovers. From computers to chargers, we provide a smooth, categorized browsing experience, complete with a shopping cart, wishlist, and sorting features for an engaging user journey.

## 📺 Live Website
- [GadgetHeaven Live Website](https://gadget-heaven-1.netlify.app/)



## 🛠️ Technologies & Tools
- **React**: Used for building the component-based UI.
- **React Router**: For handling navigation and routing across different pages.
- **Context API & LocalStorage**: For managing cart and wishlist states with data persistence.
- **Figma Design**: Followed detailed Figma mockups to create a visually consistent and responsive platform.

## 🚀 React Fundamentals Used
1. **useState** - To manage component state like cart, wishlist, etc.
2. **useEffect** - For data fetching from JSON and other side effects.
3. **useContext** - To manage global states for cart and wishlist via Context API.
4. **useLocation** - To implement conditional styles based on routes.
5. **useNavigate** - For navigation upon successful purchase or other actions.
6. **Custom Hooks** - For optimized data and state management (optional but recommended for advanced users).

## 🗄️ Data Handling and Management
We’ve used **Context API** in combination with **LocalStorage** to manage and persist data across sessions. The Context API enables global state management for cart and wishlist, while LocalStorage ensures that data persists even after refreshing the page.

## 🌟 Key Features
1. **Responsive Navbar & Footer** 🧭 - The website features a structured, consistent Navbar and Footer across all pages, with active route indication and no errors on reload.
2. **Interactive Home Page** 🏠 - A dynamic banner, sidebar categories, and gadgets displayed in a grid format make for a welcoming home page. Clicking a gadget opens its details page.
3. **Cart & Wishlist Management** 🛒❤️ - Items can be added to a cart or wishlist from the details page, with toasts notifying the user of each action. Wishlist buttons are disabled once an item is added to prevent duplicates.
4. **Detailed Product Pages** 📄 - Each gadget has its own page with complete details, including an image, price, rating, and specifications, enhancing the user experience.
5. **Purchase Modal & Sort Feature** 🛍️ - The cart page features a sorting button for descending price order and a purchase button with a congratulatory modal.

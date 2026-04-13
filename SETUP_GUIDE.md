## Nirali's Crafted Wonders - Quick Setup Guide 🚀

### ✅ Project Created Successfully!

Your complete React website for "Nirali's Crafted Wonders" has been set up with all the features you requested.

---

## 🎯 What's Been Created

### ✨ Pages (5 Complete Pages)
1. **Home Page** (`src/pages/Home.jsx`)
   - Hero section with brand tagline: "Not every gift should be just opened… Some should be felt."
   - Featured products showcase
   - Testimonials section with customer reviews
   - Instagram-style gallery preview
   - Call-to-action buttons

2. **Products Page** (`src/pages/Products.jsx`)
   - Dynamic product listing
   - Filter by category (Gift Boxes, Scrolls, Custom Hampers)
   - Search functionality
   - Responsive grid layout
   - Mobile-friendly filters

3. **Product Detail Page** (`src/pages/ProductDetail.jsx`)
   - Product image carousel
   - Full product description
   - Customization options form
   - WhatsApp ordering integration
   - Related products section

4. **About Page** (`src/pages/About.jsx`)
   - Brand story and mission
   - Company statistics
   - Core values showcase
   - Creative process explanation

5. **Contact Page** (`src/pages/Contact.jsx`)
   - Contact form
   - Contact information
   - **Build Your Own Gift Feature** - Select items and create custom hampers
   - Real-time order summary with pricing

### 🎨 Reusable Components (7 Components)
- **Navbar** - Sticky navigation with mobile menu
- **Footer** - Contact info and links
- **ProductCard** - Reusable product card with hover effects
- **Button** - Multiple variants and sizes
- **TestimonialCard** - Customer testimonial display
- **SectionTitle** - Animated section headings
- **NotFound** - 404 error page

### 🎁 Mock Data
- **9 Product Listings** with images, descriptions, prices, and features
- **4 Customer Testimonials** with ratings
- **3 Product Categories**

### 🎨 Design Features
✅ Pastel color palette (cream, blush pink, soft pink, gold)
✅ Smooth animations (Framer Motion)
✅ Luxury feel with premium styling
✅ Clean UI with ample spacing
✅ Fully responsive design
✅ Sticky navbar

---

## 📋 Installation & Setup Steps

### Step 1: Install Dependencies
```bash
cd e:\niralis-crafted-wonders\niralis-crafted-wonders
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```
The site will automatically open at `http://localhost:3000`

### Step 3: Build for Production
```bash
npm run build
```

---

## 🔄 How to Customize

### 1. Update WhatsApp Number
Replace `919876543210` with your actual WhatsApp number in:
- `src/components/ProductCard.jsx`
- `src/pages/ProductDetail.jsx`
- `src/pages/Contact.jsx`
- `src/components/Footer.jsx`

### 2. Update Brand Info
- **Logo/Brand Name**: Edit in `src/components/Navbar.jsx`
- **Contact Details**: Update in `src/components/Footer.jsx` and `src/pages/Contact.jsx`
- **Brand Story**: Edit in `src/pages/About.jsx`
- **Social Media Links**: Update Instagram link in Footer and Home page

### 3. Add More Products
Open `src/data/products.js` and add new products with this format:
```javascript
{
  id: 10,
  name: "Product Name",
  category: "Gift Boxes", // or "Scrolls" or "Custom Hampers"
  price: 4999,
  image: "https://image-url.jpg",
  description: "Product description",
  customization: true,
  features: ["Feature 1", "Feature 2", "Feature 3"],
}
```

### 4. Change Colors
Edit `tailwind.config.js` to modify the color palette:
```javascript
colors: {
  'cream': '#FAF8F3',        // Background
  'blush': '#F5E6E0',       // Primary accent
  'soft-pink': '#FFE4E1',   // Light accent
  'gold': '#D4AF37',        // Highlight color
  // ... etc
}
```

---

## 🌐 Connecting to a Backend

The project is structured to easily integrate with a backend:

### Option 1: Using Environment Variables
Create a `.env` file:
```
VITE_API_URL=https://your-api.com
```

### Option 2: Create an API Service
Create `src/services/api.js`:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  return response.json();
};

export const createOrder = async (orderData) => {
  const response = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData),
  });
  return response.json();
};
```

### Option 3: Firebase Integration
```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase config
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

---

## 📱 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero section |
| `/products` | Products | Product listing with filters |
| `/product/:id` | Product Detail | Individual product page |
| `/about` | About | Brand story and information |
| `/contact` | Contact | Contact form & custom gift builder |
| `/*` | 404 | Page not found |

---

## 🎁 Special Features

### 1. **WhatsApp Integration**
All order buttons pre-fill WhatsApp messages with:
- Product details
- Customization options
- Price information
- Customer name and phone

### 2. **Build Your Own Gift**
Users can:
- Select multiple items
- See real-time total pricing
- Create custom hampers
- Order directly via WhatsApp

### 3. **Product Customization**
For each product, users can:
- Enter recipient's name
- Select occasion
- Add custom message

### 4. **Favorite Button**
Users can save favorite products (styling implemented, data persistence can be added)

### 5. **Search & Filter**
- Search by product name or description
- Filter by category
- Clear filters functionality

---

## 🚀 Deployment Options

### Vercel (Recommended for Vite)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Open https://app.netlify.com and drag & drop the 'dist' folder
```

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder to gh-pages
```

---

## 📚 Technologies Used

- **React 18** - UI library
- **Vite** - Fast build tool
- **React Router v6** - Navigation
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

---

## 🎯 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start project: `npm run dev`
3. ✅ Customize brand information
4. ✅ Update WhatsApp number
5. ✅ Add your products to `src/data/products.js`
6. ✅ Connect to your backend API
7. ✅ Deploy to your preferred platform

---

## 📞 Useful Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Package updates
npm outdated         # Check for updates
npm update           # Update packages
```

---

## 💡 Tips & Best Practices

1. **Product Images**: Use high-quality images (preferably 500x500px)
2. **Mobile Testing**: Use browser DevTools to test responsive design
3. **Performance**: Optimize images before adding to products
4. **SEO**: Update meta tags in `index.html`
5. **Accessibility**: The site uses semantic HTML and accessible components

---

## 🎨 Customization Examples

### Change Primary Color from Blush to Another Color
1. Open `tailwind.config.js`
2. Change color values
3. Update component usage (e.g., `className="text-blush"` → `className="text-your-color"`)

### Add Category
1. Add to `products` array in `src/data/products.js`
2. It will automatically appear in filters

### Add Testimonial
1. Add to `testimonials` array in `src/data/products.js`

---

## ⚠️ Important Notes

- WhatsApp number needs to be updated before going live
- Product images are from Unsplash (replace with your own)
- Form submissions are logged to console (connect to backend for real submissions)
- Favorite feature is UI-only (add localStorage or backend for persistence)

---

**Your website is ready to showcase beautiful, personalized gifts! ✨**

Need help? Check the code comments or modify components as needed.

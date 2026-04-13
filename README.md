# Nirali's Crafted Wonders 🎁✨

A modern, responsive, and dynamic React website for a premium personalized gifting brand. Built with React, Vite, Tailwind CSS, and Framer Motion.

## 🌟 Features

### Pages
- **Home Page** - Hero section with brand tagline, featured products, testimonials, and Instagram-style gallery preview
- **Products Page** - Dynamic product listing with filtering by category and search functionality
- **Product Detail Page** - Product images carousel, customization options, and WhatsApp ordering
- **About Page** - Brand story, values, and creative process
- **Contact Page** - Contact form, information, and "Build Your Own Gift" feature

### Key Features
- ✨ Smooth animations powered by Framer Motion
- 📱 Fully responsive design (mobile-first approach)
- 🎨 Premium aesthetic with pastel color palette
- 🛍️ Dynamic product filtering and search
- 💬 WhatsApp integration for orders
- 🎁 Custom gift builder for personalized hampers
- ⭐ Testimonials and social proof
- 🌐 Modern, clean UI with lots of spacing
- ♥️ Sticky navbar for easy navigation
- 🖼️ Instagram-style gallery preview

## 🎨 Design System

### Color Palette
- **Cream**: #FAF8F3 (Primary background)
- **Blush Pink**: #F5E6E0
- **Soft Pink**: #FFE4E1
- **Gold**: #D4AF37 (Accent)
- **Light Gold**: #E8D9B5
- **Dark Gray**: #4A4A4A (Text)
- **Warm Beige**: #F5EEE8

### Typography
- **Serif Font**: Playfair Display (headings)
- **Sans Serif Font**: Poppins (body text)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd niralis-crafted-wonders
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The application will open in your browser at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/              # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Button.jsx
│   ├── ProductCard.jsx
│   ├── TestimonialCard.jsx
│   ├── SectionTitle.jsx
│   ├── NotFound.jsx
│   └── index.js
├── pages/                   # Page components
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetail.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── index.js
├── data/                    # Mock data
│   └── products.js
├── App.jsx                  # Main app component with routing
├── main.jsx                 # Entry point
└── index.css               # Global styles and Tailwind imports

public/
└── (static assets)

package.json
tailwind.config.js
postcss.config.js
vite.config.js
index.html
```

## 🔧 Technologies Used

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **PostCSS & Autoprefixer** - CSS processing

## 📦 Available Routes

- `/` - Home page
- `/products` - Products listing page
- `/product/:id` - Individual product detail page
- `/about` - About brand page
- `/contact` - Contact and custom gift builder page
- `/*` - 404 Not Found page

## 🎯 Key Components

### Navbar
- Sticky navigation bar
- Mobile-responsive hamburger menu
- Logo and navigation links
- Smooth animations

### ProductCard
- Product image with hover effects
- Favorite button
- Quick preview of features
- "Customize & Order" button
- Price display

### Button
- Multiple variants (primary, secondary, outline, gold)
- Multiple sizes (sm, md, lg)
- Smooth hover and tap animations
- Framer Motion integration

### SectionTitle
- Animated section headings
- Optional subtitle
- Centered or left-aligned options

## 🎁 Build Your Own Gift Feature

On the Contact page, users can:
1. Select from multiple gift items
2. Customize their selection
3. See real-time order summary with pricing
4. Place order instantly via WhatsApp

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔐 WhatsApp Integration

All order buttons are integrated with WhatsApp API for:
- Direct messaging to the business
- Pre-filled order details
- Product customization information
- Customer details

Update the WhatsApp number in components by replacing `919876543210` with your actual WhatsApp number.

## 🎨 Customization

### Update Brand Information
- Logo and brand name in `Navbar.jsx`
- Brand story in `About.jsx`
- Contact details in `Contact.jsx`, `Footer.jsx`, and Navbar
- Colors in `tailwind.config.js`

### Add New Products
Edit `src/data/products.js` to add new products:

```javascript
{
  id: 10,
  name: "Product Name",
  category: "Category Name",
  price: 9999,
  image: "image-url",
  description: "Product description",
  customization: true,
  features: ["Feature 1", "Feature 2"],
}
```

### Change Color Scheme
Edit `tailwind.config.js` theme colors to match your brand:

```javascript
colors: {
  'cream': '#FAF8F3',
  'blush': '#F5E6E0',
  // ... add more colors
}
```

## 📈 Performance Optimizations

- Code splitting with React Router
- Lazy loading of images
- Optimized animations with Framer Motion
- Tailwind CSS for minimal CSS output
- Responsive images with srcset support

## 🔄 Connecting to Backend

The app is structured to easily connect to a backend API:

1. **Replace mock data** - Replace `products` data in `src/data/products.js` with API calls
2. **Add API service** - Create `src/services/api.js` for backend calls
3. **Update queries** - Replace static product queries with dynamic API calls
4. **Authentication** - Add auth tokens to API requests as needed
5. **Database** - Connect to Firebase, MongoDB, or any backend service

Example API integration pattern:
```javascript
// src/services/api.js
export const fetchProducts = async () => {
  const response = await fetch('/api/products');
  return response.json();
};

// In component
const [products, setProducts] = useState([]);
useEffect(() => {
  fetchProducts().then(setProducts);
}, []);
```

## 🌐 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

## 📝 License

This project is created for Nirali's Crafted Wonders.

## 🤝 Contributing

For contributions, please follow the existing code style and structure.

## 📞 Support

For questions about customization, contact: hello@niraliwonders.com

---

**Made with ❤️ for thoughtful gifting** ✨
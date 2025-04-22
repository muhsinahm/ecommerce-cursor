# StyleHub E-commerce Website

A modern and responsive e-commerce website built with Next.js and TailwindCSS. This project provides a complete shopping experience with product listings, categories, and cart functionality.

![StyleHub E-commerce](./public/screenshot.jpg)

## Features

- 📱 Fully responsive design that works on all device sizes
- 🏷️ Product categories for men and women
- 🛍️ Product listing pages with filtering options
- 🔎 Detailed product pages with related products
- 🛒 Shopping cart functionality
- 💻 Modern UI with clean design

## Technology Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: TailwindCSS
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/stylehub-ecommerce.git
cd stylehub-ecommerce
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

### Alternative Setup

If you're having issues with Node.js installation, you can use the provided setup script:

```bash
./setup.sh
```

## Project Structure

```
stylehub-ecommerce/
├── public/            # Static assets
│   └── images/        # Product and category images
├── src/
│   ├── app/           # Next.js app directory
│   │   ├── cart/      # Shopping cart page
│   │   ├── product/   # Product detail pages
│   │   └── products/  # Product listing pages
│   ├── components/    # Reusable React components
│   ├── data/          # Mock data for products
│   └── types/         # TypeScript type definitions
├── package.json       # Project dependencies
├── tailwind.config.js # TailwindCSS configuration
└── README.md          # Project documentation
```

## Key Features Implemented

1. **Home Page**: Featuring a hero section, category navigation, and featured products
2. **Category Pages**: Separate pages for men's and women's collections
3. **Product Detail Pages**: Detailed view of each product with size/color options
4. **Shopping Cart**: Full cart functionality with quantity adjustment
5. **Responsive Design**: Looks great on mobile, tablet, and desktop

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- TailwindCSS for the utility-first CSS framework
- React Icons for the beautiful SVG icons
- Next.js team for the amazing framework 
# Istanbul Tourist Pass - Next.js Project

A fast, modern travel website built with Next.js 14, PrimeReact, and TypeScript for Istanbul Tourist Pass.

## Features

- ⚡ **Fast Performance** - Server-side rendering with Next.js App Router
- 🎨 **Modern UI** - PrimeReact components with clean design
- 📱 **Responsive** - Mobile-first responsive design
- 🖼️ **Optimized Images** - Next.js Image component for fast loading
- 🔄 **Dynamic Data** - API routes for fetching dynamic content
- 🎯 **TypeScript** - Full type safety

## Tech Stack

- **Next.js 14** - React framework with App Router
- **PrimeReact** - UI component library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
/app
  /api/destinations   # API route for dynamic data
  /components         # React components
    - Header.tsx      # Navigation header
    - Footer.tsx      # Footer component
    - HeroSection.tsx # Hero section with search
    - CardGrid.tsx    # Destination cards grid
  /lib
    - api.ts          # Data fetching functions
  /types
    - index.ts        # TypeScript types
  /page.tsx           # Homepage
  /layout.tsx         # Root layout
/public
  /images             # Image assets
```

## Adding Images

Place your images in `/public/images/` directory. The application expects:

- `hero.jpg` - Hero section image
- `antalya.jpg`, `cappadocia.jpg`, `istanbul.jpg`, etc. - Destination images

See `/public/images/README.md` for more details.

## Dynamic Data

The application fetches data from `/api/destinations` endpoint. You can:

1. **Use Mock Data** - Currently uses mock data from `app/lib/api.ts`
2. **Connect to Real API** - Update `fetchDestinations()` in `app/lib/api.ts` with your API endpoint
3. **Use API Route** - Data is served from `app/api/destinations/route.ts`

## Customization

### Colors

Edit `app/globals.css` to customize the color scheme.

### PrimeReact Theme

Change the theme in `app/layout.tsx`:
```tsx
import "primereact/resources/themes/lara-light-blue/theme.css";
```

Available themes: `lara-light-blue`, `lara-dark-blue`, `lara-light-indigo`, etc.

### Travel Theme Colors

The site uses orange/red gradient colors (orange-500 to red-500) matching travel website aesthetics. You can customize these in:
- Component files (Tailwind classes)
- `app/globals.css` (PrimeReact button overrides)

### Components

All components are in `/app/components/` and can be easily customized.

## Performance Tips

- Images are automatically optimized by Next.js
- Server Components are used by default for better performance
- API responses are cached (1 hour revalidation)
- Lazy loading for below-fold images

## License

MIT

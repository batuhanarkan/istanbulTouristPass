# Quick Start Guide

## 🚀 Getting Started

1. **Install dependencies** (already done):
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📸 Adding Images

The site will work without images (shows gradient placeholders), but for best results:

1. Add images to `/public/images/`:
   - `hero.jpg` (1200x600px recommended)
   - `gre.jpg`, `toefl.jpg`, `praxis.jpg`, `sat.jpg`, `toeic.jpg`, `gre-subject.jpg` (400x300px each)

2. Images are automatically optimized by Next.js

## 🔄 Dynamic Data

### Current Setup
- Data comes from `app/lib/api.ts` (mock data)
- API endpoint: `/api/tests` serves the data

### Connect to Real API
Edit `app/lib/api.ts` and update the `fetchTests()` function:

```typescript
export async function fetchTests(): Promise<TestItem[]> {
  const response = await fetch('YOUR_API_ENDPOINT');
  return response.json();
}
```

## 🎨 Customization

### Change Colors
Edit `app/globals.css` and update Tailwind classes in components.

### Change PrimeReact Theme
Edit `app/layout.tsx`:
```typescript
import "primereact/resources/themes/YOUR_THEME/theme.css";
```

Available themes: `lara-light-blue`, `lara-dark-blue`, `lara-light-indigo`, `lara-dark-indigo`, etc.

## 📁 Project Structure

```
app/
  ├── api/tests/route.ts    # API endpoint
  ├── components/           # React components
  ├── lib/api.ts            # Data fetching
  ├── types/index.ts        # TypeScript types
  ├── page.tsx              # Homepage
  └── layout.tsx            # Root layout
```

## ✅ Features

- ✅ Fast Server-Side Rendering
- ✅ Optimized Images
- ✅ Responsive Design
- ✅ Dynamic Data Support
- ✅ TypeScript
- ✅ PrimeReact Components

## 🐛 Troubleshooting

**Images not showing?**
- Check that images are in `/public/images/`
- The site will show gradient placeholders if images are missing

**Build errors?**
- Run `npm run build` to check for errors
- Make sure all dependencies are installed

**API not working?**
- Check `app/lib/api.ts` for correct endpoint
- Verify API route at `/api/tests` is accessible


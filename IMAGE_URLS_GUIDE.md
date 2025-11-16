# Image URLs from istanbultouristpass.com

## Current Setup

The project is configured to load images directly from `istanbultouristpass.com`. The image paths are set in `app/lib/api.ts` using the pattern:

```
https://istanbultouristpass.com/wp-content/uploads/[category]/[image-name].jpg
```

## How to Find Actual Image URLs

### Method 1: Browser Developer Tools (Recommended)

1. Open https://istanbultouristpass.com/ in Chrome/Firefox
2. Press `F12` to open Developer Tools
3. Go to the **Network** tab
4. Filter by **Img** (images only)
5. Refresh the page or navigate to different sections
6. Look for image requests from `istanbultouristpass.com`
7. Right-click on any image → **Copy** → **Copy link address**

### Method 2: Inspect Element

1. Right-click on any image on the website
2. Select **Inspect** or **Inspect Element**
3. In the HTML, find the `<img>` tag
4. Look for the `src` attribute - this is the image URL
5. Copy the full URL

### Method 3: View Page Source

1. Right-click on the page → **View Page Source**
2. Press `Ctrl+F` (or `Cmd+F` on Mac) to search
3. Search for image file names like:
   - `hagia-sophia`
   - `galata-tower`
   - `topkapi-palace`
4. Copy the full image URLs you find

## Common Image URL Patterns

Based on WordPress structure, images are typically located at:

- **Attractions**: `/wp-content/uploads/YYYY/MM/attraction-name.jpg`
- **Passes**: `/wp-content/uploads/YYYY/MM/pass-name.jpg`
- **Packages**: `/wp-content/uploads/YYYY/MM/package-name.jpg`
- **Hero**: `/wp-content/uploads/YYYY/MM/hero-image.jpg`

## Update Image URLs

Once you have the actual image URLs:

1. Open `app/lib/api.ts`
2. Find the `IMAGE_BASE_URL` constant
3. Update individual image paths with the actual URLs you found
4. Or update the base URL and path structure if different

## Example

If you find that Hagia Sophia image is at:
```
https://istanbultouristpass.com/wp-content/uploads/2024/01/hagia-sophia-main.jpg
```

Update in `app/lib/api.ts`:
```typescript
image: 'https://istanbultouristpass.com/wp-content/uploads/2024/01/hagia-sophia-main.jpg',
```

## Fallback Behavior

If external images fail to load, the site will show gradient placeholders. You can also:

1. Download images from the website
2. Save them to `/public/images/` folder
3. Update paths to use local images: `/images/filename.jpg`

## Next.js Image Configuration

The `next.config.ts` is already configured to allow images from:
- `istanbultouristpass.com`
- Subdomains of `istanbultouristpass.com`
- WordPress CDN domains

If images still don't load, check:
1. CORS settings on the source website
2. Image URL format
3. Network tab in browser DevTools for errors


# How to Get Images from istanbultouristpass.com

## Method 1: Browser Developer Tools

1. Open https://istanbultouristpass.com/ in your browser
2. Open Developer Tools (F12 or Right-click → Inspect)
3. Go to the Network tab
4. Filter by "Img" or "Image"
5. Refresh the page
6. Look for image URLs in the format:
   - `https://istanbultouristpass.com/wp-content/uploads/...`
   - `https://istanbultouristpass.com/images/...`
   - Or CDN URLs

## Method 2: Inspect Element

1. Right-click on any image on the website
2. Select "Inspect" or "Inspect Element"
3. Look for the `src` attribute in the `<img>` tag
4. Copy the full URL

## Method 3: View Page Source

1. Right-click on the page → "View Page Source"
2. Search for image file names (e.g., "hagia-sophia", "galata-tower")
3. Copy the full image URLs

## Method 4: Use Image URLs Directly

Once you have the image URLs, update `app/config/images.ts` with the actual URLs.

## Common Image Paths on istanbultouristpass.com

Based on the website structure, images are likely located at:
- `/wp-content/uploads/YYYY/MM/` (WordPress structure)
- `/images/attractions/`
- `/images/passes/`
- `/images/packages/`

## Example Image URLs to Look For

- Hagia Sophia: Look for images related to "hagia-sophia" or "ayasofya"
- Galata Tower: Look for "galata-tower" or "galata-kulesi"
- Topkapi Palace: Look for "topkapi" or "topkapı"
- Bosphorus: Look for "bosphorus" or "boğaz"

## After Getting URLs

1. Update `app/config/images.ts` with the actual URLs
2. Uncomment the `return imageUrls[key] || localPath;` line
3. Comment out the `return localPath;` line
4. Update `next.config.ts` to allow the image domain


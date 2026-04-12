# NOAA Water Levels Dashboard - Embed Guide

## Live Demo

**Published URL**: https://kaixuan15432.github.io/noaa-water-levels/

---

## Embed Methods

### Method 1: Iframe (Recommended)

Add this to any HTML page:

```html
<iframe 
    src="https://kaixuan15432.github.io/noaa-water-levels/"
    width="100%" 
    height="80vh"
    style="border:none;">
</iframe>
```

Or with custom container:

```html
<div style="width:100%;height:600px;border:2px solid #ccc;border-radius:8px;">
    <iframe 
        src="https://kaixuan15432.github.io/noaa-water-levels/"
        width="100%" 
        height="100%"
        style="border:none;">
    </iframe>
</div>
```

### Method 2: Direct Link

Link to the map:
```html
<a href="https://kaixuan15432.github.io/noaa-water-levels/" target="_blank">
    View NOAA Water Levels Map
</a>
```

### Method 3: Modal/Popup

Use Bootstrap modal or custom popup:

```html
<button onclick="document.getElementById('mapModal').style.display='block'">
    Open Map
</button>
<div id="mapModal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);">
    <div style="width:90%;height:90%;margin:5% auto;background:white;border-radius:8px;">
        <iframe src="https://kaixuan15432.github.io/noaa-water-levels/" width="100%" height="100%" style="border:none;border-radius:8px;"></iframe>
        <button onclick="document.getElementById('mapModal').style.display='none'">Close</button>
    </div>
</div>
```

---

## Data Sources

### 1. Model Predictions
- **Source**: GitHub repository data file
- **URL**: https://kaixuan15432.github.io/noaa-water-levels/data/model_predictions.txt
- **Format**: Hourly predictions, 12 columns for 12 stations

### 2. NOAA Observations
- **Source**: NOAA CO-OPS API
- **URL**: https://api.tidesandcurrents.noaa.gov/api/prod/datagetter
- **Parameters**: water_level, datum=NAVD, units=metric, time_zone=gmt

---

## Stations

| ID | Name | Location |
|----|------|-----------|
| 8725520 | Fort Myers, FL | 26.6477°N, 81.8712°W |
| 8725110 | Naples, FL | 26.1312°N, 81.8130°W |
| 8724580 | Key West, FL | 24.5508°N, 81.8081°W |
| 8723970 | Vaca Key, Florida Bay, FL | 24.7135°N, 81.1063°W |
| 8723214 | Virginia Key, FL | 26.0927°N, 80.1167°W |
| 8722956 | South Port Everglades, FL | 26.0927°N, 80.1167°W |
| 8722670 | Virginia Key, FL | 26.6128°N, 80.0342°W |
| 8726724 | Clearwater Beach, FL | 27.9783°N, 82.8317°W |
| 8726520 | St. Petersburg, FL | 27.7606°N, 82.6269°W |
| 8726384 | Old Port Tampa, FL | 27.6383°N, 82.5625°W |
| 8726667 | Apalachicola, FL | 27.9133°N, 82.4250°W |
| 8726607 | Panama City, FL | 27.8578°N, 82.5528°W |

---

## Embed in WordPress

### Option 1: Custom HTML Block

1. Add a "Custom HTML" block
2. Paste the iframe code:

```html
<iframe 
    src="https://kaixuan15432.github.io/noaa-water-levels/"
    width="100%" 
    height="600px"
    style="border:none;"
    allow="fullscreen">
</iframe>
```

### Option 2: Plugin (WP Embed)

Create a shortcode plugin:

```php
<?php
/*
Plugin Name: NOAA Water Levels Embed
*/
function noaa_water_levels_shortcode($atts) {
    return '<iframe src="https://kaixuan15432.github.io/noaa-water-levels/" width="100%" height="600px" style="border:none;" allow="fullscreen"></iframe>';
}
add_shortcode('noaa-map', 'noaa_water_levels_shortcode');
```

Use: `[noaa-map]`

---

## Embed in Wix/Squarespace

### Wix:
1. Add "Embed Code" element
2. Paste iframe code

### Squarespace:
1. Add "Code" block
2. Paste iframe code

---

## API Integration (Optional)

If you want to build your own frontend, use the data:

### Get Model Data
```javascript
const response = await fetch('https://kaixuan15432.github.io/noaa-water-levels/data/model_predictions.txt');
const text = await response.text();
const lines = text.trim().split('\n');
```

### Get NOAA Data
```javascript
const station = '8725520';
const startDate = '20260404';
const endDate = '20260411';
const url = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?station=${station}&product=water_level&datum=NAVD&units=metric&time_zone=gmt&format=json&begin_date=${startDate}&end_date=${endDate}`;
const response = await fetch(url);
const data = await response.json();
```

---

## Customization

To modify the map:

1. Fork the repository: https://github.com/kaixuan15432/noaa-water-levels
2. Edit `map.html`
3. Push changes - GitHub Pages will auto-update

### Common Customizations

**Change Map Center**:
```javascript
map = L.map('map').setView([27.0, -82.0], 7); // [lat, lng], zoom
```

**Change Station Names**:
Edit `getStationName()` function in map.html

**Change Chart Colors**:
```javascript
borderColor: '#0066cc'  // Blue
borderColor: '#cc0000' // Red
```

---

## Troubleshooting

1. **Map not loading**: Check browser console for errors
2. **Data not showing**: NOAA API may have limits - wait and refresh
3. **CORS errors**: Some browsers block cross-origin - use iframe instead

---

## Support

- GitHub Issues: https://github.com/kaixuan15432/noaa-water-levels/issues
- NOAA API Docs: https://api.tidesandcurrents.noaa.gov/api/prod/
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));;
app.use('/data', express.static(path.join(__dirname, 'data')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'map.html'));
});

app.get('/api/noaa', async (req, res) => {
    const { station, begin_date, end_date } = req.query;
    
    if (!station || !begin_date || !end_date) {
        return res.status(400).json({ error: 'Missing required parameters: station, begin_date, end_date' });
    }
    
    const url = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?station=${station}&product=water_level&datum=NAVD&units=metric&time_zone=gmt&format=json&begin_date=${begin_date}&end_date=${end_date}`;
    
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            return res.status(response.status).json({ error: `NOAA API error: ${response.status}` });
        }
        
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching NOAA data:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
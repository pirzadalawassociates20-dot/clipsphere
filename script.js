const express = require('express');
const cors = require('cors');
const app = express();

// Global CORS Policy - Puri dunya se access allow karne ke liye
app.use(cors({ origin: '*' }));
app.use(express.json());

// Sample Movies / Content API Endpoint
const mediaItems = [
    { id: 1, title: "Global Sci-Fi Epic", year: 2026, rating: 8.8, category: "Sci-Fi" },
    { id: 2, title: "World Action Thriller", year: 2026, rating: 8.5, category: "Action" }
];

app.get('/api/media', (req, res) => {
    res.json({ status: "success", data: mediaItems });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running globally on port ${PORT}`));
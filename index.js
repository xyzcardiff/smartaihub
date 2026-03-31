// SmartAIHub - Generate images from text prompts
// Built with AI Trend App Builder

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        app: 'SmartAIHub',
        description: 'Generate images from text prompts',
        status: 'running',
        built_at: '2026-03-31 09:02:25'
    });
});

app.get('/api/trend', (req, res) => {
    res.json({
        topic: 'AI Image Generator',
        keywords: ["image gen","DALL-E","Stable Diffusion","AI art"]
    });
});

app.listen(PORT, () => {
    console.log(`SmartAIHub running on port `);
});

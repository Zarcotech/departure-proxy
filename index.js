import express from 'express';
import { join } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'index.html'));
})

app.get('/panic', (req, res) => {
    res.redirect('https://www.google.com');
})

app.listen(3000);
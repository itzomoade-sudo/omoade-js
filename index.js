const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('My Week2 API!'));

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'Missing fields'});
    res.status(201).json({ message: `Hello ${name} ${email}` });
});

app.get('/user/:id',(req, res) => {
    res.json({ id: req.params.id, name: 'item' });
});
 
app.listen(3000, () => console.log('API live on port 3000'));
    
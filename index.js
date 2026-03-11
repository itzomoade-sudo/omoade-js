const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Welcome to user API!'));

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: 'Missing fields'});
    res.status(201).json({ message: `Registered: ${name} ${email} and your password is(${password})` });
});

app.get('/user/:id',(req, res) => {
    res.json({ id: req.params.id, name: 'Sample User' });
});
 
app.listen(3000, () => console.log('API live on port 3000'));
    
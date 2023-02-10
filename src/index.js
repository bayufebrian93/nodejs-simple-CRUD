require('dotenv').config();
const PORT = process.env.PORT || 500;

const express = require('express');
const userRoutes = require('./routes/users');
const log  = require('./middleware/log')
const app = express();

app.use(log);
app.use(express.json());
app.use((req, res, next) => {
    console.log('middleware 2');
    next();
});

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server Running: ${PORT}`);
});
require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/users');
const log  = require('./middleware/log')
const upload = require('./middleware/multer');
const app = express();

const PORT = process.env.PORT || 500;

// Middleware
app.use(log);
app.use(express.json());
app.use(express.static('public/images'));

app.use('/users', userRoutes);
app.use('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: 'Upload Berhasil'
    });
});

// ERROR GLOBAL HANDLE
app.use((err, req, res, next) => {
    res.status(406).json({
        message: err.message
    })
})
app.listen(PORT, () => {
    console.log(`Server Running: ${PORT}`);
});
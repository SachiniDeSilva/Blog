const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const upload = require('express-fileupload');

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(upload());
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    const server = app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Trying another port...`);
        setTimeout(() => {
          server.close();
          app.listen(PORT + 1, () => console.log(`Server started on port ${PORT + 1}`));
        }, 1000);
      } else {
        console.error('Server error:', err);
      }
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });

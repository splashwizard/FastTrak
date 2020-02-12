const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect the database 
connectDB();

//Init Middleware 
app.use(express.json({ extended: false }));
//test route
app.get('/', (req, res) => res.send('API is running'));

//Define routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/vehicles', require('./routes/api/vehicles'));
app.use('/api/applicants', require('./routes/api/applicants'));


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


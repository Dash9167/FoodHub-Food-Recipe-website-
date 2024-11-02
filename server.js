const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (Replace <your_connection_string> with your MongoDB URI)
mongoose.connect('mongodb://localhost:27017/DAshrathyadav', { 
     useNewUrlParser: true,
    useUnifiedTopology: true,
  
 })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Create a Mongoose Schema and Model
const UserSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', UserSchema);

// API route to save form data
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Create a new user and save to the database
  const newUser = new User({ username, password });
  await newUser.save();

  res.json({ message: 'User saved successfully!' });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

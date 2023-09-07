const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.set('strictQuery',true)
mongoose.connect('mongodb://127.0.0.1:27017/user_management-DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>{
    console.log("DB connected");
})
.catch((err)=>{
    console.log(err);
});




// Define your API routes here

// Import and use the user routes
const userRoutes = require('./routes/user');
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

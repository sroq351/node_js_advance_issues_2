const dotenv = require('dotenv');
const app = require('./index');
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 3000;

const uri = process.env.DATABASE.replace('<db_password>', process.env.DATABASE_PASSWORD);

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
}).then(() => console.log("Connected to MongoDB"));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const mongoose = require("mongoose")
const app = require("../app")
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000
const DB_PATH = process.env.DB_CONNECTION_URL


const db = mongoose
  .connect(DB_PATH, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

module.exports = db
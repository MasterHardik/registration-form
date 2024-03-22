const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// **** User model : simple way one **** \\
// const User = mongoose.model("User", {
//   name: String,
//   email: String,
//   password: String,
//   contact: String,
// });

// **** User model : simple way two **** \\

let Schema = mongoose.Schema;

let usersSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  contact: {
    type: String,
  },
});

let User = mongoose.model("users", usersSchema);

module.exports = User;

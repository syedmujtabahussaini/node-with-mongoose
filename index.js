const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Database Connected");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

const user1 = new User({
  name: "Hussaini",
  email: "Hussaini@gmail.com",
  age: 90,
});

user1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
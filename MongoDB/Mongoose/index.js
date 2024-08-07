const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then((res) => {
    console.log("connection successful: ", res);

})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

}
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const User = mongoose.model("User", userSchema)

User.insertMany([
    { name: "sairaj", email: "sairaj@gmail.com", age: 50 },
    { name: "hemanta", email: "hemanta@gmail.com", age: 55 },
    { name: "adyatan", email: "adyatan@gmail.com", age: 52 }
]).then((data) => {
    console.log(data);

})



// const user2 = new User({
//     name: "nabin",
//     email: "nabin@gmail.com",
//     age: 48
// })

// user2.save().then((res) => {
//     console.log(res);

// }).catch((err) => {
//     console.log(err);

// })
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

User.deleteMany({ age: { $gt: 40 } }).then((res) => {
    console.log(res);

}).catch(err => console.log(err))

// User.deleteOne({ name: "adyatan" }).then((res) => {
//     console.log(res);

// }).catch(err => console.log(err))


// User.findOneAndUpdate({ name: "adyatan" }, { age: 42 }, { new: true }).then((data) => {
//     console.log(data);

// }).catch((err) => {
//     console.log(err);

// })


// User.updateMany({ age: { $gt: 48 } }, { age: 59 }).then((data) => {
//     console.log(data);

// }).catch((err) => {
//     console.log(err);

// })
// User.updateOne({ name: "adyatan" }, { age: 59 }).then((data) => {
//     console.log(data);

// }).catch((err) => {
//     console.log(err);

// })


// User.findById("66b376a834c86e2239bd5f96").then((res) => {
//     console.log(res);

// }).catch((err) => {
//     console.log(err);

// })



// User.insertMany([
//     { name: "sairaj", email: "sairaj@gmail.com", age: 50 },
//     { name: "hemanta", email: "hemanta@gmail.com", age: 55 },
//     { name: "adyatan", email: "adyatan@gmail.com", age: 52 }
// ]).then((data) => {
//     console.log(data);

// })



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
const mongoose = require('mongoose');

main().then((res) => {
    console.log("connection successful: ", res);

})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}


const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        min: [1, "Price is too low for Amazon"]
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"]
    }
})

const Book = mongoose.model("Book", booksSchema)


Book.findByIdAndUpdate("66b4dbfba3969b0f001bd3b7", { price: -500 }, { runValidators: true })
    .then(res => console.log(res))
    .catch(err => console.log(err.errors.price.properties.message))

// let book1 = new Book({
//     title: "Marvel Comics",
//     // author: "RD Sharma",
//     price: 399,
//     category: "fiction"
// })

// book1.save()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
